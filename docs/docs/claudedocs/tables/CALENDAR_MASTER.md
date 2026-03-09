# CALENDAR_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 3
- **예약어 수**: 7

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | CALENDAR_ID | String | Y | N | Calendar ID |
| 2 | CALENDAR_TYPE | String | N | Y | Calendar 타입 |
| 3 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### 캘린더 유형

| 값 | 설명 |
|---|------|
| #Capacity | Resource의 Capacity Calendar를 정의할 때 사용함 |
| #Yield | Operation의 수율 Calendar를 정의할 때 사용함 |
| #Tat | Operation의 TAT Calendar를 정의할 때 사용함 |
| #UsagePer | Resource의 Usage Per Calendar를 정의할 때 사용함 |
| #FlowTime | Resource의 Flow Time Calendar를 정의할 때 사용함 |
| #UtilizationRate | Resource의 가동율 Calendar를 정의할 때 사용함 |
| #Constraint | Constraint를 정의할 때 사용함 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CALENDAR_TYPE | #Capacity, #Yield, #Tat, #UsagePer, #UtilizationRate, #Constraint, #FlowTime |
