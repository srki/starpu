/* StarPU --- Runtime system for heterogeneous multicore architectures.
 *
 * Copyright (C) 2010-2020  Université de Bordeaux, CNRS (LaBRI UMR 5800), Inria
 *
 * StarPU is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or (at
 * your option) any later version.
 *
 * StarPU is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * See the GNU Lesser General Public License in COPYING.LGPL for more details.
 */

#include <starpu.h>

/* This kernel takes a buffer and scales it by a constant factor */
void vector_scal_cpu(void *buffers[], void *cl_arg)
{
	unsigned i;
	float *factor = cl_arg;

	/*
	 * The "buffers" array matches the task->handles array: for instance
	 * task->handles[0] is a handle that corresponds to a data with
	 * vector "interface", so that the first entry of the array in the
	 * codelet  is a pointer to a structure describing such a vector (ie.
	 * struct starpu_vector_interface *). Here, we therefore manipulate
	 * the buffers[0] element as a vector: nx gives the number of elements
	 * in the array, ptr gives the location of the array (that was possibly
	 * migrated/replicated), and elemsize gives the size of each elements.
	 */
	struct starpu_vector_interface *vector = buffers[0];

	/* length of the vector */
	unsigned n = STARPU_VECTOR_GET_NX(vector);

	/* get a pointer to the local copy of the vector : note that we have to
	 * cast it in (float *) since a vector could contain any type of
	 * elements so that the .ptr field is actually a uintptr_t */
	float *val = (float *)STARPU_VECTOR_GET_PTR(vector);

	/* scale the vector */
	for (i = 0; i < n; i++)
		val[i] *= *factor;
}
