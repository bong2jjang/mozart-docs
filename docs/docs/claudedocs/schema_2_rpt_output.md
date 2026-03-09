# 리포트 출력 스키마

> Source: `Aleatorik.Engine/Generated/Aleatorik_Engine.Outputs.cs`
> 총 21개 RPT_* 테이블
> Reporter 파이프라인을 통해 원시 데이터를 집계하여 생성된 리포트 테이블입니다.
> 모든 테이블은 PROJECT_ID, VERSION, ROW_INDEX를 표준 컬럼으로 포함합니다.

---

## 1. RPT_ADD_RES_PLAN (Additional Resource Plan)
Additional/sub-resource production plan aggregated by time bucket.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| RES_ID | string | Y | Resource ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| BUFFER_ID | string | Y | Buffer ID |
| STD_BUFFER_ID | string | | Standard buffer (normalized) |
| QTY_CATEGORY_ID | string | Y | Quantity category (IN/OUT) |
| PLAN_DATETIME | DateTime | Y | 계획 일시 |
| OPTIONAL_KEY | string | Y | Optional grouping key |
| OPER_ID | string | | Operation ID |
| OPER_YIELD | double | | 수율 (default: 1.0) |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| MAIN_RES_ID | string | | Main resource (parent) |
| PLAN_QTY | double | | 계획 수량 |
| PLAN_CONV_QTY | double | | Converted planned quantity |
| PLAN_UNIT_QTY | double | | Planned unit quantity |
| PLAN_CONV_UNIT_QTY | double | | Converted unit quantity |
| PLAN_DATE | string | | START_TIME이 포함되는 일자 |
| PLAN_WEEK | string | | START_TIME이 포함되는 주차 |
| PLAN_MONTH | string | | START_TIME이 포함되는 월 |
| PLAN_SHIFT_CODE | string | | Shift code |
| DEMAND_ID | string | | Demand ID |
| DEMAND_ITEM_ID | string | | Demand Item ID |
| DEMAND_ITEM_NAME | string | | Demand Item 이름 |
| DEMAND_SITE_ID | string | | Demand의 Site ID |
| DEMAND_BUFFER_ID | string | | 계획이 속한 Buffer ID |
| DUE_DATETIME | DateTime | | 납기 일시 |
| DUE_DATE | string | | 납기일 |
| DUE_WEEK | string | | Demand 납기의 주차 |
| DUE_MONTH | string | | Demand 납기의 월 |
| USED_CAPA | double | | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| TOTAL_CAPA | double | | 전체 Capacity |
| UNAVAILABLE_CAPA | double | | Unavailable capacity (PM, etc.) |
| AVAILABLE_CAPA | double | | Available capacity |
| ITEM_NAME | string | | Item 이름 |
| SITE_NAME | string | | Site 이름 |
| RES_NAME | string | | Resource 이름 |
| ALLOCATION_SEQ | int | | Allocation sequence |
| STD_OPER_ID | string | | Standard operation ID |
| PROP_JSON | string | | 추가 속성 (JSON) |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| PROD_TYPE | string | | 생산 유형 |
| ITEM_SIZE_TYPE | string | | Item 크기 유형 |
| ITEM_SPEC | string | | Item 사양 |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| CUST_NAME | string | | 고객명 |
| FROM_OPER_ID | string | | From operation |
| TO_OPER_ID | string | | To operation |
| OPER_GROUP_ID | string | | Operation group |
| FROM_OPER_GROUP_ID | string | | From operation group |
| TO_OPER_GROUP_ID | string | | To operation group |
| WIP_ID | string | | WIP ID |

## 2. RPT_RES_PLAN (Resource Plan)
Resource-level production plan aggregated by time bucket.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| RES_ID | string | Y | Resource ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| BUFFER_ID | string | Y | Buffer ID |
| STD_BUFFER_ID | string | | Standard buffer |
| QTY_CATEGORY_ID | string | Y | Quantity category |
| PLAN_DATETIME | DateTime | Y | 계획 일시 |
| OPTIONAL_KEY | string | Y | Optional grouping key |
| OPER_ID | string | | Operation ID |
| OPER_YIELD | double | | 수율 (default: 1.0) |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| PLAN_QTY | double | | 계획 수량 |
| PLAN_UNIT_QTY | double | | Planned unit quantity |
| PLAN_DATE | string | | START_TIME이 포함되는 일자 |
| PLAN_WEEK | string | | START_TIME이 포함되는 주차 |
| PLAN_MONTH | string | | START_TIME이 포함되는 월 |
| PLAN_SHIFT_CODE | string | | Shift code |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking columns (same as RPT_ADD_RES_PLAN) |
| USED_CAPA | double | | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| TOTAL_CAPA | double | | 전체 Capacity |
| UNAVAILABLE_CAPA | double | | Unavailable capacity |
| AVAILABLE_CAPA | double | | Available capacity |
| ITEM_NAME | string | | Item 이름 |
| SITE_NAME | string | | Site 이름 |
| RES_NAME | string | | Resource 이름 |
| ALLOCATION_SEQ | int | | Allocation sequence |
| STD_OPER_ID | string | | Standard operation |
| PROP_JSON | string | | 추가 속성 (JSON) |
| PROP01~PROP10 | string | | 추가 속성 1~10 |
| VRFCT_DCML | double | | Verification decimal (integer correction) |
| VRFCT_CUM_DCML | double | | Cumulative decimal |
| VRFCT_NEW_CUM_DCML | double | | New cumulative decimal |
| IS_OVER | string | | Over-capacity flag |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| PROD_TYPE | string | | 생산 유형 |
| ITEM_SIZE_TYPE | string | | Item 크기 유형 |
| ITEM_SPEC | string | | Item 사양 |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| CUST_NAME | string | | 고객명 |
| QTY_UOM | string | | 수량 단위 |
| PLAN_CONV_QTY | double | | Converted quantity |
| CONV_QTY_UOM | string | | 환산 수량 단위 |
| UNIT_QTY_UOM | string | | Unit quantity UOM |
| PLAN_CONV_UNIT_QTY | double | | Converted unit qty |
| CONV_UNIT_QTY_UOM | string | | Converted unit UOM |
| FROM_OPER_ID | string | | From operation |
| TO_OPER_ID | string | | To operation |
| OPER_GROUP_ID | string | | Operation group |
| FROM_OPER_GROUP_ID | string | | From oper group |
| TO_OPER_GROUP_ID | string | | To oper group |
| WIP_ID | string | | WIP ID |

## 3. RPT_SHIPMENT_PLAN (Shipment Plan)
Demand fulfillment and shipment analysis.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| DEMAND_ID | string | Y | Demand ID |
| DEMAND_GROUP_ID | string | | Demand 그룹 ID |
| DEMAND_QTY | double | | Demand 수량 |
| ITEM_ID | string | | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| CUST_ID | string | | 고객 ID |
| TARGET_DATE | string | | TARGET_DATETIME이 포함되는 날짜 |
| TARGET_WEEK | string | | TARGET DATE가 소속된 주차 |
| TARGET_MONTH | string | | TARGET DATE가 포함되는 월 |
| MAX_EARLINESS_DAY | double | | 최대 조기 생산 허용 일수 |
| MAX_LATENESS_DAY | double | | 최대 납기 지연 허용 일수 |
| DEMAND_PRIORITY | int | | Demand 우선순위 |
| WAREHOUSE_IN_DATE | string | | Warehouse receipt date |
| SHIPMENT_DATE | string | | 해당 Demand의 출하 계획이 수립된 날짜 |
| SHIPMENT_QTY | double | | Shipped quantity |
| LATE_QTY | double | | Late shipped quantity |
| ONTIME_PLAN_QTY | double | | On-time plan quantity |
| ITEM_NAME | string | | Item 이름 |
| SITE_NAME | string | | Site 이름 |
| DEMAND_ITEM_ID | string | | Demand Item ID |
| DEMAND_ITEM_NAME | string | | Demand Item 이름 |
| DEMAND_SITE_ID | string | | Demand의 Site ID |
| DEMAND_SITE_NAME | string | | Demand site name |
| DEMAND_BUFFER_ID | string | | 계획이 속한 Buffer ID |
| DUE_DATE | string | | 납기일 |
| DUE_WEEK | string | | Demand 납기의 주차 |
| DUE_MONTH | string | | Demand 납기의 월 |
| DEMAND_TYPE | string | | Demand 유형 |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| QTY_UOM | string | | 수량 단위 |
| CONV_QTY_UOM | string | | 환산 수량 단위 |
| DEMAND_CONV_QTY | double | | Converted demand qty |
| SHIPMENT_CONV_QTY | double | | Converted shipment qty |
| LATE_CONV_QTY | double | | Converted late qty |
| ONTIME_CONV_QTY | double | | Converted on-time qty |
| PROD_TYPE | string | | 생산 유형 |
| ITEM_SIZE_TYPE | string | | Item 크기 유형 |
| ITEM_SPEC | string | | Item 사양 |
| CUST_NAME | string | | 고객명 |
| WAREHOUSE_STATUS | string | | Warehouse receipt status |
| SHIPMENT_STATUS | string | | Shipment status |
| QTY | double | | General quantity |
| CONV_QTY | double | | Converted quantity |

## 4. RPT_BUFFER_TARGET (Buffer Target Plan)
Buffer-level target (requirement) plan by time bucket.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| STD_BUFFER_ID | string | Y | Standard buffer |
| STD_BUFFER_SEQ | int | | Buffer sequence |
| TARGET_DATETIME | DateTime | Y | 목표 일시 |
| OPTIONAL_KEY | string | | Optional key |
| ARRIVAL_TARGET_QTY | double | | Arrival target quantity |
| ARRIVAL_TARGET_UNIT_QTY | double | | Arrival target unit qty |
| IN_TARGET_QTY | double | | Input target quantity |
| IN_TARGET_UNIT_QTY | double | | Input target unit qty |
| OUT_TARGET_QTY | double | | Output target quantity |
| OUT_TARGET_UNIT_QTY | double | | Output target unit qty |
| TARGET_DATE | string | | TARGET_DATETIME이 포함되는 날짜 |
| TARGET_WEEK | string | | TARGET DATE가 소속된 주차 |
| TARGET_MONTH | string | | TARGET DATE가 포함되는 월 |
| TARGET_SHIFT_CODE | string | | Target shift |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking columns |
| ITEM_NAME | string | | Item 이름 |
| SITE_NAME | string | | Site 이름 |
| ITEM_SPEC | string | | Item 사양 |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| PROD_TYPE | string | | 생산 유형 |
| ITEM_SIZE_TYPE | string | | Item 크기 유형 |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| CUST_NAME | string | | 고객명 |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| ARRIVAL/IN/OUT_TARGET_CONV_QTY | double | | Converted quantities |
| ARRIVAL/IN/OUT_TARGET_CONV_UNIT_QTY | double | | Converted unit quantities |
| QTY_UOM | string | | 수량 단위 |
| CONV_QTY_UOM | string | | 환산 수량 단위 |

## 5. RPT_BUFFER_PLAN (Buffer Production Plan)
Buffer-level production plan by time bucket.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| STD_BUFFER_ID | string | Y | Standard buffer |
| STD_BUFFER_SEQ | int | | Buffer sequence |
| PLAN_DATETIME | DateTime | Y | 계획 일시 |
| OPTIONAL_KEY | string | Y | Optional key |
| IN_PLAN_QTY | double | | Input plan quantity |
| IN_PLAN_UNIT_QTY | double | | Input plan unit qty |
| OUT_PLAN_QTY | double | | Output plan quantity |
| OUT_PLAN_UNIT_QTY | double | | Output plan unit qty |
| PLAN_DATE~PLAN_SHIFT_CODE | string | | Time bucket strings |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking columns |
| ITEM_NAME, SITE_NAME, ITEM_SPEC | string | | Display names |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| PROD_TYPE, ITEM_SIZE_TYPE | string | | Item classification |
| CUST_ID, DEMAND_TYPE, CUST_NAME | string | | Customer/demand info |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| IN/OUT_PLAN_CONV_QTY | double | | Converted quantities |
| IN/OUT_PLAN_CONV_UNIT_QTY | double | | Converted unit quantities |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |

## 6. RPT_MATERIAL_TARGET (Material Requirement Target)
Material requirement analysis with from/to item mapping.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| BUFFER_ID | string | Y | Buffer ID |
| TO_ITEM_ID | string | Y | 산출(To) Item ID |
| RPT_DATETIME | DateTime | Y | 생산 계획 일시 |
| QTY_CATEGORY_ID | string | Y | 집계 유형 (허용값: REQ, ARRIVAL_WIP, EOH) |
| OPTIONAL_KEY | string | Y | Optional key |
| RPT_QTY | double | | 생산 계획 수량 |
| RPT_CONV_QTY | double | | Converted report qty |
| BUFFER_SEQ | int | | Buffer 순서 |
| CATEGORY_SEQ | int | | 카테고리 순서 |
| RPT_DATE~RPT_SHIFT_CODE | string | | Time bucket strings |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking columns |
| ITEM_NAME, ITEM_SPEC, SITE_NAME | string | | Display names |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| TO_ITEM_NAME | string | | 산출 제품 이름 |
| PROD_TYPE, ITEM_SIZE_TYPE | string | | Item classification |

## 7. RPT_DEMAND_PLAN_ISB (Demand Plan by ISB)
Demand fulfillment tracking at Item-Site-Buffer level.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | | 프로젝트 ID |
| VERSION | string | | Plan version |
| ROW_INDEX | int | | Row sequence |
| DEMAND_ID | string | | Demand ID |
| DEMAND_ITEM_ID | string | | Demand Item ID |
| DEMAND_ITEM_NAME | string | | Demand Item 이름 |
| DEMAND_QTY | double | | Demand 수량 |
| DUE_DATETIME | DateTime? | | 납기 일시 |
| DEMAND_TYPE | string | | Demand 유형 |
| EXTEND_DUE_DATETIME | DateTime? | | Extended due date |
| CUST_ID, CUST_NAME | string | | Customer info |
| ITEM_ID | string | | Item ID |
| ITEM_NAME | string | | Item 이름 |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID, SITE_NAME | string | | Site info |
| BUFFER_ID | string | | Buffer ID |
| BUFFER_SEQ | int | | Buffer 순서 |
| TARGET_DATETIME | DateTime? | | 목표 일시 |
| EXTEND_TARGET_DATETIME | DateTime? | | Extended target date |
| TARGET_QTY | double | | 목표 수량 |
| TARGET_UNIT_QTY | double | | TARGET_QTY의 최종 Demand 기준 환산 수량 |
| PLAN_DATETIME | DateTime? | | 계획 일시 |
| PLAN_QTY | double | | 계획 수량 |
| PLAN_UNIT_QTY | double | | 수요량 기준 생산 수량 (계산식 = PLAN_QTY/BCumChangeRatio) |
| PLAN_GAP_SEC | int? | | 생산 일시 - 목표 일시 (초 단위) |
| PEG_QTY | double | | Pegging된 Lot 수량 |
| PEG_UNIT_QTY | double | | 수요량 기준 재공 사용량 (계산식 = PEG_QTY/BCumChangeRatio) |
| INPUT_TARGET_QTY | double | | 목표 신규 투입량 |
| INPUT_TARGET_UNIT_QTY | double | | 수요량 기준 신규 투입량 (계산식 = INPUT_TARGET_QTY/BCumChangeRatio) |
| INPUT_PLAN_QTY | double | | 신규 투입량 |
| INPUT_PLAN_UNIT_QTY | double | | 수요량 기준 신규 투입량 (계산식 = INPUT_PLAN_QTY/BCumChangeRatio) |
| INPUT_OPTION_YN | string | | 신규 투입 가능 여부 |
| PLAN_QTY_DETAIL_JSON | string | | 날짜 별 생산 수량을 Json 형태로 기록 |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| QTY_UOM, UNIT_QTY_UOM, CONV_QTY_UOM, CONV_UNIT_QTY_UOM | string | | UOM columns |
| DEMAND_CONV_QTY~INPUT_PLAN_CONV_UNIT_QTY | double | | All converted qty columns |
| PLAN_CONV_QTY_DETAIL_JSON | string | | Converted plan detail (JSON) |
| ITEM_GROUP_ID, PROD_TYPE, ITEM_SIZE_TYPE, ITEM_SPEC | string | | Item classification |

## 8. RPT_BOM_MAP_ROUTE (BOM Mapping Route)
BOM-Routing mapping with plan quantities and TAT info.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | | 프로젝트 ID |
| VERSION | string | | Plan version |
| ROW_INDEX | int | | Row sequence |
| DEMAND_ID | string | | Demand ID |
| BOM_ID | string | | BOM ID |
| BOM_TYPE | string | | BOM 유형 |
| BOM_PRIORITY | double | | BOM 우선순위 |
| ROUTING_ID | string | | Routing ID |
| OPER_ID | string | | Operation ID |
| OPER_TYPE | string | | Operation 유형 |
| OPER_SEQ | int | | Operation 순서 |
| PLAN_QTY | double | | 계획 수량 |
| PLAN_CONV_QTY | double | | Converted plan qty |
| PLAN_UNIT_QTY | double | | Plan unit qty |
| PLAN_CONV_UNIT_QTY | double | | Converted plan unit qty |
| TARGET_QTY | double | | 목표 수량 |
| TARGET_CONV_QTY | double | | Converted target qty |
| TOTAL_TAT | double | | Total turn-around time |
| WAIT_TAT | double | | 대기 시간 (TAT) |
| RUN_TAT | double | | 가공 시간 (TAT) |
| ELAPSE_SEC | double | | Elapsed seconds |
| OPER_YIELD | double | | 수율 (default: 1.0) |
| RES_LIST | string | | BOM에 포함된 Resource ID |
| ALL_RES_LIST | string | | 거쳐온 모든 BOM에 포함된  Resource ID들의 누적 목록 |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| BUFFER_ID | string | | Buffer ID |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| CUST_NAME | string | | 고객명 |

## 9. RPT_PSI (Production/Sales/Inventory)
PSI report with detailed category breakdown.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| STD_BUFFER_ID | string | Y | Standard buffer |
| BUFFER_SEQ | int | | Buffer 순서 |
| RPT_DATETIME | DateTime | Y | Report date/time |
| QTY_CATEGORY_ID | string | Y | Category (BOH/IN/OUT/EOH/DEMAND/SUPPLY/etc.) |
| OPTIONAL_KEY | string | Y | Optional grouping key |
| RPT_QTY | double | | Report quantity |
| RPT_CONV_QTY | double | | Converted report qty |
| RPT_DATE~RPT_SHIFT_CODE | string | | Time bucket strings |
| CATEGORY_SEQ | int | | Category display sequence |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking |
| ITEM_NAME, ITEM_SPEC | string | | Item display info |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| SITE_NAME | string | | Site 이름 |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| PROD_TYPE, ITEM_SIZE_TYPE | string | | Item classification |

## 10. RPT_STD_PSI (Standard PSI Summary)
Simplified PSI with JSON category breakdown.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Plan version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | Y | Stage ID |
| ITEM_ID | string | Y | Item ID |
| ITEM_TYPE | string | | Item 타입 |
| SITE_ID | string | Y | Site ID |
| STD_BUFFER_ID | string | Y | Standard buffer |
| RPT_DATETIME | DateTime | Y | Report date/time |
| RPT_QTY | double | | Report quantity |
| RPT_DATE~RPT_SHIFT_CODE | string | | Time strings |
| ITEM_NAME, ITEM_SPEC | string | | Item info |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| SITE_NAME | string | | Site 이름 |
| CATEGORY_JSON | string | | All category data (JSON) |
| PROP_JSON, PROP01~PROP10 | string | | Custom properties |
| PROD_TYPE, ITEM_SIZE_TYPE | string | | Classification |

## 11. RPT_ISB_STOCK (ISB Stock Analysis)
Safety stock and inventory analysis per ISB.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| ITEM_ID | string | | Item ID |
| ITEM_NAME, ITEM_SPEC | string | | Item info |
| SITE_ID, SITE_NAME | string | | Site info |
| DAILY_REQ_STOCK_QTY | double | | Daily required stock |
| SAFETY_STOCK_QTY | double | | 안전 재고 수량 |
| SAFETY_STOCK_DAY | double | | 안전 재고 일수 |
| BOH_QTY | double | | 기초재고량 |
| BOH_DAY | double | | 기초재고 일수 |
| BOH_STOCK_RATIO | double | | 안전재고 대비 기초재고 비율 |
| AVG_EOH_QTY | double | | 일 평균 재고 |
| MIN_STOCK_QTY | double | | 최소 재고 수량 |
| MAX_STOCK_QTY | double | | 최대 재고 수량 |
| EOH_QTY | double | | 기말재고량 |
| EOH_DAY | double | | 기말재고 일수 |
| STOCK_GAP_QTY | double | | Stock gap |
| EOH_STOCK_RATIO | double | | 기초재고 대비 변동량 |
| RPT_DATE, RPT_WEEK, RPT_MONTH | string | | Time buckets |
| PROP_JSON, PROP01~PROP10 | string | | Properties |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |
| (All CONV_ variants of qty columns) | double | | Converted quantities |
| ITEM_TYPE, PROD_TYPE, ITEM_SIZE_TYPE | string | | Classification |
| BOH_STOCK_CONV_RATIO, EOH_STOCK_CONV_RATIO | double | | Converted ratios |

## 12. RPT_ISB_STOCK_VERIFICATION (Stock Verification)
Stock verification check data.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ITEM_ID | string | | Item ID |
| SITE_ID | string | | Site ID |
| RPT_DATETIME | DateTime | | Report date |
| EOH_QTY | double | | End of Horizon qty |

## 13. RPT_SAFETY_STOCK_DEMAND (Safety Stock Demand)
Generated safety stock replenishment demands.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| DEMAND_ID | string | | Demand ID |
| ITEM_ID | string | | Item ID |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| DUE_DATETIME | DateTime | | 납기 일시 |
| DEMAND_QTY | double | | Demand 수량 |
| DEMAND_PRIORITY | int | | Demand 우선순위 |
| CUST_ID | string | | 고객 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| MAX_LATENESS_DAY | double | | 최대 납기 지연 허용 일수 |
| MAX_EARLINESS_DAY | double | | 최대 조기 생산 허용 일수 |
| REF_DEMAND_ID | string | | Reference demand (source) |
| REF_ITEM_ID | string | | Reference item |
| REF_SITE_ID | string | | Reference site |
| REF_BUFFER_ID | string | | Reference buffer |
| REF_DUE_DATETIME | DateTime | | Reference due date |
| REF_CUST_ID | string | | Reference customer |
| REF_DEMAND_TYPE | string | | Reference demand type |
| PROP_JSON, PROP01~PROP10 | string | | Properties |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |
| DEMAND_CONV_QTY | double | | Converted demand qty |
| ITEM_TYPE, ITEM_NAME, ITEM_GROUP_ID | string | | Item info |
| PROD_TYPE, ITEM_SIZE_TYPE, ITEM_SPEC | string | | Classification |
| CUST_NAME | string | | 고객명 |

## 14. RPT_FGS_STOCK_IN_PLAN (FG Stock Input Plan)
Finished goods stock input plan.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| ITEM_ID | string | | Item ID |
| QTY_CATEGORY_ID | string | | Quantity category |
| RPT_QTY | double | | Report quantity |
| RPT_DATETIME | DateTime | | Report date |
| RPT_DATE~RPT_SHIFT_CODE | string | | Time buckets |
| ITEM_TYPE, ITEM_NAME | string | | Item info |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| ITEM_PRIORITY | int | | Item 우선순위 |
| PROCUREMENT_TYPE | string | | 조달 유형 (MAKE/BUY) |
| PROD_TYPE, ITEM_SIZE_TYPE, ITEM_SPEC | string | | Classification |
| DEMAND_LIST | string | | Associated demands |
| PROP_JSON, PROP01~PROP10 | string | | Properties |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |
| RPT_CONV_QTY | double | | Converted qty |

## 15. RPT_CONSTRAINT_PLAN (Constraint Resource Plan)
Constraint-based resource plan.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| RES_ID | string | | Resource ID |
| ITEM_ID, ITEM_TYPE | string | | Item info |
| SITE_ID | string | | Site ID |
| BUFFER_ID | string | | Buffer ID |
| STD_OPER_ID | string | | Standard operation |
| QTY_CATEGORY_ID | string | | Quantity category |
| PLAN_DATETIME | DateTime | | 계획 일시 |
| OPTIONAL_KEY | string | | Optional key |
| OPER_ID | string | | Operation ID |
| OPER_YIELD | double | | 수율 (default: 1.0) |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| MAIN_RES_ID | string | | Main resource |
| PLAN_QTY, PLAN_CONV_QTY | double | | Quantities |
| PLAN_UNIT_QTY, PLAN_CONV_UNIT_QTY | double | | Unit quantities |
| PLAN_DATE~PLAN_SHIFT_CODE | string | | Time buckets |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking |
| USED_CAPA~AVAILABLE_CAPA | double | | Capacity columns |
| ITEM_NAME, SITE_NAME, RES_NAME | string | | Display names |
| PROP_JSON, PROP01~PROP10 | string | | Properties |

## 16. RPT_OPER_PLAN (Operation Plan)
Operation-level production plan.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| ITEM_ID, SITE_ID | string | | Item/Site |
| STD_BUFFER_ID | string | | Standard buffer |
| RPT_DATETIME | DateTime | | Report date |
| RPT_DATE~RPT_SHIFT_CODE | string | | Time buckets |
| ITEM_TYPE, ITEM_NAME | string | | Item info |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| ITEM_PRIORITY | int | | Item 우선순위 |
| ITEM_UOM | string | | Item UOM |
| PROCUREMENT_TYPE | string | | 조달 유형 (MAKE/BUY) |
| PROD_TYPE, ITEM_SIZE_TYPE, ITEM_SPEC | string | | Classification |
| CATEGORY_JSON | string | | Category data (JSON) |
| PROP_JSON, PROP01~PROP10 | string | | Properties |

## 17. RPT_OPER_GROUP_PLAN (Operation Group Plan)
Operation group level production plan with In/Out quantities.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| ROW_INDEX, PROJECT_ID, VERSION | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| ITEM_ID, SITE_ID, BUFFER_ID | string | | Item/Site/Buffer |
| OPER_GROUP_ID | string | | Operation group |
| OPER_ID | string | | Operation ID |
| PLAN_DATETIME | DateTime | | 계획 일시 |
| IN_PLAN_QTY, IN_PLAN_CONV_QTY | double | | Input plan quantities |
| IN_PLAN_UNIT_QTY, IN_PLAN_CONV_UNIT_QTY | double | | Input unit quantities |
| OUT_PLAN_QTY, OUT_PLAN_CONV_QTY | double | | Output plan quantities |
| OUT_PLAN_UNIT_QTY, OUT_PLAN_CONV_UNIT_QTY | double | | Output unit quantities |
| PLAN_DATE~PLAN_SHIFT_CODE | string | | Time buckets |
| BUFFER_SEQ | int | | Buffer 순서 |
| DEMAND_ID~DUE_MONTH | string | | Demand tracking |
| ITEM_NAME, ITEM_SPEC, SITE_NAME | string | | Display names |
| ITEM_TYPE, PROD_TYPE, ITEM_SIZE_TYPE | string | | Classification |
| CUST_ID, DEMAND_TYPE, CUST_NAME | string | | Customer/demand |
| ITEM_GROUP_ID | string | | Item 그룹 ID |
| PROP_JSON, PROP01~PROP10 | string | | Properties |
| OPER_GROUP_NAME | string | | Group name |
| OPER_GROUP_SEQ | int | | Group sequence |
| OPER_NAME | string | | Operation name |
| OPER_SEQ | int | | Operation 순서 |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |
| RPT_DATETIME | DateTime | | Report date |
| RPT_DATE~RPT_SHIFT_CODE | string | | Report time buckets |
| PROD_QTY, PROD_CONV_QTY | double | | Production quantities |

## 18. RPT_RES_PLAN_DETAIL (Resource Plan Detail)
Lot-level resource plan detail (non-aggregated).

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| MODULE_ID | string | | 모듈 ID |
| STAGE_ID | string | | Stage ID |
| ALLOCATION_SEQ | int | | Allocation sequence |
| ALLOCATION_TYPE | string | | 할당 방식 |
| RES_GROUP_ID | string | | Resource 그룹 ID |
| RES_ID | string | | Resource ID |
| RES_NAME | string | | Resource 이름 |
| LOT_GROUP_KEY | string | | Lot group key |
| LOT_ID | string | | Lot ID |
| ITEM_ID, ITEM_NAME | string | | Item info |
| DEMAND_ITEM_ID, DEMAND_ITEM_NAME | string | | Demand item info |
| DEMAND_ID | string | | Demand ID |
| DUE_DATE | string | | 납기일 |
| OPER_ID | string | | Operation ID |
| TARGET_DATETIME | DateTime | | 목표 일시 |
| EXTEND_TARGET_DATETIME | DateTime | | Extended target date |
| PLAN_DATE | string | | START_TIME이 포함되는 일자 |
| ORG_ARRIVAL_DATETIME | DateTime | | Original arrival |
| START_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 시작 시간 |
| RES_END_DATETIME | DateTime | | Resource end date/time |
| END_DATETIME | DateTime | | Buffer 또는 Operation에서의 생산 종료 시간 |
| PLAN_QTY, PLAN_CONV_QTY | double | | Quantities |
| QTY_UOM, CONV_QTY_UOM | string | | UOM |
| PLAN_UNIT_QTY, PLAN_CONV_UNIT_QTY | double | | Unit quantities |
| UNIT_QTY_UOM, CONV_UNIT_QTY_UOM | string | | Unit UOM |
| USAGE_PER | double | | 단위 사용량 |
| USED_CAPA | double | | Quantity 타입 Resource에 대해 차감된 Capacity  (Lot Qty * Usage Per) |
| BOM_ID | string | | BOM ID |
| PHASE_NO, LEVEL_NO | int | | Phase/Level |
| ITEM_GROUP_ID, ITEM_TYPE | string | | Item classification |
| PROD_TYPE, ITEM_SIZE_TYPE, ITEM_SPEC | string | | More classification |
| DEMAND_TYPE, CUST_ID, CUST_NAME | string | | Customer/demand |
| PROP_JSON, PROP01~PROP10 | string | | Properties |
| PLAN_WEEK, PLAN_MONTH | string | | Time buckets |
| SHIFT_NAME | string | | Shift name |
| DUE_DATETIME | DateTime | | 납기 일시 |
| ARRIVAL_DATETIME | DateTime | | Buffer 또는 Operation 도착 시간 |
| EXTEND_DUE_DATETIME | DateTime | | Extended due date |
| FROM_OPER_ID, TO_OPER_ID | string | | From/To operations |
| OPER_GROUP_ID | string | | Operation group |
| FROM_OPER_GROUP_ID, TO_OPER_GROUP_ID | string | | From/To oper groups |
| BUFFER_ID | string | | Buffer ID |
| WIP_ID | string | | WIP ID |
| LPST_GAP_DAY | double | | TARGET_DATETIME과 END_DATETIME의 차이. 양수인 경우 납기까지 여유가 있다는 의미이고, 음수인 경우 납기를 넘은 것을 의미 |
| ROUTING_ID | string | | Routing ID |
| MAIN_RES_ID | string | | Main resource |

## 19. RPT_DEMAND_OVERVIEW (Demand Overview)
Summary view of all demands with fulfillment categories.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string | Y | 프로젝트 ID |
| VERSION | string | Y | Version |
| ROW_INDEX | int | Y | Row sequence |
| STAGE_ID | string | | Stage ID |
| DEMAND_ID | string | | Demand ID |
| DEMAND_GROUP_ID | string | | Demand 그룹 ID |
| DEMAND_TYPE | string | | Demand 유형 |
| CATEGORY_TYPE | string | | Category (ONTIME/LATE/SHORT) |
| CATEGORY_JSON | string | | Category detail (JSON) |
| DEMAND_QTY | double | | Demand 수량 |
| QTY_UOM | string | | 수량 단위 |
| DEMAND_CONV_QTY | double | | Converted demand qty |
| CONV_QTY_UOM | string | | 환산 수량 단위 |
| DEMAND_PRIORITY | int | | Demand 우선순위 |
| DUE_DATE, DUE_DATETIME | string/DateTime | | Due date |
| DUE_WEEK, DUE_MONTH | string | | Due time buckets |
| MAX_EARLINESS_DAY, MAX_LATENESS_DAY | double | | Tolerance days |
| EXTEND_DUE_DATE, EXTEND_DUE_DATETIME | string/DateTime | | Extended due |
| CUST_ID, CUST_NAME | string | | Customer |
| ITEM_ID, ITEM_NAME | string | | Item |
| ITEM_GROUP_ID, ITEM_TYPE | string | | Item classification |
| ITEM_SIZE_TYPE, ITEM_SPEC, PROD_TYPE | string | | More classification |
| SITE_ID, SITE_NAME | string | | Site |
| BUFFER_ID | string | | Buffer ID |
| PROP_JSON, PROP01~PROP10 | string | | Properties |

## 20. RPT_OPER_GROUP_TARGET (Operation Group Target)
Operation group level target plan.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID | string |  | 프로젝트 ID |
| VERSION | string |  | Plan version |
| ROW_INDEX | int |  | Row seq |
| STAGE_ID | string |  | Stage ID |
| ITEM_ID | string |  | Item ID |
| SITE_ID | string |  | Site ID |
| BUFFER_ID | string |  | Buffer ID |
| OPER_GROUP_ID | string |  | Operation group |
| OPER_ID | string |  | Operation ID |
| TARGET_DATETIME | DateTime |  | 목표 일시 |
| ARRIVAL_TARGET_QTY | double |  | Arrival target qty |
| ARRIVAL_TARGET_CONV_QTY | double |  | Converted arrival target qty |
| ARRIVAL_TARGET_UNIT_QTY | double |  | Arrival target unit qty |
| ARRIVAL_TARGET_CONV_UNIT_QTY | double |  | Converted arrival target unit qty |
| IN_TARGET_QTY | double |  | In target qty |
| IN_TARGET_CONV_QTY | double |  | Converted in target qty |
| IN_TARGET_UNIT_QTY | double |  | In target unit qty |
| IN_TARGET_CONV_UNIT_QTY | double |  | Converted in target unit qty |
| OUT_TARGET_QTY | double |  | Out target qty |
| OUT_TARGET_CONV_QTY | double |  | Converted out target qty |
| OUT_TARGET_UNIT_QTY | double |  | Out target unit qty |
| OUT_TARGET_CONV_UNIT_QTY | double |  | Converted out target unit qty |
| TARGET_DATE | string |  | TARGET_DATETIME이 포함되는 날짜 |
| TARGET_WEEK | string |  | TARGET DATE가 소속된 주차 |
| TARGET_MONTH | string |  | TARGET DATE가 포함되는 월 |
| TARGET_SHIFT_CODE | string |  | Target shift code |
| BUFFER_SEQ | int |  | Buffer 순서 |
| DEMAND_ID | string |  | Demand ID |
| DEMAND_ITEM_ID | string |  | Demand Item ID |
| DEMAND_SITE_ID | string |  | Demand의 Site ID |
| DEMAND_BUFFER_ID | string |  | 계획이 속한 Buffer ID |
| DUE_DATETIME | DateTime |  | 납기 일시 |
| DUE_DATE | string |  | 납기일 |
| DUE_WEEK | string |  | Demand 납기의 주차 |
| DUE_MONTH | string |  | Demand 납기의 월 |
| ITEM_NAME | string |  | Item 이름 |
| ITEM_SPEC | string |  | Item 사양 |
| SITE_NAME | string |  | Site 이름 |
| ITEM_TYPE | string |  | Item 타입 |
| PROD_TYPE | string |  | 생산 유형 |
| ITEM_SIZE_TYPE | string |  | Item 크기 유형 |
| CUST_ID | string |  | 고객 ID |
| DEMAND_TYPE | string |  | Demand 유형 |
| CUST_NAME | string |  | 고객명 |
| ITEM_GROUP_ID | string |  | Item 그룹 ID |
| PROP_JSON | string |  | 추가 속성 (JSON) |
| PROP01 | string |  | Custom property 1 |
| PROP02 | string |  | Custom property 2 |
| PROP03 | string |  | Custom property 3 |
| PROP04 | string |  | Custom property 4 |
| PROP05 | string |  | Custom property 5 |
| PROP06 | string |  | Custom property 6 |
| PROP07 | string |  | Custom property 7 |
| PROP08 | string |  | Custom property 8 |
| PROP09 | string |  | Custom property 9 |
| PROP10 | string |  | Custom property 10 |
| OPER_GROUP_NAME | string |  | Oper group name |
| OPER_GROUP_SEQ | int |  | Oper group seq |
| OPER_NAME | string |  | Operation name |
| OPER_SEQ | int |  | Operation 순서 |
| QTY_UOM | string |  | 수량 단위 |
| CONV_QTY_UOM | string |  | 환산 수량 단위 |

Same structure as RPT_OPER_GROUP_PLAN but with TARGET quantities instead of PLAN quantities:
- ARRIVAL_TARGET_QTY/CONV_QTY/UNIT_QTY/CONV_UNIT_QTY
- IN_TARGET_QTY/CONV_QTY/UNIT_QTY/CONV_UNIT_QTY
- OUT_TARGET_QTY/CONV_QTY/UNIT_QTY/CONV_UNIT_QTY
- TARGET_DATE, TARGET_WEEK, TARGET_MONTH, TARGET_SHIFT_CODE

## 21. RPT_PEG_INFO (Pegging Information)
WIP-to-Demand pegging detail.

| Column | Type | PK | Description |
|--------|------|:--:|-------------|
| PROJECT_ID, VERSION, ROW_INDEX | | | Standard columns |
| STAGE_ID | string | | Stage ID |
| WIP_ID | string | | WIP ID |
| ITEM_ID, ITEM_NAME | string | | WIP item |
| SITE_ID, SITE_NAME | string | | Site |
| BUFFER_ID | string | | Buffer ID |
| BUFFER_SEQ | int | | Buffer 순서 |
| DEMAND_ID | string | | Demand ID |
| DEMAND_ITEM_ID, DEMAND_ITEM_NAME | string | | Demand item info |
| DEMAND_ITEM_TYPE | string | | Demand의 Item 타입 |
| DEMAND_SITE_ID | string | | Demand의 Site ID |
| DEMAND_TYPE | string | | Demand 유형 |
| DEMAND_QTY | double | | Demand 수량 |
| WIP_QTY | double | | WIP 수량 |
| WIP_AVAILABLE_QTY | double | | Available WIP qty |
| PEG_QTY | double | | Pegging된 Lot 수량 |
| WIP_REMAIN_QTY | double | | Remaining WIP qty |
| QTY_UOM | string | | 수량 단위 |
| ITEM_PRIORITY | int | | Item 우선순위 |
| PEG_UNIT_QTY | double | | Pegged unit qty |
| UNIT_QTY_UOM | string | | Unit UOM |
| DEMAND_PRIORITY | int | | Demand 우선순위 |
| DUE_DATETIME | DateTime | | 납기 일시 |
| DUE_DATE, DUE_WEEK, DUE_MONTH | string | | Due time buckets |
| TARGET_QTY | double | | 목표 수량 |
| TARGET_ITEM_ID, TARGET_ITEM_NAME | string | | Target item |
| TARGET_DATETIME | DateTime | | 목표 일시 |
| TARGET_DATE, TARGET_WEEK, TARGET_MONTH | string | | Target time buckets |
| ROUTING_ID | string | | Routing ID |
| OPER_ID | string | | Operation ID |
| OPER_GROUP_ID | string | | Operation group |
| WIP_CONV_QTY, WIP_AVAILABLE_CONV_QTY | double | | Converted WIP quantities |
| PEG_CONV_QTY, WIP_REMAIN_CONV_QTY | double | | Converted pegging quantities |
| TARGET_CONV_QTY | double | | Converted target qty |
| CONV_QTY_UOM | string | | 환산 수량 단위 |
| DEMAND_CONV_QTY | double | | Converted demand qty |
| TOTAL_SHIPMENT_CONV_QTY | double | | Total converted shipment |
| PEG_CONV_UNIT_QTY | double | | Converted pegging unit qty |
| CONV_UNIT_QTY_UOM | string | | Converted unit UOM |
| PEG_GROUP_KEY | string | | Pegging group key |
| TARGET_GROUP_KEY | string | | Pegging되는 Target의 Target Group Key (PBO는 사용 X) |
| PEG_KEY | string | | Pegging key |
| PROP_JSON, PROP01~PROP10 | string | | Properties |

---

## Additional Non-RPT Tables in Aleatorik_Engine.Outputs.cs

### METADATA_LOG
| Column | Type | Description |
|--------|------|-------------|
| DATA_ID | string | Data identifier |
| DATA_SCHEMA | string | Schema definition |
| DATA_COUNT | int | Record count |
