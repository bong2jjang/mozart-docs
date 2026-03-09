# 시스템 출력 스키마

> Source: `Mozart.SeePlan.Aleatorik/Generated/AleatorikModel.Outputs.cs`
> 총 약 52개 테이블 (계획, 로그, 진단 데이터)
> 집계되지 않은 원시 엔진 출력 데이터를 포함합니다 (Lot 단위 상세 정보).

---

## Core Planning Output Tables

### 1. TARGET_PLAN (Target/Requirement Plan)
Explosion/pegging target plan at operation level.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| DEMAND_ID | string | Demand ID |
| STAGE_ID | string | Stage ID |
| PHASE_NO | int | Phase 번호 |
| MO_ID | string | 제조 주문 (Manufacturing Order) ID |
| ITEM_ID | string | Target의 Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| ROUTING_ID | string | Routing ID (위치가 Buffer인 경우는 "-"를 기록) |
| OPER_ID | string | Operation ID (위치가 Buffer인 경우는 "-"를 기록) |
| ITEM_TYPE | string | Target의 Item 타입 (허용값: Product, Material) |
| OPER_YIELD | double | 수율 (default : 1.0) |
| BOM_ID | string | BOM ID |
| TARGET_TYPE | string | Resource 타입 (Resource/AddResource/SetupResource) |
| CATEGORY_TYPE | string | Category |
| TARGET_QTY | double | In/Out에 대한 목표 수량 |
| TARGET_UNIT_QTY | double | TARGET_QTY의 최종 Demand 기준 환산 수량 |
| TARGET_DATETIME | DateTime | In/Out에 대한 목표 시점 |
| TARGET_DATE/WEEK/MONTH | string | Time buckets |
| MO_ITEM_ID | string | Manufacturing Order 의 Item ID |
| MO_ITEM_TYPE | string | Manufacturing Order 의 Item 타입 (허용값: Product, Material) |
| MO_QTY | double | Manufacturing Order 수량 |
| MO_DUE_DATETIME | DateTime | Manufacturing Order의 납기 |
| MO_DUE_WEEK/MONTH | string | MO time buckets |
| DEMAND_ITEM_ID | string | Demand의 Item ID |
| DEMAND_ITEM_TYPE | string | Demand의 Item 타입 (허용값: Product, Material) |
| DEMAND_QTY | double | Demand 수량 |
| DUE_DATE | string | Demand의 납기 |
| DEMAND_WEEK/MONTH | string | Demand time buckets |
| TAT | double | TAT |
| CUM_TAT | double | 누적 TAT |
| PATH_ID | string | Target 전개 경로 |
| PEG_PART_KEY | string | PegPart의 Key |
| DEMAND_MAX_LATENESS_DAY | int | Demand의 후행 생산 허용 일수 |
| DEMAND_ITEM_PRIORITY | int | Demand item priority |
| DEMAND_PRIORITY | double | Demand의 우선 순위 |
| DEMAND_MIN_CUM_TAT | double | Demand의 투입부터 생산까지의 걸리는 최소 시간 |
| SUM_DEMAND_QTY | double | PegTarget의 수량 합(필요 판단 필요) |
| ORG_TARGET_DATETIME | DateTime | Due 변경 로직(ShippingDate, RefPlan)을 반영하기 전의 In/Out에 대한 목표 시점 |
| PLAN_TARGET_DATETIME | DateTime | Planned target date |
| PROJECT_ID, VERSION | string | Project/version |
| ROW_INDEX | int | Row sequence |
| IS_REF_OPER | string | Reference operation flag |
| REF_TARGET_DATETIME | DateTime | Reference target date |
| QTY_UOM, UNIT_QTY_UOM | string | UOM columns |
| CONV_QTY_UOM, CONV_UNIT_QTY_UOM | string | Converted UOM |
| TARGET_CONV_QTY/UNIT_QTY | double | Converted quantities |
| DEMAND_CONV_QTY | double | Converted demand qty |

### 2. PEG_INFO (Pegging Information)
WIP-to-Demand pegging results.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| PHASE_NO | int | Phase 번호 |
| LEVEL_NO | int | Level 번호 |
| WIP_ID | string | WIP ID |
| MO_ID | string | 제조 주문(Manufacturing Order) ID |
| DEMAND_ID | string | Demand ID |
| PEG_QTY | double | Pegging된 Lot 수량 |
| WIP_QTY | double | WIP 수량 |
| WIP_TYPE | string | WIP 타입 (Wip or Inventory) (허용값: Wip, Inventory) |
| WIP_STATUS | string | WIP 상태 (허용값: Wait, Run) |
| CREATE_TYPE | string | Creation type |
| AVAILABLE_DATETIME | DateTime | WIP의 유효 시작 시간 |
| ITEM_ID, ITEM_TYPE, ITEM_PRIORITY | string | Item info |
| SITE_ID, BUFFER_ID, BUFFER_SEQ | string/int | Location |
| ROUTING_ID, OPER_ID | string | Process |
| TARGET_ITEM_ID, TARGET_ITEM_TYPE, TARGET_SITE_ID | string | Target info |
| TARGET_DATETIME, TARGET_DATE/WEEK/MONTH | DateTime/string | Target time |
| DEMAND_QTY, DEMAND_ITEM_ID, DEMAND_ITEM_TYPE | double/string | Demand info |
| DEMAND_SITE_ID, DEMAND_PRIORITY, DEMAND_MAX_LATENESS_DAY | string/int/double | More demand |
| DUE_DATETIME, DUE_WEEK/MONTH | DateTime/string | Due time |
| STAGE_ID | string | Stage ID |
| TARGET_QTY, TARGET_SUM_QTY | double | Target quantities |
| MO_QTY, MO_ITEM_ID, MO_ITEM_TYPE | double/string | MO info |
| MO_DUE_DATETIME, MO_WEEK/MONTH | DateTime/string | MO time |
| PEG_GROUP_KEY, TARGET_GROUP_KEY, PEG_KEY | string | Pegging keys |
| PROJECT_ID, VERSION, ROW_INDEX | string/int | Standard |
| REF_PLAN_VER | string | 참조 계획 ID |
| QTY/CONV UOM columns | string | UOM |
| WIP_CONV_QTY, PEG_CONV_QTY, MO_CONV_QTY, etc. | double | Converted qtys |

### 3. UNPEG_INFO (Unpegged WIP)
WIP that could not be pegged to any demand.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| WIP_ID | string | WIP ID |
| STAGE_ID | string | Stage ID |
| CREATE_TYPE | string | Creation type |
| WIP_QTY | double | WIP 수량 |
| UNPEG_QTY | double | 페깅되지 않은 WIP 수량 |
| UNPEG_CATEGORY_TYPE | string | Unpeg category |
| UNPEG_REASON | string | 페깅되지 않은 사유 |
| REASON_DETAIL_INFO | string | Detailed reason |
| ITEM_ID, ITEM_TYPE | string | Item info |
| SITE_ID, BUFFER_ID | string | Location |
| WIP_STATUS | string | WIP 상태 (허용값: Wait, Run) |
| ROUTING_ID, OPER_ID | string | Process |
| AVAILABLE_DATETIME | DateTime | WIP의 유효 시작 시간 |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| QTY_UOM, CONV_QTY_UOM | string | UOM |
| WIP_CONV_QTY, UNPEG_CONV_QTY | double | Converted qtys |

### 4. PROD_PLAN (Production Plan)
Detailed lot-level production plan (the main output).

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| LOT_ID | string | Lot ID (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| STAGE_ID | string | Stage ID |
| PHASE_NO, LEVEL_NO | int | Phase/Level |
| DEMAND_ID | string | Demand ID |
| LOT_GROUP_KEY | string | Lot의 Lot Group의 Key(PBO 사용 X) |
| ITEM_ID, ITEM_TYPE | string | Item |
| SITE_ID, BUFFER_ID | string | Location |
| BOM_ID | string | BOM ID |
| ROUTING_ID, OPER_ID | string | Process route |
| IN_PLAN_QTY, IN_PLAN_UNIT_QTY | double | Input quantities |
| OUT_PLAN_QTY, OUT_PLAN_UNIT_QTY | double | Output quantities |
| RES_ID | string | Resource ID |
| ARRIVAL_DATETIME | DateTime | Buffer 또는 Operation 도착 시간 |
| START_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 종료 시간 |
| RES_END_DATETIME | DateTime | Resource에서의 생산 종료 시간 |
| USED_CAPA | double | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| USAGE_PER | double | Quantity 타입 Resource에 대한 Capacity 차감 비율 |
| UTIL_RATIO | double | Resource의 가동율 (0~1) |
| OPER_YIELD | double | 수율 |
| CHANGE_RATIO | double | BCumChangeRatio의 약자로, PLAN_QTY * B_CHG_RATIO = PLAN_UNIT_QTY이 될 수 있도록  BOM path의 수율과 From/To Qty를 고려하여 나온 값 |
| TOTAL_TAT | double | END_TIME과 START_TIME 값의 차이 (단위: 초) |
| ORG_LOT_ID | string | Lot ID (현재 Buffer에서의 Lot 코드) |
| WIP_TYPE, CREATE_TYPE | string | WIP/creation type |
| PLAN_DATE/WEEK/MONTH | string | Plan time buckets |
| LPST_GAP_DAY | double | TARGET_DATETIME과 END_DATETIME의 차이.  양수인 경우 납기까지 여유가 있다는 의미이고,  음수인 경우 납기를 넘은 것을 의미 |
| EXTEND_TARGET_DATETIME | DateTime | Extended target |
| TARGET_DATETIME | DateTime | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME) |
| TARGET_DATE/WEEK/MONTH | string | Target time buckets |
| DEMAND_ITEM_ID, DEMAND_SITE_ID, DEMAND_BUFFER_ID | string | Demand info |
| DEMAND_PRIORITY | double | Demand의 우선순위 |
| MAX_LATENESS_DAY | int | 후행 생산 허용 일수 |
| EXTEND_DUE_DATETIME, DUE_DATETIME | DateTime | Due dates |
| DUE_DATE | string | Demand의 납기일자 |
| RETRY_CNT | int | Retry 횟수 |
| ALLOCATION_SEQ | double | 할당 순서 |
| MO_ID | string | 제조 주문 (Manufacturing Order) ID |
| REF_PLAN_ID | string | Reference plan |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| IS_OVER_CAPA | string | Over-capacity flag |
| ARRIVAL_PLAN_QTY/UNIT_QTY | double | Arrival quantities |
| SHIFT_NAME | string | Shift |
| ORG_ARRIVAL_DATETIME | DateTime | Original arrival |
| REF_PLAN_VER | string | 참조 계획 코드 |
| QTY/CONV UOM columns | string | UOM |
| IN/OUT/ARRIVAL_PLAN_CONV_QTY/UNIT_QTY | double | Converted quantities |
| FROM_OPER_ID, TO_OPER_ID | string | Oper range |
| OPER_GROUP_ID, FROM/TO_OPER_GROUP_ID | string | Oper groups |
| TO_RES_ID | string | To resource |

### 5. RES_PLAN (Resource Plan)
Resource-level scheduling detail.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| RES_ID | string | Resource ID |
| RES_GROUP_ID | string | Resource Group ID |
| STAGE_ID | string | Stage ID |
| PHASE_NO, LEVEL_NO | int | Phase/Level |
| ALLOCATION_SEQ | double | 할당 시 부여되는 순서 |
| DEMAND_ID, MO_ID | string | Demand/MO |
| LOT_ID, LOT_GROUP_KEY | string | Lot info |
| BOM_ID | string | BOM ID |
| ALLOCATION_TYPE | string | NonWorking/PM/Setup 등의 할당 타입 (허용값: NonWorking, PM, Setup, Allocate) |
| ITEM_ID, ITEM_TYPE | string | Item |
| BUFFER_ID | string | Lot의 Buffer ID |
| ROUTING_ID, OPER_ID | string | Process |
| OPER_YIELD | double | 수율 |
| SITE_ID | string | Lot의 Site ID |
| BACKWARD_CHANGE_RATIO | double | Backward change ratio |
| TOTAL_TAT | double | 1) Opearation 타입이 Dummy인 경우,  Total TAT = 공정의 Run TAT와 Wait TAT의 합계 2) Opearation 타입이 Operation인 경우, Total TAT = 0 |
| PLAN_QTY, PLAN_UNIT_QTY | double | Plan quantities |
| ARRIVAL_DATETIME | DateTime | Buffer 또는 Operation 도착 시간 |
| MAIN_RES_ID | string | RESOURCE_ID가 Add Resource인 경우,  함께 사용된 (Main) Resource ID를 기록 |
| START_DATETIME, END_DATETIME, RES_END_DATETIME | DateTime | Time range |
| USED_CAPA, USAGE_PER, UTIL_RATIO | double | Capacity info |
| ORG_LOT_ID | string | Lot ID (현재 Buffer에서의 Lot ID) |
| WIP_TYPE, CREATE_TYPE | string | Types |
| PLAN_DATE/WEEK/MONTH | string | Time buckets |
| EXTEND_TARGET/DUE_DATETIME | DateTime | Extended dates |
| TARGET/DUE_DATETIME, DATE/WEEK/MONTH | DateTime/string | Target/Due info |
| DEMAND_ITEM_ID/SITE_ID/BUFFER_ID | string | Demand detail |
| DEMAND_PRIORITY | double | Demand의 우선순위 |
| MAX_LATENESS_DAY | int | 후행 생산 허용 일수 |
| LPST_GAP_DAY | double | 타겟 날짜와 설비 계획 시작일의 차이.  양수인 경우 납기까지 여유가 있다는 의미이고,  음수인 경우 납기를 넘은 것을 의미 |
| RETRY_CNT | int | Retry 횟수 |
| ITEM_MERGE_INDEX, DEMAND_MERGE_INDEX | int | Merge indices |
| DESCRIPTION | string | 부가 설명 |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| IS_OVER_CAPA | string | Over-capacity |
| REF_PLAN_ID | string | Ref plan |
| SHIFT_NAME | string | Shift |
| ORG_ARRIVAL_DATETIME | DateTime | Buffer 또는 Operation 도착 시간(NoCarry로 변경하기 전 데이터) |
| QTY/CONV UOM columns | string | UOM |
| PLAN_CONV_QTY/UNIT_QTY | double | Converted quantities |
| FROM/TO_OPER_ID | string | Oper range |
| OPER_GROUP_ID, FROM/TO_OPER_GROUP_ID | string | Oper groups |
| WIP_ID | string | WIP ID |
| CONSTRAINT_ID | string | Constraint |

### 6. SHIPMENT_PLAN (Shipment Plan - System)
System-level shipment plan output.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| DEMAND_ID | string | Demand ID |
| SHIPMENT_DATE | string | 해당 Demand의 출하 계획이 수립된 날짜 |
| STAGE_ID | string | Stage ID |
| ITEM_ID, SITE_ID | string | Item/Site |
| PROD_QTY | double | 해당 Demand의 출하 계획의 수량 |
| LATE_QTY | double | Late quantity |
| EARLY_QTY | double | Early quantity |
| ONTIME_PLAN_QTY | double | On-time plan qty |
| DEMAND_QTY | double | Demand의 주문 수량 (기준정보 CFG/ODV_DEMAND 테이블) |
| DEMAND_PRIORITY | int | Demand의 우선순위 (기준정보 CFG/ODV_DEMAND 테이블) |
| MAX_LATENESS_DAY, MAX_EARLINESS_DAY | int | Tolerance |
| DUE_DATE, DUE_WEEK | string | Due time |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| WAREHOUSE_IN_DATE | string | Warehouse in date |
| DUE_MONTH | string | Demand 납기의 월 |

### 7. PSI_REPORT (PSI - System)
System-level PSI output.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| ITEM_ID, SITE_ID, BUFFER_ID | string | Item/Site/Buffer |
| PLAN_DATE | string | 집계일 |
| BOH_QTY | double | 집계일 기준 초기 ISB 수량 |
| IN_QTY | double | 집계일 기준 ISB 투입 수량 |
| OUT_QTY | double | 집계일 기준 ISB 생산 수량 |
| EOH_QTY | double | 집계일 기준 ISB 잔여 수량 (BOH_QTY+IN_QTY-OUT_QTY) |
| ITEM_TYPE | string | Item 타입 (허용값: Product, Material) |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 8. INTARGET_PLAN (Internal Target Plan)
Intermediate target plan between modules.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO | int | Phase 번호 |
| ITEM_ID, ITEM_TYPE | string | Item |
| SITE_ID, BUFFER_ID | string | Location |
| TARGET_QTY, TARGET_UNIT_QTY | double | Quantities |
| TARGET_DATETIME | DateTime | 투입 필요 날짜 |
| TARGET_DATE/WEEK/MONTH | string | Time buckets |
| DEMAND_ID, DEMAND_ITEM_ID | string | Demand |
| DEMAND_QTY, DEMAND_PRIORITY | double/int | Demand info |
| DUE_DATETIME | DateTime | Demand의 납기일 |
| MO_ID, MO_ITEM_ID, MO_QTY, MO_DUE_DATETIME | | MO info |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 9. STAGE_OUT_PLAN (Stage Output Plan)
Output plan at stage boundaries.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| DEMAND_ID | string | Demand ID |
| PLAN_DATE | string | START_TIME이 포함되는 일자 |
| STAGE_ID | string | Stage ID |
| PHASE_NO, LEVEL_NO | int | Phase/Level |
| LOT_ID | string | Lot ID |
| ITEM_ID, SITE_ID, BUFFER_ID | string | Item/Site/Buffer |
| OPER_YIELD | double | 수율 |
| PLAN_QTY, PLAN_UNIT_QTY | double | Quantities |
| ARRIVAL/START/END_DATETIME | DateTime | Time range |
| CREATE_TYPE, WIP_TYPE | string | Types |
| PLAN_WEEK/MONTH | string | Time buckets |
| TARGET_DATETIME, DATE/WEEK/MONTH | DateTime/string | Target |
| LPST_GAP_DAY | double | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |
| DEMAND_ITEM_ID/SITE_ID/BUFFER_ID | string | Demand info |
| DUE_MONTH/WEEK/DATE | string | Due time |
| DEMAND_PRIORITY | double | Demand의 우선순위 |
| MAX_LATENESS_DAY | int | Demand의 후행 생산 허용 일수 |
| EXTEND_DUE/TARGET_DATETIME | DateTime | Extended dates |
| RETRY_CNT | int | Retry 횟수 |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| PROD_TYPE | string | 생산 유형 |

---

## Log & Diagnostic Tables

### 10. ERROR_LOG
| Column | Type | Description |
|--------|------|-------------|
| SEVERITY | string | 오류 심각성 (허용값: Critical, Warning, Info, Notice) |
| MODULE_ID | string | 모듈 ID |
| TARGET_KEY | string | 오류 발생 위치 (테이블명@컬럼키) |
| TARGET_VALUE | string | Error target value |
| REF_KEY | string | Reference key |
| REASON_CODE | string | 오류 발생 사유 코드 |
| REASON_DETAIL_INFO | string | Detailed error info |
| CATEGORY_TYPE | string | Error category |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 11. SHORT_REPORT
Demand shortage report.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO | int | Short 발생 Phase 번호 |
| SHORT_SEQ | int | Short 발생 순서 |
| LOT_ID, DEMAND_ID | string | Lot/Demand |
| DEMAND_ITEM_ID | string | Short 발생 Demand의 Item ID |
| DUE_MONTH/WEEK/DATE | string | Due time |
| MAX_LATENESS_DAY | int | Short 발생 Demand의 후행 가능일 |
| EXTEND_DUE_DATE | string | Extended due |
| DEMAND_PRIORITY | double | Short 발생 Demand의 우선순위 |
| RETRY_CNT | int | Retry 횟수 |
| DEMAND_QTY, SHORT_QTY, SHORT_UNIT_QTY | double | Quantities |
| SHORT_DATE | string | Short 발생일 |
| REASON_CATEGORY_TYPE | string | Reason category |
| REASON_NAME | string | Short 사유 |
| REASON_DETAIL_INFO | string | Detailed reason |
| ITEM_ID, SITE_ID, BUFFER_ID | string | Location |
| BOM_ID, ROUTING_ID, OPER_ID, RES_ID | string | Process |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 12. SHORT_LOG
Short/shortage log detail.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| DEMAND_ID, DEMAND_ITEM_ID | string | Demand |
| DUE_DATE | string | Short이 발생한 Demand의 납기일자 |
| DEMAND_QTY | double | Short이 발생한 Demand의 수량 |
| SHORT_TYPE | string | Short / Late / Remain 구분 (허용값: Short, Late, Remain) |
| SHORT_CATEGORY_TYPE | string | Short category |
| SHORT_REASON | string | Short 사유 |
| SHORT_DETAIL_INFO | string | Short 상세 사유 |
| SHORT_QTY | double | Short 수량 |
| ISB_ID | string | Short 발생한 ItemSiteBuffer |
| BOM_ID, ROUTING_ID, OPER_ID, RES_ID | string | Process |
| REF_PLAN_ID | string | Ref plan |
| FROM/TO_LATE_DATETIME | DateTime | Late range |
| SHORT_CNT | int | Late 사유가 호출된 횟수 |
| PHASE_NO, RETRY_CNT | int | Phase/Retry |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| REF_DUE_DATE | DateTime | Ref due date |
| REF_PLAN_VER | string | Short 발생한 참조 계획 ID |
| QTY/CONV UOM columns | string | UOM |
| DEMAND_CONV_QTY, SHORT_CONV_QTY | double | Converted |

### 13. SHORT_PROD_PLAN
Production plan for short/shortage lots.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID | string | Stage ID |
| MODULE_ID | string | 모듈 ID |
| PHASE_NO | int | Phase 번호 |
| LEVEL_NO | int | Level 번호 |
| PLAN_SEQ | int | 생산 순서 |
| DEMAND_ID | string | Demand ID |
| MO_ID | string | 제조 주문 (Manufacturing Order) ID |
| LOT_ID | string | Lot ID (Split 또는 Assembly 이후, 마지막 Buffer에서 Lot ID) |
| BOM_ID | string | BOM ID |
| ALLOCATION_TYPE | string | 할당 방식 (허용값: NonWorking, PM, Setup, (Null)) |
| DEMAND_ITEM_ID | string | Demand Item ID |
| DUE_DATE | string | 납기 일자 |
| DEMAND_PRIORITY | double | Demand의 우선순위 |
| LOT_GROUP_KEY | string | Lot Group의 Key (PBO 사용 X) |
| FROM_ITEM_ID | string | From Item ID |
| FROM_SITE_ID | string | From Site ID |
| FROM_BUFFER_ID | string | From Buffer ID |
| TO_ITEM_ID | string | To Item ID |
| TO_SITE_ID | string | To Site ID |
| TO_BUFFER_ID | string | To Buffer ID |
| ROUTING_ID | string | Routing ID |
| OPER_ID | string | Operation ID(Lot의 위치가 Buffer인 경우, Null) |
| OPER_YIELD | double | 수율 |
| PLAN_QTY | double | 생산 수량 |
| PLAN_UNIT_QTY | double | PLAN_QTY 값의 최종 Demand 기준 환산 수량 |
| RES_ID | string | Resource ID |
| ARRIVAL_DATETIME | DateTime | Buffer 또는 Operation 도착 시간 |
| START_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 종료 시간 |
| RES_END_DATETIME | DateTime | Resource에 Lot을 투입할 수 있는 시간  (인라인 설비의 경우 END TIME과 본 컬럼 값이 달라짐) |
| CREATE_TYPE | string | Creation type |
| WIP_TYPE | string | WIP 타입 (Wip or Inventory) (허용값: Wip, Inventory) |
| PLAN_DATE | string | START_TIME 과 동일 |
| PLAN_WEEK | string | START_TIME이 포함되는 주차 |
| PLAN_MONTH | string | START_TIME이 포함되는 월 |
| TARGET_DATETIME | DateTime | MO_ID의 해당 Buffer 또는 Operation에서의 목표 완료 시점 (TARGET_PLAN의 TARGET_DATETIME). |
| TARGET_DATE | string | TARGET_DATETIME이 포함되는 날짜 |
| TARGET_WEEK | string | TARGET DATE가 포함되는 주차 |
| TARGET_MONTH | string | TARGET DATE가 포함되는 월 |
| LPST_GAP_DAY | double | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |
| MAX_LATENESS_DAY | double | 후행 생산 허용 일수 |
| EXTEND_DUE_DATETIME | DateTime | Extended due date/time |
| EXTEND_TARGET_DATETIME | DateTime | Extended target date |
| ADD_RES_ID | string | Add resource |
| ADD_RES_CAPA | double | 미구현 |
| ADD_RES_ALLOCATION_QTY | double | 미구현 |
| ADD_RES_CUM_ALLOCATION_QTY | double | 미구현 |
| ADD_RES_REMAIN_QTY | double | 미구현 |
| BACKWARD_CHANGE_RATIO | double | BW change ratio |
| TOTAL_TAT | double | END_TIME과 START_TIME의 차이(단위: 초) |
| SUM_TAT | double | 미구현 |
| SUM_YIELD | double | 미구현 |
| SPLIT_RATIO | double | 미구현 |
| RETRY_CNT | int | Retry 횟수 |
| ORG_LOT_ID | string | Lot ID(현재 Buffer에서의 Lot ID) |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |
| REF_PLAN_ID | string | Ref plan |

Same structure as PROD_PLAN with additional fields:
- SHORT_SEQ, ADD_RES_ID, ADD_RES_CAPA
- ADD_RES_ALLOCATION_QTY, ADD_RES_CUM_ALLOCATION_QTY, ADD_RES_REMAIN_QTY
- BACKWARD_CHANGE_RATIO, TOTAL_TAT, SUM_TAT, SUM_YIELD, SPLIT_RATIO

### 14. LOT_HISTORY
Lot lifecycle event history.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| EVENT_DATETIME | DateTime | Lot의 Event 발생 시각 |
| EVENT_TYPE | string | Lot의 Event 유형 (허용값: Creation, Release, SplitByBom, SplitByCapacity, Assembly, Disposal, Short) |
| LOT_ID, LOT_QTY | string/double | Lot info |
| ITEM_ID, SITE_ID, BUFFER_ID | string | Location |
| BOM_ID, ROUTING_ID, OPER_ID | string | Process |
| ADD_INFO | string | 각 Event 관련 부가 정보 기록 (허용값: (생성된 Lot ID), (Org Lot ID), (Split Lot 정보), (Split Lot 정보), (Assembly 기여한 Lot 정보), (Null), (Short Category)) |
| WIP_ID, CREATE_TYPE, ORG_LOT_ID | string | WIP info |
| DEMAND_ID, MO_ID | string | Demand/MO |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| REF_PLAN_ID | string | Ref plan |
| RETRY_CNT | int | Retry 횟수 |

### 15. LOT_SPLIT_LOG
Lot split event details.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO | int | Phase 번호 |
| BOM_ID, BOM_TYPE | string | BOM info |
| ORG_LOT_ID, ORG_LOT_QTY | string/double | Original lot |
| ORG_ITEM_ID, ORG_ITEM_PRIORITY, ORG_SITE_ID | string/int | Original item |
| CONFIRM_LOT_ID, CONFIRM_LOT_QTY | string/double | Confirmed lot |
| COBY_LOT_ID, COBY_LOT_QTY | string/double | Co-by-product lot |
| COBY_ITEM_ID, COBY_ITEM_PRIORITY, COBY_SITE_ID | string/int | Co-by-product item |
| BUFFER_ID | string | Split Buffer ID (TO_BUFFER_ID) |
| TO_QTY, TO_LOT_AVAILABLE_DATETIME | double/DateTime | Output |
| DEMAND_ID, DEMAND_ITEM_ID | string | Demand |
| MO_ID, MO_DUE_DATETIME | string/DateTime | MO |
| CALENDAR_ID | string | BOM Detail의 Calendar ID |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 16. LOT_ASSEMBLY_LOG
Lot assembly/merge event details.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO | int | Phase 번호 |
| EVENT_DATETIME, AVAILABLE_DATETIME | DateTime | Times |
| FROM_LOT_ID, FROM_ITEM_ID/TYPE, FROM_SITE_ID/BUFFER_ID | string | From lot |
| FROM_LOT_QTY, FROM_DEMAND_ID, FROM_TARGET_DATETIME | | From detail |
| TO_LOT_ID, TO_ITEM_ID/TYPE, TO_SITE_ID/BUFFER_ID | string | To lot |
| TO_LOT_QTY, TO_DEMAND_ID, TO_TARGET_DATETIME | | To detail |
| BOM_ID, FROM_QTY | string/double | BOM |
| ROUTING_ID, OPER_ID | string | Process |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 17. ALLOCATION_LOG
Resource allocation decision log.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO, LEVEL_NO | int | Phase/Level |
| TARGET_ID, TARGET_TYPE | string | Target |
| ALLOCATION_SEQ | double | Sequence |
| INIT_LOT_GROUP_CNT | int | 대기중인 Lot Group 수 |
| FILTER_LOT_GROUP_CNT | int | Filtered lot groups |
| AVAILABLE_LOT_GROUP_CNT | int | Available lot groups |
| USE_LOT_GROUP_ID | string | Selected lot group |
| LOG_TYPE | string | 할당 성공 여부 (허용값: Allocate) |
| FILTER/AVAILABLE/USE_LOT_GROUP_ID | string | Lot group IDs |
| AVAILABLE/FILTER/USE_RES_ID | string | Resource IDs |
| ALLOCATION_TYPE | string | LFS/BFS/RESERVE 여부 (허용값: Lot_First_Selection, Bucket_First_Selection, Reserve) |
| PLAN_DATE | string | 할당 시도한 날짜 |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 18. CAPA_ALLOCATION_INFO
Capacity allocation details per resource per bucket.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| TARGET_ID | string | Resource ID |
| RES_GROUP_ID | string | Resource Group ID |
| BUCKET_DATE | string | Resource에 Capacity가 정의된 날짜 |
| STAGE_ID | string | Stage ID |
| PHASE_NO | int | 모듈 구동 단계 |
| TARGET_TYPE | string | Resource 타입 (Resource/AddResource/SetupResource) (허용값: Resource, Constraint) |
| CAPA_TYPE, CAPA_MODE | string | Capacity type/mode |
| TOTAL_CAPA | double | 전체 Capacity |
| UNAVAILABLE_CAPA | double | Unavailable (PM, etc.) |
| AVAILABLE_CAPA | double | Available capacity |
| ALLOCATION_CAPA | double | Resource가 Bucket Date 동안 사용한 Capacity |
| PM_CAPA | double | PM에 소요된 Capacity |
| SETUP_CAPA | double | Setup에 소요된 Capacity |
| REMAIN_CAPA | double | 잔여 Capacity (TOTAL_CAPA - ALLOCATION_CAPA) |
| ALLOCATION_RATIO | double | 할당 비율 (= Allocation Capa / On Time Capa) |
| CALENDAR_ID, PATTERN_ID | string | Calendar info |
| EFF_START/END_DATE | string | Effectivity range |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| SHIFT_NAME | string | Shift |
| BUCKET_WEEK/MONTH | string | Time buckets |

### 19. ELAPSED_TIME_LOG
Rule execution elapsed time tracking.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID, MODULE_ID | string | Stage/Module |
| PHASE_NO | int | 모듈 Phase |
| RULE_POINT_ID | string | Rule point |
| CALL_CNT | double | 호출 횟수 |
| ELAPSE_SEC | double | Elapsed seconds |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 20. EXECUTION_TIME_LOG
Overall execution section timing.

| Column | Type | Description |
|--------|------|-------------|
| SECTION | string | 엔진 시작 시점의 시각 |
| ELAPSE_SEC | double | Elapsed seconds |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

### 21. PM_PLAN_LOG
Preventive maintenance plan results.

| Column | Type | Description |
|--------|------|-------------|
| RES_ID | string | Resource ID |
| PM_ID | string | PM ID |
| PM_PRIORITY | int | 우선순위 |
| PM_POLICY_TYPE | string | Policy type |
| ORG_START/END_DATETIME | DateTime | Original PM window |
| REV_START/END_DATETIME | DateTime | Revised PM window |
| REVISE_YN | string | Revised flag |
| EXECUTE_YN | string | Executed flag |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |

---

## Data/Config Snapshot Tables

### 22. SCENARIO_RULESET_CONFIG_DATA (PK: MODULE_ID, TARGET_CATEGORY_TYPE, TARGET_ID, PHASE_NO, PROJECT_ID, VERSION)
Snapshot of ruleset config used in execution.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | RuleSet 이 사용되는 모듈 |
| TARGET_CATEGORY_TYPE | string | Target category |
| TARGET_ID | string | 실행 대상 |
| RULESET_ID | string | 적용 RuleSet |
| PHASE_NO | int | Phase 번호 |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 23. SCENARIO_OPTION_CONFIG_DATA
Snapshot of scenario options used in execution.

| Column | Type | Description |
|--------|------|-------------|
| SCENARIO_ID | string | 실행 버전 |
| MODULE_ID | string | 모듈 ID |
| OPTION_ID | string | 옵션 ID |
| OPTION_VALUE | string | 옵션 값 |
| CALENDAR_ID | string | Calendar ID |
| DESCRIPTION | string | 옵션 설명 |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| PHASE_NO | int | Phase 번호 |
| ROW_INDEX | int | Row seq |

### 24. RULE_FACTOR_DATA
Snapshot of rule-factor mappings used.

| Column | Type | Description |
|--------|------|-------------|
| RULE_ID | string | Rule ID |
| FACTOR_ID | string | Rule을 구성하는 우선순위 규칙 |
| FACTOR_SEQ | int | (WEIGHTSORTED) 우선순위 규칙 간 우선순위 값 |
| FACTOR_WEIGHT | double | (WEIGHTSUM) 우선순위 규칙 별 가중치 값 |
| FACTOR_VALUE | string | 우선순위 규칙 계산 시 사용되는 파라미터 값 문자열 |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 25. RULESET_CONFIG_DATA
Snapshot of ruleset config used.

---

## Network & Reference Tables

### 26. BOM_NETWORK_INFO
BOM network explosion results with depth/TAT/yield.

| Column | Type | Description |
|--------|------|-------------|
| DEMAND_ITEM_ID/SITE_ID/BUFFER_ID | string | Demand ISB |
| DEMAND_ID | string | Demand ID |
| BOM_ID, ROUTING_ID | string | BOM/Routing |
| BOM_TYPE, BOM_PRIORITY | string/int | BOM info |
| FROM_ITEM_ID/SITE_ID/BUFFER_ID | string | From ISB |
| FROM_BUFFER_SEQ | int | From Buffer 순서 (오름차순) |
| FROM_QTY | double | From 수량 |
| FROM_WIP_QTY, FROM_WIP_SUM_QTY | double | From WIP |
| TO_ITEM_ID/SITE_ID/BUFFER_ID | string | To ISB |
| TO_BUFFER_SEQ | int | To Buffer 순서 (오름차순) |
| TO_QTY | double | To 수량 |
| TO_WIP_QTY, TO_WIP_SUM_QTY | double | To WIP |
| AVAILABLE_DETAIL_YN, AVAILABLE_BOM_YN | string | Availability |
| RES_LIST, ALL_RES_LIST | string | Resources |
| ROUTING_TAT | double | BOM 내 Operation들의 TAT 합 (단위:Day) |
| MIN/MAX/LATE_CUM_TAT | double | Cumulative TAT |
| MAX_CUM_YIELD | double | 최대 누적 수율 |
| PREV/NEXT_ISB_LIST | string | Adjacent ISBs |
| PROJECT_ID, VERSION, ROW_INDEX | | Standard |
| DEPTH | int | Network depth |
| FROM/TO QTY/CONV UOM columns | string | UOM |
| FROM/TO CONV quantities | double | Converted |

### 27. BOM_RESTRICTED_RESULT
BOM restriction evaluation results.

| Column | Type | Description |
|--------|------|-------------|
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |
| BOM_ID | string | BOM 코드 |
| CONTROL_ID | string | 제어 대상 코드 |
| CONTROL_TYPE | string | 제어 기준 유형 |

### 28. ITEM_SITE_BUFFER_ALT_INFO
Alternative ISB mapping results.

| Column | Type | Description |
|--------|------|-------------|
| ALT_ISB_ID | string | 대체 Key |
| ITEM_PRIORITY | int | Item 우선순위 |
| ITEM_ID | string | 대체 되는 Item ID |
| SITE_ID | string | 대체 되는 Site ID |
| BUFFER_ID | string | 대체 되는 Buffer ID |
| ALT_ITEM_PRIORITY | int | Alt item priority |
| ALT_ITEM_ID | string | 대체 Item ID |
| ALT_SITE_ID | string | 대체 Site ID |
| ALT_BUFFER_ID | string | 대체 Buffer ID |
| ALT_PRIORITY | int | 대체 Item 간 우선순위 |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 29. COMPARE_BOM_LOG
BOM comparison/selection log.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID | string | Stage ID |
| MODULE_ID | string | 모듈 ID |
| PHASE_NO | int | Phase 번호 |
| DEMAND_ID | string | Demand ID |
| DEMAND_ITEM_ID | string | Demand Item ID |
| ISB_ID | string | ItemSiteBuffer ID |
| USE_BOM_ID | string | Used BOM |
| INIT_BOM_ID | string | Initial BOM |
| FILTER_BOM_ID | string | Filtered BOM |
| AVAILABLE_BOM_ID | string | Available BOM |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 30. INIT_DEMAND_LOG
Initial demand processing log.

| Column | Type | Description |
|--------|------|-------------|
| STAGE_ID | string | Stage ID |
| MODULE_ID | string | 모듈 ID |
| PHASE_NO | int | Phase 번호 |
| DEMAND_PEG_SEQ | int | 최종 우선순위 정렬 결과 |
| DEMAND_ID | string | Demand ID |
| MO_ID | string | 제조 주문 (Manufacturing Order) ID |
| SITE_ID | string | Demand의 Site ID |
| ITEM_ID | string | Demand의 Item ID |
| ITEM_PRIORITY | int | Item 우선순위 |
| DUE_DATE | string | Demand의 납기 일자 |
| DEMAND_QTY | double | Demand 수량 |
| DEMAND_PRIORITY | double | Demand의 우선순위 (기준 정보 DEMAND 테이블에 정의된 값) |
| CUST_ID | string | Demand의 고객 ID |
| DEMAND_TYPE | string | Demand의 Demand 타입 |
| MAX_LATENESS_DAY | double | Demand의 후행 가능일 |
| MAX_EARLINESS_DAY | double | Demand의 선행 가능일 |
| LATE_DATETIME | DateTime | Late date/time |
| DUE_WEEK | string | 납기 주차 |
| COMPARE_INFO | string | Compare info |
| FILTER_INFO | string | Filter info |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 31. ITEM_SITE_BUFFER_WIP_LOG
ISB-level WIP tracking log.

| Column | Type | Description |
|--------|------|-------------|
| WIP_ID | string | Wip(or Inventory) ID |
| ISB_ID | string | ItemSiteBuffer ID |
| WIP_QTY | double | Wip(or Inventory)의 수량 |
| AVAILABLE_DATETIME | DateTime | Wip(or Inventory)의 유효시간 |
| LOG_SEQ | int | Row 순서 |
| LOG_TYPE | string | 기록 타입(Add,Peg,Update) (허용값: Add, Peg, Update) |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

### 32. PEGGABLE_WIP_INFO
Peggable WIP information per demand.

| Column | Type | Description |
|--------|------|-------------|
| DEMAND_ID | string | Demand ID |
| PHASE_NO | int | Phase 번호 |
| DEMAND_ISB_ID | string | Demand의 ItemSiteBuffer ID |
| WIP_INFO | string | 해당 Demand가 거쳐온 각 ISB 위치 별  (WIP 누적 수량) / (WIP 수량) |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |

---

## Reference Plan Tables

### 33. REF_PLAN_MAPPING_LOG
Reference plan mapping to current lots.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| REF_PLAN_ID | string | Ref plan |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| REF_PLAN_QTY | double | Ref plan qty |
| MAPPING_QTY | double | Mapping qty |
| LOT_ID | string | Lot ID |
| DEMAND_ID | string | Demand ID |
| OPER_ID | string | Operation ID |
| BOM_ID | string | BOM ID |
| ROUTING_ID | string | Routing ID |
| STAGE_ID | string | Stage ID |
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Plan version |
| ROW_INDEX | int | Row seq |
| RES_ID | string | Resource ID |

### 34. REF_PLAN_RESULT_LOG
Reference plan execution result comparison.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| REF_PLAN_ID | string | Ref plan |
| REF_PLAN_QTY | double | Ref plan qty |
| PLAN_QTY | double | 계획 수량 |
| REMAIN_QTY | double | Remaining qty |
| REASON | string | Reason |
| REASON_DETAIL_INFO | string | Reason detail |
| STAGE_ID | string | Stage ID |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| REF_PLAN_DATETIME | DateTime | Ref plan date |
| REF_TYPE | string | Ref type |
| BOM_ID | string | BOM ID |
| ROUTING_ID | string | Routing ID |
| OPER_ID | string | Operation ID |
| RES_ID | string | Resource ID |
| START_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 종료 시간 |
| VERSION | string | Plan version |
| PROJECT_ID | string | 프로젝트 ID |
| ROW_INDEX | int | Row seq |

### 35. REF_PLAN_BW_MAPPING_LOG
Backward reference plan mapping.

| Column | Type | Description |
|--------|------|-------------|
| MODULE_ID | string | 모듈 ID |
| REF_PLAN_ID | string | Ref plan |
| RETRY_COUNT | int | Retry count |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| DEMAND_ID | string | Demand ID |
| TARGET_QTY | double | 목표 수량 |
| REMAIN_REF_PLAN_QTY | double | Remaining ref plan qty |
| MAPPING_QTY | double | Mapping qty |
| REF_PLAN_KEY | string | Ref plan key |
| REF_PLAN_DATE | DateTime | Ref plan date |
| DUE_DATE | DateTime | 납기일 |

---

## Performance & Allocation Analysis

### 36. PLAN_INDEX (PK: PROJECT_ID, VERSION, MODULE_ID, CATEGORY_NAME, INDEX_NAME, TIME_KEY, TIME_UOM)
KPI index values.

| Column | Type | Description |
|--------|------|-------------|
| PROJECT_ID | string | 프로젝트 ID |
| VERSION | string | Version |
| MODULE_ID | string | RuleSet 이 사용되는 모듈 |
| CATEGORY_NAME | string | 카테고리 이름 (허용값: INPUT, PEG_RESULT, RELEASE_QTY, PRODUCTION, RESOURCE_UTILIZATION, RTF, SETUP_COUNT, TOTAL_SETUP_COUNT) |
| INDEX_NAME | string | 인덱스 이름 |
| TIME_KEY | string | 시간 키 |
| TIME_UOM | string | 시간 단위 |
| PLAN_VALUE | double | 계획 값 |
| ROW_INDEX | int | Row |
| QTY_UOM | string | 수량 단위 |
| CONV_QTY | double | Converted qty |
| CONV_QTY_UOM | string | 환산 수량 단위 |

### 37. ALLOC_LOTGRP_LOG
Lot group allocation detail log.

| Column | Type | Description |
|--------|------|-------------|
| ALLOCATION_SEQ | double | Allocation seq |
| TARGET_ID | string | Resource ID |
| LOT_GROUP_KEY | string | Lot group key |
| LOT_GROUP_QTY | double | Lot group qty |
| SAMPLE_LOT_ID | string | Sample lot |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| OPER_ID | string | Operation ID |
| LAST_STEP_DATETIME | DateTime | Last step time |
| TARGET_DATE | string | TARGET_DATETIME이 포함되는 날짜 |
| PLAN_DATE | string | START_TIME이 포함되는 일자 |
| FILTERED_YN | string | Filtered flag |
| FILTER_REASON | string | Filter reason |
| ROW_INDEX | int | Row seq |

### 38. SAFETY_STOCK_DEMAND
Generated safety stock demands.

| Column | Type | Description |
|--------|------|-------------|
| DEMAND_ID | string | Demand ID |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| DUE_DATE | DateTime | 납기일 |
| DEMAND_QTY | double | Demand 수량 |
| DEMAND_PRIORITY | int | Demand 우선순위 |
| CUST_ID | string | 고객 ID |
| DEMAND_TYPE | string | Demand 유형 |
| MAX_LATENESS_DAY | double | 최대 납기 지연 허용 일수 |
| MAX_EARLINESS_DAY | double | 최대 조기 생산 허용 일수 |
| REF_DEMAND_ID | string | Ref demand |
| REF_ITEM_ID | string | Ref item |
| REF_SITE_ID | string | Ref site |
| REF_BUFFER_ID | string | Ref buffer |
| REF_DUE_DATE | DateTime | Ref due date |
| REF_CUST_ID | string | Ref customer |
| REF_DEMAND_TYPE | string | Ref demand type |
| ROW_INDEX | int | Row seq |

### 39. PATH_HISTORY_LOG
BOM path selection history.

| Column | Type | Description |
|--------|------|-------------|
| DEMAND_ID | string | Demand ID |
| PATH_ID | string | 전개 경로 ID |
| DEPTH | int | Depth |
| ROOT_ISB | string | Root ISB |
| FROM_ISB | string | From ISB |
| BOM_ID | string | BOM ID |
| TO_ISB | string | To ISB |
| SELECT_CNT | int | Select count |
| SHORT_CNT | int | Short count |
| PHASE_NO | int | Phase 번호 |

### 40. QUEUE_LOG
Resource queue snapshot.

| Column | Type | Description |
|--------|------|-------------|
| EVENT_DATE | string | Event date |
| RES_GROUP | string | Res group |
| RES_ID | string | Resource ID |
| LOT_GROUP_COUNT | int | Lot group count |
| LOT_COUNT | int | Lot count |
| LOT_QTY | double | Lot 수량 |
| ROW_INDEX | int | Row seq |

### 41. TAT_LOG
Turn-around-time analysis.

| Column | Type | Description |
|--------|------|-------------|
| DEMAND_ITEM_ID | string | Demand Item ID |
| FINAL_ITEM_ID | string |  |
| ITEM_ID | string | Item ID |
| BUFFER_ID | string | Buffer ID |
| OPER_ID | string | Operation ID |
| WAIT_TAT | double | 대기 시간 (TAT) |
| RUN_TAT | double | 가공 시간 (TAT) |
| TOTAL_TAT | double | Total TAT |
| TOTAL_TAT_D | double | Total TAT(days) |
| ROW_INDEX | int | Row seq |
| TOTAL_WAIT_TAT | double | Total wait TAT |
| TOTAL_RUN_TAT | double | Total run TAT |
| LOT_COUNT | int | Lot count |
| DEMAND_ISB | string | Demand ISB |
| BOM_ID | string | BOM ID |
| PATH_LIST | string | Path list |
| TAT_PATH | string | TAT path |
| BUFFER_SEQ | int | Buffer 순서 |
| OPER_SEQ | int | Operation 순서 |

### 42. OPER_WIP_LOG
Operation-level WIP snapshot.

| Column | Type | Description |
|--------|------|-------------|
| DATE | DateTime | Date |
| ITEM_ID | string | Item ID |
| ITEM_GROUP_ID | string | Item 그룹 ID |
| PROD_TYPE | string | 생산 유형 |
| CATEGORY_TYPE | string | Category type |
| OPER_ID | string | Operation ID |
| BUFFER_ID | string | Buffer ID |
| QTY | double | Quantity |

---

## JCA (Job Control Agent) Tables

### 43. JCA_WORK_LOT_LOG
JCA work lot processing log.

| Column | Type | Description |
|--------|------|-------------|
| EVENT_DATETIME | DateTime | Event time |
| LOT_ID | string | Lot ID |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| OPER_ID | string | Operation ID |
| QTY | double | Quantity |
| WORK_GROUP | string | Work group |
| WORK_STEP | string | Work step |
| AVAILABLE_TIME | DateTime | Available time |
| RUN_YN | string | Run flag |
| VALID_YN | string | Valid flag |
| REASON | string | Reason |

### 44. JCA_WORK_GROUP_LOG
JCA work group configuration.

| Column | Type | Description |
|--------|------|-------------|
| WORK_GROUP | string | Work group |
| WORK_STEP | string | Work step |
| SEQUENCE | int | Sequence |
| FINAL_ISB | string | Final ISB |
| ITEM_LIST | string | Item list |
| LOADED_RES_CNT | int | Loaded res count |
| LOADABLE_RES_CNT | int | Loadable res count |
| LOADED_RES_LIST | string | Loaded res list |
| LOADABLE_RES_LIST | string | Loadable res list |

### 45. JCA_PROFILE_LOG
JCA resource profile log.

| Column | Type | Description |
|--------|------|-------------|
| EVENT_DATETIME | DateTime | Event time |
| SITE_ID | string | Site ID |
| CALC_TYPE | string | Calc type |
| PHASE | int | Phase |
| WORK_GROUP | string | Work group |
| WORK_STEP | string | Work step |
| LOT_ID | string | Lot ID |
| LOT_TYPE | string | Lot type |
| QTY | int | Quantity |
| RES_ID | string | Resource ID |
| ARRIVAL_DATETIME | DateTime | Buffer 또는 Operation 도착 시간 |
| START_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | Buffer 또는 Operation에서의 생산 종료 시간 |
| RE_CALC_YN | string | Recalc flag |
| RUN_WIP_YN | string | Run WIP flag |

### 46. JCA_DECISION_LOG
JCA allocation decision log.

| Column | Type | Description |
|--------|------|-------------|
| EVENT_DATETIME | DateTime | Event time |
| WORK_GROUP | string | Work group |
| WORK_STEP | string | Work step |
| PHASE | int | Phase |
| OPERATION_TYPE | string | Operation type |
| ASSIGN_RESULT | string | Assign result |
| RANK | int | Rank |
| RANK_LOG | string | Rank log |
| RE_CALC_YN | string | Recalc flag |
| LOADED_RES_CNT | int | Loaded res count |
| LOADED_RES_LIST | string | Loaded res list |
| INFLOW_QTY | int | Inflow qty |
| WIP_LEVEL | double | WIP level |
| UP_RES_ID | string | Upstream res |
| DOWN_WORK_GROUP | string | Downstream group |
| DOWN_WORK_STEP | string | Downstream step |
| CALC_CANDIDATE_RES_CNT | int | Calc candidate res count |
| CALC_FILTERRED_RES_CNT | int | Calc filtered res count |
| CALC_FILTER_LOG | string | Calc filter log |
| CALC_PRIORITIZED_RES_CNT | int | Calc prioritized res count |
| CALC_PRIORITIZATION_LOG | string | Calc prioritization log |
| CALC_UP_RES_ID | string | Calc upstream res |
| UP_CANDIDATE_RES_CNT | int | Upstream candidate res count |
| UP_FILTERRED_EQP_CNT | int | Upstream filtered eqp count |
| UP_FILTER_LOG | string | Upstream filter log |

### 47. JCA_ADVANCE_LOG
JCA advance operation log.

| Column | Type | Description |
|--------|------|-------------|
| EVENT_DATETIME | DateTime | Event time |
| SITE_ID | string | Site ID |
| WORK_GROUP | string | Work group |
| WORK_STEP | string | Work step |
| PHASE | int | Phase |
| LOT_ID | string | Lot ID |
| QTY | double | Quantity |
| ADV_WORK_STEP | string | Adv work step |
| ADV_LOT_ID | string | Adv lot |
| ADV_AVAILABLE_TIME | DateTime | Adv available time |

---

## Agent & Developer Tables

### 48. AGENT_LOG_MASTER
Agent log schema definitions.

| Column | Type | Description |
|--------|------|-------------|
| AGENT_ID | string | Agent ID |
| TABLE_ID | string | Agent 기록 테이블 |
| SCHEMA_INFO | string | Agent 기록 테이블 스키마 정보 |

### 49. AGENT_LOG_VALUE
Agent log data values.

| Column | Type | Description |
|--------|------|-------------|
| AGENT_ID | string | Agent ID (허용값: EvenProductionAgent) |
| VALUES | string | Agent 계산 값 |
| TABLE_ID | string | Agent 기록 테이블 |

### 50. OPER_ADD_RES_LOG
Additional resource assignment log.

| Column | Type | Description |
|--------|------|-------------|
| OPER_ID | string | Operation ID |
| RES_GROUP_ID | string | Resource 그룹 ID |
| RES_ID | string | Resource ID |
| ADD_RES_GROUP_ID | string | Add res group |
| ADD_RES_ID | string | Add resource |
| ROUTING_ID | string | Routing ID |
| USAGE_PER | double | 단위 사용량 |
| REQ_CNT | int | Required count |
| ROW_INDEX | int | Row seq |

### 51. WIP_SNAPSHOT_LOG
WIP snapshot at specific dates.

| Column | Type | Description |
|--------|------|-------------|
| DATE | DateTime | Date |
| LOT_ID | string | Lot ID |
| ITEM_ID | string | Item ID |
| SITE_ID | string | Site ID |
| BUFFER_ID | string | Buffer ID |
| OPER_ID | string | Operation ID |
| OPER_GROUP_ID | string | Operation group |
| OPER_NAME | string | Operation name |
| OPER_GROUP_NAME | string | Oper group name |
| LOT_QTY | double | Lot 수량 |
| LOT_STATE | string | Lot state |
| DEMAND_ID | string | Demand ID |
| DEMAND_ITEM_ID | string | Demand Item ID |
| ITEM_GROUP_ID | string | Item 그룹 ID |
| PROD_TYPE | string | 생산 유형 |
| TARGET_DATETIME | DateTime | 목표 일시 |
| DUE_DATETIME | DateTime | 납기 일시 |
| QTY_UOM | string | 수량 단위 |
| CONV_QTY_UOM | string | 환산 수량 단위 |
| LOT_CONV_QTY | double |  |

### 52. DEVELOPER_LOG
Developer debug log.

| Column | Type | Description |
|--------|------|-------------|
| ITEM1~ITEM9 | string | Debug fields 1-9 |
