# OUT_BOM_NETWORK_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 34
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | DEMAND_ITEM_ID | String |  |  | 계획이 속한 Item ID |
| 4 | DEMAND_SITE_ID | String |  |  | 계획이 속한 Site ID |
| 5 | DEMAND_BUFFER_ID | String |  |  | 계획이 속한 Buffer ID |
| 6 | BOM_ID | String |  |  | BOM ID |
| 7 | ROUTING_ID | String |  |  | Routing ID |
| 8 | BOM_TYPE | String |  |  | BOM 타입 |
| 9 | BOM_PRIORITY | Int |  |  | BOM 우선순위 |
| 10 | FROM_ITEM_ID | String |  |  | From Item ID |
| 11 | FROM_SITE_ID | String |  |  | From Site ID |
| 12 | FROM_BUFFER_ID | String |  |  | From Buffer ID |
| 13 | FROM_BUFFER_SEQ | Int |  |  | From Buffer 순서 (오름차순) |
| 14 | FROM_QTY | Double |  |  | From 수량 |
| 15 | FROM_WIP_QTY | Double |  |  | From ISB에 대한 WIP 수량 |
| 16 | FROM_WIP_QTY_SUM | Double |  |  | From ISB에 대한 누적 WIP 수량 |
| 17 | TO_ITEM_ID | String |  |  | To Item ID |
| 18 | TO_SITE_ID | String |  |  | To Site ID |
| 19 | TO_BUFFER_ID | String |  |  | To Buffer ID |
| 20 | TO_BUFFER_SEQ | Int |  |  | To Buffer 순서 (오름차순) |
| 21 | TO_QTY | Double |  |  | To 수량 |
| 22 | TO_WIP_QTY | Double |  |  | To ISB에 대한 WIP 수량 |
| 23 | TO_WIP_QTY_SUM | Double |  |  | To ISB에 대한 누적 WIP 수량 |
| 24 | USABLE_DETAIL_YN | String |  |  | BOM의 가용 여부 판단 |
| 25 | USABLE_BOM_YN | String |  |  | BOM의 가용 여부 판단 (IS_USABLEDETAIL보다 상위개념) |
| 26 | RES_LIST | String |  |  | BOM에 포함된 Resource ID |
| 27 | ALL_RES_LIST | String |  |  | 거쳐온 모든 BOM에 포함된  Resource ID들의 누적 목록 |
| 28 | ROUTING_TAT | Double |  |  | BOM 내 Operation들의 TAT 합 (단위:Day) |
| 29 | MIN_CUM_TAT | Double |  |  | 최소 누적 TAT (단위:Day) |
| 30 | MAX_CUM_TAT | Double |  |  | 최대 누적 TAT (단위:Day) |
| 31 | LATE_CUM_TAT | Double |  |  | 최대 누적 TAT (단위:Day) |
| 32 | MAX_CUM_YIELD | Double |  |  | 최대 누적 수율 |
| 33 | PREV_ISB_LIST | String |  |  | 이전 ISB ID 나열 |
| 34 | NEXT_ISB_LIST | String |  |  | 다음 ISB ID 나열 |
