# CFG/ODV_BUFFER_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | BUFFER_ID | String | Y | N | Buffer ID |
| 2 | BUFFER_SEQ | Int | N | N | Buffer 순서 |
| 3 | STAGE_ID | String | N | N | Stage ID |
| 4 | FINAL_ITEM_BUFFER_YN | String | N | Y | 완제품 버퍼 유무 결정 |
| 5 | DESCRIPTION | String | N | Y | 부가 설명 |
