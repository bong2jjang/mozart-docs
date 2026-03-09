# LOT_SPLIT_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 27
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | Version ID |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | DEMAND_ID | String |  |  | Split 대상 Demand |
| 7 | DEMAND_ITEM_ID | String |  |  | Split 대상 Demand Item ID |
| 8 | BUFFER_ID | String |  |  | Split Buffer ID (TO_BUFFER_ID) |
| 9 | MO_ID | String |  |  | Split 대상 제조 주문 (Manufacturing Order) 코드 |
| 10 | MO_DUE_DATETIME | DateTime |  |  | Split 대상 MO 마감 기한 |
| 11 | ORG_LOT_ID | String |  |  | Split 되는 Lot의 Origianl Lot ID |
| 12 | ORG_ITEM_ID | String |  |  | Split 되는 Lot의 Item ID |
| 13 | ORG_SITE_ID | String |  |  | Split 되는 Lot의 Site ID |
| 14 | ORG_ITEM_GRADE | Double |  |  | Split 되는 Lot의 Item 등급 |
| 15 | ORG_LOT_QTY | Double |  |  | Split 되는 Lot의 Origianl Lot 수량 |
| 16 | BOM_ID | String |  |  | BOM ID |
| 17 | BOM_TYPE | String |  |  | BOM 타입 |
| 18 | CONFRIMED_LOT_ID | String |  |  | Split 되는 Lot의 ID |
| 19 | CONFIRMED_LOT_QTY | Double |  |  | Split 되는 Lot의 수량 |
| 20 | COBY_LOT_ID | String |  |  | Binned Wip ID |
| 21 | COBY_LOT_QTY | Double |  |  | Binned Wip의 수량 |
| 22 | COBY_ITEM_ID | String |  |  | Binned Wip의 Item ID |
| 23 | COBY_SITE_ID | String |  |  | Binned Wip의 Site ID |
| 24 | COBY_GRADE | Double |  |  | Binned Wip의 Item 등급 |
| 25 | TO_QTY | Double |  |  | Binned Wip의 Portion 값 |
| 26 | CALENDAR_ID | String |  |  | BOM Detail의 Calendar ID |
| 27 | TO_LOT_AVAILABLE_DATETIME | DateTime |  |  | Binned Wip의 유효 시작 시간 |

## 예약어 (Reserved Words)

### BOM_TYPE

| 값 | 설명 |
|---|------|
| Normal | Assembly나 Split이 없는 경우이며,  가장 일반적으로 사용됩니다. |
| Assembly | 둘 이상의 서로 다른 ISB가 조립되는 경우입니다. |
| SplitBy | 분해가 일어나는 경우이며, To ISB의 수량 합 = 1이 돼야 합니다.  주로 부산물이 생성되는 상황이나 품질 테스트 후 등급이 달라지는 상황을 모델링 할 때 사용합니다. (ItemA 1개 → ItemB 0.1개 + ItemC 0.9개) |
| SplitCo | 분해가 일어나는 경우이며, From ISB의 수량 합과 To ISB의 수량 합이 상이합니다.  주로 작업물이 복수 개로 분할되는 상황을 모델링 할 때 사용합니다.  (ItemA 1개 → ItemB 3개 + ItemC 4개) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| BOM_TYPE | Normal, Assembly, SplitBy, SplitCo |
