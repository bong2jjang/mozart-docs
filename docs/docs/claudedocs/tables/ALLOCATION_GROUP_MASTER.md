# ALLOCATION_GROUP_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | ALLOCATION_GROUP_ID | String | Y | N | Allocation Group ID |
| 2 | ALLOCATION_GROUP_SEQ | Int | N | Y | Stage 내 Allocation Group 순서 |
| 3 | ALLOCATION_TYPE | String | N | Y | 할당 방식 |
| 4 | STAGE_ID | String | N | N | Stage ID |
| 5 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### ALLOCATION_TYPE

| 값 | 설명 |
|---|------|
| LFS | Lot First Selection의 약어이며,  Lot Group을 먼저 선택하고, Resource를 선택하는 방식 |
| RFS | Resource First Selection의 약어이며,  Resource를 먼저 선택하고, Lot Group을 선택하는 방식 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ALLOCATION_TYPE | LFS, RFS |
