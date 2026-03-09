# BOM_DETAIL_ALT

- **테이블 유형**: Input Table
- **컬럼 수**: 8
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | BOM_ID | String | Y | N | BOM 코드 |
| 2 | ITEM_ID | String | Y | N | 대체되는 Item ID |
| 3 | SITE_ID | String | Y | N | 대체되는 Site ID |
| 4 | BUFFER_ID | String | Y | N | 대체되는 Buffer ID |
| 5 | ALT_ITEM_ID | String | Y | N | 대체하는 Item ID |
| 6 | ALT_SITE_ID | String | Y | N | 대체하는 Site ID |
| 7 | ALT_BUFFER_ID | String | Y | N | 대체하는 Buffer ID |
| 8 | ALT_PRIORITY | Double | N | Y | 대체 ISB 사이의 우선순위 (오름차순) |
