# INIT_DEMAND_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 22
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | DEMAND_PEG_SEQ | Int |  |  | 최종 우선순위 정렬 결과 |
| 7 | DEMAND_ID | String |  |  | Demand ID |
| 8 | MO_ID | String |  |  | 제조 주문 (Manufacturing Order) ID |
| 9 | SITE_ID | String |  |  | Demand의 Site ID |
| 10 | ITEM_ID | String |  |  | Demand의 Item ID |
| 11 | ITEM_GRADE | Double |  |  | Deamnd의 Item 등급 |
| 12 | DUE_DATE | String |  |  | Demand의 납기 일자 |
| 13 | DEMAND_QTY | Double |  |  | Demand 수량 |
| 14 | DEMAND_PRIORITY | Double |  |  | Demand의 우선순위 (기준 정보 DEMAND 테이블에 정의된 값) |
| 15 | CUST_ID | String |  |  | Demand의 고객 ID |
| 16 | DEMAND_TYPE | String |  |  | Demand의 Demand 타입 |
| 17 | MAX_LATENESS_DAY | Double |  |  | Demand의 후행 가능일 |
| 18 | MAX_EARLINESS_DAY | Double |  |  | Demand의 선행 가능일 |
| 19 | LATE_DATE | DateTime |  |  | Demand의 후행가능일이 반영된 납기일 |
| 20 | DUE_WEEK | String |  |  | 납기 주차 |
| 21 | COMPARE_LOG | String |  |  | Demand의 정렬 사유 |
| 22 | FILTER_LOG | String |  |  | Demand의 필터 사유 |
