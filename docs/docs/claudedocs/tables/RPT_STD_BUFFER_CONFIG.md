# RPT_STD_BUFFER_CONFIG

- **테이블 유형**: Output Table
- **컬럼 수**: 5
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 2 | FROM_BUFFER_ID | String | N | N | 집계 시작 버퍼 코드 |
| 3 | FROM_BUFFER_TYPE | String | N | N | 집계 시작 버퍼 지점 |
| 4 | TO_BUFFER_ID | String | N | N | 집계 종료 버퍼 코드 |
| 5 | TO_BUFFER_TYPE | String | N | N | 집계 종료 버퍼 지점 |
|  | FINAL_ITEM_STD_BUFFER_YN | String | N | Y | 완제품 구간 여부 |

## 예약어 (Reserved Words)

### FROM_BUFFER_TYPE

| 값 | 설명 |
|---|------|
| In | From 버퍼의 In 지점부터 집계합니다. |
| Out | From 버퍼의 Out 지점부터 집계합니다. |

### TO_BUFFER_TYPE

| 값 | 설명 |
|---|------|
| In | To 버퍼의 In 지점까지 집계합니다. |
| Out | To 버퍼의 Out 지점까지 집계합니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| FROM_BUFFER_TYPE | In, Out |
| TO_BUFFER_TYPE | In, Out |
