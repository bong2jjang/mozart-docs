
================================================================================
## [STANDARD INPUT] - 63 tables from AleatorikModel.Inputs.cs
================================================================================

### SCENARIO_OPTION_CONFIG (7 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SCENARIO_ID | string | Y |  |
| MODULE_ID | string | Y |  |
| PHASE_NO | int | Y |  |
| OPTION_ID | string | Y |  |
| OPTION_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |
| DESCRIPTION | string |  |  |

### STAGE_MASTER (2 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string | Y |  |
| DESCRIPTION | string |  |  |

### ITEM_MASTER (21 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_PRIORITY | int |  |  |
| PROCUREMENT_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| DESCRIPTION | string |  |  |
| ITEM_SPEC | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### ITEM_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### BUFFER_MASTER (16 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BUFFER_ID | string | Y |  |
| BUFFER_SEQ | int |  |  |
| STAGE_ID | string |  |  |
| DESCRIPTION | string |  |  |
| FINAL_ITEM_BUFFER_YN | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### ROUTING_MASTER (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROUTING_ID | string | Y |  |
| EFF_START_DATETIME | DateTime |  |  |
| EFF_END_DATETIME | DateTime |  |  |
| DESCRIPTION | string |  |  |

### ROUTING_OPER (23 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROUTING_ID | string | Y |  |
| OPER_ID | string | Y |  |
| OPER_SEQ | int |  |  |
| OPER_TYPE | string |  |  |
| WAIT_TAT | double |  |  |
| RUN_TAT | double |  |  |
| OPER_YIELD | double |  |  |
| TAT_CALENDAR_ID | string |  |  |
| YIELD_CALENDAR_ID | string |  |  |
| MULTI_LOT_SIZE | double |  |  |
| SINGLE_LOT_SIZE | double |  |  |
| DESCRIPTION | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### BOM_MASTER (19 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| BOM_TYPE | string |  |  |
| BOM_PRIORITY | int |  |  |
| EFF_START_DATETIME | DateTime |  |  |
| EFF_END_DATETIME | DateTime |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DESCRIPTION | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### BOM_DETAIL (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| FROM_ITEM_ID | string | Y |  |
| FROM_SITE_ID | string | Y |  |
| FROM_BUFFER_ID | string | Y |  |
| FROM_QTY | double |  |  |
| TO_ITEM_ID | string | Y |  |
| TO_SITE_ID | string | Y |  |
| TO_BUFFER_ID | string | Y |  |
| TO_QTY | double |  |  |
| CALENDAR_ID | string |  |  |

### BOM_ROUTING (14 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| ROUTING_PRIORITY | int |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### RES_MASTER (27 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RES_ID | string | Y |  |
| RES_CATEGORY_TYPE | string |  |  |
| RES_TYPE | string |  |  |
| RES_SITE_ID | string |  |  |
| RES_LOCATION | string |  |  |
| CAPA_TYPE | string |  |  |
| RES_GROUP_ID | string |  |  |
| INFINITY_CAPA_YN | string |  |  |
| RES_NAME | string |  |  |
| CAPA_CALENDAR_ID | string |  |  |
| SETUP_ID | string |  |  |
| UTIL_RATIO_CALENDAR_ID | string |  |  |
| PM_ID | string |  |  |
| UTIL_RATIO | double |  |  |
| LOT_ALLOCATION_POLICY_TYPE | string |  |  |
| DESCRIPTION | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### RES_GROUP_MASTER (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RES_GROUP_ID | string | Y |  |
| RES_GROUP_SEQ | int |  |  |
| ALLOCATION_GROUP_ID | string |  |  |
| RESORT_YN | string |  |  |
| LOT_ALLOCATION_POLICY_TYPE | string |  |  |
| DESCRIPTION | string |  |  |

### OPER_RES (20 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROUTING_ID | string | Y |  |
| OPER_ID | string | Y |  |
| RES_ID | string | Y |  |
| FLOW_DURATION | double |  |  |
| USAGE_PER | double |  |  |
| USAGE_PER_CALENDAR_ID | string |  |  |
| FLOW_DURATION_CALENDAR_ID | string |  |  |
| RES_PRIORITY | int |  |  |
| BATCH_SIZE | double |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### CALENDAR_MASTER (3 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CALENDAR_ID | string | Y |  |
| CALENDAR_TYPE | string |  |  |
| DESCRIPTION | string |  |  |

### CALENDAR_DETAIL (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CALENDAR_ID | string | Y |  |
| PATTERN_ID | string | Y |  |
| EFF_START_DATETIME | DateTime |  |  |
| EFF_END_DATETIME | DateTime |  |  |
| PATTERN_TYPE | string |  |  |
| PATTERN_VALUE | string |  |  |
| PATTERN_PRIORITY | int |  |  |
| DESCRIPTION | string |  |  |

### CALENDAR_BASED_ATTR (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CALENDAR_ID | string | Y |  |
| PATTERN_ID | string | Y |  |
| PROP_TYPE | string | Y |  |
| PROP_VALUE | string |  |  |
| PROP_DATA_TYPE | string |  |  |
| VALUE_UOM | string |  |  |

### DEMAND (28 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ID | string | Y |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| DUE_DATE | string |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| MAX_LATENESS_DAY | int |  |  |
| MAX_EARLINESS_DAY | int |  |  |
| DEMAND_GROUP_ID | string |  |  |
| DESCRIPTION | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| FINAL_ITEM_BUFFER_ID | string |  |  |
| DEMAND_VER | string |  |  |
| EARLY_SHIPMENT_DATETIME | DateTime |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### SITE_MASTER (14 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SITE_ID | string | Y |  |
| SITE_NAME | string |  |  |
| DESCRIPTION | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### WIP (26 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| WIP_ID | string | Y |  |
| STAGE_ID | string |  |  |
| WIP_QTY | double |  |  |
| WIP_TYPE | string |  |  |
| WIP_STATUS | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| RES_ID | string |  |  |
| AVAILABLE_DATETIME | DateTime |  |  |
| TRACK_IN_DATETIME | DateTime |  |  |
| DEMAND_ID | string |  |  |
| WIP_VER | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### ALLOCATION_GROUP_MASTER (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ALLOCATION_GROUP_ID | string | Y |  |
| ALLOCATION_GROUP_SEQ | int |  |  |
| ALLOCATION_TYPE | string |  |  |
| STAGE_ID | string |  |  |
| DESCRIPTION | string |  |  |

### DEMAND_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### RULE_MASTER (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULE_ID | string | Y |  |
| RULE_POINT_ID | string | Y |  |
| SORT_TYPE | string |  |  |
| FIRST_ONLY_SORT_YN | string |  |  |
| DESCRIPTION | string |  |  |

### FACTOR_MASTER (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| FACTOR_ID | string | Y |  |
| RULE_POINT_ID | string | Y |  |
| FACTOR_TYPE | string |  |  |
| FACTOR_SCRIPT_VALUE | string |  |  |
| FACTOR_VALUE | string |  |  |
| DESCRIPTION | string |  |  |

### RULE_FACTOR (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULE_ID | string | Y |  |
| FACTOR_ID | string | Y |  |
| FACTOR_SEQ | int | Y |  |
| FACTOR_WEIGHT | double |  |  |
| FACTOR_VALUE | string |  |  |

### BUFFER_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BUFFER_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### CUST_MASTER (15 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CUST_ID | string | Y |  |
| CUST_NAME | string |  |  |
| CUST_PRIORITY | int |  |  |
| DESCRIPTION | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### WIP_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| WIP_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### CUST_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CUST_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### OPER_RES_PROP_VALUE (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROUTING_ID | string | Y |  |
| OPER_ID | string | Y |  |
| RES_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### RES_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RES_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### ROUTING_OPER_PROP_VALUE (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROUTING_ID | string | Y |  |
| OPER_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### ITEM_SITE_BUFFER_PROP_VALUE (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM_ID | string | Y |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### SCENARIO_RULESET_CONFIG (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string | Y |  |
| SCENARIO_ID | string | Y |  |
| PHASE_NO | int | Y |  |
| TARGET_CATEGORY_TYPE | string | Y |  |
| TARGET_ID | string | Y |  |
| RULESET_ID | string |  |  |

### RULESET_CONFIG (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULESET_ID | string | Y |  |
| RULE_POINT_ID | string | Y |  |
| RULE_ID | string | Y |  |
| LEVEL_NO | int | Y |  |

### RULESET_MASTER (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULESET_ID | string | Y |  |
| MODULE_TYPE | string |  |  |
| MAX_LEVEL_NO | int |  |  |
| DESCRIPTION | string |  |  |

### BOM_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### ITEM_SITE_BUFFER_MASTER (23 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM_ID | string | Y |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| INFINITY_MATERIAL_YN | string |  |  |
| INPUT_LOT_SIZE | double |  |  |
| NOCARRY_YN | string |  |  |
| DESCRIPTION | string |  |  |
| SAFETY_STOCK_QTY | int |  |  |
| SAFETY_STOCK_DAY | int |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_QTY_RATIO | double |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### BOM_DETAIL_ALT (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| ALT_ITEM_ID | string | Y |  |
| ALT_SITE_ID | string | Y |  |
| ALT_BUFFER_ID | string | Y |  |
| ALT_PRIORITY | int |  |  |

### PROP_MASTER (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROP_CATEGORY_TYPE | string |  |  |
| PROP_ID | string | Y |  |
| DATA_TYPE | string |  |  |
| DEFAULT_VALUE | string |  |  |
| RESERVE_VALUE | string |  |  |
| DESCRIPTION | string |  |  |
| PROP_COL_ID | string |  |  |
| PROP_NAME | string |  |  |

### SITE_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SITE_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### BOM_ROUTING_PROP_VALUE (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| ROUTING_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### OPER_ADD_RES (11 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| OPER_ID | string |  |  |
| RES_GROUP_ID | string |  |  |
| RES_ID | string |  |  |
| FROM_ITEM_ID | string |  |  |
| TO_ITEM_ID | string |  |  |
| ADD_RES_GROUP_ID | string |  |  |
| ADD_RES_ID | string |  |  |
| ROUTING_ID | string |  |  |
| PRIORITY | int |  |  |
| USAGE_PER | double |  |  |
| REQ_CNT | int |  |  |

### REF_PROD_PLAN (16 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| REF_PLAN_ID | string | Y |  |
| STAGE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| REF_PLAN_DATETIME | DateTime |  |  |
| REF_PLAN_QTY | double |  |  |
| REF_TYPE | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| RES_ID | string |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| PLAN_CYCLE_ID | string | Y |  |

### SCENARIO_CONFIG (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SCENARIO_ID | string | Y |  |
| STAGE_ID | string |  |  |
| MODULE_ID | string | Y |  |
| REF_MODULE_ID | string |  |  |
| MODULE_TYPE | string |  |  |
| MAX_PHASE_NO | int |  |  |
| MODULE_SEQ | int |  |  |
| DESCRIPTION | string |  |  |

### SETUP (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SETUP_NO | int | Y |  |
| SETUP_ID | string |  |  |
| SETUP_CONDITION_VALUE | string |  |  |
| FROM_CONDITION_VALUE | string |  |  |
| TO_CONDITION_VALUE | string |  |  |
| SETUP_DURATION | double |  |  |
| SETUP_PRIORITY | int |  |  |
| SETUP_RES_ID | string |  |  |

### CONSTRAINT (7 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CONSTRAINT_ID | string | Y |  |
| CONSTRAINT_GROUP_ID | string |  |  |
| PROP_ID | string |  |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |
| CONSTRAINT_POLICY_TYPE | string |  |  |
| CAPA | double |  |  |

### PM (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PM_ID | string | Y |  |
| PM_PRIORITY | int | Y |  |
| PM_START_TIME | TimeSpan |  |  |
| PM_DURATION | double |  |  |
| EFF_START_DATETIME | DateTime |  |  |
| EFF_END_DATETIME | DateTime |  |  |
| PATTERN_TYPE | string |  |  |
| PATTERN_VALUE | string |  |  |
| PM_POLICY_TYPE | string |  |  |
| PM_POLICY_VALUE | double |  |  |

### FACTORY_CONFIG (2 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| FACTORY_START_TIME | TimeSpan |  |  |
| FACTORY_START_DOW | int |  |  |

### PLAN_CONFIG (12 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PLAN_VER | string | Y |  |
| PLAN_TYPE | string |  |  |
| SCENARIO_ID | string |  |  |
| PLAN_PERIOD | int |  |  |
| PLAN_START_DATETIME | DateTime |  |  |
| REF_PLAN_VER | string |  |  |
| EXECUTION_TYPE | string |  |  |
| PLAN_CYCLE_ID | string |  |  |
| DESCRIPTION | string |  |  |
| DEMAND_VER | string |  |  |
| APPLY_REF_PLAN_YN | string |  |  |
| INBOUND_SCENARIO_ID | string |  |  |

### SCENARIO_EXEC_RESULT (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SCENARIO_ID | string | Y |  |
| TABLE_NAME | string | Y |  |
| MODULE_ID | string | Y |  |
| PHASE_NO | int | Y |  |

### PLAN_CYCLE_INFO (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PLAN_CYCLE_ID | string |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| STATUS | string |  |  |
| LAST_FROZEN_END_DATETIME | DateTime |  |  |
| FROZEN_PLAN_VER | string |  |  |
| FROZEN_END_DATETIME | string |  |  |
| CYCLE_CREATE_TYPE | string |  |  |

### LinqInfo (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| NAME | string |  |  |
| TYPE | string |  |  |
| QUERY | string |  |  |
| ARGUMENTS | string |  |  |
| DESCRIPTION | string |  |  |

### RULESET_AGENT (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULESET_ID | string | Y |  |
| AGENT_ID | string | Y |  |
| AGENT_NAME | string |  |  |
| PARAM_VALUE | string |  |  |

### WORK_CALENDAR (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DATE | string | Y |  |
| YEAR | int |  |  |
| QUARTER | int |  |  |
| MOY | int |  |  |
| WEEK | string |  |  |
| DAY | int |  |  |
| DOY | int |  |  |
| WEEKDAY | int |  |  |
| DOW_NAME | string |  |  |
| CALENDAR_MODULE_ID | string |  |  |
| DAY_CATEGORY_ID | string |  |  |
| DESCRIPTION | string |  |  |
| DAY_CATEGORY_NAME | string |  |  |

### WORK_CALENDAR_TYPE (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CALENDAR_MODULE_ID | string | Y |  |
| ROW_INDEX | int | Y |  |
| CALENDAR_MODULE_NAME | string |  |  |
| CALENDAR_TYPE | string |  |  |
| EFF_START_TIME_VALUE | string |  |  |
| EFF_END_TIME_VALUE | string |  |  |
| LOT_SPLIT_YN | string |  |  |
| DESCRIPTION | string |  |  |

### RES_WORK_CALENDAR (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CALENDAR_MODULE_ID | string |  |  |
| RES_GROUP_ID | string |  |  |
| RES_ID | string | Y |  |
| RES_TYPE | string |  |  |
| DOW_NAME | string |  |  |
| DATE | string | Y |  |

### OPER_GROUP_MASTER (14 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| OPER_GROUP_ID | string | Y |  |
| OPER_GROUP_NAME | string |  |  |
| OPER_GROUP_SEQ | int |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROP_JSON | string |  |  |

### OPER_MASTER (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| OPER_ID | string | Y |  |
| OPER_GROUP_ID | string |  |  |
| OPER_NAME | string |  |  |
| OPER_SEQ | int |  |  |

### OPER_GROUP_PROP_VALUE (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| OPER_GROUP_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |

### TRANSFER (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| TRANSFER_NO | int | Y |  |
| FROM_LOCATION | string |  |  |
| TO_LOCATION | string |  |  |
| TRANSFER_DURATION | double |  |  |
| TRANSFER_PRIORITY | int |  |  |

### CONSTRAINT_DETAIL (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| CONSTRAINT_ID | string | Y |  |
| PROP_ID | string | Y |  |
| PROP_VALUE | string | Y |  |
| ATTACH_EVENT_TYPE | string |  |  |
| ATTACH_TARGET_ID | string |  |  |
| DETACH_EVENT_TYPE | string |  |  |
| DETACH_TARGET_ID | string |  |  |
| USAGE_PER | double |  |  |
| USE_CONSTRAINT_GROUP_YN | string |  |  |
| SPLIT_YN | string |  |  |

### BOM_CONTROL (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| BOM_ID | string | Y |  |
| ACTION_TYPE | string |  |  |
| CONTROL_TYPE | string | Y |  |
| CONTROL_ID | string | Y |  |
| DESCRIPTION | string |  |  |

### RES_STATUS (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RES_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |


================================================================================
## [ENGINE OUTPUT] - 22 tables from Aleatorik_Engine.Outputs.cs
================================================================================

### RPT_ADD_RES_PLAN (67 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| RES_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| STD_BUFFER_ID | string |  |  |
| QTY_CATEGORY_ID | string | Y |  |
| PLAN_DATETIME | DateTime | Y |  |
| OPTIONAL_KEY | string | Y |  |
| OPER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| RES_GROUP_ID | string |  |  |
| MAIN_RES_ID | string |  |  |
| PLAN_QTY | double |  |  |
| PLAN_CONV_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| PLAN_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| USED_CAPA | double |  |  |
| TOTAL_CAPA | double |  |  |
| UNAVAILABLE_CAPA | double |  |  |
| AVAILABLE_CAPA | double |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| RES_NAME | string |  |  |
| ALLOCATION_SEQ | int |  |  |
| STD_OPER_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| FROM_OPER_ID | string |  |  |
| TO_OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| FROM_OPER_GROUP_ID | string |  |  |
| TO_OPER_GROUP_ID | string |  |  |
| WIP_ID | string |  |  |

### RPT_RES_PLAN (74 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| RES_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| STD_BUFFER_ID | string |  |  |
| QTY_CATEGORY_ID | string | Y |  |
| PLAN_DATETIME | DateTime | Y |  |
| OPTIONAL_KEY | string | Y |  |
| OPER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| RES_GROUP_ID | string |  |  |
| PLAN_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| PLAN_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| USED_CAPA | double |  |  |
| TOTAL_CAPA | double |  |  |
| UNAVAILABLE_CAPA | double |  |  |
| AVAILABLE_CAPA | double |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| RES_NAME | string |  |  |
| ALLOCATION_SEQ | int |  |  |
| STD_OPER_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| VRFCT_DCML | double |  |  |
| VRFCT_CUM_DCML | double |  |  |
| VRFCT_NEW_CUM_DCML | double |  |  |
| IS_OVER | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| QTY_UOM | string |  |  |
| PLAN_CONV_QTY | double |  |  |
| CONV_QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| FROM_OPER_ID | string |  |  |
| TO_OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| FROM_OPER_GROUP_ID | string |  |  |
| TO_OPER_GROUP_ID | string |  |  |
| WIP_ID | string |  |  |

### RPT_SHIPMENT_PLAN (60 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| DEMAND_ID | string | Y |  |
| DEMAND_GROUP_ID | string |  |  |
| DEMAND_QTY | double |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| CUST_ID | string |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| MAX_EARLINESS_DAY | double |  |  |
| MAX_LATENESS_DAY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| WAREHOUSE_IN_DATE | string |  |  |
| SHIPMENT_DATE | string |  |  |
| SHIPMENT_QTY | double |  |  |
| LATE_QTY | double |  |  |
| ONTIME_PLAN_QTY | double |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_SITE_NAME | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| DEMAND_TYPE | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| SHIPMENT_CONV_QTY | double |  |  |
| LATE_CONV_QTY | double |  |  |
| ONTIME_CONV_QTY | double |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| CUST_NAME | string |  |  |
| WAREHOUSE_STATUS | string |  |  |
| SHIPMENT_STATUS | string |  |  |
| QTY | double |  |  |
| CONV_QTY | double |  |  |

### RPT_BUFFER_TARGET (57 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| STD_BUFFER_ID | string | Y |  |
| STD_BUFFER_SEQ | int |  |  |
| TARGET_DATETIME | DateTime | Y |  |
| OPTIONAL_KEY | string |  |  |
| ARRIVAL_TARGET_QTY | double |  |  |
| ARRIVAL_TARGET_UNIT_QTY | double |  |  |
| IN_TARGET_QTY | double |  |  |
| IN_TARGET_UNIT_QTY | double |  |  |
| OUT_TARGET_QTY | double |  |  |
| OUT_TARGET_UNIT_QTY | double |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| TARGET_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ARRIVAL_TARGET_CONV_QTY | double |  |  |
| ARRIVAL_TARGET_CONV_UNIT_QTY | double |  |  |
| IN_TARGET_CONV_QTY | double |  |  |
| IN_TARGET_CONV_UNIT_QTY | double |  |  |
| OUT_TARGET_CONV_QTY | double |  |  |
| OUT_TARGET_CONV_UNIT_QTY | double |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |

### RPT_BUFFER_PLAN (53 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| STD_BUFFER_ID | string | Y |  |
| STD_BUFFER_SEQ | int |  |  |
| PLAN_DATETIME | DateTime | Y |  |
| OPTIONAL_KEY | string | Y |  |
| IN_PLAN_QTY | double |  |  |
| IN_PLAN_UNIT_QTY | double |  |  |
| OUT_PLAN_QTY | double |  |  |
| OUT_PLAN_UNIT_QTY | double |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| PLAN_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| IN_PLAN_CONV_QTY | double |  |  |
| IN_PLAN_CONV_UNIT_QTY | double |  |  |
| OUT_PLAN_CONV_QTY | double |  |  |
| OUT_PLAN_CONV_UNIT_QTY | double |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |

### RPT_MATERIAL_TARGET (46 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| BUFFER_ID | string | Y |  |
| TO_ITEM_ID | string | Y |  |
| RPT_DATETIME | DateTime | Y |  |
| QTY_CATEGORY_ID | string | Y |  |
| OPTIONAL_KEY | string | Y |  |
| RPT_QTY | double |  |  |
| RPT_CONV_QTY | double |  |  |
| BUFFER_SEQ | int |  |  |
| CATEGORY_SEQ | int |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| SITE_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| TO_ITEM_NAME | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |

### RPT_DEMAND_PLAN_ISB (66 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_QTY | double |  |  |
| DUE_DATETIME | Nullable&lt;DateTime&gt; |  |  |
| DEMAND_TYPE | string |  |  |
| EXTEND_DUE_DATETIME | Nullable&lt;DateTime&gt; |  |  |
| CUST_ID | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string |  |  |
| SITE_NAME | string |  |  |
| BUFFER_ID | string |  |  |
| BUFFER_SEQ | int |  |  |
| TARGET_DATETIME | Nullable&lt;DateTime&gt; |  |  |
| EXTEND_TARGET_DATETIME | Nullable&lt;DateTime&gt; |  |  |
| TARGET_QTY | double |  |  |
| TARGET_UNIT_QTY | double |  |  |
| PLAN_DATETIME | Nullable&lt;DateTime&gt; |  |  |
| PLAN_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| PLAN_GAP_SEC | Nullable&lt;int&gt; |  |  |
| PEG_QTY | double |  |  |
| PEG_UNIT_QTY | double |  |  |
| INPUT_TARGET_QTY | double |  |  |
| INPUT_TARGET_UNIT_QTY | double |  |  |
| INPUT_PLAN_QTY | double |  |  |
| INPUT_PLAN_UNIT_QTY | double |  |  |
| INPUT_OPTION_YN | string |  |  |
| PLAN_QTY_DETAIL_JSON | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| TARGET_CONV_QTY | double |  |  |
| TARGET_CONV_UNIT_QTY | double |  |  |
| PLAN_CONV_QTY | double |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| PEG_CONV_QTY | double |  |  |
| PEG_CONV_UNIT_QTY | double |  |  |
| INPUT_TARGET_CONV_QTY | double |  |  |
| INPUT_TARGET_CONV_UNIT_QTY | double |  |  |
| INPUT_PLAN_CONV_QTY | double |  |  |
| INPUT_PLAN_CONV_UNIT_QTY | double |  |  |
| PLAN_CONV_QTY_DETAIL_JSON | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |

### RPT_BOM_MAP_ROUTE (39 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| DEMAND_ID | string |  |  |
| BOM_ID | string |  |  |
| BOM_TYPE | string |  |  |
| BOM_PRIORITY | double |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| OPER_TYPE | string |  |  |
| OPER_SEQ | int |  |  |
| PLAN_QTY | double |  |  |
| PLAN_CONV_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| TARGET_QTY | double |  |  |
| TARGET_CONV_QTY | double |  |  |
| TOTAL_TAT | double |  |  |
| WAIT_TAT | double |  |  |
| RUN_TAT | double |  |  |
| ELAPSE_SEC | double |  |  |
| OPER_YIELD | double |  |  |
| RES_LIST | string |  |  |
| ALL_RES_LIST | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| BUFFER_ID | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |

### RPT_PSI (44 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| STD_BUFFER_ID | string | Y |  |
| BUFFER_SEQ | int |  |  |
| RPT_DATETIME | DateTime | Y |  |
| QTY_CATEGORY_ID | string | Y |  |
| OPTIONAL_KEY | string | Y |  |
| RPT_QTY | double |  |  |
| RPT_CONV_QTY | double |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| CATEGORY_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| SITE_NAME | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |

### RPT_STD_PSI (32 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string | Y |  |
| ITEM_ID | string | Y |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string | Y |  |
| STD_BUFFER_ID | string | Y |  |
| RPT_DATETIME | DateTime | Y |  |
| RPT_QTY | double |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| SITE_NAME | string |  |  |
| CATEGORY_JSON | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |

### RPT_ISB_STOCK (52 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| SITE_ID | string |  |  |
| SITE_NAME | string |  |  |
| DAILY_REQ_STOCK_QTY | double |  |  |
| SAFETY_STOCK_QTY | double |  |  |
| SAFETY_STOCK_DAY | double |  |  |
| BOH_QTY | double |  |  |
| BOH_DAY | double |  |  |
| BOH_STOCK_RATIO | double |  |  |
| AVG_EOH_QTY | double |  |  |
| MIN_STOCK_QTY | double |  |  |
| MAX_STOCK_QTY | double |  |  |
| EOH_QTY | double |  |  |
| EOH_DAY | double |  |  |
| STOCK_GAP_QTY | double |  |  |
| EOH_STOCK_RATIO | double |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| DAILY_REQ_STOCK_CONV_QTY | double |  |  |
| SAFETY_STOCK_CONV_QTY | double |  |  |
| BOH_CONV_QTY | double |  |  |
| AVG_EOH_CONV_QTY | double |  |  |
| MIN_STOCK_CONV_QTY | double |  |  |
| MAX_STOCK_CONV_QTY | double |  |  |
| EOH_CONV_QTY | double |  |  |
| STOCK_GAP_CONV_QTY | double |  |  |
| ITEM_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| BOH_STOCK_CONV_RATIO | double |  |  |
| EOH_STOCK_CONV_RATIO | double |  |  |

### RPT_ISB_STOCK_VERIFICATION (4 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| RPT_DATETIME | DateTime |  |  |
| EOH_QTY | double |  |  |

### RPT_SAFETY_STOCK_DEMAND (42 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| DEMAND_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| MAX_LATENESS_DAY | double |  |  |
| MAX_EARLINESS_DAY | double |  |  |
| REF_DEMAND_ID | string |  |  |
| REF_ITEM_ID | string |  |  |
| REF_SITE_ID | string |  |  |
| REF_BUFFER_ID | string |  |  |
| REF_DUE_DATETIME | DateTime |  |  |
| REF_CUST_ID | string |  |  |
| REF_DEMAND_TYPE | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| CUST_NAME | string |  |  |

### RPT_FGS_STOCK_IN_PLAN (35 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| QTY_CATEGORY_ID | string |  |  |
| RPT_QTY | double |  |  |
| RPT_DATETIME | DateTime |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_PRIORITY | int |  |  |
| PROCUREMENT_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| DEMAND_LIST | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| RPT_CONV_QTY | double |  |  |

### RPT_CONSTRAINT_PLAN (51 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| RES_ID | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| STD_OPER_ID | string |  |  |
| QTY_CATEGORY_ID | string |  |  |
| PLAN_DATETIME | DateTime |  |  |
| OPTIONAL_KEY | string |  |  |
| OPER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| RES_GROUP_ID | string |  |  |
| MAIN_RES_ID | string |  |  |
| PLAN_QTY | double |  |  |
| PLAN_CONV_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| PLAN_SHIFT_CODE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| USED_CAPA | double |  |  |
| TOTAL_CAPA | double |  |  |
| UNAVAILABLE_CAPA | double |  |  |
| AVAILABLE_CAPA | double |  |  |
| ITEM_NAME | string |  |  |
| SITE_NAME | string |  |  |
| RES_NAME | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |

### RPT_OPER_PLAN (33 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| STD_BUFFER_ID | string |  |  |
| RPT_DATETIME | DateTime |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_PRIORITY | int |  |  |
| ITEM_UOM | string |  |  |
| PROCUREMENT_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| CATEGORY_JSON | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |

### RPT_OPER_GROUP_PLAN (65 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ROW_INDEX | int |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| OPER_ID | string |  |  |
| PLAN_DATETIME | DateTime |  |  |
| IN_PLAN_QTY | double |  |  |
| IN_PLAN_CONV_QTY | double |  |  |
| IN_PLAN_UNIT_QTY | double |  |  |
| IN_PLAN_CONV_UNIT_QTY | double |  |  |
| OUT_PLAN_QTY | double |  |  |
| OUT_PLAN_CONV_QTY | double |  |  |
| OUT_PLAN_UNIT_QTY | double |  |  |
| OUT_PLAN_CONV_UNIT_QTY | double |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| PLAN_SHIFT_CODE | string |  |  |
| BUFFER_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| SITE_NAME | string |  |  |
| ITEM_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| OPER_GROUP_NAME | string |  |  |
| OPER_GROUP_SEQ | int |  |  |
| OPER_NAME | string |  |  |
| OPER_SEQ | int |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| RPT_DATETIME | DateTime |  |  |
| RPT_DATE | string |  |  |
| RPT_WEEK | string |  |  |
| RPT_MONTH | string |  |  |
| RPT_SHIFT_CODE | string |  |  |
| PROD_QTY | double |  |  |
| PROD_CONV_QTY | double |  |  |

### RPT_RES_PLAN_DETAIL (74 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| MODULE_ID | string |  |  |
| STAGE_ID | string |  |  |
| ALLOCATION_SEQ | int |  |  |
| ALLOCATION_TYPE | string |  |  |
| RES_GROUP_ID | string |  |  |
| RES_ID | string |  |  |
| RES_NAME | string |  |  |
| LOT_GROUP_KEY | string |  |  |
| LOT_ID | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_NAME | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_ID | string |  |  |
| DUE_DATE | string |  |  |
| OPER_ID | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| EXTEND_TARGET_DATETIME | DateTime |  |  |
| PLAN_DATE | string |  |  |
| ORG_ARRIVAL_DATETIME | DateTime |  |  |
| START_DATETIME | DateTime |  |  |
| RES_END_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| PLAN_QTY | double |  |  |
| QTY_UOM | string |  |  |
| PLAN_CONV_QTY | double |  |  |
| CONV_QTY_UOM | string |  |  |
| PLAN_UNIT_QTY | double |  |  |
| UNIT_QTY_UOM | string |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| USAGE_PER | double |  |  |
| USED_CAPA | double |  |  |
| BOM_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_ID | string |  |  |
| CUST_NAME | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| SHIFT_NAME | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| FROM_OPER_ID | string |  |  |
| TO_OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| FROM_OPER_GROUP_ID | string |  |  |
| TO_OPER_GROUP_ID | string |  |  |
| BUFFER_ID | string |  |  |
| WIP_ID | string |  |  |
| LPST_GAP_DAY | double |  |  |
| ROUTING_ID | string |  |  |
| MAIN_RES_ID | string |  |  |

### RPT_DEMAND_OVERVIEW (45 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int | Y |  |
| STAGE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_GROUP_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CATEGORY_TYPE | string |  |  |
| CATEGORY_JSON | string |  |  |
| DEMAND_QTY | double |  |  |
| QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| CONV_QTY_UOM | string |  |  |
| DEMAND_PRIORITY | int |  |  |
| DUE_DATE | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| MAX_EARLINESS_DAY | double |  |  |
| MAX_LATENESS_DAY | double |  |  |
| EXTEND_DUE_DATE | string |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| CUST_ID | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| ITEM_SPEC | string |  |  |
| PROD_TYPE | string |  |  |
| SITE_ID | string |  |  |
| SITE_NAME | string |  |  |
| BUFFER_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |

### METADATA_LOG (3 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DATA_ID | string |  |  |
| DATA_SCHEMA | string |  |  |
| DATA_COUNT | int |  |  |

### RPT_OPER_GROUP_TARGET (62 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| OPER_ID | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| ARRIVAL_TARGET_QTY | double |  |  |
| ARRIVAL_TARGET_CONV_QTY | double |  |  |
| ARRIVAL_TARGET_UNIT_QTY | double |  |  |
| ARRIVAL_TARGET_CONV_UNIT_QTY | double |  |  |
| IN_TARGET_QTY | double |  |  |
| IN_TARGET_CONV_QTY | double |  |  |
| IN_TARGET_UNIT_QTY | double |  |  |
| IN_TARGET_CONV_UNIT_QTY | double |  |  |
| OUT_TARGET_QTY | double |  |  |
| OUT_TARGET_CONV_QTY | double |  |  |
| OUT_TARGET_UNIT_QTY | double |  |  |
| OUT_TARGET_CONV_UNIT_QTY | double |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| TARGET_SHIFT_CODE | string |  |  |
| BUFFER_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| ITEM_NAME | string |  |  |
| ITEM_SPEC | string |  |  |
| SITE_NAME | string |  |  |
| ITEM_TYPE | string |  |  |
| PROD_TYPE | string |  |  |
| ITEM_SIZE_TYPE | string |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| CUST_NAME | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |
| OPER_GROUP_NAME | string |  |  |
| OPER_GROUP_SEQ | int |  |  |
| OPER_NAME | string |  |  |
| OPER_SEQ | int |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |

### RPT_PEG_INFO (65 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| STAGE_ID | string |  |  |
| WIP_ID | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_NAME | string |  |  |
| SITE_ID | string |  |  |
| SITE_NAME | string |  |  |
| BUFFER_ID | string |  |  |
| BUFFER_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_NAME | string |  |  |
| DEMAND_ITEM_TYPE | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| DEMAND_QTY | double |  |  |
| WIP_QTY | double |  |  |
| WIP_AVAILABLE_QTY | double |  |  |
| PEG_QTY | double |  |  |
| WIP_REMAIN_QTY | double |  |  |
| QTY_UOM | string |  |  |
| ITEM_PRIORITY | int |  |  |
| PEG_UNIT_QTY | double |  |  |
| UNIT_QTY_UOM | string |  |  |
| DEMAND_PRIORITY | int |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| TARGET_QTY | double |  |  |
| TARGET_ITEM_ID | string |  |  |
| TARGET_ITEM_NAME | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| WIP_CONV_QTY | double |  |  |
| WIP_AVAILABLE_CONV_QTY | double |  |  |
| PEG_CONV_QTY | double |  |  |
| WIP_REMAIN_CONV_QTY | double |  |  |
| TARGET_CONV_QTY | double |  |  |
| CONV_QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| TOTAL_SHIPMENT_CONV_QTY | double |  |  |
| PEG_CONV_UNIT_QTY | double |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| PEG_GROUP_KEY | string |  |  |
| TARGET_GROUP_KEY | string |  |  |
| PEG_KEY | string |  |  |
| PROP_JSON | string |  |  |
| PROP01 | string |  |  |
| PROP02 | string |  |  |
| PROP03 | string |  |  |
| PROP04 | string |  |  |
| PROP05 | string |  |  |
| PROP06 | string |  |  |
| PROP07 | string |  |  |
| PROP08 | string |  |  |
| PROP09 | string |  |  |
| PROP10 | string |  |  |


================================================================================
## [SYSTEM OUTPUT] - 52 tables from AleatorikModel.Outputs.cs
================================================================================

### TARGET_PLAN (56 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| STAGE_ID | string |  |  |
| PHASE_NO | int |  |  |
| MO_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| OPER_YIELD | double |  |  |
| BOM_ID | string |  |  |
| TARGET_TYPE | string |  |  |
| CATEGORY_TYPE | string |  |  |
| TARGET_QTY | double |  |  |
| TARGET_UNIT_QTY | double |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| MO_ITEM_ID | string |  |  |
| MO_ITEM_TYPE | string |  |  |
| MO_QTY | double |  |  |
| MO_DUE_DATETIME | DateTime |  |  |
| MO_DUE_WEEK | string |  |  |
| MO_DUE_MONTH | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_TYPE | string |  |  |
| DEMAND_QTY | double |  |  |
| DUE_DATE | string |  |  |
| DEMAND_WEEK | string |  |  |
| DEMAND_MONTH | string |  |  |
| TAT | double |  |  |
| CUM_TAT | double |  |  |
| PATH_ID | string |  |  |
| PEG_PART_KEY | string |  |  |
| DEMAND_MAX_LATENESS_DAY | int |  |  |
| DEMAND_ITEM_PRIORITY | int |  |  |
| DEMAND_PRIORITY | double |  |  |
| DEMAND_MIN_CUM_TAT | double |  |  |
| SUM_DEMAND_QTY | double |  |  |
| ORG_TARGET_DATETIME | DateTime |  |  |
| PLAN_TARGET_DATETIME | DateTime |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| IS_REF_OPER | string |  |  |
| REF_TARGET_DATETIME | DateTime |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| TARGET_CONV_QTY | double |  |  |
| TARGET_CONV_UNIT_QTY | double |  |  |
| DEMAND_CONV_QTY | double |  |  |

### PEG_INFO (62 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| WIP_ID | string |  |  |
| MO_ID | string |  |  |
| DEMAND_ID | string |  |  |
| PEG_QTY | double |  |  |
| WIP_QTY | double |  |  |
| WIP_TYPE | string |  |  |
| WIP_STATUS | string |  |  |
| CREATE_TYPE | string |  |  |
| AVAILABLE_DATETIME | DateTime |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| ITEM_PRIORITY | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| BUFFER_SEQ | int |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| TARGET_ITEM_ID | string |  |  |
| TARGET_ITEM_TYPE | string |  |  |
| TARGET_SITE_ID | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_ITEM_TYPE | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_PRIORITY | int |  |  |
| DEMAND_MAX_LATENESS_DAY | double |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_WEEK | string |  |  |
| DUE_MONTH | string |  |  |
| STAGE_ID | string |  |  |
| TARGET_QTY | double |  |  |
| TARGET_SUM_QTY | double |  |  |
| MO_QTY | double |  |  |
| MO_ITEM_ID | string |  |  |
| MO_ITEM_TYPE | string |  |  |
| MO_DUE_DATETIME | DateTime |  |  |
| MO_WEEK | string |  |  |
| MO_MONTH | string |  |  |
| PEG_GROUP_KEY | string |  |  |
| TARGET_GROUP_KEY | string |  |  |
| PEG_KEY | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| REF_PLAN_VER | string |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| WIP_CONV_QTY | double |  |  |
| PEG_CONV_QTY | double |  |  |
| MO_CONV_QTY | double |  |  |
| DEMAND_CONV_QTY | double |  |  |
| TARGET_CONV_QTY | double |  |  |
| TARGET_SUM_CONV_QTY | double |  |  |

### UNPEG_INFO (24 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| WIP_ID | string |  |  |
| STAGE_ID | string |  |  |
| CREATE_TYPE | string |  |  |
| WIP_QTY | double |  |  |
| UNPEG_QTY | double |  |  |
| UNPEG_CATEGORY_TYPE | string |  |  |
| UNPEG_REASON | string |  |  |
| REASON_DETAIL_INFO | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| WIP_STATUS | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| AVAILABLE_DATETIME | DateTime |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| WIP_CONV_QTY | double |  |  |
| UNPEG_CONV_QTY | double |  |  |

### LOT_SPLIT_LOG (28 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| BOM_ID | string |  |  |
| BOM_TYPE | string |  |  |
| ORG_LOT_ID | string |  |  |
| ORG_LOT_QTY | double |  |  |
| ORG_ITEM_ID | string |  |  |
| ORG_ITEM_PRIORITY | int |  |  |
| ORG_SITE_ID | string |  |  |
| CONFIRM_LOT_ID | string |  |  |
| CONFIRM_LOT_QTY | double |  |  |
| COBY_LOT_ID | string |  |  |
| COBY_LOT_QTY | double |  |  |
| COBY_ITEM_ID | string |  |  |
| COBY_ITEM_PRIORITY | int |  |  |
| COBY_SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| TO_QTY | double |  |  |
| TO_LOT_AVAILABLE_DATETIME | DateTime |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| MO_ID | string |  |  |
| MO_DUE_DATETIME | DateTime |  |  |
| CALENDAR_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### ERROR_LOG (11 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SEVERITY | string |  |  |
| MODULE_ID | string |  |  |
| TARGET_KEY | string |  |  |
| TARGET_VALUE | string |  |  |
| REF_KEY | string |  |  |
| REASON_CODE | string |  |  |
| REASON_DETAIL_INFO | string |  |  |
| CATEGORY_TYPE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### ELAPSED_TIME_LOG (9 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| RULE_POINT_ID | string |  |  |
| CALL_CNT | double |  |  |
| ELAPSE_SEC | double |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SCENARIO_RULESET_CONFIG_DATA (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string | Y |  |
| TARGET_CATEGORY_TYPE | string | Y |  |
| TARGET_ID | string | Y |  |
| RULESET_ID | string |  |  |
| PHASE_NO | int | Y |  |
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| ROW_INDEX | int |  |  |

### INTARGET_PLAN (25 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| TARGET_QTY | double |  |  |
| TARGET_UNIT_QTY | double |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| DUE_DATETIME | DateTime |  |  |
| MO_ID | string |  |  |
| MO_ITEM_ID | string |  |  |
| MO_QTY | double |  |  |
| MO_DUE_DATETIME | DateTime |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### PROD_PLAN (78 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| LOT_ID | string |  |  |
| STAGE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| DEMAND_ID | string |  |  |
| LOT_GROUP_KEY | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| IN_PLAN_QTY | double |  |  |
| IN_PLAN_UNIT_QTY | double |  |  |
| OUT_PLAN_QTY | double |  |  |
| OUT_PLAN_UNIT_QTY | double |  |  |
| RES_ID | string |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| RES_END_DATETIME | DateTime |  |  |
| USED_CAPA | double |  |  |
| USAGE_PER | double |  |  |
| UTIL_RATIO | double |  |  |
| OPER_YIELD | double |  |  |
| CHANGE_RATIO | double |  |  |
| TOTAL_TAT | double |  |  |
| ORG_LOT_ID | string |  |  |
| WIP_TYPE | string |  |  |
| CREATE_TYPE | string |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| LPST_GAP_DAY | double |  |  |
| EXTEND_TARGET_DATETIME | DateTime |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_DATE | string |  |  |
| TARGET_MONTH | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DEMAND_PRIORITY | double |  |  |
| MAX_LATENESS_DAY | int |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| RETRY_CNT | int |  |  |
| ALLOCATION_SEQ | double |  |  |
| MO_ID | string |  |  |
| REF_PLAN_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| IS_OVER_CAPA | string |  |  |
| ARRIVAL_PLAN_QTY | double |  |  |
| ARRIVAL_PLAN_UNIT_QTY | double |  |  |
| SHIFT_NAME | string |  |  |
| ORG_ARRIVAL_DATETIME | DateTime |  |  |
| REF_PLAN_VER | string |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| IN_PLAN_CONV_QTY | double |  |  |
| IN_PLAN_CONV_UNIT_QTY | double |  |  |
| OUT_PLAN_CONV_QTY | double |  |  |
| OUT_PLAN_CONV_UNIT_QTY | double |  |  |
| ARRIVAL_PLAN_CONV_QTY | double |  |  |
| ARRIVAL_PLAN_CONV_UNIT_QTY | double |  |  |
| FROM_OPER_ID | string |  |  |
| TO_OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| FROM_OPER_GROUP_ID | string |  |  |
| TO_OPER_GROUP_ID | string |  |  |
| TO_RES_ID | string |  |  |

### LOT_HISTORY (23 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| EVENT_DATETIME | DateTime |  |  |
| EVENT_TYPE | string |  |  |
| LOT_ID | string |  |  |
| LOT_QTY | double |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| ADD_INFO | string |  |  |
| WIP_ID | string |  |  |
| CREATE_TYPE | string |  |  |
| ORG_LOT_ID | string |  |  |
| DEMAND_ID | string |  |  |
| MO_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| REF_PLAN_ID | string |  |  |
| RETRY_CNT | int |  |  |

### LOT_ASSEMBLY_LOG (28 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| EVENT_DATETIME | DateTime |  |  |
| AVAILABLE_DATETIME | DateTime |  |  |
| FROM_LOT_ID | string |  |  |
| FROM_ITEM_ID | string |  |  |
| FROM_ITEM_TYPE | string |  |  |
| FROM_SITE_ID | string |  |  |
| FROM_BUFFER_ID | string |  |  |
| FROM_LOT_QTY | double |  |  |
| FROM_DEMAND_ID | string |  |  |
| FROM_TARGET_DATETIME | DateTime |  |  |
| TO_LOT_ID | string |  |  |
| TO_ITEM_ID | string |  |  |
| TO_ITEM_TYPE | string |  |  |
| TO_SITE_ID | string |  |  |
| TO_BUFFER_ID | string |  |  |
| TO_LOT_QTY | double |  |  |
| TO_DEMAND_ID | string |  |  |
| TO_TARGET_DATETIME | DateTime |  |  |
| BOM_ID | string |  |  |
| FROM_QTY | double |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### RES_PLAN (76 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| RES_ID | string |  |  |
| RES_GROUP_ID | string |  |  |
| STAGE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| ALLOCATION_SEQ | double |  |  |
| DEMAND_ID | string |  |  |
| MO_ID | string |  |  |
| LOT_ID | string |  |  |
| LOT_GROUP_KEY | string |  |  |
| BOM_ID | string |  |  |
| ALLOCATION_TYPE | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_TYPE | string |  |  |
| BUFFER_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| SITE_ID | string |  |  |
| BACKWARD_CHANGE_RATIO | double |  |  |
| TOTAL_TAT | double |  |  |
| PLAN_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| MAIN_RES_ID | string |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| RES_END_DATETIME | DateTime |  |  |
| USED_CAPA | double |  |  |
| USAGE_PER | double |  |  |
| UTIL_RATIO | double |  |  |
| ORG_LOT_ID | string |  |  |
| WIP_TYPE | string |  |  |
| CREATE_TYPE | string |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| EXTEND_TARGET_DATETIME | DateTime |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| DUE_DATETIME | DateTime |  |  |
| DUE_DATE | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DEMAND_PRIORITY | double |  |  |
| MAX_LATENESS_DAY | int |  |  |
| LPST_GAP_DAY | double |  |  |
| RETRY_CNT | int |  |  |
| ITEM_MERGE_INDEX | int |  |  |
| DEMAND_MERGE_INDEX | int |  |  |
| DESCRIPTION | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| IS_OVER_CAPA | string |  |  |
| REF_PLAN_ID | string |  |  |
| SHIFT_NAME | string |  |  |
| ORG_ARRIVAL_DATETIME | DateTime |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| PLAN_CONV_QTY | double |  |  |
| PLAN_CONV_UNIT_QTY | double |  |  |
| FROM_OPER_ID | string |  |  |
| TO_OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| FROM_OPER_GROUP_ID | string |  |  |
| TO_OPER_GROUP_ID | string |  |  |
| WIP_ID | string |  |  |
| CONSTRAINT_ID | string |  |  |

### BOM_NETWORK_INFO (47 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DEMAND_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| BOM_TYPE | string |  |  |
| BOM_PRIORITY | int |  |  |
| FROM_ITEM_ID | string |  |  |
| FROM_SITE_ID | string |  |  |
| FROM_BUFFER_ID | string |  |  |
| FROM_BUFFER_SEQ | int |  |  |
| FROM_QTY | double |  |  |
| FROM_WIP_QTY | double |  |  |
| FROM_WIP_SUM_QTY | double |  |  |
| TO_ITEM_ID | string |  |  |
| TO_SITE_ID | string |  |  |
| TO_BUFFER_ID | string |  |  |
| TO_BUFFER_SEQ | int |  |  |
| TO_QTY | double |  |  |
| TO_WIP_QTY | double |  |  |
| TO_WIP_SUM_QTY | double |  |  |
| AVAILABLE_DETAIL_YN | string |  |  |
| AVAILABLE_BOM_YN | string |  |  |
| RES_LIST | string |  |  |
| ALL_RES_LIST | string |  |  |
| ROUTING_TAT | double |  |  |
| MIN_CUM_TAT | double |  |  |
| MAX_CUM_TAT | double |  |  |
| LATE_CUM_TAT | double |  |  |
| MAX_CUM_YIELD | double |  |  |
| PREV_ISB_LIST | string |  |  |
| NEXT_ISB_LIST | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| DEPTH | int |  |  |
| FROM_QTY_UOM | string |  |  |
| FROM_CONV_QTY_UOM | string |  |  |
| TO_QTY_UOM | string |  |  |
| TO_CONV_QTY_UOM | string |  |  |
| FROM_CONV_QTY | double |  |  |
| FROM_WIP_CONV_QTY | double |  |  |
| FROM_WIP_SUM_CONV_QTY | double |  |  |
| TO_CONV_QTY | double |  |  |
| TO_WIP_CONV_QTY | double |  |  |
| TO_WIP_SUM_CONV_QTY | double |  |  |

### BOM_RESTRICTED_RESULT (6 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| BOM_ID | string |  |  |
| CONTROL_ID | string |  |  |
| CONTROL_TYPE | string |  |  |

### ITEM_SITE_BUFFER_ALT_INFO (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ALT_ISB_ID | string |  |  |
| ITEM_PRIORITY | int |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| ALT_ITEM_PRIORITY | int |  |  |
| ALT_ITEM_ID | string |  |  |
| ALT_SITE_ID | string |  |  |
| ALT_BUFFER_ID | string |  |  |
| ALT_PRIORITY | int |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SHIPMENT_PLAN (21 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| SHIPMENT_DATE | string |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| PROD_QTY | double |  |  |
| LATE_QTY | double |  |  |
| EARLY_QTY | double |  |  |
| ONTIME_PLAN_QTY | double |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| MAX_LATENESS_DAY | int |  |  |
| MAX_EARLINESS_DAY | int |  |  |
| DUE_DATE | string |  |  |
| DUE_WEEK | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| WAREHOUSE_IN_DATE | string |  |  |
| DUE_MONTH | string |  |  |

### PSI_REPORT (14 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| PLAN_DATE | string |  |  |
| BOH_QTY | double |  |  |
| IN_QTY | double |  |  |
| OUT_QTY | double |  |  |
| EOH_QTY | double |  |  |
| ITEM_TYPE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### STAGE_OUT_PLAN (40 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| PLAN_DATE | string |  |  |
| STAGE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| LOT_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| PLAN_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| CREATE_TYPE | string |  |  |
| WIP_TYPE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| LPST_GAP_DAY | double |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DEMAND_SITE_ID | string |  |  |
| DEMAND_BUFFER_ID | string |  |  |
| DUE_MONTH | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_DATE | string |  |  |
| DEMAND_PRIORITY | double |  |  |
| MAX_LATENESS_DAY | int |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| EXTEND_TARGET_DATETIME | DateTime |  |  |
| RETRY_CNT | int |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| PROD_TYPE | string |  |  |

### COMPARE_BOM_LOG (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| ISB_ID | string |  |  |
| USE_BOM_ID | string |  |  |
| INIT_BOM_ID | string |  |  |
| FILTER_BOM_ID | string |  |  |
| AVAILABLE_BOM_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### EXECUTION_TIME_LOG (5 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SECTION | string |  |  |
| ELAPSE_SEC | double |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SHORT_REPORT (31 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| SHORT_SEQ | int |  |  |
| LOT_ID | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DUE_MONTH | string |  |  |
| DUE_WEEK | string |  |  |
| DUE_DATE | string |  |  |
| MAX_LATENESS_DAY | int |  |  |
| EXTEND_DUE_DATE | string |  |  |
| DEMAND_PRIORITY | double |  |  |
| RETRY_CNT | int |  |  |
| DEMAND_QTY | double |  |  |
| SHORT_QTY | double |  |  |
| SHORT_UNIT_QTY | double |  |  |
| SHORT_DATE | string |  |  |
| REASON_CATEGORY_TYPE | string |  |  |
| REASON_NAME | string |  |  |
| REASON_DETAIL_INFO | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| RES_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### ITEM_SITE_BUFFER_WIP_LOG (9 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| WIP_ID | string |  |  |
| ISB_ID | string |  |  |
| WIP_QTY | double |  |  |
| AVAILABLE_DATETIME | DateTime |  |  |
| LOG_SEQ | int |  |  |
| LOG_TYPE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### PEGGABLE_WIP_INFO (7 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ID | string |  |  |
| PHASE_NO | int |  |  |
| DEMAND_ISB_ID | string |  |  |
| WIP_INFO | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SCENARIO_OPTION_CONFIG_DATA (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| SCENARIO_ID | string |  |  |
| MODULE_ID | string |  |  |
| OPTION_ID | string |  |  |
| OPTION_VALUE | string |  |  |
| CALENDAR_ID | string |  |  |
| DESCRIPTION | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| PHASE_NO | int |  |  |
| ROW_INDEX | int |  |  |

### RULE_FACTOR_DATA (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULE_ID | string |  |  |
| FACTOR_ID | string |  |  |
| FACTOR_SEQ | int |  |  |
| FACTOR_WEIGHT | double |  |  |
| FACTOR_VALUE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### RULESET_CONFIG_DATA (7 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RULESET_ID | string |  |  |
| RULE_POINT_ID | string |  |  |
| LEVEL_NO | int |  |  |
| RULE_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SHORT_PROD_PLAN (59 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| PLAN_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| MO_ID | string |  |  |
| LOT_ID | string |  |  |
| BOM_ID | string |  |  |
| ALLOCATION_TYPE | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DUE_DATE | string |  |  |
| DEMAND_PRIORITY | double |  |  |
| LOT_GROUP_KEY | string |  |  |
| FROM_ITEM_ID | string |  |  |
| FROM_SITE_ID | string |  |  |
| FROM_BUFFER_ID | string |  |  |
| TO_ITEM_ID | string |  |  |
| TO_SITE_ID | string |  |  |
| TO_BUFFER_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| OPER_YIELD | double |  |  |
| PLAN_QTY | double |  |  |
| PLAN_UNIT_QTY | double |  |  |
| RES_ID | string |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| RES_END_DATETIME | DateTime |  |  |
| CREATE_TYPE | string |  |  |
| WIP_TYPE | string |  |  |
| PLAN_DATE | string |  |  |
| PLAN_WEEK | string |  |  |
| PLAN_MONTH | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| TARGET_WEEK | string |  |  |
| TARGET_MONTH | string |  |  |
| LPST_GAP_DAY | double |  |  |
| MAX_LATENESS_DAY | double |  |  |
| EXTEND_DUE_DATETIME | DateTime |  |  |
| EXTEND_TARGET_DATETIME | DateTime |  |  |
| ADD_RES_ID | string |  |  |
| ADD_RES_CAPA | double |  |  |
| ADD_RES_ALLOCATION_QTY | double |  |  |
| ADD_RES_CUM_ALLOCATION_QTY | double |  |  |
| ADD_RES_REMAIN_QTY | double |  |  |
| BACKWARD_CHANGE_RATIO | double |  |  |
| TOTAL_TAT | double |  |  |
| SUM_TAT | double |  |  |
| SUM_YIELD | double |  |  |
| SPLIT_RATIO | double |  |  |
| RETRY_CNT | int |  |  |
| ORG_LOT_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| REF_PLAN_ID | string |  |  |

### INIT_DEMAND_LOG (23 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| DEMAND_PEG_SEQ | int |  |  |
| DEMAND_ID | string |  |  |
| MO_ID | string |  |  |
| SITE_ID | string |  |  |
| ITEM_ID | string |  |  |
| ITEM_PRIORITY | int |  |  |
| DUE_DATE | string |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | double |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| MAX_LATENESS_DAY | double |  |  |
| MAX_EARLINESS_DAY | double |  |  |
| LATE_DATETIME | DateTime |  |  |
| DUE_WEEK | string |  |  |
| COMPARE_INFO | string |  |  |
| FILTER_INFO | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### CAPA_ALLOCATION_INFO (27 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| TARGET_ID | string |  |  |
| RES_GROUP_ID | string |  |  |
| BUCKET_DATE | string |  |  |
| STAGE_ID | string |  |  |
| PHASE_NO | int |  |  |
| TARGET_TYPE | string |  |  |
| CAPA_TYPE | string |  |  |
| CAPA_MODE | string |  |  |
| TOTAL_CAPA | double |  |  |
| UNAVAILABLE_CAPA | double |  |  |
| AVAILABLE_CAPA | double |  |  |
| ALLOCATION_CAPA | double |  |  |
| PM_CAPA | double |  |  |
| SETUP_CAPA | double |  |  |
| REMAIN_CAPA | double |  |  |
| ALLOCATION_RATIO | double |  |  |
| CALENDAR_ID | string |  |  |
| PATTERN_ID | string |  |  |
| EFF_START_DATE | string |  |  |
| EFF_END_DATE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| SHIFT_NAME | string |  |  |
| BUCKET_WEEK | string |  |  |
| BUCKET_MONTH | string |  |  |

### ALLOCATION_LOG (22 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| PHASE_NO | int |  |  |
| LEVEL_NO | int |  |  |
| TARGET_ID | string |  |  |
| TARGET_TYPE | string |  |  |
| ALLOCATION_SEQ | double |  |  |
| INIT_LOT_GROUP_CNT | int |  |  |
| FILTER_LOT_GROUP_CNT | int |  |  |
| AVAILABLE_LOT_GROUP_CNT | int |  |  |
| USE_LOT_GROUP_ID | string |  |  |
| LOG_TYPE | string |  |  |
| FILTER_LOT_GROUP_ID | string |  |  |
| AVAILABLE_LOT_GROUP_ID | string |  |  |
| AVAILABLE_RES_ID | string |  |  |
| FILTER_RES_ID | string |  |  |
| USE_RES_ID | string |  |  |
| ALLOCATION_TYPE | string |  |  |
| PLAN_DATE | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### SHORT_LOG (33 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| STAGE_ID | string |  |  |
| MODULE_ID | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| DUE_DATE | string |  |  |
| DEMAND_QTY | double |  |  |
| SHORT_TYPE | string |  |  |
| SHORT_CATEGORY_TYPE | string |  |  |
| SHORT_REASON | string |  |  |
| SHORT_DETAIL_INFO | string |  |  |
| SHORT_QTY | double |  |  |
| ISB_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| RES_ID | string |  |  |
| REF_PLAN_ID | string |  |  |
| FROM_LATE_DATETIME | DateTime |  |  |
| TO_LATE_DATETIME | DateTime |  |  |
| SHORT_CNT | int |  |  |
| PHASE_NO | int |  |  |
| RETRY_CNT | int |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| REF_DUE_DATE | DateTime |  |  |
| REF_PLAN_VER | string |  |  |
| QTY_UOM | string |  |  |
| UNIT_QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| CONV_UNIT_QTY_UOM | string |  |  |
| DEMAND_CONV_QTY | double |  |  |
| SHORT_CONV_QTY | double |  |  |

### PM_PLAN_LOG (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| RES_ID | string |  |  |
| PM_ID | string |  |  |
| PM_PRIORITY | int |  |  |
| PM_POLICY_TYPE | string |  |  |
| ORG_START_DATETIME | DateTime |  |  |
| ORG_END_DATETIME | DateTime |  |  |
| REV_START_DATETIME | DateTime |  |  |
| REV_END_DATETIME | DateTime |  |  |
| REVISE_YN | string |  |  |
| EXECUTE_YN | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |

### PLAN_INDEX (12 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| PROJECT_ID | string | Y |  |
| VERSION | string | Y |  |
| MODULE_ID | string | Y |  |
| CATEGORY_NAME | string | Y |  |
| INDEX_NAME | string | Y |  |
| TIME_KEY | string | Y |  |
| TIME_UOM | string | Y |  |
| PLAN_VALUE | double |  |  |
| ROW_INDEX | int |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY | double |  |  |
| CONV_QTY_UOM | string |  |  |

### REF_PLAN_MAPPING_LOG (17 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| REF_PLAN_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| REF_PLAN_QTY | double |  |  |
| MAPPING_QTY | double |  |  |
| LOT_ID | string |  |  |
| DEMAND_ID | string |  |  |
| OPER_ID | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| STAGE_ID | string |  |  |
| PROJECT_ID | string |  |  |
| VERSION | string |  |  |
| ROW_INDEX | int |  |  |
| RES_ID | string |  |  |

### REF_PLAN_RESULT_LOG (22 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| REF_PLAN_ID | string |  |  |
| REF_PLAN_QTY | double |  |  |
| PLAN_QTY | double |  |  |
| REMAIN_QTY | double |  |  |
| REASON | string |  |  |
| REASON_DETAIL_INFO | string |  |  |
| STAGE_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| REF_PLAN_DATETIME | DateTime |  |  |
| REF_TYPE | string |  |  |
| BOM_ID | string |  |  |
| ROUTING_ID | string |  |  |
| OPER_ID | string |  |  |
| RES_ID | string |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| VERSION | string |  |  |
| PROJECT_ID | string |  |  |
| ROW_INDEX | int |  |  |

### ALLOC_LOTGRP_LOG (15 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ALLOCATION_SEQ | double |  |  |
| TARGET_ID | string |  |  |
| LOT_GROUP_KEY | string |  |  |
| LOT_GROUP_QTY | double |  |  |
| SAMPLE_LOT_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_ID | string |  |  |
| LAST_STEP_DATETIME | DateTime |  |  |
| TARGET_DATE | string |  |  |
| PLAN_DATE | string |  |  |
| FILTERED_YN | string |  |  |
| FILTER_REASON | string |  |  |
| ROW_INDEX | int |  |  |

### AGENT_LOG_VALUE (3 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| AGENT_ID | string |  |  |
| VALUES | string |  |  |
| TABLE_ID | string |  |  |

### AGENT_LOG_MASTER (3 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| AGENT_ID | string |  |  |
| TABLE_ID | string |  |  |
| SCHEMA_INFO | string |  |  |

### OPER_ADD_RES_LOG (9 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| OPER_ID | string |  |  |
| RES_GROUP_ID | string |  |  |
| RES_ID | string |  |  |
| ADD_RES_GROUP_ID | string |  |  |
| ADD_RES_ID | string |  |  |
| ROUTING_ID | string |  |  |
| USAGE_PER | double |  |  |
| REQ_CNT | int |  |  |
| ROW_INDEX | int |  |  |

### SAFETY_STOCK_DEMAND (19 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| DUE_DATE | DateTime |  |  |
| DEMAND_QTY | double |  |  |
| DEMAND_PRIORITY | int |  |  |
| CUST_ID | string |  |  |
| DEMAND_TYPE | string |  |  |
| MAX_LATENESS_DAY | double |  |  |
| MAX_EARLINESS_DAY | double |  |  |
| REF_DEMAND_ID | string |  |  |
| REF_ITEM_ID | string |  |  |
| REF_SITE_ID | string |  |  |
| REF_BUFFER_ID | string |  |  |
| REF_DUE_DATE | DateTime |  |  |
| REF_CUST_ID | string |  |  |
| REF_DEMAND_TYPE | string |  |  |
| ROW_INDEX | int |  |  |

### PATH_HISTORY_LOG (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ID | string |  |  |
| PATH_ID | string |  |  |
| DEPTH | int |  |  |
| ROOT_ISB | string |  |  |
| FROM_ISB | string |  |  |
| BOM_ID | string |  |  |
| TO_ISB | string |  |  |
| SELECT_CNT | int |  |  |
| SHORT_CNT | int |  |  |
| PHASE_NO | int |  |  |

### QUEUE_LOG (7 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| EVENT_DATE | string |  |  |
| RES_GROUP | string |  |  |
| RES_ID | string |  |  |
| LOT_GROUP_COUNT | int |  |  |
| LOT_COUNT | int |  |  |
| LOT_QTY | double |  |  |
| ROW_INDEX | int |  |  |

### TAT_LOG (19 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DEMAND_ITEM_ID | string |  |  |
| FINAL_ITEM_ID | string |  |  |
| ITEM_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_ID | string |  |  |
| WAIT_TAT | double |  |  |
| RUN_TAT | double |  |  |
| TOTAL_TAT | double |  |  |
| TOTAL_TAT_D | double |  |  |
| ROW_INDEX | int |  |  |
| TOTAL_WAIT_TAT | double |  |  |
| TOTAL_RUN_TAT | double |  |  |
| LOT_COUNT | int |  |  |
| DEMAND_ISB | string |  |  |
| BOM_ID | string |  |  |
| PATH_LIST | string |  |  |
| TAT_PATH | string |  |  |
| BUFFER_SEQ | int |  |  |
| OPER_SEQ | int |  |  |

### OPER_WIP_LOG (8 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DATE | DateTime |  |  |
| ITEM_ID | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| CATEGORY_TYPE | string |  |  |
| OPER_ID | string |  |  |
| BUFFER_ID | string |  |  |
| QTY | double |  |  |

### REF_PLAN_BW_MAPPING_LOG (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| MODULE_ID | string |  |  |
| REF_PLAN_ID | string |  |  |
| RETRY_COUNT | int |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| DEMAND_ID | string |  |  |
| TARGET_QTY | double |  |  |
| REMAIN_REF_PLAN_QTY | double |  |  |
| MAPPING_QTY | double |  |  |
| REF_PLAN_KEY | string |  |  |
| REF_PLAN_DATE | DateTime |  |  |
| DUE_DATE | DateTime |  |  |

### WIP_SNAPSHOT_LOG (20 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| DATE | DateTime |  |  |
| LOT_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_ID | string |  |  |
| OPER_GROUP_ID | string |  |  |
| OPER_NAME | string |  |  |
| OPER_GROUP_NAME | string |  |  |
| LOT_QTY | double |  |  |
| LOT_STATE | string |  |  |
| DEMAND_ID | string |  |  |
| DEMAND_ITEM_ID | string |  |  |
| ITEM_GROUP_ID | string |  |  |
| PROD_TYPE | string |  |  |
| TARGET_DATETIME | DateTime |  |  |
| DUE_DATETIME | DateTime |  |  |
| QTY_UOM | string |  |  |
| CONV_QTY_UOM | string |  |  |
| LOT_CONV_QTY | double |  |  |

### JCA_WORK_LOT_LOG (13 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| EVENT_DATETIME | DateTime |  |  |
| LOT_ID | string |  |  |
| ITEM_ID | string |  |  |
| SITE_ID | string |  |  |
| BUFFER_ID | string |  |  |
| OPER_ID | string |  |  |
| QTY | double |  |  |
| WORK_GROUP | string |  |  |
| WORK_STEP | string |  |  |
| AVAILABLE_TIME | DateTime |  |  |
| RUN_YN | string |  |  |
| VALID_YN | string |  |  |
| REASON | string |  |  |

### JCA_WORK_GROUP_LOG (9 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| WORK_GROUP | string |  |  |
| WORK_STEP | string |  |  |
| SEQUENCE | int |  |  |
| FINAL_ISB | string |  |  |
| ITEM_LIST | string |  |  |
| LOADED_RES_CNT | int |  |  |
| LOADABLE_RES_CNT | int |  |  |
| LOADED_RES_LIST | string |  |  |
| LOADABLE_RES_LIST | string |  |  |

### JCA_PROFILE_LOG (15 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| EVENT_DATETIME | DateTime |  |  |
| SITE_ID | string |  |  |
| CALC_TYPE | string |  |  |
| PHASE | int |  |  |
| WORK_GROUP | string |  |  |
| WORK_STEP | string |  |  |
| LOT_ID | string |  |  |
| LOT_TYPE | string |  |  |
| QTY | int |  |  |
| RES_ID | string |  |  |
| ARRIVAL_DATETIME | DateTime |  |  |
| START_DATETIME | DateTime |  |  |
| END_DATETIME | DateTime |  |  |
| RE_CALC_YN | string |  |  |
| RUN_WIP_YN | string |  |  |

### JCA_DECISION_LOG (25 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| EVENT_DATETIME | DateTime |  |  |
| WORK_GROUP | string |  |  |
| WORK_STEP | string |  |  |
| PHASE | int |  |  |
| OPERATION_TYPE | string |  |  |
| ASSIGN_RESULT | string |  |  |
| RANK | int |  |  |
| RANK_LOG | string |  |  |
| RE_CALC_YN | string |  |  |
| LOADED_RES_CNT | int |  |  |
| LOADED_RES_LIST | string |  |  |
| INFLOW_QTY | int |  |  |
| WIP_LEVEL | double |  |  |
| UP_RES_ID | string |  |  |
| DOWN_WORK_GROUP | string |  |  |
| DOWN_WORK_STEP | string |  |  |
| CALC_CANDIDATE_RES_CNT | int |  |  |
| CALC_FILTERRED_RES_CNT | int |  |  |
| CALC_FILTER_LOG | string |  |  |
| CALC_PRIORITIZED_RES_CNT | int |  |  |
| CALC_PRIORITIZATION_LOG | string |  |  |
| CALC_UP_RES_ID | string |  |  |
| UP_CANDIDATE_RES_CNT | int |  |  |
| UP_FILTERRED_EQP_CNT | int |  |  |
| UP_FILTER_LOG | string |  |  |

### JCA_ADVANCE_LOG (10 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| EVENT_DATETIME | DateTime |  |  |
| SITE_ID | string |  |  |
| WORK_GROUP | string |  |  |
| WORK_STEP | string |  |  |
| PHASE | int |  |  |
| LOT_ID | string |  |  |
| QTY | double |  |  |
| ADV_WORK_STEP | string |  |  |
| ADV_LOT_ID | string |  |  |
| ADV_AVAILABLE_TIME | DateTime |  |  |

### DEVELOPER_LOG (9 columns)
| Column | Type | PK | Description |
|--------|------|----|-------------|
| ITEM1 | string |  |  |
| ITEM2 | string |  |  |
| ITEM3 | string |  |  |
| ITEM4 | string |  |  |
| ITEM5 | string |  |  |
| ITEM6 | string |  |  |
| ITEM7 | string |  |  |
| ITEM8 | string |  |  |
| ITEM9 | string |  |  |
