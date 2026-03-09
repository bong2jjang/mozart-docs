# 표준 입력 스키마

> Source: `Mozart.SeePlan.Aleatorik/Generated/AleatorikModel.Inputs.cs`
> 총 65개 테이블

---

## 1. PLAN_CONFIG (Planning Configuration)
Planning version and execution settings.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PLAN_VER | string | Y | 결과 정보 버전 |
| PLAN_TYPE | string | | 계획 수립 방식 |
| SCENARIO_ID | string | | 시나리오 ID |
| PLAN_PERIOD | int | | 계획 수립 기간 |
| PLAN_START_DATETIME | DateTime | | 계획 수립 시작 시간 |
| REF_PLAN_VER | string | | 참조 계획 ID |
| EXECUTION_TYPE | string | | 실행 타입 |
| PLAN_CYCLE_ID | string | | 계획 사이클 ID |
| DESCRIPTION | string | | 부가 설명 |
| DEMAND_VER | string | | Demand 버전 |
| APPLY_REF_PLAN_YN | string | | 참조 계획 적용 여부 (Y/N) |
| INBOUND_SCENARIO_ID | string | | 인바운드 시나리오 ID |


### Reserved Words (PLAN_CONFIG)

#### PLAN_TYPE
| Value | Description |
|-------|-------------|
| `Manual` | 수동 계획 수립 |
| `Auto` | 자동 계획 수립 |

#### APPLY_REF_PLAN_YN
| Value | Description |
|-------|-------------|
| `Y` | 참조 계획 적용 |
| `N` | 참조 계획 미적용 |

## 2. SCENARIO_CONFIG (Scenario Configuration)
Module-level scenario execution settings.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| SCENARIO_ID | string | Y | 시나리오 ID |
| MODULE_ID | string | Y | 모듈 ID |
| STAGE_ID | string | | Stage ID |
| REF_MODULE_ID | string | | 참조 모듈 ID |
| MODULE_TYPE | string | | 모듈 타입 |
| MAX_PHASE_NO | int | | 모듈의 Phase 개수 |
| MODULE_SEQ | int | | 모듈 실행 순서 |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (SCENARIO_CONFIG)

#### MODULE_TYPE -> `ModuleType` enum
모듈의 실행 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Global` | 전체 공통 설정 |
| `PBB` | Pegging-Based Backward (역방향 Pegging 기반) |
| `PBF` | Pegging-Based Forward (정방향 Pegging 기반) |
| `PBO` | Pegging-Based Optimization (Pegging 기반 최적화) |
| `SBF` | Simulation-Based Forward (시뮬레이션 기반 정방향) |

> Code: `PersistInputs.cs` - `ATUtil.StringToEnum<ModuleType>(entity.MODULE_ID, ModuleType.None)`

## 3. SCENARIO_OPTION_CONFIG (Scenario Options)
Key-value option configuration per scenario/module/phase.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| SCENARIO_ID | string | Y | 시나리오 ID |
| MODULE_ID | string | Y | 모듈 ID |
| PHASE_NO | int | Y | Phase 번호 |
| OPTION_ID | string | Y | 옵션 ID |
| OPTION_VALUE | string | | 옵션 값 |
| CALENDAR_ID | string | | Calendar ID |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (SCENARIO_OPTION_CONFIG)

#### OPTION_ID (주요 시나리오 옵션 목록)
`ATReservedCode.cs`에 정의된 시나리오 옵션 이름들입니다.
| Option ID | Description |
|-----------|-------------|
| `DemandItems` | 계획 대상 Demand Item 목록 |
| `DemandDueDate` | Demand 납기일 기준 |
| `DefaultRuleSet` | 기본 Ruleset ID |
| `DefaultCalendar` | 기본 Calendar ID |
| `DiscardYield` | 수율 무시 여부 |
| `LotSplitOption` | Lot 분할 옵션 |
| `LotSplitOnNonWorkingPeriod` | 비가동 기간 Lot 분할 |
| `ApplyAllocationGroupSeq` | Allocation Group 순서 적용 |
| `DemandSmoothing` | Demand 평활화 |
| `PlanPeriod` | 계획 수립 기간 |

#### MODULE_ID
| Value | Description |
|-------|-------------|
| `Global` | 모든 모듈에 공통 적용되는 옵션 |

## 4. STAGE_MASTER (Stage Master)
Stage definitions for multi-stage planning.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| STAGE_ID | string | Y | Stage ID |
| DESCRIPTION | string | | 부가 설명 |

## 5. ITEM_MASTER (Item Master)
Core product/material master data.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| ITEM_NAME | string | | Item 이름 |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| ITEM_PRIORITY | int | | Item 우선순위 |
| PROCUREMENT_TYPE | string | | 조달 유형 (MAKE/BUY) |
| PROD_TYPE | string | | 생산 유형 |
| ITEM_SIZE_TYPE | string | | Item 크기 유형 |
| DESCRIPTION | string | | 부가 설명 |
| ITEM_SPEC | string | | Item 사양 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (ITEM_MASTER)

#### ITEM_TYPE -> `ItemType` enum
Item의 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Product` | 완제품 (생산 대상) |
| `Material` | 원자재/부자재 (투입 대상) |
| `None` | 미지정 |

> Code: `PersistInputs.cs` line 222 - `ATUtil.StringToEnum<ItemType>(entity.ITEM_TYPE, ItemType.None)`
> Logic: ITEM_TYPE이 None인 경우 경고 로그 출력 후 해당 Item은 로드되지 않습니다.

## 6. ITEM_PROP_VALUE (Item Property Values)
Dynamic property values per item.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ITEM_ID | string | Y | Item ID |
| PROP_ID | string | Y | Property ID |
| PROP_VALUE | string | | Property 값 |
| CALENDAR_ID | string | | Calendar ID |

## 7. SITE_MASTER (Site Master)
Factory/site definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| SITE_ID | string | Y | Site ID |
| SITE_NAME | string | | Site 이름 |
| DESCRIPTION | string | | 부가 설명 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 8. BUFFER_MASTER (Buffer/Inventory Point Master)
Inventory storage point definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BUFFER_ID | string | Y | Buffer ID |
| BUFFER_SEQ | int | | Buffer 순서 |
| STAGE_ID | string | | Stage ID |
| DESCRIPTION | string | | 부가 설명 |
| FINAL_ITEM_BUFFER_YN | string | | 최종 제품 Buffer 여부 (Y/N) |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (BUFFER_MASTER)

#### FINAL_ITEM_BUFFER_YN
최종 제품 Buffer 여부를 지정합니다.
| Value | Description |
|-------|-------------|
| `Y` | 최종 제품 Buffer (FGS Buffer) |
| `N` | 일반 Buffer |

> Code: `PersistInputs.cs` line 123 - `ATUtil.BoolYN(entity.FINAL_ITEM_BUFFER_YN, false)`

## 9. ITEM_SITE_BUFFER_MASTER (ISB - Item/Site/Buffer)
Item-Site-Buffer combination master (key planning entity).

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ITEM_ID | string | Y | Item ID |
| SITE_ID | string | Y | Site ID |
| BUFFER_ID | string | Y | Buffer ID |
| INFINITY_MATERIAL_YN | string | | 무한 재고 설정 유무 (Y/N) |
| INPUT_LOT_SIZE | double | | 투입 Lot 사이즈 |
| NOCARRY_YN | string | | 재고 이월 불가 여부 (Y/N) |
| DESCRIPTION | string | | 부가 설명 |
| SAFETY_STOCK_QTY | int | | 안전 재고 수량 |
| SAFETY_STOCK_DAY | int | | 안전 재고 일수 |
| QTY_UOM | string | | 수량 단위 |
| CONV_QTY_UOM | string | | 환산 수량 단위 |
| CONV_QTY_RATIO | double | | 환산 수량 비율 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (ITEM_SITE_BUFFER_MASTER)

#### INFINITY_MATERIAL_YN
무한 재고 설정 유무입니다.
| Value | Description |
|-------|-------------|
| `Y` | 무한 자재 공급 (Material ItemType만 적용 가능) |
| `N` | 일반 재고 관리 |

> Logic: `ITEM_TYPE`이 Material이 아닌 Item에 `Y`를 설정하면 자동으로 `N`으로 보정됩니다.

#### NOCARRY_YN
재고 이월 불가 여부입니다.
| Value | Description |
|-------|-------------|
| `Y` | 재고 이월 불가 |
| `N` | 재고 이월 허용 |

## 10. DEMAND (Demand/Order)
Customer demand and order records.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| DEMAND_ID | string | Y | Demand ID |
| ITEM_ID | string | | Item ID |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| DUE_DATE | string | | 납기일 |
| DEMAND_QTY | double | | Demand 수량 |
| DEMAND_PRIORITY | int | | Demand 우선순위 |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| MAX_LATENESS_DAY | int | | 최대 납기 지연 허용 일수 |
| MAX_EARLINESS_DAY | int | | 최대 조기 생산 허용 일수 |
| DEMAND_GROUP_ID | string | | Demand 그룹 ID |
| DESCRIPTION | string | | 부가 설명 |
| DUE_DATETIME | DateTime | | 납기 일시 |
| FINAL_ITEM_BUFFER_ID | string | | Final item buffer |
| DEMAND_VER | string | | Demand 버전 |
| EARLY_SHIPMENT_DATETIME | DateTime | | Earliest allowed shipment |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 11. BOM_MASTER (BOM Header)
Bill of Materials header information.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BOM_ID | string | Y | BOM ID |
| BOM_TYPE | string | | BOM 유형 |
| BOM_PRIORITY | int | | BOM 우선순위 |
| EFF_START_DATETIME | DateTime | | 유효 시작일 |
| EFF_END_DATETIME | DateTime | | 유효 종료일 |
| DEMAND_ID | string | | Demand ID |
| DEMAND_ITEM_ID | string | | Demand Item ID |
| DESCRIPTION | string | | 부가 설명 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (BOM_MASTER)

#### BOM_TYPE -> `BomType` enum
BOM의 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Assembly` | 서로 같거나 다른 둘 이상의 아이템이 하나로 합쳐지는 것 |
| `SplitCo` | 하나의 아이템이 들어가 하나 이상의 아이템들로 나누어지는 것 (Co-Product) |
| `SplitBy` | 하나의 아이템이 들어가 하나 이상의 아이템들로 나누어지는 것 (By-Product) |
| `Normal` | 아이템 변경 없이 버퍼만 이동하는 것 (MOVE) |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 273 - `ATUtil.StringToEnum<BomType>(entity.BOM_TYPE, BomType.None)`
> Logic: BOM_TYPE이 None이면 경고 로그 출력 후 해당 BOM은 로드되지 않습니다.

## 12. BOM_DETAIL (BOM Components)
BOM from/to component relationships.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BOM_ID | string | Y | BOM ID |
| FROM_ITEM_ID | string | Y | 투입(From) Item ID |
| FROM_SITE_ID | string | Y | 투입(From) Site ID |
| FROM_BUFFER_ID | string | Y | 투입(From) Buffer ID |
| FROM_QTY | double | | 투입 수량 |
| TO_ITEM_ID | string | Y | 산출(To) Item ID |
| TO_SITE_ID | string | Y | 산출(To) Site ID |
| TO_BUFFER_ID | string | Y | 산출(To) Buffer ID |
| TO_QTY | double | | 산출 수량 |
| CALENDAR_ID | string | | Calendar ID |

## 13. BOM_ROUTING (BOM-Routing Mapping)
Links BOMs to routing processes.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BOM_ID | string | | BOM ID |
| ROUTING_ID | string | | Routing ID |
| ROUTING_PRIORITY | int | | BOM에 대한 Routing 우선순위 (오름차순) |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 14. BOM_DETAIL_ALT (BOM Alternatives)
Alternative material substitution rules.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BOM_ID | string | Y | BOM ID |
| ITEM_ID | string | Y | Item ID |
| SITE_ID | string | Y | Site ID |
| BUFFER_ID | string | Y | Buffer ID |
| ALT_ITEM_ID | string | Y | 대체 Item ID |
| ALT_SITE_ID | string | Y | 대체 Site ID |
| ALT_BUFFER_ID | string | Y | 대체 Buffer ID |
| ALT_PRIORITY | int | | 대체 우선순위 |

## 15. BOM_CONTROL (BOM Control Rules)
BOM-level control actions and restrictions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| BOM_ID | string | Y | BOM ID |
| ACTION_TYPE | string | | 제어 방식 (허용값: Fix, Exclude) |
| CONTROL_TYPE | string | Y | 제어 대상 코드 |
| CONTROL_ID | string | Y | 제어 기준 유형 (허용값: DemandID, DemandItemID) |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (BOM_CONTROL)

#### ACTION_TYPE -> `ActionType` enum
BOM 제어 방식을 지정합니다.
| Value | Description |
|-------|-------------|
| `Fix` | 해당 BOM을 고정하여 반드시 사용 |
| `Exclude` | 해당 BOM을 제외하여 사용 불가 |
| `None` | 미지정 |

#### CONTROL_TYPE -> `ControlType` enum
제어 기준 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `DemandID` | Demand ID 기준으로 BOM 제어 |
| `DemandItemID` | Demand Item ID 기준으로 BOM 제어 |
| `None` | 미지정 |

## 16. ROUTING_MASTER (Routing Header)
Manufacturing process route definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ROUTING_ID | string | Y | Routing ID |
| EFF_START_DATETIME | DateTime | | 유효 시작일 |
| EFF_END_DATETIME | DateTime | | 유효 종료일 |
| DESCRIPTION | string | | 부가 설명 |

## 17. ROUTING_OPER (Routing Operations)
Operations within a routing.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ROUTING_ID | string | Y | Routing ID |
| OPER_ID | string | Y | Operation ID |
| OPER_SEQ | int | | Operation 순서 |
| OPER_TYPE | string | | Operation 유형 |
| WAIT_TAT | double | | 대기 시간 (TAT) |
| RUN_TAT | double | | 가공 시간 (TAT) |
| OPER_YIELD | double | | 수율 (default: 1.0) |
| TAT_CALENDAR_ID | string | | TAT Calendar ID |
| YIELD_CALENDAR_ID | string | | 수율 Calendar ID |
| MULTI_LOT_SIZE | double | | Multi-Lot 사이즈 |
| SINGLE_LOT_SIZE | double | | Single Lot 사이즈 |
| DESCRIPTION | string | | 부가 설명 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (ROUTING_OPER)

#### OPER_TYPE -> `OperType` enum
Operation의 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Operation` | 실제 가공 공정 (Resource 할당 필요) |
| `Buffer` | Buffer 공정 |
| `Dummy` | 가상 공정 (Resource 할당 불가) |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 2736 - `ATUtil.StringToEnum<OperType>(entity.OPER_TYPE, OperType.None)`
> Logic: OPER_TYPE이 Dummy인 경우 해당 Operation에 Resource를 할당할 수 없습니다. TAT_CALENDAR_ID는 `#Tat` 타입 Calendar만, YIELD_CALENDAR_ID는 `#Yield` 타입 Calendar만 사용 가능합니다.

## 18. RES_MASTER (Resource Master)
Equipment/resource definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RES_ID | string | Y | Resource ID |
| RES_CATEGORY_TYPE | string | | Resource 카테고리 |
| RES_TYPE | string | | Resource 유형 |
| RES_SITE_ID | string | | Resource 위치 Site ID |
| RES_LOCATION | string | | Resource 물리적 위치 |
| CAPA_TYPE | string | | Capacity 유형 |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| INFINITY_CAPA_YN | string | | 무한 Capacity 여부 (Y/N) |
| RES_NAME | string | | Resource 이름 |
| CAPA_CALENDAR_ID | string | | Capacity Calendar ID |
| SETUP_ID | string | | Setup ID |
| UTIL_RATIO_CALENDAR_ID | string | | 가동률 Calendar ID |
| PM_ID | string | | 예방 보전(PM) ID |
| UTIL_RATIO | double | | 가동률 |
| LOT_ALLOCATION_POLICY_TYPE | string | | Lot 할당 정책 |
| DESCRIPTION | string | | 부가 설명 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (RES_MASTER)

#### RES_CATEGORY_TYPE -> `ResourceCategory` enum
Resource의 카테고리를 지정합니다.
| Value | Description |
|-------|-------------|
| `Resource` | 주 설비 |
| `AddResource` | 부수 설비 |
| `SetupResource` | Setup 전용 설비 (Crew) |
| `None` | 미지정 (오류) |

#### RES_TYPE -> `ResourceType` enum
Resource의 스케줄링 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Table` | 테이블 방식 (시간 기반 배정) |
| `Inline` | 인라인 방식 (연속 처리) |
| `Batch` | 배치 방식 (묶음 처리) |
| `UnitBatch` | 단위 배치 |
| `LotBatch` | Lot 배치 |
| `Dummy` | 가상 설비 |
| `None` | 미지정 (RES_CATEGORY가 Resource인 경우 오류) |

> Logic: CAPA_TYPE이 Quantity인 경우 RES_TYPE은 자동으로 Table로 변환됩니다.

#### CAPA_TYPE -> `CapacityType` enum
Capacity 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Time` | 시간 기반 Capacity |
| `Quantity` | 수량 기반 Capacity |
| `Count` | 횟수 기반 Capacity |
| `None` | 미지정 (SetupResource인 경우 자동으로 Time 할당) |

#### INFINITY_CAPA_YN
| Value | Description |
|-------|-------------|
| `Y` | 무한 Capacity (Infinite 모드) |
| `N` | 유한 Capacity (Finite 모드) |

#### LOT_ALLOCATION_POLICY_TYPE -> `LotReservationPolicy` enum
Lot 예약 정책을 지정합니다. RES_CATEGORY=Resource, CAPA_TYPE=Time인 경우만 적용됩니다.
| Value | Description |
|-------|-------------|
| `Lot` | Lot 단위 예약 |
| `Split` | Lot 분할 후 예약 |
| `LotGroup` | Lot 그룹 단위 예약 |
| `None` | 미지정 (기본값: Lot) |

> Logic: PM_ID, SETUP_ID, LOT_ALLOCATION_POLICY_TYPE은 RES_CATEGORY='Resource'이고 CAPA_TYPE='Time'인 경우만 설정 가능합니다. CAPA_CALENDAR_ID는 `#Capacity` 타입 Calendar만, UTIL_RATIO_CALENDAR_ID는 `#UtilizationRate` 타입 Calendar만 사용 가능합니다.

## 19. RES_GROUP_MASTER (Resource Group)
Resource grouping for scheduling.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RES_GROUP_ID | string | Y | Resource 그룹 ID |
| RES_GROUP_SEQ | int | | Allocation Group 내에서 Resource Group의 할당 순서 |
| ALLOCATION_GROUP_ID | string | | 할당 그룹 ID |
| RESORT_YN | string | | 재정렬 여부 (Y/N) |
| LOT_ALLOCATION_POLICY_TYPE | string | | Lot 할당 정책 |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (RES_GROUP_MASTER)

#### LOT_ALLOCATION_POLICY_TYPE -> `LotAllocationPolicy` enum
Lot 할당 정책을 지정합니다.
| Value | Description |
|-------|-------------|
| `LotGroup` | Lot 그룹 단위 할당 (기본값) |
| `Lot` | 개별 Lot 단위 할당 |
| `LotSplitMerge` | Lot 분할/병합 허용 |
| `None` | 미지정 (기본값: LotGroup) |

#### RESORT_YN
| Value | Description |
|-------|-------------|
| `Y` | 재정렬 적용 |
| `N` | 재정렬 미적용 |

## 20. OPER_RES (Operation-Resource Mapping)
Links operations to resources with capacity info.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ROUTING_ID | string | Y | Routing ID |
| OPER_ID | string | Y | Operation ID |
| RES_ID | string | Y | Resource ID |
| FLOW_DURATION | double | | Usage Per * Lot 수량 만큼 소요된 이후 추가로 소요되는 시간 (Resource는 다음 재공 처리 가능) |
| USAGE_PER | double | | 단위 사용량 |
| USAGE_PER_CALENDAR_ID | string | | Usage Per에 대한 Calendar ID |
| FLOW_DURATION_CALENDAR_ID | string | | Flow duration calendar |
| RES_PRIORITY | int | | Resource 우선순위 |
| BATCH_SIZE | double | | Res Type = Batch 일 때, 배치 크기 입력 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 21. OPER_ADD_RES (Additional Resources)
Additional/sub resources required for operations.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| OPER_ID | string | | Operation ID |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| RES_ID | string | | Resource ID |
| FROM_ITEM_ID | string | | 투입(From) Item ID |
| TO_ITEM_ID | string | | 산출(To) Item ID |
| ADD_RES_GROUP_ID | string | | 부수 설비 그룹 코드 |
| ADD_RES_ID | string | | 부수 설비 코드 |
| ROUTING_ID | string | | Routing ID |
| PRIORITY | int | | 부수 설비의 우선 순위 |
| USAGE_PER | double | | 단위 사용량 |
| REQ_CNT | int | | Required count |

## 22. CALENDAR_MASTER (Calendar Header)
Calendar definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CALENDAR_ID | string | Y | Calendar ID |
| CALENDAR_TYPE | string | | Calendar 타입 (허용값: #Capacity, #Yield, #Tat, #UsagePer, #UtilizationRate, #Constraint, #FlowTime) |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (CALENDAR_MASTER)

#### CALENDAR_TYPE
Calendar의 용도를 지정합니다. `ATReservedCode.cs`에 정의된 상수값입니다.
| Value | Description |
|-------|-------------|
| `#Capacity` | Capacity Calendar (설비 가용량 정의) |
| `#Yield` | 수율 Calendar |
| `#Tat` | TAT(Turn-Around Time) Calendar |
| `#UsagePer` | 단위 사용량 Calendar |
| `#FlowTime` | Flow Time Calendar |
| `#UtilizationRate` | 가동률 Calendar |
| `#Constraint` | 제약 Calendar |

> Logic: 각 Calendar는 용도에 맞는 테이블 컬럼에만 연결 가능합니다. 예: RES_MASTER.CAPA_CALENDAR_ID에는 `#Capacity`만, ROUTING_OPER.TAT_CALENDAR_ID에는 `#Tat`만 사용 가능합니다.

## 23. CALENDAR_DETAIL (Calendar Patterns)
Calendar pattern details.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CALENDAR_ID | string | Y | Calendar ID |
| PATTERN_ID | string | Y | Bucket Date가 속한 기간의 PATTERN ID |
| EFF_START_DATETIME | DateTime | | 유효 시작일 |
| EFF_END_DATETIME | DateTime | | 유효 종료일 |
| PATTERN_TYPE | string | | Calendar Pattern (허용값: Everyday, EveryNdays, DaysOfWeek, DaysOfMonth) |
| PATTERN_VALUE | string | | Pattern 반복 주기 또는 요일을 입력 (패턴 유형에 따라 달라짐) (허용값: (Null), 00 (Day 기준 적용 주기), Mon,Tue,Wed,Thu,Fri,Sat,Sun (요일 선택), 1,11,21 (매달 n일)) |
| PATTERN_PRIORITY | int | | Pattern 적용 우선순위 (오름차순) |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (CALENDAR_DETAIL)

#### PATTERN_TYPE -> `CalendarPatternType` enum
Calendar 반복 패턴을 지정합니다.
| Value | Description |
|-------|-------------|
| `Everyday` | 매일 반복 |
| `DaysOfWeek` | 요일 기반 반복 |
| `EveryNDays` | N일 주기 반복 |
| `DaysOfMonth` | 매월 특정일 반복 |
| `Period` | 기간 단위 |
| `OneTime` | 1회성 (EFF_START_DATE, EFF_END_DATE를 설정된 값 그대로 사용) |
| `None` | 미지정 (오류) |

#### PATTERN_VALUE
PATTERN_TYPE에 따라 입력 형식이 달라집니다.
| PATTERN_TYPE | PATTERN_VALUE | Example |
|-------------|--------------|---------|
| `Everyday` | (Null) | - |
| `EveryNDays` | N (Day 기준 주기) | `7` (7일마다) |
| `DaysOfWeek` | 요일 (쉼표 구분) | `Mon,Wed,Fri` |
| `DaysOfMonth` | 매달 n일 (쉼표 구분) | `1,11,21` |
| `OneTime` | (Null) | - |

> Code: `PersistInputs.cs` line 1232 - `ATUtil.StringToEnum<CalendarPatternType>(entity.PATTERN_TYPE, CalendarPatternType.None)`
> Logic: EveryNDays에서 PATTERN_VALUE가 비어 있으면 (EFF_END_DATE - EFF_START_DATE) 일수로 자동 계산됩니다.

## 24. CALENDAR_BASED_ATTR (Calendar Attributes)
Calendar-attached property values.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CALENDAR_ID | string | Y | Calendar ID |
| PATTERN_ID | string | Y | Bucket Date가 속한 기간의 PATTERN ID |
| PROP_TYPE | string | Y | Property type |
| PROP_VALUE | string | | Property 값 |
| PROP_DATA_TYPE | string | | Value data type |
| VALUE_UOM | string | | Value unit of measure |


### Reserved Words (CALENDAR_BASED_ATTR)

#### PROP_TYPE (ATTR_TYPE)
Calendar 속성 유형을 지정합니다. `ATReservedCode.cs`에 정의된 상수값입니다.
| Value | Description | Data Type |
|-------|-------------|-----------|
| `#Capacity` | Capacity 값 | Double |
| `#WorkTime` | 가동 시간 (형식: hh:mm:ss,hh:mm:ss) | String |
| `#OffTime` | 비가동 시간 (형식: hh:mm:ss,hh:mm:ss,Name,Y/N) | String |
| `#RunTat` | 가공 TAT | Double |
| `#WaitTat` | 대기 TAT | Double |
| `#Yield` | 수율 (0 &lt; Double &lt;= 1) | Double |
| `#UsagePer` | 단위 사용량 | Double |
| `#UtilizationRate` | 가동률 (0 &lt; Double &lt;= 1) | Double |
| `#Constraint` | 제약 Capacity | Double |
| `#FlowTime` | Flow Time | Double |
| `#InfiniteMaterial` | 무한 자재 공급 | Int |

> Logic: Calendar_TYPE이 `#Capacity`인 경우 PROP_TYPE은 `#Capacity`, `#WorkTime`, `#OffTime`만 허용됩니다.
> `#OffTime` 값 형식: `시작시간,종료시간,OffTime명,분할여부(Y/N)` (세미콜론으로 복수 입력)
> `#WorkTime` 값 형식: `시작시간,종료시간` (세미콜론으로 복수 입력)

#### PROP_DATA_TYPE -> `DataType` enum
| Value | Description |
|-------|-------------|
| `String` | 문자열 |
| `Int` | 정수 |
| `Double` | 실수 |
| `DateTime` | 날짜/시간 |
| `None` | 미지정 (오류) |

## 25. WIP (Work-In-Process)
Current inventory and WIP status.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| WIP_ID | string | Y | WIP ID |
| STAGE_ID | string | | Stage ID |
| WIP_QTY | double | | WIP 수량 |
| WIP_TYPE | string | | WIP 타입 (Wip or Inventory) |
| WIP_STATUS | string | | WIP 상태 |
| ITEM_ID | string | | Item ID |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| ROUTING_ID | string | | Routing ID |
| OPER_ID | string | | Operation ID |
| RES_ID | string | | Resource ID |
| AVAILABLE_DATETIME | DateTime | | 사용 가능 시작 시간 |
| TRACK_IN_DATETIME | DateTime | | Resource 로딩 시간 |
| DEMAND_ID | string | | Demand ID |
| WIP_VER | string | | WIP 버전(Version) |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |


### Reserved Words (WIP)

#### WIP_TYPE -> `WipType` enum
WIP의 유형을 지정합니다.
| Value | Description |
|-------|-------------|
| `Wip` | 공정 중 재공 (ROUTING_ID, OPER_ID 필수) |
| `Inventory` | 재고 (ROUTING_ID, OPER_ID는 Null이어야 함) |
| `Intransit` | 이동 중 재고 |
| `Dummy` | 가상 WIP |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 715 - `ATUtil.StringToEnum<WipType>(entity.WIP_TYPE, WipType.None)`
> Logic: WIP_TYPE이 Inventory인 경우 ROUTING_ID와 OPER_ID는 반드시 Null이어야 합니다.

#### WIP_STATUS -> `LotState` enum
WIP의 현재 상태를 지정합니다.
| Value | Description |
|-------|-------------|
| `Wait` | 대기 중 |
| `Run` | 작업 중 |
| `Hold` | 보류 |
| `StepOut` | 공정 이탈 |
| `None` | 미지정 |

> Code: `PersistInputs.cs` line 725 - `ATUtil.StringToEnum<LotState>(entity.WIP_STATUS, LotState.None)`

## 26. CUST_MASTER (Customer Master)
Customer definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CUST_ID | string | Y | 고객 ID |
| CUST_NAME | string | | 고객명 |
| CUST_PRIORITY | int | | Customer priority |
| DESCRIPTION | string | | 부가 설명 |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 27. ALLOCATION_GROUP_MASTER (Allocation Groups)
Allocation group definitions for scheduling.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ALLOCATION_GROUP_ID | string | Y | 할당 그룹 ID |
| ALLOCATION_GROUP_SEQ | int | | Stage 내 Allocation Group 순서 |
| ALLOCATION_TYPE | string | | 할당 방식 |
| STAGE_ID | string | | Stage ID |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (ALLOCATION_GROUP_MASTER)

#### ALLOCATION_TYPE -> `AllocateType` enum
할당 방식을 지정합니다. 약어도 사용 가능합니다.
| Value | Shortcut | Description |
|-------|----------|-------------|
| `LotFirstSelection` | `LFS` | Lot 우선 선택 방식 (Lot을 먼저 선택 후 Resource에 할당) |
| `ResourceFirstSelection` | `RFS` | Resource 우선 선택 방식 (Resource를 먼저 선택 후 Lot 할당) |
| `Reserve` | - | 예약 방식 |

> Code: `ATConstants.cs` - `LFS = "LFS"`, `RFS = "RFS"` 약어가 정의되어 있습니다.

## 28. SETUP (Setup Matrix)
Equipment setup/changeover definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| SETUP_NO | int | Y | Setup number |
| SETUP_ID | string | | Setup ID |
| SETUP_CONDITION_VALUE | string | | Setup condition |
| FROM_CONDITION_VALUE | string | | Setup 이전 작업물 조건 |
| TO_CONDITION_VALUE | string | | Setup 이후 작업물 조건 |
| SETUP_DURATION | double | | Setup duration |
| SETUP_PRIORITY | int | | Setup 조건에 대한 우선순위 |
| SETUP_RES_ID | string | | Setup 시 사용 가능한 Setup Crew |


### Reserved Words (SETUP)

#### SETUP_CONDITION_VALUE
Setup 조건을 지정하는 예약 코드입니다. `ATReservedCode.cs`에 정의되며, `&` (AND) 및 `|` (OR) 연산자로 조합 가능합니다.

**Item 속성 기반 조건:**
| Value | Description |
|-------|-------------|
| `#ITEM_ID` | Item ID |
| `#ITEM_GROUP` | Item 그룹 |
| `#ITEM_GRADE` | Item 등급 |
| `#ITEM_SPEC` | Item 사양 |
| `#ITEM_SIZE` | Item 크기 |
| `#PROD_TYPE` | 생산 유형 |
| `#PROCUREMENT_TYPE` | 조달 유형 |

**Demand 속성 기반 조건:**
| Value | Description |
|-------|-------------|
| `#DEMAND_ITEM_ID` | Demand Item ID |
| `#DEMAND_ITEM_GROUP` | Demand Item 그룹 |
| `#DEMAND_ITEM_GRADE` | Demand Item 등급 |
| `#DEMAND_ITEM_SPEC` | Demand Item 사양 |
| `#DEMAND_ITEM_SIZE` | Demand Item 크기 |
| `#DEMAND_PROCUREMENT_TYPE` | Demand 조달 유형 |
| `#DEMAND_PROD_TYPE` | Demand 생산 유형 |

**기타 조건:**
| Value | Description |
|-------|-------------|
| `#BOM_ID` | BOM ID |
| `#ROUTING_ID` | Routing ID |
| `#OPER_ID` | Operation ID |
| `#LOT_ID` | Lot ID |
| `(ITEM Prop ID)` | Item Property ID (사용자 정의 속성) |
| `(WIP Prop ID)` | WIP Property ID (사용자 정의 속성) |

> 조합 예시: `#ITEM_ID&#ITEM_GROUP` (AND), `#ITEM_ID|#ITEM_GROUP` (OR)
> Logic: 동일 SETUP_ID 내의 모든 Setup 항목은 동일한 SETUP_RES_ID를 가져야 합니다.

## 29. PM (Preventive Maintenance)
PM schedule definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PM_ID | string | Y | 예방 보전(PM) ID |
| PM_PRIORITY | int | Y | PM 우선순위 (겹치는 PM이 여러 개 존재하는 경우, PRIORITY 값이 낮은 PM만 적용) |
| PM_START_TIME | TimeSpan | | PM의 시작 시간 (허용값: (hh:mm:ss)) |
| PM_DURATION | double | | PM duration |
| EFF_START_DATETIME | DateTime | | 유효 시작일 |
| EFF_END_DATETIME | DateTime | | 유효 종료일 |
| PATTERN_TYPE | string | | PM 반복 패턴 (허용값: (Null), Everyday, EveryNDays, DaysOfWeek, DaysOfMonth) |
| PATTERN_VALUE | string | | 반복 주기 또는 요일을 입력 (PATTERN TYPE에 따라 달라짐) (허용값: (Null), (0 < Int), Mon,Tue,Wed,Thu,Fri,Sat,Sun, 1,11,21 (매달 n일)) |
| PM_POLICY_TYPE | string | | PM policy |
| PM_POLICY_VALUE | double | | 정책에 필요한 추가 정보 |


### Reserved Words (PM)

#### PATTERN_TYPE -> `CalendarPatternType` enum
PM 반복 패턴을 지정합니다.
| Value | Description |
|-------|-------------|
| `(Null)` | 패턴 없음 |
| `Everyday` | 매일 반복 |
| `EveryNDays` | N일 주기 반복 |
| `DaysOfWeek` | 요일 기반 반복 |
| `DaysOfMonth` | 매월 특정일 반복 |

#### PATTERN_VALUE
| PATTERN_TYPE | PATTERN_VALUE | Example |
|-------------|--------------|---------|
| `(Null)` | (Null) | - |
| `EveryNDays` | 반복 주기 (0 < Int) | `3` (3일마다) |
| `DaysOfWeek` | 요일 선택 | `Mon,Wed,Fri` |
| `DaysOfMonth` | 매달 n일 | `1,11,21` |

#### PM_POLICY_TYPE -> `PmPolicy` enum
PM 정책을 지정합니다.
| Value | Description |
|-------|-------------|
| `Push` | PM 시작 시간을 밀어서 작업 완료 후 PM 진행 |
| `Fix_Split` | PM 시간 고정, 진행 중인 작업을 분할 |
| `Fix_None` | PM 시간 고정, 진행 중인 작업은 PM 후 재개 |

## 30. CONSTRAINT (Capacity Constraints)
Resource/process capacity constraints.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CONSTRAINT_ID | string | Y | 제약 ID |
| CONSTRAINT_GROUP_ID | string | | Constraint group |
| PROP_ID | string | | Property ID |
| PROP_VALUE | string | | Property 값 |
| CALENDAR_ID | string | | Calendar ID |
| CONSTRAINT_POLICY_TYPE | string | | Policy type |
| CAPA | double | | Capacity limit |


### Reserved Words (CONSTRAINT)

#### CONSTRAINT_POLICY_TYPE -> `ConstraintPolicy` enum
제약 정책을 지정합니다.
| Value | Description |
|-------|-------------|
| `Cumulative` | 누적 기반 제약 |
| `Quantity` | 수량 기반 제약 |
| `Time` | 시간 기반 제약 |
| `Section` | 구간 기반 제약 |
| `Detail` | 상세 제약 |
| `None` | 미지정 |

#### PROP_ID (제약 속성 예약 코드)
| Value | Description |
|-------|-------------|
| `#ITEM_ID` | Item ID 기준 |
| `#ITEM_GRADE` | Item 등급 기준 |
| `#ITEM_GROUP` | Item 그룹 기준 |
| `#ITEM_SIZE` | Item 크기 기준 |
| `#ITEM_SPEC` | Item 사양 기준 |
| `#PROCUREMENT_TYPE` | 조달 유형 기준 |
| `#PROD_TYPE` | 생산 유형 기준 |

## 31. CONSTRAINT_DETAIL (Constraint Details)
Constraint attachment/detachment events.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CONSTRAINT_ID | string | Y | Constraint identifier |
| PROP_ID | string | Y | Property ID |
| PROP_VALUE | string | Y | Property 값 |
| ATTACH_EVENT_TYPE | string | | Attach event type |
| ATTACH_TARGET_ID | string | | Attach target |
| DETACH_EVENT_TYPE | string | | Detach event type |
| DETACH_TARGET_ID | string | | Detach target |
| USAGE_PER | double | | 단위 사용량 |
| USE_CONSTRAINT_GROUP_YN | string | | Use constraint group flag |
| SPLIT_YN | string | | Split flag |

## 32. TRANSFER (Transfer Matrix)
Inter-location transfer definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| TRANSFER_NO | int | Y | Transfer number |
| FROM_LOCATION | string | | Source location |
| TO_LOCATION | string | | Destination location |
| TRANSFER_DURATION | double | | Transfer duration |
| TRANSFER_PRIORITY | int | | Transfer priority |

## 33. FACTORY_CONFIG (Factory Configuration)
Factory-level time settings.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| FACTORY_START_TIME | TimeSpan | | 공장 운영 시작 시점 |
| FACTORY_START_DOW | int | | 주 시작 요일 (허용값: 1, 2, 3, 4, 5, 6, 0) |
| SHIFT_NAME | string | | SHIFT 리스트 (e.g. 주간, 야간으로 입력 시 12시간으로 쪼개져서 리포트에 기록) |
| ROLLING_PERIOD_UOM | string | | Bucket의 단위를 지정합니다. (허용값: Day, Shift) |


### Reserved Words (FACTORY_CONFIG)

#### FACTORY_START_DOW
주 시작 요일을 지정합니다.
| Value | Description |
|-------|-------------|
| `0` | 일요일 |
| `1` | 월요일 |
| `2` | 화요일 |
| `3` | 수요일 |
| `4` | 목요일 |
| `5` | 금요일 |
| `6` | 토요일 |

#### ROLLING_PERIOD_UOM -> `RollingPeriod` enum
Bucket 단위를 지정합니다.
| Value | Description |
|-------|-------------|
| `Day` | 일 단위 |
| `Shift` | Shift 단위 |

## 34. REF_PROD_PLAN (Reference Production Plan)
Historical/reference plan for comparison.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| REF_PLAN_ID | string | Y | Reference plan identifier |
| STAGE_ID | string | | Stage ID |
| DEMAND_ID | string | | Demand ID |
| ITEM_ID | string | | Item ID |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| REF_PLAN_DATETIME | DateTime | | Reference plan date/time |
| REF_PLAN_QTY | double | | Reference plan quantity |
| REF_TYPE | string | | 참조 타입 (사용자 정의) |
| BOM_ID | string | | BOM ID |
| ROUTING_ID | string | | Routing ID |
| OPER_ID | string | | Operation ID |
| RES_ID | string | | Resource ID |
| START_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 종료 시간 |
| PLAN_CYCLE_ID | string | Y | 계획 사이클 ID |

## 35-44. Property Value Tables (*_PROP_VALUE)
Dynamic property extension tables following the same pattern:

### Common Pattern:
| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| [ENTITY_KEY(s)] | string | Y | Entity identifier(s) |
| PROP_ID | string | Y | Property ID |
| PROP_VALUE | string | | Property 값 |
| CALENDAR_ID | string | | Calendar ID |

**Tables following this pattern:**
- **DEMAND_PROP_VALUE** (DEMAND_ID + PROP_ID)
- **BUFFER_PROP_VALUE** (BUFFER_ID + PROP_ID)
- **WIP_PROP_VALUE** (WIP_ID + PROP_ID)
- **CUST_PROP_VALUE** (CUST_ID + PROP_ID)
- **RES_PROP_VALUE** (RES_ID + PROP_ID)
- **SITE_PROP_VALUE** (SITE_ID + PROP_ID)
- **ROUTING_OPER_PROP_VALUE** (ROUTING_ID + OPER_ID + PROP_ID)
- **OPER_RES_PROP_VALUE** (ROUTING_ID + OPER_ID + RES_ID + PROP_ID)
- **ITEM_SITE_BUFFER_PROP_VALUE** (ITEM_ID + SITE_ID + BUFFER_ID + PROP_ID)
- **BOM_PROP_VALUE** (BOM_ID + PROP_ID)
- **BOM_ROUTING_PROP_VALUE** (BOM_ID + ROUTING_ID + PROP_ID)
- **OPER_GROUP_PROP_VALUE** (OPER_GROUP_ID + PROP_ID)

## 45. PROP_MASTER (Property Definitions)
Master definitions for all custom properties.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROP_CATEGORY_TYPE | string | | Property category |
| PROP_ID | string | Y | Property ID |
| DATA_TYPE | string | | Property Value의 데이터 타입 (허용값: String, Int, Double, Decimal, DateTime) |
| DEFAULT_VALUE | string | | Property Value의 기본값 %_PROP_VALUE 테이블에서 PROP_VALUE 값을 입력하지 않은 경우, 적용되는 기본 값입니다. 입력하지 않은 경우, Default로 Null이 등록됩니다. |
| RESERVE_VALUE | string | | Reserved value |
| DESCRIPTION | string | | 부가 설명 |
| PROP_COL_ID | string | | Mapped column (PROP01-10) |
| PROP_NAME | string | | Property display name |


### Reserved Words (PROP_MASTER)

#### PROP_CATEGORY_TYPE -> `PropertyCategory` enum
Property가 적용되는 대상 카테고리입니다.
| Value | Description | Target Table |
|-------|-------------|-------------|
| `Item` | Item 속성 | ITEM_PROP_VALUE |
| `Site` | Site 속성 | SITE_PROP_VALUE |
| `Buffer` | Buffer 속성 | BUFFER_PROP_VALUE |
| `ItemSiteBuffer` | ISB 속성 | ITEM_SITE_BUFFER_PROP_VALUE |
| `Bom` | BOM 속성 | BOM_PROP_VALUE |
| `BomRouting` | BOM-Routing 속성 | BOM_ROUTING_PROP_VALUE |
| `RoutingOper` | Routing Operation 속성 | ROUTING_OPER_PROP_VALUE |
| `Demand` | Demand 속성 | DEMAND_PROP_VALUE |
| `Cust` | 고객 속성 | CUST_PROP_VALUE |
| `Wip` | WIP 속성 | WIP_PROP_VALUE |
| `Res` | Resource 속성 | RES_PROP_VALUE |
| `OperRes` | Operation-Resource 속성 | OPER_RES_PROP_VALUE |
| `OperAddRes` | 부수 설비 속성 | OPER_ADD_RES_PROP_VALUE |
| `OperGroup` | Operation Group 속성 | OPER_GROUP_PROP_VALUE |
| `None` | 미지정 | |

#### DATA_TYPE -> `DataType` enum
Property Value의 데이터 타입입니다.
| Value | Description |
|-------|-------------|
| `String` | 문자열 |
| `Int` | 정수 |
| `Double` | 실수 |
| `Decimal` | 고정소수점 |
| `DateTime` | 날짜/시간 |
| `None` | 미지정 |

## 46. RULE_MASTER (Rule Definitions)
Sorting/filtering rule definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RULE_ID | string | Y | Rule ID |
| RULE_POINT_ID | string | Y | Rule application point |
| SORT_TYPE | string | | 우선순위 정렬 방식 (허용값: WeightSorted, WeightSum) |
| FIRST_ONLY_SORT_YN | string | | First-only sort flag |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (RULE_MASTER)

#### SORT_TYPE -> `SortType` enum
우선순위 정렬 방식을 지정합니다.
| Value | Description |
|-------|-------------|
| `WeightSorted` | 가중 정렬: Factor별 우선순위 순서(FACTOR_SEQ)로 정렬. FACTOR_WEIGHT는 자동 1 설정 |
| `WeightSum` | 가중합: Factor별 가중치(FACTOR_WEIGHT) 합산으로 우선순위 결정. FACTOR_SEQ는 0이어야 함 |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 1039 - `ATUtil.StringToEnum<SortType>(entity.SORT_TYPE, SortType.None)`
> Logic: WeightSum에서 FACTOR_SEQ != 0이면 자동 보정. WeightSorted에서 FACTOR_WEIGHT는 내부적으로 1로 초기화.

## 47. FACTOR_MASTER (Factor Definitions)
Factor definitions for rule-based decisions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| FACTOR_ID | string | Y | Rule을 구성하는 우선순위 규칙 |
| RULE_POINT_ID | string | Y | Rule point |
| FACTOR_TYPE | string | | Factor 개발 타입 (허용값: Predefined, Custom) |
| FACTOR_SCRIPT_VALUE | string | | Script/expression value |
| FACTOR_VALUE | string | | Factor에 설정할 파라미터 값 |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (FACTOR_MASTER)

#### FACTOR_TYPE -> `FactorType` enum
Factor 개발 타입을 지정합니다.
| Value | Description |
|-------|-------------|
| `Predefined` | 시스템 기본 제공 Factor (FACTOR_SCRIPT_VALUE는 Null이어야 함) |
| `Custom` | 사용자 정의 Factor (FACTOR_SCRIPT_VALUE에 스크립트 작성) |
| `Test` | 테스트용 Factor |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 971 - `ATUtil.StringToEnum<FactorType>(entity.FACTOR_TYPE, FactorType.None)`
> Logic: FACTOR_TYPE이 Predefined인 경우 FACTOR_SCRIPT_VALUE는 Null이어야 합니다.

## 48. RULE_FACTOR (Rule-Factor Mapping)
Maps factors to rules with weights.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RULE_ID | string | Y | Rule ID |
| FACTOR_ID | string | Y | Rule을 구성하는 우선순위 규칙 |
| FACTOR_SEQ | int | Y | (WeightSorted) 우선순위 Factor 간 우선순위 값 (허용값: (Int ≥ 0)) |
| FACTOR_WEIGHT | double | | (WeightSum) 우선순위 Factor 별 가중치 값 (허용값: (float ≥ 0)) |
| FACTOR_VALUE | string | | Factor 계산 시 사용되는 파라미터 정보 (Default : FACTOR_MASTER의 FACTOR_VALUE 정보) |


### Reserved Words (RULE_FACTOR)

#### FACTOR_SEQ / FACTOR_WEIGHT
RULE_MASTER의 SORT_TYPE에 따라 사용되는 값이 달라집니다.
| SORT_TYPE | FACTOR_SEQ | FACTOR_WEIGHT |
|-----------|-----------|--------------|
| `WeightSorted` | 우선순위 순서 (Int >= 0) | 자동으로 1 설정 |
| `WeightSum` | 반드시 0 | 가중치 값 (float >= 0) |

> Logic: WeightSum 모드에서 FACTOR_WEIGHT < 0이면 해당 Factor는 무시됩니다. FEAction 타입 RulePoint에는 Factor를 1개만 등록 가능합니다.

## 49. RULESET_MASTER (Ruleset Definitions)
Ruleset header information.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RULESET_ID | string | Y | Ruleset ID |
| MODULE_TYPE | string | | 모듈 타입 |
| MAX_LEVEL_NO | int | | Maximum level count |
| DESCRIPTION | string | | 부가 설명 |


### Reserved Words (RULESET_MASTER)

#### MODULE_TYPE -> `ModuleType` enum
Ruleset이 적용되는 모듈 유형입니다.
| Value | Description |
|-------|-------------|
| `PBB` | Pegging-Based Backward |
| `PBF` | Pegging-Based Forward |
| `PBO` | Pegging-Based Optimization |
| `Global` | 전체 공통 |
| `SBF` | Simulation-Based Forward |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 1735 - `ATUtil.StringToEnum<ModuleType>(entity.MODULE_TYPE, ModuleType.None)`

## 50. RULESET_CONFIG (Ruleset Configuration)
Ruleset-to-rule mappings.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RULESET_ID | string | Y | Ruleset ID |
| RULE_POINT_ID | string | Y | Rule point |
| RULE_ID | string | Y | Rule ID |
| LEVEL_NO | int | Y | Level 번호 |

## 51. SCENARIO_RULESET_CONFIG (Scenario Ruleset Mapping)
Maps rulesets to scenario execution targets.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| MODULE_ID | string | Y | 모듈 ID |
| SCENARIO_ID | string | Y | 시나리오 ID |
| PHASE_NO | int | Y | Phase 번호 |
| TARGET_CATEGORY_TYPE | string | Y | Target category |
| TARGET_ID | string | Y | Resource ID |
| RULESET_ID | string | | Ruleset ID |


### Reserved Words (SCENARIO_RULESET_CONFIG)

#### TARGET_CATEGORY_TYPE -> `RuleSetType` enum
Ruleset 적용 대상 카테고리입니다.
| Value | Description |
|-------|-------------|
| `Buffer` | Buffer 대상 |
| `ResourceGroup` | Resource Group 대상 |
| `Operation` | Operation 대상 |
| `DefaultRuleset` | 기본 Ruleset |
| `None` | 미지정 (오류) |

> Code: `PersistInputs.cs` line 1884 - `ATUtil.StringToEnum<RuleSetType>(entity.TARGET_CATEGORY_TYPE, RuleSetType.None)`

## 52. RULESET_AGENT (Ruleset Agent)
Agent configuration for rulesets.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RULESET_ID | string | Y | Ruleset ID |
| AGENT_ID | string | Y | Agent ID |
| AGENT_NAME | string | | Agent 명 |
| PARAM_VALUE | string | | Agent 입력값 |

## 53. SCENARIO_EXEC_RESULT (Execution Status)
Tracks which tables are output per scenario execution.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| SCENARIO_ID | string | Y | 시나리오 ID |
| TABLE_NAME | string | Y | Output 테이블명 |
| MODULE_ID | string | Y | 모듈 ID |
| PHASE_NO | int | Y | Phase 번호 |

## 54. PLAN_CYCLE_INFO (Plan Cycle Information)
Plan cycle lifecycle tracking.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PLAN_CYCLE_ID | string | | 계획 사이클 ID |
| START_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 시작 시간 |
| END_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 종료 시간 |
| STATUS | string | | Cycle status |
| LAST_FROZEN_END_DATETIME | DateTime | | Last frozen end date |
| FROZEN_PLAN_VER | string | | Frozen plan version |
| FROZEN_END_DATETIME | string | | Frozen end date |
| CYCLE_CREATE_TYPE | string | | Cycle creation type |

## 55. RES_STATUS (Resource Status)
Current resource state/setup information.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| RES_ID | string | Y | Resource ID |
| ITEM_ID | string | Y | Item ID |
| ROUTING_ID | string | | Routing ID |
| OPER_ID | string | | Operation ID |

## 56. WORK_CALENDAR (Work Calendar)
Factory work calendar dates.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| DATE | string | Y | Calendar date |
| YEAR | int | | Year |
| QUARTER | int | | Quarter |
| MOY | int | | Month of year |
| WEEK | string | | Week identifier |
| DAY | int | | Day of month |
| DOY | int | | Day of year |
| WEEKDAY | int | | Weekday number |
| DOW_NAME | string | | Day of week name |
| CALENDAR_MODULE_ID | string | | Calendar module |
| DAY_CATEGORY_ID | string | | Day category |
| DESCRIPTION | string | | 부가 설명 |
| DAY_CATEGORY_NAME | string | | Day category name |

## 57. WORK_CALENDAR_TYPE (Work Calendar Type)
Calendar module shift definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CALENDAR_MODULE_ID | string | Y | Calendar module identifier |
| ROW_INDEX | int | Y | Row index |
| CALENDAR_MODULE_NAME | string | | Module name |
| CALENDAR_TYPE | string | | Calendar type |
| EFF_START_TIME_VALUE | string | | Shift start time |
| EFF_END_TIME_VALUE | string | | Shift end time |
| LOT_SPLIT_YN | string | | Lot split across shifts flag |
| DESCRIPTION | string | | 부가 설명 |

## 58. RES_WORK_CALENDAR (Resource Work Calendar)
Per-resource work calendar assignments.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| CALENDAR_MODULE_ID | string | | Calendar module |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| RES_ID | string | Y | Resource ID |
| RES_TYPE | string | | Resource 유형 |
| DOW_NAME | string | | Day of week |
| DATE | string | Y | Calendar date |

## 59. OPER_GROUP_MASTER (Operation Group)
Operation group definitions.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| OPER_GROUP_ID | string | Y | Operation group identifier |
| OPER_GROUP_NAME | string | | Group name |
| OPER_GROUP_SEQ | int | | Group sequence |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| PROP_JSON | string | | 추가 속성 (JSON) |

## 60. OPER_MASTER (Operation Master)
Operation definitions (global, not routing-specific).

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| OPER_ID | string | Y | Operation ID |
| OPER_GROUP_ID | string | | Operation group |
| OPER_NAME | string | | Operation name |
| OPER_SEQ | int | | Operation 순서 |

## 61. LinqInfo (System Metadata)
Internal query metadata.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| NAME | string | | 정의한 LINQ 스크립트(QUERY)의 이름 |
| TYPE | string | | LINQPad에서 사용하는 언어 유형으로, 현재는 C# Expression, C# Statements, C# Program만 사용 가능합니다. |
| QUERY | string | | LINQ 구문 |
| ARGUMENTS | string | | LINQ 구문에서 정의한 '$' Argument와 기본 값으로, 형식은 Argument= Default Value입니다. Argument는 필수 입력 사항이며, 여러개의 Argument를 입력하는 경우 쉼표(,... |
| DESCRIPTION | string | | 부가 설명 |
