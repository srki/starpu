var coherency_8h =
[
    [ "_starpu_data_replicate", "coherency_8h.html#struct__starpu__data__replicate", [
      [ "handle", "coherency_8h.html#a417ba4881954b91d6cd4a2fdf34a04df", null ],
      [ "data_interface", "coherency_8h.html#ab06ba6d98726391b877abb41d7a63c00", null ],
      [ "refcnt", "coherency_8h.html#a836b282fe38da8578af6d0a1f76e8c4b", null ],
      [ "memory_node", "coherency_8h.html#ab214b205669dbe61d2a62c786200b9d8", null ],
      [ "state", "coherency_8h.html#a442860b94c368143461a38a9c34ff866", null ],
      [ "relaxed_coherency", "coherency_8h.html#a84ce60d6b9a3a4fe924ed7187d31aab4", null ],
      [ "initialized", "coherency_8h.html#adb3bbefc135f0c06a81c0e37acae2930", null ],
      [ "allocated", "coherency_8h.html#af75e851c1c42da0b98d6b57b2bd878ef", null ],
      [ "automatically_allocated", "coherency_8h.html#a650866b62fda49dfbe01ae95eab7b140", null ],
      [ "requested", "coherency_8h.html#af1be8064793295892b21e591db60250e", null ],
      [ "request", "coherency_8h.html#a39a28a4f3a1d4a30163e098308b44ec2", null ],
      [ "mc", "coherency_8h.html#a766c3fe60e326049b42f409595c04430", null ]
    ] ],
    [ "_starpu_jobid_list", "coherency_8h.html#struct__starpu__jobid__list", [
      [ "id", "coherency_8h.html#ace06476bc814cf4eff9b3f6486dd21b1", null ],
      [ "next", "coherency_8h.html#a515559bffca54180d0581b0f8e7b5f14", null ]
    ] ],
    [ "_starpu_task_wrapper_list", "coherency_8h.html#struct__starpu__task__wrapper__list", [
      [ "task", "coherency_8h.html#afc82f8d184402780270675c21835f20a", null ],
      [ "next", "coherency_8h.html#aa9249ab4f4e5113956edb19df96f21c2", null ]
    ] ],
    [ "_starpu_task_wrapper_dlist", "coherency_8h.html#struct__starpu__task__wrapper__dlist", [
      [ "task", "coherency_8h.html#ae0e6d97e35fc380344d791a8ba5bd7b0", null ],
      [ "next", "coherency_8h.html#a679de5c365baab42d36e0a72bd355922", null ],
      [ "prev", "coherency_8h.html#a49591fc68cd42a3798f2e9e7fe7ae18f", null ]
    ] ],
    [ "_starpu_data_state", "coherency_8h.html#struct__starpu__data__state", [
      [ "magic", "coherency_8h.html#ac9ba64dc6fd96f5e3b28cab7f88bbed7", null ],
      [ "req_list", "coherency_8h.html#a32303b696e72e0ab9681539ef4d3f633", null ],
      [ "refcnt", "coherency_8h.html#aeae74f1f52eb6c6bef0b76660fbda828", null ],
      [ "unlocking_reqs", "coherency_8h.html#a4f55925297230c86f028369404b8d153", null ],
      [ "current_mode", "coherency_8h.html#a4c818ba4e03a7c9325b1884a6b4e1ad4", null ],
      [ "header_lock", "coherency_8h.html#a966ce741831023bb4165aa3b4c7a4c42", null ],
      [ "busy_count", "coherency_8h.html#a082165768348269dae6be89cf19fb571", null ],
      [ "busy_waiting", "coherency_8h.html#a9eedb0b353f3a187a6eac62c2b0bf4a2", null ],
      [ "busy_mutex", "coherency_8h.html#acf46627267b96be8ddba781f43fb442e", null ],
      [ "busy_cond", "coherency_8h.html#a300603718d57ee3b21f661b6d4af6d9b", null ],
      [ "root_handle", "coherency_8h.html#ac139bd07c4173210e9effed7083b941d", null ],
      [ "father_handle", "coherency_8h.html#a6357ec5144e8beccea41b6213288bcf9", null ],
      [ "active_children", "coherency_8h.html#afa497e8a8deada1aec55eed1c9642bcd", null ],
      [ "active_readonly_children", "coherency_8h.html#aed1ae0d3285a8cf0ded84eb412192f9d", null ],
      [ "nactive_readonly_children", "coherency_8h.html#a23037f2a5f6727f63edd6d2dcc08cd0c", null ],
      [ "nsiblings", "coherency_8h.html#adf7c48f11b81c53e8b1ad7c08bd497da", null ],
      [ "siblings", "coherency_8h.html#a536fb4a9460dd55e6cfb8a5a13dcd593", null ],
      [ "sibling_index", "coherency_8h.html#aa2ce0a1c28b4e8de831487b8aae725a5", null ],
      [ "depth", "coherency_8h.html#ad92b2cf718581d7d7aa2eb0d159104c3", null ],
      [ "children", "coherency_8h.html#a63737061935cf602a8a3076415e7904d", null ],
      [ "nchildren", "coherency_8h.html#aaad79ead3b5aa65eb9c14b888ad07ca8", null ],
      [ "nplans", "coherency_8h.html#a75e226f830bca7ba5153c26641a48ec7", null ],
      [ "switch_cl", "coherency_8h.html#a245f925fc9a2879fa5f3963a8a5a1260", null ],
      [ "switch_cl_nparts", "coherency_8h.html#a5e6465a5ec0845742f881169725b4619", null ],
      [ "partitioned", "coherency_8h.html#aaa645f62bef7632ee9efcb15815e0849", null ],
      [ "readonly", "coherency_8h.html#a173cc183d075d2db15f1548393966e0b", null ],
      [ "active", "coherency_8h.html#a4c43b1d96b28f38db7216e5d3474df8a", null ],
      [ "active_ro", "coherency_8h.html#ae1707287fa03e61632fdffc7c57fd466", null ],
      [ "per_node", "coherency_8h.html#a90116828ed6ec0854dabbc57987e3aad", null ],
      [ "per_worker", "coherency_8h.html#a5ca5b7680ed65e83bbc48c180ad957e0", null ],
      [ "ops", "coherency_8h.html#a63be3cf71000b0536b196a944e061d36", null ],
      [ "footprint", "coherency_8h.html#afcb1d5cbed51b9b988d16496a7af3304", null ],
      [ "home_node", "coherency_8h.html#ab870d6cdf43bada19da86c69efd54bdc", null ],
      [ "wt_mask", "coherency_8h.html#ad64c2e9ea6f17ab1a395fb4cc2ded898", null ],
      [ "is_not_important", "coherency_8h.html#af4683cc910dd6872d9326f6ad6c7b8ed", null ],
      [ "sequential_consistency", "coherency_8h.html#aee4a0d29eed20ccebb49c86c7d7f0aaa", null ],
      [ "initialized", "coherency_8h.html#aac011c81d5687ee0774edbce6a32def6", null ],
      [ "ooc", "coherency_8h.html#a6554828e51cd54858839377a3b9f574b", null ],
      [ "sequential_consistency_mutex", "coherency_8h.html#a6ab369086d0e6dd86c63839a340899b9", null ],
      [ "last_submitted_mode", "coherency_8h.html#a88fc676a98a8ed1dea1ecc4482ef9f2a", null ],
      [ "last_sync_task", "coherency_8h.html#a31355b4eee4991d65dc4a574d1baab0a", null ],
      [ "last_submitted_accessors", "coherency_8h.html#a67960d80122cac58a47d9c93fd999923", null ],
      [ "last_submitted_ghost_sync_id_is_valid", "coherency_8h.html#ac154dca4bd7d9868a8f3e829f3dcdcd2", null ],
      [ "last_submitted_ghost_sync_id", "coherency_8h.html#ae2822f478dd28ebde541ff34da1d2e75", null ],
      [ "last_submitted_ghost_accessors_id", "coherency_8h.html#a49480f49d02a389f9106bf0084d3fa9b", null ],
      [ "post_sync_tasks", "coherency_8h.html#a147ea8d782570dfb85fe323ce77b4486", null ],
      [ "post_sync_tasks_cnt", "coherency_8h.html#ad12f0a74720e38e202fa6287979deadd", null ],
      [ "redux_cl", "coherency_8h.html#a17f0d6200897bff37a1cc9f06d4bda47", null ],
      [ "init_cl", "coherency_8h.html#a20946df81928e5d1b975e9ba71364a73", null ],
      [ "reduction_refcnt", "coherency_8h.html#aeea89f05bb71c0d4872b4b95c7461ac8", null ],
      [ "reduction_req_list", "coherency_8h.html#ae317fcc65b070f031c58202277994bc9", null ],
      [ "reduction_tmp_handles", "coherency_8h.html#a98c84eeb8c10238ce52794b6fe84a07a", null ],
      [ "write_invalidation_req", "coherency_8h.html#a3c828ce83ec921351a94f90550ccb2bf", null ],
      [ "lazy_unregister", "coherency_8h.html#a91bd45c51669b67534b779aee577a693", null ],
      [ "removed_from_context_hash", "coherency_8h.html#a91f8efd179fa0119b42816c08c42ffd4", null ],
      [ "mpi_data", "coherency_8h.html#a0dbe2d948b0641f446bcb3481646e7dc", null ],
      [ "memory_stats", "coherency_8h.html#acf9aa1c779df2f2fd4fb2f9a8e7691e6", null ],
      [ "mf_node", "coherency_8h.html#aed29f499c5f81ecfae7f404da90f68d5", null ],
      [ "unregister_hook", "coherency_8h.html#a3711eb0fc65704b1cce3055d094bdff9", null ],
      [ "arbiter", "coherency_8h.html#a4e66afe945343b28e555260da63617af", null ],
      [ "arbitered_req_list", "coherency_8h.html#a28cfd9bcba3ccbfc893d7799884a6493", null ],
      [ "last_locality", "coherency_8h.html#a8a4eb1c76959932330a53d4adab4ab19", null ],
      [ "partition_automatic_disabled", "coherency_8h.html#ab6231e06af1ddd0f2079c2632fb132f7", null ],
      [ "dimensions", "coherency_8h.html#aeb4559c3643750dab3e75189a4e116bd", null ],
      [ "coordinates", "coherency_8h.html#aa7b5a6d1750a32fa91f636a9648961a6", null ],
      [ "user_data", "coherency_8h.html#ae3ee486d169b19412faee1543b55199b", null ]
    ] ],
    [ "_starpu_data_handle_unregister_hook", "coherency_8h.html#a98da2f2cbdf6be4a05e97c7d6eb236ec", null ],
    [ "_starpu_cache_state", "coherency_8h.html#aab134af71a58df212214dc1a990af601", [
      [ "STARPU_OWNER", "coherency_8h.html#aab134af71a58df212214dc1a990af601a6037e404026bf78857ed3b58fbf167c9", null ],
      [ "STARPU_SHARED", "coherency_8h.html#aab134af71a58df212214dc1a990af601a5fd04c80dbb73ce9e6ad29f1a9465acf", null ],
      [ "STARPU_INVALID", "coherency_8h.html#aab134af71a58df212214dc1a990af601a3d761d5f7f30b142ae13971ada63fd31", null ]
    ] ],
    [ "_starpu_fetch_data_on_node", "coherency_8h.html#aca6b77a2f2e1f3cb070e54018433c9af", null ],
    [ "_starpu_release_data_on_node", "coherency_8h.html#ac79210841d2f62e536b2c401feadfd02", null ],
    [ "_starpu_update_data_state", "coherency_8h.html#afbd7b5785050c5cfe6e933745feae6f4", null ],
    [ "_starpu_get_data_refcnt", "coherency_8h.html#ab8d961cf5915b8abff1bde20f2c77079", null ],
    [ "_starpu_data_get_size", "coherency_8h.html#a4c853f3e83d1282c488e09e1a27c3dd2", null ],
    [ "_starpu_data_get_alloc_size", "coherency_8h.html#ab6bad9b60e8d758410736443f4f94273", null ],
    [ "_starpu_data_get_footprint", "coherency_8h.html#ac0a2684f2c78a82c4dfc80a8e1f13c7e", null ],
    [ "__starpu_push_task_output", "coherency_8h.html#a69a05155a3a2d1e6e71c11e8e1546016", null ],
    [ "_starpu_push_task_output", "coherency_8h.html#ad480d6248e575c49fabb01af3888ff7f", null ],
    [ "_starpu_release_nowhere_task_output", "coherency_8h.html#a8500522e04aea672bfa8ab758b6dcd0c", null ],
    [ "_starpu_fetch_task_input", "coherency_8h.html#a900d502547e820b0146be95da83c9d3c", null ],
    [ "_starpu_fetch_task_input_tail", "coherency_8h.html#af1420c9b4b2d96f772fa3147e71a4bee", null ],
    [ "_starpu_fetch_nowhere_task_input", "coherency_8h.html#a29e864a0a39457e55c8d121f92f01cb2", null ],
    [ "_starpu_select_src_node", "coherency_8h.html#a134d2f8c09b22c6233174903f372213f", null ],
    [ "_starpu_determine_request_path", "coherency_8h.html#af8ba3adadf34003451b9c42c430e427b", null ],
    [ "_starpu_create_request_to_fetch_data", "coherency_8h.html#ae47c877067fb90e71dad3435e60f6985", null ],
    [ "_starpu_redux_init_data_replicate", "coherency_8h.html#a9f1ef4b309a62b912a653b337bd98168", null ],
    [ "_starpu_data_start_reduction_mode", "coherency_8h.html#abae92421467d1fff3037d4b111e8cd18", null ],
    [ "_starpu_data_end_reduction_mode", "coherency_8h.html#aefbb04547e6fbe469d56e82685a0d497", null ],
    [ "_starpu_data_end_reduction_mode_terminate", "coherency_8h.html#a0e8ee45b1482b36a96837972d8d6a0ec", null ],
    [ "_starpu_data_set_unregister_hook", "coherency_8h.html#a64d2f806d5c5bbd0c710496bdceb9c2c", null ],
    [ "get_replicate", "coherency_8h.html#a11bb9ea6e340ec61a19b7370ea7ff542", null ],
    [ "_starpu_has_not_important_data", "coherency_8h.html#a9f0f92908faa2a7aa71a14ab2354a356", null ]
];