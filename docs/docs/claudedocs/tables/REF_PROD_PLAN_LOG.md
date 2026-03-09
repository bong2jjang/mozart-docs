# REF_PROD_PLAN_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 20
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | REF_PLAN_VER | String |  |  | 참조 계획 ID |
| 2 | PLAN_VER | String |  |  |  |
| 3 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 4 | PHASE_NO | Int |  |  | Phase ID |
| 5 | STAGE_ID | String |  |  | Stage ID |
| 6 | DEMAND_ID | String |  |  | 참조 계획의 Demand ID |
| 7 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 8 | TARGET_DEMAND_ID | String |  |  | REF_PLAN_ID에 맵핑된 Demand ID |
| 9 | ITEM_ID | String |  |  | 참조 계획의 Item ID |
| 10 | SITE_ID | String |  |  | 참조 계획의 Site ID |
| 11 | BUFFER_ID | String |  |  | 참조 계획의 Buffer ID |
| 12 | DUE_DATE | DateTime |  |  | 참조 계획의 납기 일자 |
| 13 | DEMAND_QTY | Double |  |  | 참조 계획의 수량 |
| 14 | BOM_ID | String |  |  | 참조 계획의 BOM ID |
| 15 | ROUTING_ID | String |  |  | 참조 계획의 Routing ID |
| 16 | OPER_ID | String |  |  | 참조 계획의 Operation ID |
| 17 | RES_ID | String |  |  | 참조 계획의 Resource ID |
| 18 | REF_TYPE | String |  |  | 참조 계획의 타입 (사용자 정의) |
| 19 | REMAIN_QTY | Double |  |  | 참조 계획에 정의된 수량만큼 생산하지 못하고 남은 잔여 수량 |
| 20 | REASON | String |  |  | REMAIN_QTY가 발생한 사유 |

## 예약어 (Reserved Words)

### REASON

| 값 | 설명 |
|---|------|
| BOM | REF_PROD_PLAN에 정의된 BOM이 진행 불가능한 BOM인 경우 |
| PB | REF_PROD_PLAN _DUE_DATE < DEMAND의 납기일 - 선행 생산 허용일 인 경우 |
| LATE | REF_PROD_PLAN _DUE_DATE > DEMAND의 납기일 + 후행 생산 허용일 인 경우 |
| GC | BOM, PB, LATE 이외의 다른 사유 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| REASON | BOM, PB, LATE, GC |
