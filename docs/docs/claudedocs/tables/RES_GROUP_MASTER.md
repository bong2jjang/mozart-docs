# RES_GROUP_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 6
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RES_GROUP_ID | String | Y | N | Resource Group ID |
| 2 | RES_GROUP_SEQ | Int | N | N | Allocation Group 내에서 Resource Group의 할당 순서 |
| 3 | ALLOCATION_GROUP_ID | String | N | N | Resource Group이 속한 Allocation Group 코드 |
| 4 | RE_SORT_YN | String | N | Y | 할당 시, Lot Group 재정렬 적용 유무 |
| 5 | DESCRIPTION | String | N | Y | 부가 설명 |
| 6 | Lot_Allocation_Policy | String | N | N | LotGroup 이 선택되었을 때 포함된 Lot 을 할당하는 방식을 설정합니다. |

## 예약어 (Reserved Words)

### Lot 할당 정책

| 값 | 설명 |
|---|------|
| LotGroup | 선택된 LotGroup 내 모든 Lot에 대해 할당 시도 후, 다음 순위의 LotGroup 을 할당합니다. |
| Lot | 선택된 LotGroup 내 첫번째 Lot에 대해서 할당 시도 후 대기 중인 전체 LotGroup 을 재 정렬하여 다음 할당 LotGroup을 정합니다. (재 정렬을 하기 위해서는 재정렬 적용 유무 컬럼을 Y 로 설정해야 합니다.) |

### 재정렬 적용 유무

| 값 | 설명 |
|---|------|
| Y | Lot Group을 할당 할 때마다 Lot Group 을 다시 정렬합니다. |
| N | 현재 Rolling 구간에서 Resource Group 별로 Lot Group 정렬은 한 번만 수행 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| RE_SORT_YN | Y, N |
| Lot_Allocation_Policy | LotGroup, Lot |
