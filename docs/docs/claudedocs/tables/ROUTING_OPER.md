# ROUTING_OPER

- **테이블 유형**: Input Table
- **컬럼 수**: 12
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | ROUTING_ID | String | Y | N | Routing ID |
| 2 | OPER_ID | String | Y | N | Operation ID |
| 3 | OPER_SEQ | Int | N | N | Operation 순서 |
| 4 | OPER_TYPE | String | N | N | Operation 타입 |
| 5 | WAIT_TAT | Double | N | Y | Operation 대기 시간 |
| 6 | RUN_TAT | Double | N | Y | Operation 처리 시간 |
| 7 | OPER_YIELD | Double | N | Y | Operation 수율 |
| 8 | MULTI_LOT_SIZE | Double | N | Y | Multi Lot Size 설정 |
| 9 | TAT_CALENDAR_ID | String | N | Y | TAT에 대한 Calendar ID |
| 10 | YIELD_CALENDAR_ID | String | N | Y | Yield에 대한 Calendar ID |
| 11 | SINGLE_LOT_SIZE | Double | N | Y | Lot의 최대 할당 가능 수량 |
| 12 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### 공정 유형

| 값 | 설명 |
|---|------|
| Dummy | 공정(Operation)을 진행하기 위해 설비(Resource) 불필요 |
| Operation | 공정(Operation)을 진행하기 위해 설비(Resource) 필요 (Resource Capacity 고려) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| OPER_TYPE | Operation, Dummy |
