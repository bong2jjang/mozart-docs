# CFG/ODV_DEMAND

- **테이블 유형**: Input Table
- **컬럼 수**: 15
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | DEMAND_ID | String | Y | N | Demand ID |
| 2 | ITEM_ID | String | N | N | Item ID |
| 3 | SITE_ID | String | N | N | Site ID |
| 4 | BUFFER_ID | String | N | N | Buffer ID |
| 5 | DUE_DATE | String | N | N | 납기 일자 (YYYY-MM-DD) |
| 5.5 | Due_DateTime | DateTime | N | Y | 납기 일시 (YYYY-MM-DD hh:mm:ss) |
| 6 | DEMAND_QTY | Double | N | Y | Demand 수량 |
| 7 | DEMAND_PRIORITY | Double | N | Y | Demand 우선순위 |
| 8 | CUST_ID | String | N | Y | 고객 ID |
| 9 | DEMAND_TYPE | String | N | Y | Demand Type (현재는 사용 X, 추후에 예약어를 추가할 계획) |
| 10 | MAX_LATENESS_DAY | Int | N | Y | 납기 일자 대비 최대한 지연 생산할 수 있는 일 단위 기간 |
| 11 | MAX_EARLINESS_DAY | Int | N | Y | 납기 일자 대비 최대한 선행 생산할 수 있는 일 단위 기간 설정한 값 만큼 선행하여 투입됨 |
| 12 | DEMAND_VER | String | N | Y | Demand Version |
| 13 | Demand_Group_ID | String | N | Y | Demand 그룹 |
| 14 | DESCRIPTION | String | N | Y | 부가 설명 |
