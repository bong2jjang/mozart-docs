# OUT_PLAN_INDEX

- **테이블 유형**: Output Table
- **컬럼 수**: 8
- **예약어 수**: 47

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PROJECT_ID | String | N | N | 프로젝트 ID |
| 2 | PLAN_VER | String | Y | N | 기준 정보 버전 |
| 3 | MODULE_ID | String | Y | N | RuleSet 이 사용되는 모듈 |
| 4 | CATEGORY_NAME | String | Y | N | 카테고리 이름 |
| 5 | INDEX_NAME | String | Y | N | 인덱스 이름 |
| 6 | TIME_KEY | String | Y | N | 시간 키 |
| 7 | TIME_UOM | String | Y | N | 시간 단위 |
| 8 | PLAN_VALUE | Double | N | Y | 계획 값 |

## 예약어 (Reserved Words)

### CATEGORY_NAME

| 값 | 설명 |
|---|------|
| INPUT | 계획 시작 시 기록되어 있는 데이터의 집계값을 기록합니다. |
| PEG_RESULT | 계획 수립 시 재공 사용 현황에 대한 집계값을 기록합니다. |
| RELEASE_QTY | LOT_HISTORY에 EVENT_TYPE이 Release인 Lot의 TIME_UOM에 따라 집계된 수량을 기록합니다. |
| TOTAL_SETUP_COUNT | 계획 기간 동안 설비 그룹에서 발생한 전체 SETUP 횟수를 기록합니다. |
| RTF | 정시 생산, 지연 생산에 대한 수량과 비율을 기록합니다. |
| RESOURCE_UTILIZATION | 계획 기간 동안 설비 그룹의 가동률을 기록합니다. |
| SETUP_COUNT | TIMEUOM에 기록된 기간 동안 설비 그룹에서 발생한 전체 SETUP 횟수를 기록합니다. |
| PRODUCTION | 계획 기간 동안에 생산한 전체 생산량 중 WIP을 이용하여 생산한 수량과 InTarget Lot으로 생산한 수량을 기록합니다. |

### INDEX_NAME

| 값 | 설명 |
|---|------|
| TOTAL_DEMAND_QTY | DEMAND 수량 (DEMAND 스키마 정보 그대로 활용) |
| TOTAL_DEMAND_COUNT | DEMAND Row 수 (DEMAND 스키마 정보 그대로 활용) |
| DEMAND_QTY | TIME_KEY 별 DEMAND 수량 (DEMAND 스키마 정보 그대로 활용) |
| DEMAND_COUNT | TIME_KEY 별 DEMAND Row 수 (DEMAND 스키마 정보 그대로 활용) |
| TOTAL_WIP_QTY | WIP 수량 (WIP 스키마 정보 그대로 활용) |
| INVALID_WIP_QTY | 기준 정보 이슈로 인한 수량 집계 |
| PEG_QTY | Pegging 수량 |
| PEG_RATE | Pegging 비율 |
| UNPEG_QTY | Unpegging 수량 |
| UNPEG_RATE | Unpegging 비율 |
| STAGE_IN_QTY | LOT_HISTORY에 EVENT_TYPE이 Release인 Lot의 TIME_UOM에 따라 집계된 수량을 기록합니다. |
| PROD_QTY | 수량 기준 RTF → Demand의 DueDate 기준으로 집계 |
| ONTIME_QTY | 정시 납기 기준 RTF → Lot의 Target Demand의 Duedate기준으로 집계 |
| LATENESS_QTY | 지연된 납기 기준 RTF → Lot의 Target Demand의 Duedate기준으로 집계 |
| PROD_RATIO | 전체 수요 대비 생산 비율 |
| ONTIME_RATIO | 전체 수요 대비 정시 생산 비율 |
| LATENESS_RATIO | 전체 수요 대비 지연 생산 비율 |
| TOTAL_PROD_QTY | 계획 기간동안 생산한 총 수량 |
| TOTAL_ONTIME_QTY | 계획 기간동안 납기 안에 생산한 총 수량 |
| TOTAL_LATENESS_QTY | 계획 기간동안 지연 생산한 총 수량 |
| TOTAL_PROD_RATIO | TOTAL_PROD_QTY / TOTAL_DEMAND_QTY |
| TOTAL_ONTIME_RATIO | TOTAL_ONTIME_QTY  / TOTAL_DEMAND_QTY |
| TOTAL_LATENESS_RATIO | TOTAL_LATENESS_QTY  / TOTAL_DEMAND_QTY |
| TOTAL_PP_DEMAND_QTY | (업데이트 필요) |
| TOTAL_PP_DEMAND_COUNT | (업데이트 필요) |
| PP_DEMAND_QTY | (업데이트 필요) |
| PP_PROD_QTY | (업데이트 필요) |
| PP_ONTIME_QTY | (업데이트 필요) |
| PP_LATENESS_QTY | (업데이트 필요) |
| PP_PROD_RATIO | (업데이트 필요) |
| PP_LATENESS_RATIO | (업데이트 필요) |
| TOTAL_PP_PROD_RATIO | RTF 집계 대상이 되는 Demand에 기여하는 재공들을 대상으로 총 수량 집계 |
| TOTAL_PP_ONTIME_RATIO | RTF 집계 대상이 되는 Demand에 기여하는 재공들을 대상으로 납기 안에 생산한 수량 집계 |
| TOTAL_PP_LATENESS_RATIO | RTF 집계 대상이 되는 Demand에 기여하는 재공들을 대상으로 지연 생산한 수량 집계 |
| PP_WIP_QTY | Month/Week 별 재공으로 생산 완료한 총 수량 (PP_PROD_QTY에 기여하는 재공 대상) |
| PP_SUPPLY_QTY | Month/Week 별 투입 재공 또는 투입 재공+WIP으로 생산 완료한 총 수량 (PP_PROD_QTY에 기여하는 재공 대상) |
| TOTAL_PP_WIP_QTY | PP_WIP_QTY의 합계 |
| TOTAL_PP_SUPPLY_QTY | PP_SUPPLY_QTY의 합계 |

### OUT_PLAN_INDEX

| 값 | 설명 |
|---|------|
|  |  |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CATEGORY_NAME | INPUT, PEG_RESULT, RELEASE_QTY, PRODUCTION, RESOURCE_UTILIZATION, RTF, SETUP_COUNT, TOTAL_SETUP_COUNT |
| INDEX_NAME | DEMAND_COUNT, DEMAND_QTY, INVALID_WIP_QTY, LATENESS_QTY, LATENESS_RATIO, ONTIME_QTY, ONTIME_RATIO, PEG_QTY, PEG_RATE,... |
