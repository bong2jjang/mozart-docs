# RULE_POINT_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 7
- **예약어 수**: 12

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULE_POINT | String | Y | N | Rule Point |
| 2 | RULE_NAME | String | N | Y | Rule 명 |
| 3 | MODULE_TYPE | String | N | N | Rule이 포함된 모듈 타입 |
| 4 | RULE_POINT_TYPE | String | N | N | Rule Point의 타입 |
| 5 | CALL_TYPE | String | N | N | 각 모듈에서 Rule이 실행되는 단위 |
| 6 | ACTIVE_YN | String | N | Y | Rule의 적용 여부 |
| 7 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### ACTIVE_YN

| 값 | 설명 |
|---|------|
| Y | Rule Point가 활성화 됨 |
| N | Rule Point가 활성화 되지 않음 |

### CALL_TYPE

| 값 | 설명 |
|---|------|
| Operation | Operation, Buffer 별 패깅 또는 자원 그룹별 할당 시점에 한번만 호출되는 Rule Point |
| Init | 모듈 시작 시점에만 호출되는 Rule Point |
| Level | Level 별로 반복해서 호출되는 Rule Point |

### MODULE_TYPE

| 값 | 설명 |
|---|------|
| PBO | Plan By Order |
| PBB | Plan By Backward |
| PBF | Plan By Forward |

### RULE_POINT_TYPE

| 값 | 설명 |
|---|------|
| Compare | Rule Point명의 접두어가 ‘Compare’인 경우 |
| Filter | Rule Point명의 접두어가 ‘Filter’인 경우 |
| MergeKey | Rule Point명의 접두어가 ‘Get’이며, String Type의 Key를 반환하는 경우 |
| ListKey | Rule Point명의 접두어가 ‘Get’이며,  List Type의 Key를 반환하는 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| MODULE_TYPE | PBO, PBB, PBF |
| RULE_POINT_TYPE | Compare, Filter, MergeKey, ListKey |
| CALL_TYPE | Operation, Init, Level |
| ACTIVE_YN | Y, N |
