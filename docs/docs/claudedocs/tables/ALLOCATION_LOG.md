# ALLOCATION_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 21
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | LEVEL_NO | Int |  |  | Level 번호 |
| 7 | TARGET_ID | String |  |  | LFS 의 경우 RESOURCE GROUP ID를 의미하며, BFS의 경우 RESOURCE ID를 의미 |
| 8 | ALLOCATION_SEQ | Double |  |  |  |
| 9 | INIT_LOT_GROUP_CNT | Int |  |  | 대기중인 Lot Group 수 |
| 10 | FILTERED_LOT_GROUP_CNT | Int |  |  | 필터 된 Lot Group 수 |
| 11 | USABLE_LOT_GROUP_CNT | Int |  |  | 필터 후 Lot Group 수 |
| 12 | USED_LOT_GROUP | String |  |  | 현재 선택된 Lot Group |
| 13 | LOG_TYPE | String |  |  | 할당 성공 여부 |
| 14 | FILTERED_LOT_GROUP | String |  |  | 필터 된 Lot Group |
| 15 | USABLE_LOT_GROUP | String |  |  | 할당 가능한 Lot Group |
| 16 | USABLE_RES | String |  |  | 가용 Resource |
| 17 | FILTERED_RES | String |  |  | 필터 된 Resource |
| 18 | USED_RES | String |  |  | 실제 할당된 Resource |
| 19 | ALLOCATION_TYPE | String |  |  | LFS/BFS/RESERVE 여부 |
| 20 | PLAN_DATE | String |  |  | 할당 시도한 날짜 |
| 21 | TARGET_TYPE | String |  |  |  |

## 예약어 (Reserved Words)

### ALLOCATION_TYPE

| 값 | 설명 |
|---|------|
| Lot_First_Selection | Lot이 Resource를 선택한 경우 |
| Bucket_First_Selection | Resource가 Lot을 선택한 경우 |
| Reserve | (구현예정) |

### LOG_TYPE

| 값 | 설명 |
|---|------|
| Allocate | 할당이 된 경우 (할당되지 못하고, Filter된 경우에는 해당 Filter에 대한 Rule Point명으로 출력됨) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| LOG_TYPE | Allocate |
| ALLOCATION_TYPE | Lot_First_Selection, Bucket_First_Selection, Reserve |
