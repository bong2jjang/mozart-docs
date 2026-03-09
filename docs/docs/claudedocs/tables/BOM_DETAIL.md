# BOM_DETAIL

- **테이블 유형**: Input Table
- **컬럼 수**: 10
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | BOM_ID | String | Y | N | BOM ID |
| 2 | FROM_ITEM_ID | String | Y | N | From Item ID |
| 3 | FROM_SITE_ID | String | Y | N | From Site ID |
| 4 | FROM_BUFFER_ID | String | Y | N | From Buffer ID |
| 5 | FROM_QTY | Double | N | N | From 수량 |
| 6 | TO_ITEM_ID | String | Y | N | To Item ID |
| 7 | TO_SITE_ID | String | Y | N | To Site ID |
| 8 | TO_BUFFER_ID | String | Y | N | To Buffer ID |
| 9 | TO_QTY | Double | N | N | To 수량 |
| 10 | CALENDAR_ID | String | N | Y | SplitCo/By 수율 Calendar ID |
