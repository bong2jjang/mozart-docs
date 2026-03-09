# SETUP

- **테이블 유형**: Input Table
- **컬럼 수**: 8
- **예약어 수**: 22

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | SETUP_INDEX | Int | Y | N | Setup Index (PK 설정용) |
| 2 | SETUP_ID | String | N | N | Setup ID |
| 3 | SETUP_CONDITION | String | N | N | Setup 조건 |
| 4 | FROM_CONDITION_VALUE | String | N | Y | Setup 이전 작업물 조건 |
| 5 | TO_CONDITION_VALUE | String | N | Y | Setup 이후 작업물 조건 |
| 6 | SETUP_TIME | Double | N | Y | Setup 소요 시간 |
| 7 | SETUP_PRIORITY | Int | N | Y | Setup 조건에 대한 우선순위 |
| 8 | SETUP_RES_ID | String | N | Y | Setup 시 사용 가능한 Setup Crew |

## 예약어 (Reserved Words)

### 셋업 조건

| 값 | 설명 |
|---|------|
| #ITEM_ID | ITEM_ID를 Setup Condition으로 설정 |
| #ITEM_GROUP | ITEM_GROUP을 Setup Condition으로 설정 |
| #ITEM_GRADE | ITEM_GRADE를 Setup Condition으로 설정 |
| #ITEM_SPEC | ITEM_SPEC을 Setup Condition으로 설정 |
| #ITEM_SIZE | ITEM_SIZE를 Setup Condition으로 설정 |
| #PROD_TYPE | PROD_TYPE을 Setup Condition으로 설정 |
| #PROCUREMENT_TYPE | PROCUREMENT_TYPE을 Setup Condition으로 설정 |
| #DEMAND_ITEM_ID | DEMAND_ITEM_ID를 Setup Condition으로 설정 |
| #DEMAND_ITEM_GROUP | DEMAND_ITEM_GROUP을 Setup Condition으로 설정 |
| #DEMAND_ITEM_GRADE | DEMAND_ITEM_GRADE를 Setup Condition으로 설정 |
| #DEMAND_ITEM_SPEC | DEMAND_ITEM_SPEC을 Setup Condition으로 설정 |
| #DEMAND_ITEM_SIZE | DEMAND_ITEM_SIZE를 Setup Condition으로 설정 |
| #DEMAND_PROCUREMENT_TYPE | DEMAND_PROCUREMENT_TYPE을 Setup Condition으로 설정 |
| #DEMAND_PROD_TYPE | DEMAND_PROD_TYPE을 Setup Condition으로 설정 |
| #BOM_ID | BOM_ID를 Setup Condition으로 설정  (BOM : Routing 관계를 1 : 1이 아닌 N : 1로 정의한 경우, 사용하는 것을 권장합니다) |
| #ROUTING_ID | ROUTING_ID를 Setup Condition으로 설정 |
| #OPER_ID | OPER_ID를 Setup Condition으로 설정 (Operation 별로 OPER_ID를 구분해서 정의한 경우에만 사용하는 것을 권장합니다) |
| (ITEM Prop ID) | ITEM Property ID를 Setup Condition으로 설정. |
| (WIP Prop ID) | WIP Property ID를 Setup Condition으로 설정. |
| & |  |
| | |  |
| #LOT_ID | LOT_ID를 Setup Condition으로 설정 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| SETUP_CONDITION | #ITEM_ID, #BOM_ID, #ROUTING_ID, #OPER_ID, &, \|, (ITEM Prop ID), (WIP Prop ID), #ITEM_GROUP, #ITEM_GRADE, #ITEM_SPEC,... |
