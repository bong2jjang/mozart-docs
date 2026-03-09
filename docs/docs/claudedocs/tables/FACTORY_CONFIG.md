# FACTORY_CONFIG

- **테이블 유형**: Input Table
- **컬럼 수**: 4
- **예약어 수**: 9

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | FACTORY_START_TIME | TimeSpan | N | N | 공장 운영 시작 시점 |
| 2 | FACTORY_START_DOW | Int | N | N | 주 시작 요일 |
| 3 | SHIFT_NAME | String | N | Y | SHIFT 리스트 (e.g. 주간, 야간으로 입력 시 12시간으로 쪼개져서 리포트에 기록) |
| 4 | ROLLING_PERIOD_UOM | String | N | Y | Bucket의 단위를 지정합니다. |

## 예약어 (Reserved Words)

### FACTORY_START_DOW

| 값 | 설명 |
|---|------|
| 0 | 한 주의 시작을 일요일로 설정합니다. |
| 1 | 한 주의 시작을 월요일로 설정합니다. |
| 2 | 한 주의 시작을 화요일로 설정합니다. |
| 3 | 한 주의 시작을 수요일로 설정합니다. |
| 4 | 한 주의 시작을 목요일로 설정합니다. |
| 5 | 한 주의 시작을 금요일로 설정합니다. |
| 6 | 한 주의 시작을 토요일로 설정합니다. |

### ROLLING_PERIOD_UOM

| 값 | 설명 |
|---|------|
| Day | Bucket의 단위를 Day로 설정합니다. |
| Shift | Bucket의 단위를 Shift로 설정합니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| FACTORY_START_DOW | 1, 2, 3, 4, 5, 6, 0 |
| ROLLING_PERIOD_UOM | Day, Shift |
