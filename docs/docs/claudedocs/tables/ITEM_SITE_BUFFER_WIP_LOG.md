# ITEM_SITE_BUFFER_WIP_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 8
- **예약어 수**: 3

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | WIP_ID | String |  |  | Wip(or Inventory) ID |
| 4 | ISB_ID | String |  |  | ItemSiteBuffer ID |
| 5 | LOG_TYPE | String |  |  | 기록 타입(Add,Peg,Update) |
| 6 | AVAILABLE_DATETIME | DateTime |  |  | Wip(or Inventory)의 유효시간 |
| 7 | WIP_QTY | Double |  |  | Wip(or Inventory)의 수량 |
| 8 | LOG_SEQ | Int |  |  | Row 순서 |

## 예약어 (Reserved Words)

### LOG_TYPE

| 값 | 설명 |
|---|------|
| Add | 초기화 시점에 WIP을 전개하며 관련된 ItemSiteBuffer에 모두 등록 |
| Peg | WIP이 페깅된 시점에 WIP의 잔여 수량 기록 |
| Update | WIP이 페깅된 이후 변경된 WIP의 수량 정보를 관련된 ISB에 모두 갱신 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| LOG_TYPE | Add, Peg, Update |
