# 표준 컬럼 사전

> 다양한 테이블에서 반복적으로 사용되는 표준 컬럼의 의미 사전

## ID/Key Columns

| Column | Description | Reference |
|--------|-------------|----------|
| AGENT_ID | Agent ID |  |
| ALLOCATION_GROUP_ID | 할당 그룹 ID |  |
| CALENDAR_ID | Calendar ID | CALENDAR_MASTER.CALENDAR_ID |
| CAPA_CALENDAR_ID | Capacity Calendar ID | CALENDAR_MASTER.CALENDAR_ID |
| CUST_ID | 고객 ID |  |
| FACTOR_ID | Rule을 구성하는 우선순위 규칙 |  |
| INBOUND_SCENARIO_ID | 인바운드 시나리오 ID | SCENARIO_CONFIG.SCENARIO_ID |
| ISB_ID | ItemSiteBuffer ID |  |
| LOT_ID | Lot ID |  |
| MODULE_ID | 모듈 ID |  |
| MO_ID | 제조 주문(MO) ID |  |
| OPTION_ID | 옵션 ID |  |
| ORG_LOT_ID | Lot ID(현재 Buffer에서의 Lot ID) |  |
| PATH_ID | 전개 경로 ID |  |
| PATTERN_ID | Bucket Date가 속한 기간의 PATTERN ID |  |
| PLAN_CYCLE_ID | 계획 사이클 ID |  |
| PM_ID | 예방 보전(PM) ID |  |
| PROJECT_ID | 프로젝트 ID |  |
| PROP_ID | Property ID |  |
| REF_MODULE_ID | 참조 모듈 ID |  |
| RULESET_ID | Ruleset ID |  |
| RULE_ID | Rule ID |  |
| SCENARIO_ID | 시나리오 ID | SCENARIO_CONFIG.SCENARIO_ID |
| SETUP_ID | Setup ID |  |
| STAGE_ID | Stage ID |  |
| TABLE_ID | Agent 기록 테이블 |  |
| TARGET_ID | Resource ID |  |
| TAT_CALENDAR_ID | TAT Calendar ID | CALENDAR_MASTER.CALENDAR_ID |
| UTIL_RATIO_CALENDAR_ID | 가동률 Calendar ID | CALENDAR_MASTER.CALENDAR_ID |
| WIP_ID | WIP ID |  |
| YIELD_CALENDAR_ID | 수율 Calendar ID | CALENDAR_MASTER.CALENDAR_ID |

## Master Reference

| Column | Description | Reference |
|--------|-------------|----------|
| BUFFER_ID | Buffer ID | BUFFER_MASTER (PK) |
| BUFFER_SEQ | Buffer 순서 |  |
| ITEM_GROUP_ID | Item 그룹 ID |  |
| ITEM_ID | Item ID | ITEM_MASTER (PK) |
| ITEM_NAME | Item 이름 |  |
| ITEM_PRIORITY | Item 우선순위 |  |
| ITEM_SIZE_TYPE | Item 크기 유형 |  |
| ITEM_SPEC | Item 사양 |  |
| ITEM_TYPE | Item 타입 |  |
| RES_SITE_ID | Resource 위치 Site ID | SITE_MASTER.SITE_ID |
| SITE_ID | Site ID | SITE_MASTER (PK) |
| SITE_NAME | Site 이름 |  |
| TARGET_ITEM_ID | WIP이 Pegging된 Target의 Item ID | ITEM_MASTER.ITEM_ID |
| TARGET_ITEM_TYPE | WIP이 Pegging된 Target의 Item 타입 |  |
| TARGET_SITE_ID | Target의 Site ID | SITE_MASTER.SITE_ID |

## Quantity/Amount

| Column | Description | Reference |
|--------|-------------|----------|
| CONV_QTY_RATIO | 환산 수량 비율 |  |
| CONV_QTY_UOM | 환산 수량 단위 |  |
| FROM_WIP_QTY | From ISB에 대한 WIP 수량 |  |
| FROM_WIP_QTY_SUM | From ISB에 대한 누적 WIP 수량 |  |
| LOT_QTY | Lot 수량 |  |
| PEG_QTY | Pegging된 Lot 수량 |  |
| PLAN_QTY | 계획 수량 |  |
| PROD_QTY | 해당 Demand의 출하 계획의 수량 |  |
| QTY_UOM | 수량 단위 |  |
| SAFETY_STOCK_QTY | 안전 재고 수량 |  |
| TARGET_QTY | 목표 수량 |  |
| TARGET_SUM_QTY | Target Group 내 모든 Target의 수량 합 (PBO는 사용 X) |  |
| TARGET_UNIT_QTY | TARGET_QTY의 최종 Demand 기준 환산 수량 |  |
| TIME_UOM | 시간 단위 |  |
| TO_WIP_QTY | To ISB에 대한 WIP 수량 |  |
| TO_WIP_QTY_SUM | To ISB에 대한 누적 WIP 수량 |  |
| UNPEG_QTY | 페깅되지 않은 WIP 수량 |  |
| WIP_QTY | WIP 수량 |  |

## DateTime/Period

| Column | Description | Reference |
|--------|-------------|----------|
| ARRIVAL_DATETIME | Buffer 또는 Operation 도착 시간 |  |
| AVAILABLE_DATETIME | 사용 가능 시작 시간 |  |
| BUCKET_DATE | Resource에 Capacity가 정의된 날짜 |  |
| EFF_END_DATE | PATTERN ID의 종료 시점 |  |
| EFF_END_DATETIME | 유효 종료일 |  |
| EFF_START_DATE | PATTERN ID의 시작 시점 |  |
| EFF_START_DATETIME | 유효 시작일 |  |
| END_DATETIME | Buffer 또는 Operation에서의 생산 종료 시간 |  |
| EXTENDED_TARGET_DATETIME | 지연가능 TARGET DATE |  |
| PLAN_DATE | START_TIME이 포함되는 일자 |  |
| PLAN_DATETIME | 계획 일시 |  |
| PLAN_MONTH | START_TIME이 포함되는 월 |  |
| PLAN_PERIOD | 계획 수립 기간 |  |
| PLAN_START_DATETIME | 계획 수립 시작 시간 |  |
| PLAN_WEEK | START_TIME이 포함되는 주차 |  |
| START_DATETIME | Buffer 또는 Operation에서의 생산 시작 시간 |  |
| TARGET_DATE | TARGET_DATETIME이 포함되는 날짜 |  |
| TARGET_DATETIME | 목표 일시 |  |
| TARGET_MONTH | TARGET DATE가 포함되는 월 |  |
| TARGET_WEEK | TARGET DATE가 소속된 주차 |  |
| TRACK_IN_DATETIME | Resource 로딩 시간 |  |

## BOM Related

| Column | Description | Reference |
|--------|-------------|----------|
| ALT_BUFFER_ID | 대체 Buffer ID | BUFFER_MASTER.BUFFER_ID |
| ALT_ITEM_ID | 대체 Item ID | ITEM_MASTER.ITEM_ID |
| ALT_PRIORITY | 대체 우선순위 |  |
| ALT_SITE_ID | 대체 Site ID | SITE_MASTER.SITE_ID |
| BOM_ID | BOM ID | BOM_MASTER (PK) |
| BOM_PRIORITY | BOM 우선순위 |  |
| BOM_TYPE | BOM 유형 |  |
| FROM_BUFFER_ID | 투입(From) Buffer ID | BUFFER_MASTER.BUFFER_ID |
| FROM_BUFFER_SEQ | From Buffer 순서 (오름차순) |  |
| FROM_ITEM_ID | 투입(From) Item ID | ITEM_MASTER.ITEM_ID |
| FROM_QTY | 투입 수량 |  |
| FROM_SITE_ID | 투입(From) Site ID | SITE_MASTER.SITE_ID |
| TO_BUFFER_ID | 산출(To) Buffer ID | BUFFER_MASTER.BUFFER_ID |
| TO_BUFFER_SEQ | To Buffer 순서 (오름차순) |  |
| TO_ITEM_ID | 산출(To) Item ID | ITEM_MASTER.ITEM_ID |
| TO_QTY | 산출 수량 |  |
| TO_SITE_ID | 산출(To) Site ID | SITE_MASTER.SITE_ID |
| USABLE_BOM_YN | BOM의 가용 여부 판단 (IS_USABLEDETAIL보다 상위개념) |  |

## Routing/Operation

| Column | Description | Reference |
|--------|-------------|----------|
| CUM_TAT | 누적 TAT |  |
| INPUT_LOT_SIZE | 투입 Lot 사이즈 |  |
| LATE_CUM_TAT | 최대 누적 TAT (단위:Day) |  |
| MAX_CUM_TAT | 최대 누적 TAT (단위:Day) |  |
| MAX_CUM_YIELD | 최대 누적 수율 |  |
| MIN_CUM_TAT | 최소 누적 TAT (단위:Day) |  |
| MULTI_LOT_SIZE | Multi-Lot 사이즈 |  |
| OPER_ID | Operation ID |  |
| OPER_SEQ | Operation 순서 |  |
| OPER_TYPE | Operation 유형 |  |
| OPER_YIELD | 수율 (default: 1.0) |  |
| ROUTING_ID | Routing ID | ROUTING_MASTER (PK) |
| ROUTING_TAT | BOM 내 Operation들의 TAT 합 (단위:Day) |  |
| RUN_TAT | 가공 시간 (TAT) |  |
| SINGLE_LOT_SIZE | Single Lot 사이즈 |  |
| TAT | TAT (Turn-Around-Time) |  |
| WAIT_TAT | 대기 시간 (TAT) |  |
| WIP_STATUS | WIP 상태 |  |

## Resource

| Column | Description | Reference |
|--------|-------------|----------|
| ALLOCATION_CAPA | Resource가 Bucket Date 동안 사용한 Capacity |  |
| ALLOCATION_RATIO | 할당 비율 (= Allocation Capa / On Time Capa) |  |
| ALLOCATION_TYPE | 할당 방식 |  |
| ALL_RES_LIST | 거쳐온 모든 BOM에 포함된  Resource ID들의 누적 목록 |  |
| CAPA_MODE | 무한 Capacity 사용 여부 (Finite / Infinite) |  |
| CAPA_TYPE | Capacity 유형 |  |
| INFINITY_CAPA_YN | 무한 Capacity 여부 (Y/N) |  |
| LOT_ALLOCATION_POLICY_TYPE | Lot 할당 정책 |  |
| PM_CAPA | PM에 소요된 Capacity |  |
| RES_CATEGORY_TYPE | Resource 카테고리 |  |
| RES_GROUP_ID | Resource 그룹 ID |  |
| RES_ID | Resource ID | RES_MASTER (PK) |
| RES_LIST | BOM에 포함된 Resource ID |  |
| RES_LOCATION | Resource 물리적 위치 |  |
| RES_NAME | Resource 이름 |  |
| RES_PRIORITY | Resource 우선순위 |  |
| RES_TYPE | Resource 유형 |  |
| SETUP_CAPA | Setup에 소요된 Capacity |  |
| SETUP_TIME | Setup 소요 시간 |  |
| UTIL_RATIO | 가동률 |  |

## Demand/Order

| Column | Description | Reference |
|--------|-------------|----------|
| CUST_NAME | 고객명 |  |
| DEMAND_BUFFER_ID | 계획이 속한 Buffer ID | BUFFER_MASTER.BUFFER_ID |
| DEMAND_GROUP_ID | Demand 그룹 ID |  |
| DEMAND_ID | Demand ID | DEMAND (PK) |
| DEMAND_ITEM_ID | Demand Item ID | ITEM_MASTER.ITEM_ID |
| DEMAND_ITEM_NAME | Demand Item 이름 |  |
| DEMAND_ITEM_TYPE | Demand의 Item 타입 |  |
| DEMAND_MAX_LATE_DAY | Demand 후행 생산 허용 일수 |  |
| DEMAND_PRIORITY | Demand 우선순위 |  |
| DEMAND_QTY | Demand 수량 |  |
| DEMAND_SITE_ID | Demand의 Site ID | SITE_MASTER.SITE_ID |
| DEMAND_TYPE | Demand 유형 |  |
| DEMAND_VER | Demand 버전 |  |
| DUE_DATE | 납기일 |  |
| DUE_DATETIME | 납기 일시 |  |
| DUE_MONTH | Demand 납기의 월 |  |
| DUE_WEEK | Demand 납기의 주차 |  |
| EXTENDED_DUE_DATETIME | 지연가능 납기 |  |
| MO_DUE_DATETIME | Manufacturing Order 납기 |  |
| MO_ITEM_ID | 제조 주문의 Item ID | ITEM_MASTER.ITEM_ID |
| MO_ITEM_TYPE | 제조 주문의 Item 타입 |  |
| MO_MONTH | Manufacturing Order 납기의 월 |  |
| MO_QTY | 제조 주문 수량 |  |
| MO_WEEK | Manufacturing Order 납기의 주차  (옵션을 통해 기록 방식 결정) |  |
| SHIPMENT_DATE | 해당 Demand의 출하 계획이 수립된 날짜 |  |

## Planning

| Column | Description | Reference |
|--------|-------------|----------|
| APPLY_REF_PLAN_YN | 참조 계획 적용 여부 (Y/N) |  |
| MAX_PHASE_NO | 모듈의 Phase 개수 |  |
| MODULE_SEQ | 모듈 실행 순서 |  |
| MODULE_TYPE | 모듈 타입 |  |
| PEG_PART_KEY | PegPart Key |  |
| PEG_SEQ | Pegging 순서 |  |
| PHASE_NO | Phase 번호 |  |
| PLAN_SEQ | 출력 순서 |  |
| PLAN_TYPE | 계획 수립 방식 |  |
| PLAN_VALUE | 계획 값 |  |
| PLAN_VER | 결과 정보 버전 | PLAN_CONFIG.PLAN_VER |
| REF_PLAN_VER | 참조 계획 ID | PLAN_CONFIG.PLAN_VER |
| TARGET_GROUP_KEY | Pegging되는 Target의 Target Group Key (PBO는 사용 X) |  |
| TARGET_SEQ | 기록 순서 |  |
| TARGET_TYPE | Resource 타입 (Resource/AddResource/SetupResource) |  |
| UNPEG_CATEGORY | 페깅되지 않은 사유를 구분 |  |
| UNPEG_REASON | 페깅되지 않은 사유 |  |

## Property/Config

| Column | Description | Reference |
|--------|-------------|----------|
| OPTION_VALUE | 옵션 값 |  |
| PROP01~PROP10 | 추가 속성 1~10 |  |
| PROP_JSON | 추가 속성 (JSON) |  |
| PROP_VALUE | Property 값 |  |

## Status/Flag

| Column | Description | Reference |
|--------|-------------|----------|
| CATEGORY | 카테고리 |  |
| CATEGORY_NAME | 카테고리 이름 |  |
| CREATION_TYPE | Lot별 생성 타입 |  |
| EXECUTION_TYPE | 실행 타입 |  |
| FINAL_ITEM_BUFFER_YN | 최종 제품 Buffer 여부 (Y/N) |  |
| INFINITY_MATERIAL_YN | 무한 재고 설정 유무 (Y/N) |  |
| NOCARRY_YN | 재고 이월 불가 여부 (Y/N) |  |
| PROCUREMENT_TYPE | 조달 유형 (MAKE/BUY) |  |
| PROD_TYPE | 생산 유형 |  |
| REASON_CODE | 사유 코드 |  |
| REASON_DETAIL | 상세 사유 |  |
| RESORT_YN | 재정렬 여부 (Y/N) |  |
| SEVERITY | 심각도 |  |
| USABLE_DETAIL_YN | BOM의 가용 여부 판단 |  |
| WIP_TYPE | WIP 타입 (Wip or Inventory) |  |

## Other

| Column | Description | Reference |
|--------|-------------|----------|
| DESCRIPTION | 부가 설명 |  |
| FLOW_TIME | 흐름 시간 |  |
| INDEX_NAME | 인덱스 이름 |  |
| IN_OUT | In/Out 위치 구분 |  |
| ITEM_GRADE | WIP의 Item 등급 |  |
| LEVEL_NO | Level 번호 |  |
| LPST_GAP_DAY | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |  |
| MAX_EARLINESS_DAY | 최대 조기 생산 허용 일수 |  |
| MAX_LATENESS_DAY | 최대 납기 지연 허용 일수 |  |
| NEXT_ISB_LIST | 다음 ISB ID 나열 |  |
| OFF_TIME_CAPA | 비가동 시간으로 설정된 Capacity |  |
| ON_TIME_CAPA | Bucket Date에서 Resource(Bucket)의 사용 가능한 Capacity Time Capa인 경우, Total Capacity - Off Time  Quantity Capa인 경우, Total Ca... |  |
| PEGGING_GROUP_KEY | Pegging되는 시점의 Pegging Group Key (PBO는 사용 X) |  |
| PEGGING_KEY | Pegging되는 시점에 맵핑되어 있던 Kit ID |  |
| PREV_ISB_LIST | 이전 ISB ID 나열 |  |
| REMAIN_CAPA | 잔여 Capacity (TOTAL_CAPA - ALLOCATION_CAPA) |  |
| RETRY_CNT | Retry 횟수 |  |
| ROW_IDX | 행 인덱스 |  |
| RULE_POINT | 사용자 정의 로직 실행 지점 |  |
| SAFETY_STOCK_DAY | 안전 재고 일수 |  |
| TIME_KEY | 시간 키 |  |
| TOTAL_CAPA | 전체 Capacity |  |
| USAGE_PER | 단위 사용량 |  |
| USED_CAPA | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |  |

