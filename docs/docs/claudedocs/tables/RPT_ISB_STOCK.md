# RPT_ISB_STOCK

- **테이블 유형**: Output Table
- **컬럼 수**: 22
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PROJECT_ID | String | N | N | 프로젝트 ID |
| 2 | PLAN_VER | String | Y | N | 결과 정보 버전 |
| 3 | STAGE_ID | String | N | N | 스테이지 ID |
| 4 | ITEM_ID | String | N | N | 제품 ID |
| 5 | SITE_ID | String | N | N | 사이트 ID |
| 6 | ITEM_GROUP_ID | String | N | Y | 제품 그룹 ID |
| 7 | ITEM_NAME | String | N | Y | 제품 이름 |
| 8 | ITEM_SPEC | String | N | Y | 제품 규격 |
| 9 | SITE_NAME | String | N | Y | 사이트 이름 |
| 10 | STOCK_QTY_PER_DAY | Double | N | Y | 일 필요 수량 |
| 11 | SAFETY_STOCK_QTY | Int | N | Y | 안전재고 수량 |
| 12 | SAFETY_STOCK_DAY | Int | N | Y | 안전재고 일자 |
| 13 | BOH_QTY | Double | N | Y | 기초재고량 |
| 14 | BOH_DAY | Double | N | Y | 기초재고 일수 |
| 15 | BOH_STOCK_RATIO | Double | N | Y | 안전재고 대비 기초재고 비율 |
| 16 | AVG_EOH_QTY | Double | N | Y | 일 평균 재고 |
| 17 | MIN_STOCK_QTY | Double | N | Y | 최소 재고 수량 |
| 18 | MAX_STOCK_QTY | Double | N | Y | 최대 재고 수량 |
| 19 | EOH_QTY | Double | N | Y | 기말재고량 |
| 20 | EOH_DAY | Double | N | Y | 기말재고 일수 |
| 21 | COMPARED_TO_BOH | Double | N | Y | 안전재고 대비 기말재고 비율 |
| 22 | EOH_STOCK_RATIO | Double | N | Y | 기초재고 대비 변동량 |
