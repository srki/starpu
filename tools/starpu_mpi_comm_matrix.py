#!/usr/bin/env python3
# coding=utf-8
#
# StarPU --- Runtime system for heterogeneous multicore architectures.
#
# Copyright (C) 2019-2020  Université de Bordeaux, CNRS (LaBRI UMR 5800), Inria
#
# StarPU is free software; you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation; either version 2.1 of the License, or (at
# your option) any later version.
#
# StarPU is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# See the GNU Lesser General Public License in COPYING.LGPL for more details.
#

import sys
import re
import os

PROGNAME=sys.argv[0]

def usage():
    print("Offline tool to draw a communication matrix")
    print("")
    print("Usage: %s <output_execution>" % PROGNAME)
    print("")
    print("Options:")
    print("	-h, --help          display this help and exit")
    print("	-v, --version       output version information and exit")
    print("	-png                produce plots in png format (default is pdf)")
    print("")
    print("Report bugs to <starpu-devel@lists.gforge.inria.fr>")
    sys.exit(1)

if len(sys.argv) >= 2:
    if sys.argv[1] == '-v' or sys.argv[1] == '--version':
        print("%s (StarPU) 1.3.7" % PROGNAME)
        sys.exit(0)
    if sys.argv[1] == '-h' or sys.argv[1] == '--help':
        usage()
if (len(sys.argv) == 1):
    usage()

if len(sys.argv) >= 2 and sys.argv[1] == '-png':
    outputformat='png'
    outputext='png'
    outputfile=sys.argv[2]
else:
    outputformat='pdf color'
    outputext='pdf'
    outputfile=sys.argv[1]

# find the number of nodes
nodes=0
file = open(outputfile, "r")
for line in file.readlines():
    match = re.search('\TOTAL', line)
    if match:
        (node,stuff)=line.split(sep="[")[2].split("]")
        if (int(node) > nodes):
            nodes=int(node)
file.close()
nodes=nodes+1

# extract volume of comm and bandwidth between all pair of nodes
volumes = [[0 for x in range(nodes)] for y in range(nodes)]
bandwidth = [[0 for x in range(nodes)] for y in range(nodes)]
file = open(outputfile, "r")
for line in file.readlines():
    match = re.search('\[starpu_comm_stats]', line)
    if match:
        match = re.search('TOTAL', line)
        if not match:
            (head,volB,B,volMB,MB,bwB,B,bwMB,MB) = line.split()
            (src,dst)=head.split(sep="[")[2].split(sep="]")[0].split(sep=":")
            volumes[int(src)][int(dst)] = float(volB)
            bandwidth[int(src)][int(dst)] = float(bwB)
file.close()

def writeData(filename, nodes, data):
    ofile=open(filename, "w")
    for dst in range(nodes):
        for src in range(nodes):
            ofile.write("%f "% data[src][dst])
        ofile.write("\n")
    ofile.close()

def generateGnuplotScript(filename, datafilename, outputfile, nodes):
    ofile=open(filename, "w")
    srctics=""
    dsttics=""
    for node in range(nodes-1):
        srctics += "\"src%d\" %d, " % (node, node)
        dsttics += "\"dst%d\" %d, " % (node, node)
    ofile.write("set term %s\n" % outputformat)
    ofile.write("set output \"%s.%s\"\n" % (outputfile, outputext))
    ofile.write("set view map scale 1\nset style data lines\n")
    ofile.write("set palette model RGB defined ( 0 'white', 100 'black' )\n")
    ofile.write("set xtics (%s\"src%d\" %d)\n" % (srctics, nodes-1, nodes-1))
    ofile.write("set ytics (%s\"dst%d\" %d)\n" % (dsttics, nodes-1, nodes-1))
    ofile.write("plot '%s' matrix with image\n" % datafilename)
    ofile.close()

# generate gnuplot volume data and script file
writeData(outputfile+"_volume.data", nodes, volumes)
generateGnuplotScript(outputfile+"_volume.gp", outputfile+"_volume.data", outputfile+"_volume_heatmap", nodes)
os.system("gnuplot " + outputfile+"_volume.gp")

# generate gnuplot bandwidth data and script file
writeData(outputfile+"_bw.data", nodes, bandwidth)
generateGnuplotScript(outputfile+"_bw.gp", outputfile+"_bw.data", outputfile+"_bw_heatmap", nodes)
os.system("gnuplot " + outputfile+"_bw.gp")
