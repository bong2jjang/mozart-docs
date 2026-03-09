# SHORT_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 25
- **예약어 수**: 44

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | DEMAND_ID | String |  |  | Short이 발생한 Demand ID |
| 7 | DEMAND_ITEM_ID | String |  |  | Short이 발생한 Demand의 Item ID |
| 8 | DUE_DATE | String |  |  | Short이 발생한 Demand의 납기일자 |
| 9 | DEMAND_QTY | Double |  |  | Short이 발생한 Demand의 수량 |
| 10 | SHORT_SEQ | Int |  |  | Short Log가 기록되는 순서 (Short이 먼저 발생하더라도 기록은 늦게 되면 SHORT_SEQ는 더 큰 값 기록) |
| 11 | SHORT_TYPE | String |  |  | Short / Late / Remain 구분 |
| 12 | SHORT_CATEGORY | String |  |  | Short 사유 분류 기준 |
| 13 | SHORT_REASON | String |  |  | Short 사유 |
| 14 | SHORT_DETAIL_INFO | String |  |  | Short 상세 사유 |
| 15 | SHORT_QTY | Double |  |  | Short 수량 |
| 16 | ISB_ID | String |  |  | Short 발생한 ItemSiteBuffer |
| 17 | BOM_ID | String |  |  | Short 발생한 BOM ID |
| 18 | ROUTING_ID | String |  |  | Short 발생한 Routing ID |
| 19 | OPER_ID | String |  |  | Short 발생한 Operation ID |
| 20 | RES_ID | String |  |  | Short 발생한 Resource ID |
| 21 | REF_PLAN_VER | String |  |  | Short 발생한 참조 계획 ID |
| 22 | FROM_LATE_DATETIME | DateTime |  |  | Late 사유가 발생한 최초 시점 |
| 23 | TO_LATE_DATETIME | DateTime |  |  | Late 사유가 최종적으로 발생한 시점 |
| 24 | SHORT_CNT | Int |  |  | Late 사유가 호출된 횟수 |
| 25 | RETRY_CNT | Int |  |  |  |

## 예약어 (Reserved Words)

### SHORT_CATEGORY

| 값 | 설명 |
|---|------|
| Material | 자재 관련 사유로 Short이 발생한 경우 |
| Capacity | 자원의 Capacity 관련 사유로 Short이 발생한 경우 |
| Tat | TAT 관련 사유로 Short이 발생한 경우 |
| Constraint | 제약 관련된 사유로 Short이 발생한 경우 |
| FixedPlan | 선행, 후행 가능일을 위반하거나 주문 수량을 위반한 경우 |
| Etc | 기타 |
| StdData | 기준 정보 오류로 Short이 발생한 경우 |

### SHORT_REASON

| 값 | 설명 |
|---|------|
| HAWAMaterialShort | Assembly BOM에서 반제품 및 타 자재 공급 실패로, 생산이 안되는 경우의 사유코드입니다. 대상 Item의 ITEM_TYPE = “Material” 인 경우에만 적용됩니다. |
| FERTMaterialShort | Assembly BOM에서 자재 공급 실패로, 생산이 안되는 경우의 사유코드입니다. 대상 Item의 ITEM_TYPE = “Product ” 인 경우에만 적용됩니다. FERT 는 SAP 용어로 생산 반제품을 의미합니다. |
| UnReleasedFERTMaterialShort | PBF, PBO 모듈에서 계획 수립을 위해서는 투입 목표에 대한 Lot이 투입 되어야 하는데, BlockProductSupply 옵션을 켜서, Lot 투입이 안되는 경우, 해당 Item의 ITEM_TYPE = “Product” 인 경우 본 사유로 기록합니다. |
| NoResourceCapacity | OPER_RES 정보가 있으나 해당 Resource에 Capacity 설정이 안되어 있는 경우의 사유 코드입니다.                                     (또는, 사용가능한 Resource 중에 잔여 Capacity가 있는 Resource... |
| NoOpResourceInfo | OPERATION의 유형이 “Operation” 인 경우 Resource 정보(OPER_RES) 정보가 없는 경우 생산 계획을 수립할 수 없습니다. 할당 대상 Operation의 Resource정보가 설정되지 않은 경우 SHORT 사유입니다. |
| LackOfResourceCapacity | 할당 대상 Operation에서 Resource의 Capacity가 부족하여 지연, SHORT 이 발생하는 경우의 사유코드입니다. |
| MultipleBatchSizeShort | 현재 MBS(Multiple Batch Size) 기능이 PBO 모듈에만 구현이 되어 있음으로 PBO 전용 Short 사유입니다. MBS 제약을 지키기 위해 주문량을 모두 생산하지 못하는 경우 에 기록되는 사유입니다. |
| NoOpAddResourceInfo | 할당 대상 Operation에서 AddResource의 Capacity가 부족하거나 AddResource가 없어서 지연, SHORT이 발생하는 경우의 사유코드입니다. |
| LackOfSetupResourceCapacity | 할당 대상 Operation에서 SetupResource의 Capacity가 부족하여 지연, SHORT이 발생하는 경우의 사유코드입니다. |
| LackOfWip | 납기여유가 짧은 경우 TAT 를 고려했을 때 WIP 없이 RTF 달성이 불가능한 경우가 발생합니다. 즉, 생산 가능한 시간 이내에 WIP이 없어 납기 달성이 불가능한 경우에 해당 사유로 SHORT 을 기록합니다. |
| BWBomPathShort | 백워드 TARGET 전개 시 Operation 납기(Target Date)가 계획 시작일보다 빠르게 된 경우에 발생할 수 있는 SHORT 유형입니다. 다만, 본 유형은 백워드 BOM PATH 가 TAT 누적할 때 최소 PATH 로 오지 못한 경우 발생합니다. |
| NoBwBomPathShort | PBO, PBB 모듈에서 Backward BOMpath 를 찾지 못해 생산이 안되는 경우에 기록하는 사유입니다. |
| LateReleaseLot | Lot 투입 목표 시점이 Plan Start 시간보다 과거인 경우, 즉 투입 시점부터 Target 보다 늦게 투입되어 Late/Short 이 발생하는 경우의 사유코드입니다. 투입 시점이 이미 늦은 경우 현재 엔진에서 최소 Late 가 발생합니다. |
| DummyOperationLate | Dummy Operation에서 Tat를 더한 경우 지연, SHORT이 발생하는 경우의 사유코드입니다. |
| ItemConstraint | Constraint 에 의해 납기를 만족하는 계획 수립을 할 수 없는 경우의 SHORT 사유입니다. Constraint (제약)를 사용하는 경우 발생할 수 있는 사유입니다. |
| ResourceConstraint | Resource 정보에 설정된 Constraint 에 의해 SHORT 혹은 Late가 발생하는 경우의 사유 코드입니다. |
| (FilterName) | Rule Point 중 필터류 Factor 에 의해 납기를 충족시키지 못하는 경우 SHORT 사유입니다. 대상 Rule 은 FilterBucket, FilterLotGroup, FilterLotInPhase, FilterArrange 등에 해당합니다. |
| PrebuildViolation | 선행가능일을 위반하여 Short이 발생한 경우의 사유코드입니다. |
| LateAllowanceViolation | 후행가능일을 위반하여 Short이 발생한 경우의 사유코드입니다. |
| OrderQuantityViolation | REFERENCE PLAN(참조 계획)을 확정 계획으로 사용할 때 확정 계획보다 Demand 수량이 적어서 확정 계획과 차질이 발생하는 경우의 사유코드입니다. |
| LackOfReferencePlan | 확정 계획 상의 제품 생산 계획 대비 Demand 수량이 많은 경우 Demand 수량 - 확정 계획량 만큼은 해당 Phase에 생산계획 수립이 안됩니다. Phase 단위 계획 결과에서 해당 사유로 SHORT_LOG 를 기록합니다. |
| FailToFindTarget | 목표 생산 계획 정보가 없는 경우입니다. |
| AlreadyShortLot | 하나의 Lot에서 분리되어 진행된 Lot이 후공정에서 Short이 발생했을 때, 남아있는 Lot도 더 이상 진행시키지 않고 Short 처리한 경우의 사유코드입니다. |
| UndefinedReason | 정의되지 않은 사유로 Short or Late가 발생하는 경우의 사유코드입니다. |
| OverDueDemand | 주문의 납기(Due_Date + Max_Lateness_Day)가 엔진 시작 시간보다 이전 계획인 경우의 사유코드입니다. |
| RemainingLots | Plan 기간이 종료 될 때까지 할당하지 못한 Lot 중 생산 가능 여부를 판단하지 못한 Lot에 대한 사유코드입니다. (Lot의 Target DueDate가 Plan 기간보다 미래여서 판단하지 못한 경우) |
| UnReleasedHAWAMaterialShort | PBF, PBO 모듈에서 계획 수립을 위해서는 투입 목표에 대한 Lot이 투입 되어야 하는데, ApplyInfinteMaterial 옵션이 꺼져있거나, Infinity_Material_YN=N 여서 Lot 투입이 안되는 경우, 해당 Item의 ITEM_TYPE =... |
| Delayed Target Date | Lot의 현재 시간이 주문의 납기(Due_Date + Max_Lateness_Day)를 넘긴 경우에 발생하는 사유코드 입니다. |
| LackOfCapacity | 설비 Capa.가 부족해서 Short이 발생한 경우의 사유코드입니다. |
| InvalidBuffer | CFG/ODV_DEMAND에 설정된 버퍼 코드가 CFG/ODV_BUFFER_MASTER에 없는 경우입니다. |
| InvalidCustomer | CFG/ODV_DEMAND에 설정된 고객 코드가 CFG/ODV_CUST_MASTER에 없는 경우입니다. |
| InvalidItem | CFG/ODV_DEMAND에 설정된 제품 코드가 CFG/ODV_ITEM_MASTER에 없는 경우입니다. |
| InvalidItemSiteBuffer | CFG/ODV_DEMAND에 설정된 제품 코드&사이트 코드&버퍼 코드가 ITEM_SITE_BUFFER_MASTER에 없는 경우입니다. |
| InvalidSite | CFG/ODV_DEMAND에 설정된 사이트 코드가 SITE_MASTER에 없는 경우입니다. |

### SHORT_TYPE

| 값 | 설명 |
|---|------|
| Short | 납기일+후행 가능일보다 늦은 경우 |
| Late | 납기일보다 늦은 경우 |
| Remain | PLAN START DATE + PLAN PERIOD <  DEMAND _납기일 인 경우  (해당 사유는 PBF에서만 발생합니다) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| SHORT_TYPE | Short, Late, Remain |
| SHORT_CATEGORY | Material, Capacity, Tat, Constraint, FixedPlan, Etc |
| SHORT_REASON | HAWAMaterialShort, FERTMaterialShort, UnReleasedFERTMaterialShort, NoResourceCapacity, NoOpResourceInfo, LackOfResour... |
