# 입력 테이블 ERD

> 의미적 컬럼 관계 기반 ERD (실제 FK 제약은 없으나 컬럼명으로 추론)

## 1. 핵심 마스터 관계도 (Core Master ERD)

```mermaid
erDiagram
    STAGE_MASTER {
        string STAGE_ID PK
        string DESCRIPTION
    }

    ITEM_MASTER {
        string ITEM_ID PK
        string ITEM_TYPE
        string ITEM_NAME
        string ITEM_GROUP_ID
        int ITEM_PRIORITY
        string PROCUREMENT_TYPE
        string PROD_TYPE
        string ITEM_SIZE_TYPE
        string ITEM_SPEC
    }

    SITE_MASTER {
        string SITE_ID PK
        string SITE_NAME
    }

    BUFFER_MASTER {
        string BUFFER_ID PK
        int BUFFER_SEQ
        string STAGE_ID FK
        string FINAL_ITEM_BUFFER_YN
    }

    CUST_MASTER {
        string CUST_ID PK
        string CUST_NAME
        int CUST_PRIORITY
    }

    ITEM_SITE_BUFFER_MASTER {
        string ITEM_ID PK
        string SITE_ID PK
        string BUFFER_ID PK
        string INFINITY_MATERIAL_YN
        double INPUT_LOT_SIZE
        string NOCARRY_YN
        int SAFETY_STOCK_QTY
        int SAFETY_STOCK_DAY
        string QTY_UOM
        double CONV_QTY_RATIO
    }

    DEMAND {
        string DEMAND_ID PK
        string ITEM_ID FK
        string SITE_ID FK
        string BUFFER_ID FK
        string CUST_ID FK
        string DUE_DATE
        double DEMAND_QTY
        int DEMAND_PRIORITY
        string DEMAND_TYPE
        string DEMAND_VER
    }

    BUFFER_MASTER ||--o{ ITEM_SITE_BUFFER_MASTER : "BUFFER_ID"
    ITEM_MASTER ||--o{ ITEM_SITE_BUFFER_MASTER : "ITEM_ID"
    SITE_MASTER ||--o{ ITEM_SITE_BUFFER_MASTER : "SITE_ID"
    STAGE_MASTER ||--o{ BUFFER_MASTER : "STAGE_ID"
    ITEM_MASTER ||--o{ DEMAND : "ITEM_ID"
    SITE_MASTER ||--o{ DEMAND : "SITE_ID"
    BUFFER_MASTER ||--o{ DEMAND : "BUFFER_ID"
    CUST_MASTER ||--o{ DEMAND : "CUST_ID"
```

## 2. BOM 구조 (BOM Structure ERD)

```mermaid
erDiagram
    BOM_MASTER {
        string BOM_ID PK
        string BOM_TYPE
        int BOM_PRIORITY
        datetime EFF_START_DATETIME
        datetime EFF_END_DATETIME
        string DEMAND_ID FK
        string DEMAND_ITEM_ID FK
    }

    BOM_DETAIL {
        string BOM_ID PK
        string FROM_ITEM_ID PK
        string FROM_SITE_ID PK
        string FROM_BUFFER_ID PK
        string TO_ITEM_ID PK
        string TO_SITE_ID PK
        string TO_BUFFER_ID PK
        double FROM_QTY
        double TO_QTY
        string CALENDAR_ID FK
    }

    BOM_ROUTING {
        string BOM_ID FK
        string ROUTING_ID FK
        int ROUTING_PRIORITY
    }

    BOM_DETAIL_ALT {
        string BOM_ID PK
        string ITEM_ID PK
        string SITE_ID PK
        string BUFFER_ID PK
        string ALT_ITEM_ID PK
        string ALT_SITE_ID PK
        string ALT_BUFFER_ID PK
        int ALT_PRIORITY
    }

    BOM_CONTROL {
        string BOM_ID PK
        string ACTION_TYPE
        string CONTROL_TYPE PK
        string CONTROL_ID PK
    }

    ITEM_SITE_BUFFER_MASTER {
        string ITEM_ID PK
        string SITE_ID PK
        string BUFFER_ID PK
    }

    ROUTING_MASTER {
        string ROUTING_ID PK
    }

    DEMAND {
        string DEMAND_ID PK
    }

    CALENDAR_MASTER {
        string CALENDAR_ID PK
    }

    BOM_MASTER ||--o{ BOM_DETAIL : "BOM_ID"
    BOM_MASTER ||--o{ BOM_ROUTING : "BOM_ID"
    BOM_MASTER ||--o{ BOM_DETAIL_ALT : "BOM_ID"
    BOM_MASTER ||--o{ BOM_CONTROL : "BOM_ID"
    DEMAND ||--o{ BOM_MASTER : "DEMAND_ID"
    BOM_DETAIL }o--|| ITEM_SITE_BUFFER_MASTER : "FROM-ISB"
    BOM_DETAIL_ALT }o--|| ITEM_SITE_BUFFER_MASTER : "ALT-ISB"
    BOM_ROUTING }o--|| ROUTING_MASTER : "ROUTING_ID"
    BOM_DETAIL }o--o| CALENDAR_MASTER : "CALENDAR_ID"
```

## 3. Routing - Resource 구조 (Routing and Resource ERD)

```mermaid
erDiagram
    ROUTING_MASTER {
        string ROUTING_ID PK
        datetime EFF_START_DATETIME
        datetime EFF_END_DATETIME
    }

    ROUTING_OPER {
        string ROUTING_ID PK
        string OPER_ID PK
        int OPER_SEQ
        string OPER_TYPE
        double WAIT_TAT
        double RUN_TAT
        double OPER_YIELD
        string TAT_CALENDAR_ID FK
        string YIELD_CALENDAR_ID FK
        double MULTI_LOT_SIZE
        double SINGLE_LOT_SIZE
    }

    OPER_MASTER {
        string OPER_ID PK
        string OPER_GROUP_ID FK
        string OPER_NAME
        int OPER_SEQ
    }

    OPER_GROUP_MASTER {
        string OPER_GROUP_ID PK
        string OPER_GROUP_NAME
        int OPER_GROUP_SEQ
    }

    RES_MASTER {
        string RES_ID PK
        string RES_CATEGORY_TYPE
        string RES_TYPE
        string RES_SITE_ID FK
        string CAPA_TYPE
        string RES_GROUP_ID FK
        string INFINITY_CAPA_YN
        string CAPA_CALENDAR_ID FK
        string SETUP_ID FK
        string PM_ID FK
        double UTIL_RATIO
    }

    RES_GROUP_MASTER {
        string RES_GROUP_ID PK
        int RES_GROUP_SEQ
        string ALLOCATION_GROUP_ID FK
        string RESORT_YN
    }

    ALLOCATION_GROUP_MASTER {
        string ALLOCATION_GROUP_ID PK
        int ALLOCATION_GROUP_SEQ
        string ALLOCATION_TYPE
        string STAGE_ID FK
    }

    OPER_RES {
        string ROUTING_ID PK
        string OPER_ID PK
        string RES_ID PK
        double USAGE_PER
        double FLOW_DURATION
        int RES_PRIORITY
        double BATCH_SIZE
    }

    OPER_ADD_RES {
        string ROUTING_ID FK
        string OPER_ID FK
        string RES_ID FK
        string ADD_RES_ID
        string ADD_RES_GROUP_ID
        double USAGE_PER
        int PRIORITY
    }

    SETUP_MATRIX {
        int SETUP_NO PK
        string SETUP_ID
        string SETUP_CONDITION_VALUE
        double SETUP_DURATION
    }

    PM_SCHEDULE {
        string PM_ID PK
        int PM_PRIORITY PK
        double PM_DURATION
        string PATTERN_TYPE
    }

    SITE_MASTER {
        string SITE_ID PK
    }

    STAGE_MASTER {
        string STAGE_ID PK
    }

    CALENDAR_MASTER {
        string CALENDAR_ID PK
    }

    ROUTING_MASTER ||--o{ ROUTING_OPER : "ROUTING_ID"
    ROUTING_OPER ||--o{ OPER_RES : "ROUTING-OPER"
    ROUTING_OPER ||--o{ OPER_ADD_RES : "ROUTING-OPER"
    OPER_MASTER ||--o{ ROUTING_OPER : "OPER_ID"
    OPER_GROUP_MASTER ||--o{ OPER_MASTER : "OPER_GROUP_ID"
    RES_MASTER ||--o{ OPER_RES : "RES_ID"
    RES_MASTER ||--o{ OPER_ADD_RES : "RES_ID"
    RES_GROUP_MASTER ||--o{ RES_MASTER : "RES_GROUP_ID"
    ALLOCATION_GROUP_MASTER ||--o{ RES_GROUP_MASTER : "ALLOC_GROUP_ID"
    STAGE_MASTER ||--o{ ALLOCATION_GROUP_MASTER : "STAGE_ID"
    SITE_MASTER ||--o{ RES_MASTER : "RES_SITE_ID"
    SETUP_MATRIX ||--o{ RES_MASTER : "SETUP_ID"
    PM_SCHEDULE ||--o{ RES_MASTER : "PM_ID"
    CALENDAR_MASTER ||--o{ RES_MASTER : "CAPA_CALENDAR_ID"
    CALENDAR_MASTER ||--o{ ROUTING_OPER : "TAT-YIELD-CAL"
```

## 4. Scenario - Rule 구조 (Planning Config ERD)

```mermaid
erDiagram
    PLAN_CONFIG {
        string PLAN_VER PK
        string PLAN_TYPE
        string SCENARIO_ID FK
        int PLAN_PERIOD
        datetime PLAN_START_DATETIME
        string REF_PLAN_VER
        string DEMAND_VER
    }

    SCENARIO_CONFIG {
        string SCENARIO_ID PK
        string MODULE_ID PK
        string STAGE_ID FK
        string MODULE_TYPE
        int MAX_PHASE_NO
        int MODULE_SEQ
    }

    SCENARIO_OPTION_CONFIG {
        string SCENARIO_ID PK
        string MODULE_ID PK
        int PHASE_NO PK
        string OPTION_ID PK
        string OPTION_VALUE
        string CALENDAR_ID FK
    }

    SCENARIO_RULESET_CONFIG {
        string MODULE_ID PK
        string SCENARIO_ID PK
        int PHASE_NO PK
        string TARGET_CATEGORY_TYPE PK
        string TARGET_ID PK
        string RULESET_ID FK
    }

    SCENARIO_EXEC_RESULT {
        string SCENARIO_ID PK
        string TABLE_NAME PK
        string MODULE_ID PK
        int PHASE_NO PK
    }

    RULESET_MASTER {
        string RULESET_ID PK
        string MODULE_TYPE
        int MAX_LEVEL_NO
    }

    RULESET_CONFIG {
        string RULESET_ID PK
        string RULE_POINT_ID PK
        string RULE_ID PK
        int LEVEL_NO PK
    }

    RULESET_AGENT {
        string RULESET_ID PK
        string AGENT_ID PK
        string AGENT_NAME
        string PARAM_VALUE
    }

    RULE_MASTER {
        string RULE_ID PK
        string RULE_POINT_ID PK
        string SORT_TYPE
    }

    RULE_POINT_MASTER {
        string RULE_POINT_ID PK
    }

    FACTOR_MASTER {
        string FACTOR_ID PK
        string RULE_POINT_ID FK
        string FACTOR_TYPE
    }

    RULE_FACTOR {
        string RULE_ID PK
        string FACTOR_ID PK
        int FACTOR_SEQ PK
        double FACTOR_WEIGHT
    }

    STAGE_MASTER {
        string STAGE_ID PK
    }

    CALENDAR_MASTER {
        string CALENDAR_ID PK
    }

    PLAN_CONFIG }o--|| SCENARIO_CONFIG : "SCENARIO_ID"
    SCENARIO_CONFIG ||--o{ SCENARIO_OPTION_CONFIG : "SCENARIO-MODULE"
    SCENARIO_CONFIG ||--o{ SCENARIO_RULESET_CONFIG : "SCENARIO-MODULE"
    SCENARIO_CONFIG ||--o{ SCENARIO_EXEC_RESULT : "SCENARIO-MODULE"
    STAGE_MASTER ||--o{ SCENARIO_CONFIG : "STAGE_ID"
    CALENDAR_MASTER ||--o{ SCENARIO_OPTION_CONFIG : "CALENDAR_ID"
    RULESET_MASTER ||--o{ RULESET_CONFIG : "RULESET_ID"
    RULESET_MASTER ||--o{ RULESET_AGENT : "RULESET_ID"
    RULESET_MASTER ||--o{ SCENARIO_RULESET_CONFIG : "RULESET_ID"
    RULE_MASTER ||--o{ RULESET_CONFIG : "RULE_ID"
    RULE_MASTER ||--o{ RULE_FACTOR : "RULE_ID"
    FACTOR_MASTER ||--o{ RULE_FACTOR : "FACTOR_ID"
    RULE_POINT_MASTER ||--o{ RULE_MASTER : "RULE_POINT_ID"
    RULE_POINT_MASTER ||--o{ FACTOR_MASTER : "RULE_POINT_ID"
```

## 5. Calendar - Property 구조 (Calendar and Property ERD)

```mermaid
erDiagram
    CALENDAR_MASTER {
        string CALENDAR_ID PK
        string CALENDAR_TYPE
    }

    CALENDAR_DETAIL {
        string CALENDAR_ID PK
        string PATTERN_ID PK
        datetime EFF_START_DATETIME
        datetime EFF_END_DATETIME
        string PATTERN_TYPE
        string PATTERN_VALUE
        int PATTERN_PRIORITY
    }

    CALENDAR_BASED_ATTR {
        string CALENDAR_ID PK
        string PATTERN_ID PK
        string PROP_TYPE PK
        string PROP_VALUE
    }

    PROP_MASTER {
        string PROP_ID PK
        string PROP_CATEGORY_TYPE
        string DATA_TYPE
        string DEFAULT_VALUE
    }

    ITEM_PROP_VALUE {
        string ITEM_ID PK
        string PROP_ID PK
        string PROP_VALUE
        string CALENDAR_ID FK
    }

    SITE_PROP_VALUE {
        string SITE_ID PK
        string PROP_ID PK
    }

    BUFFER_PROP_VALUE {
        string BUFFER_ID PK
        string PROP_ID PK
    }

    ISB_PROP_VALUE {
        string ITEM_ID PK
        string SITE_ID PK
        string BUFFER_ID PK
        string PROP_ID PK
    }

    DEMAND_PROP_VALUE {
        string DEMAND_ID PK
        string PROP_ID PK
    }

    BOM_PROP_VALUE {
        string BOM_ID PK
        string PROP_ID PK
    }

    RES_PROP_VALUE {
        string RES_ID PK
        string PROP_ID PK
    }

    WIP_PROP_VALUE {
        string WIP_ID PK
        string PROP_ID PK
    }

    CUST_PROP_VALUE {
        string CUST_ID PK
        string PROP_ID PK
    }

    BOM_ROUTING_PROP_VALUE {
        string BOM_ID PK
        string ROUTING_ID PK
        string PROP_ID PK
    }

    CALENDAR_MASTER ||--o{ CALENDAR_DETAIL : "CALENDAR_ID"
    CALENDAR_DETAIL ||--o{ CALENDAR_BASED_ATTR : "CAL-PATTERN"
    PROP_MASTER ||--o{ ITEM_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ SITE_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ BUFFER_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ ISB_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ DEMAND_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ BOM_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ RES_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ WIP_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ CUST_PROP_VALUE : "PROP_ID"
    PROP_MASTER ||--o{ BOM_ROUTING_PROP_VALUE : "PROP_ID"
    CALENDAR_MASTER ||--o{ ITEM_PROP_VALUE : "CALENDAR_ID"
```

## 6. WIP - 기타 (WIP and Misc ERD)

```mermaid
erDiagram
    WIP {
        string WIP_ID PK
        string STAGE_ID FK
        double WIP_QTY
        string WIP_TYPE
        string WIP_STATUS
        string ITEM_ID FK
        string SITE_ID FK
        string BUFFER_ID FK
        string ROUTING_ID FK
        string OPER_ID FK
        string RES_ID FK
        datetime AVAILABLE_DATETIME
        datetime TRACK_IN_DATETIME
        string DEMAND_ID FK
    }

    CONSTRAINT_MASTER {
        string CONSTRAINT_ID PK
        string PROP_ID FK
        string PROP_VALUE
        string CALENDAR_ID FK
        string CONSTRAINT_POLICY_TYPE
    }

    CONSTRAINT_DETAIL {
        string CONSTRAINT_ID PK
        string PROP_ID PK
        string PROP_VALUE PK
    }

    REF_PROD_PLAN {
        string REF_PLAN_ID PK
        string STAGE_ID FK
        string DEMAND_ID FK
        string ITEM_ID FK
        string SITE_ID FK
        string BUFFER_ID FK
        string BOM_ID FK
        string ROUTING_ID FK
        string OPER_ID FK
        string RES_ID FK
        string PLAN_CYCLE_ID PK
    }

    PLAN_CYCLE_INFO {
        string PLAN_CYCLE_ID PK
        datetime START_DATETIME
        datetime END_DATETIME
        string STATUS
    }

    RES_STATUS {
        string RES_ID PK
        string ITEM_ID PK
        string ROUTING_ID FK
        string OPER_ID FK
    }

    TRANSFER_MATRIX {
        int TRANSFER_NO PK
        string FROM_LOCATION
        string TO_LOCATION
        double TRANSFER_DURATION
    }

    FACTORY_CONFIG {
        string FACTORY_START_TIME
        int FACTORY_START_DOW
        string SHIFT_NAME
        string ROLLING_PERIOD_UOM
    }

    ITEM_MASTER {
        string ITEM_ID PK
    }

    SITE_MASTER {
        string SITE_ID PK
    }

    BUFFER_MASTER {
        string BUFFER_ID PK
    }

    RES_MASTER {
        string RES_ID PK
    }

    ROUTING_MASTER {
        string ROUTING_ID PK
    }

    DEMAND {
        string DEMAND_ID PK
    }

    STAGE_MASTER {
        string STAGE_ID PK
    }

    CALENDAR_MASTER {
        string CALENDAR_ID PK
    }

    ITEM_MASTER ||--o{ WIP : "ITEM_ID"
    SITE_MASTER ||--o{ WIP : "SITE_ID"
    BUFFER_MASTER ||--o{ WIP : "BUFFER_ID"
    ROUTING_MASTER ||--o{ WIP : "ROUTING_ID"
    RES_MASTER ||--o{ WIP : "RES_ID"
    DEMAND ||--o{ WIP : "DEMAND_ID"
    STAGE_MASTER ||--o{ WIP : "STAGE_ID"
    CONSTRAINT_MASTER ||--o{ CONSTRAINT_DETAIL : "CONSTRAINT_ID"
    CALENDAR_MASTER ||--o{ CONSTRAINT_MASTER : "CALENDAR_ID"
    PLAN_CYCLE_INFO ||--o{ REF_PROD_PLAN : "PLAN_CYCLE_ID"
    DEMAND ||--o{ REF_PROD_PLAN : "DEMAND_ID"
    RES_MASTER ||--o{ RES_STATUS : "RES_ID"
```

## 7. 전체 통합 개요 (Simplified Overview)

```mermaid
erDiagram
    STAGE_MASTER ||--o{ BUFFER_MASTER : "contains"
    STAGE_MASTER ||--o{ ALLOCATION_GROUP : "contains"
    STAGE_MASTER ||--o{ SCENARIO_CONFIG : "executes"

    ITEM_MASTER ||--o{ ISB_MASTER : "part-of"
    SITE_MASTER ||--o{ ISB_MASTER : "part-of"
    BUFFER_MASTER ||--o{ ISB_MASTER : "part-of"

    CUST_MASTER ||--o{ DEMAND : "orders"
    ISB_MASTER ||--o{ DEMAND : "demanded-at"

    BOM_MASTER ||--o{ BOM_DETAIL : "has-components"
    BOM_MASTER ||--o{ BOM_ROUTING : "uses-routing"
    BOM_MASTER ||--o{ BOM_DETAIL_ALT : "has-alternatives"
    BOM_MASTER ||--o{ BOM_CONTROL : "has-controls"
    ISB_MASTER ||--o{ BOM_DETAIL : "FROM-TO-ISB"

    ROUTING_MASTER ||--o{ ROUTING_OPER : "has-operations"
    ROUTING_OPER ||--o{ OPER_RES : "uses-resources"
    ROUTING_OPER ||--o{ OPER_ADD_RES : "uses-add-res"
    BOM_ROUTING }o--|| ROUTING_MASTER : "links"

    RES_MASTER ||--o{ OPER_RES : "assigned-to"
    RES_GROUP ||--o{ RES_MASTER : "groups"
    ALLOCATION_GROUP ||--o{ RES_GROUP : "groups"
    RES_MASTER }o--o| SETUP_MATRIX : "has-setup"
    RES_MASTER }o--o| PM_SCHEDULE : "has-PM"

    ISB_MASTER ||--o{ WIP : "holds-WIP"
    ROUTING_OPER ||--o{ WIP : "WIP-at-oper"
    RES_MASTER ||--o{ WIP : "WIP-on-res"

    CALENDAR_MASTER ||--o{ CALENDAR_DETAIL : "defines"
    PROP_MASTER ||--o{ PROP_VALUE_TABLES : "defines"

    PLAN_CONFIG }o--|| SCENARIO_CONFIG : "uses"
    SCENARIO_CONFIG ||--o{ SCENARIO_OPTION : "options"
    SCENARIO_CONFIG ||--o{ SCENARIO_RULESET : "rules"
    RULESET_MASTER ||--o{ RULESET_CONFIG : "contains"
    RULE_MASTER ||--o{ RULE_FACTOR : "has-factors"
```

## 관계 요약표

| From Table | To Table | Key Column | 관계 유형 | 설명 |
|-----------|----------|-----------|----------|------|
| ITEM_MASTER | ISB_MASTER | ITEM_ID | 1:N | 품목은 여러 ISB에 등록 |
| SITE_MASTER | ISB_MASTER | SITE_ID | 1:N | 사이트에 여러 ISB |
| BUFFER_MASTER | ISB_MASTER | BUFFER_ID | 1:N | 버퍼에 여러 ISB |
| STAGE_MASTER | BUFFER_MASTER | STAGE_ID | 1:N | 스테이지에 여러 버퍼 |
| CUST_MASTER | DEMAND | CUST_ID | 1:N | 고객별 다수 주문 |
| ISB_MASTER | DEMAND | ITEM+SITE+BUFFER | 1:N | ISB별 다수 주문 |
| BOM_MASTER | BOM_DETAIL | BOM_ID | 1:N | BOM 헤더-상세 |
| BOM_DETAIL | ISB_MASTER | FROM/TO ISB | N:1 | 투입/산출 ISB 참조 |
| BOM_MASTER | BOM_ROUTING | BOM_ID | 1:N | BOM-Routing 매핑 |
| ROUTING_MASTER | BOM_ROUTING | ROUTING_ID | 1:N | Routing 참조 |
| ROUTING_MASTER | ROUTING_OPER | ROUTING_ID | 1:N | Routing-공정 |
| ROUTING_OPER | OPER_RES | ROUTING+OPER | 1:N | 공정-설비 매핑 |
| RES_MASTER | OPER_RES | RES_ID | 1:N | 설비 할당 |
| RES_GROUP_MASTER | RES_MASTER | RES_GROUP_ID | 1:N | 설비 그룹핑 |
| ALLOC_GROUP | RES_GROUP | ALLOCATION_GROUP_ID | 1:N | 할당 그룹 |
| RES_MASTER | SETUP | SETUP_ID | 1:N | 설비별 셋업 |
| RES_MASTER | PM | PM_ID | 1:N | 설비별 PM |
| CALENDAR_MASTER | CALENDAR_DETAIL | CALENDAR_ID | 1:N | 캘린더 상세 |
| PLAN_CONFIG | SCENARIO_CONFIG | SCENARIO_ID | N:1 | 계획-시나리오 |
| SCENARIO_CONFIG | SCENARIO_OPTION | SCENARIO+MODULE | 1:N | 시나리오 옵션 |
| RULESET_MASTER | RULESET_CONFIG | RULESET_ID | 1:N | 룰셋 구성 |
| RULE_MASTER | RULE_FACTOR | RULE_ID | 1:N | 규칙-팩터 |
| PROP_MASTER | *_PROP_VALUE | PROP_ID | 1:N | 속성 정의-값 |
| ISB/ROUTING/RES | WIP | 복합키 | 1:N | WIP 위치 참조 |
