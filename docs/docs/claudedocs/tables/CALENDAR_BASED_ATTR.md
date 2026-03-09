# CALENDAR_BASED_ATTR

- **테이블 유형**: Input Table
- **컬럼 수**: 6
- **예약어 수**: 20

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | CALENDAR_ID | String | Y | N | Calendar ID |
| 2 | PATTERN_ID | String | Y | N | Calendar ID내의 계획 구간 |
| 3 | ATTR_TYPE | String | Y | N | 설정하고자 하는 항목 |
| 4 | ATTR_VALUE | String | N | Y | 설정값 |
| 5 | ATTR_DATA_TYPE | String | N | Y | 설정값 데이터 타입 |
|  |  | String | N | Y | (업데이트 필요) |

## 예약어 (Reserved Words)

### 설정 항목

| 값 | 설명 |
|---|------|
| #RunTat | Operation에 대해 계획 구간 별 Run Tat를 설정 |
| #WaitTat | Operation에 대해 계획 구간 별 Wait Tat를 설정 |
| #Yield | Operation에 대해 계획 구간 별 수율을 설정 |
| #Capacity | Resource의 계획 구간 별 Capacity를 설정 (Qty Capa Calendar인 경우) |
| #Constraint | 제약의 계획 구간 별 제약 수량을 설정 |
| #WorkTime | Resource의 가동 시간을 설정 (Time Capacity Calendar인 경우) |
| #OffTime | Resource의 비가동 시간을 설정 (Time Capacity Calendar인 경우) |
| #UsagePer | Resource에 대해 계획 구간 별 UsagePer 값 설정 |
| #UtilizationRate | Resource의 가동율 Calendar를 정의할 때 사용함 |
| #InfiniteMaterial | 자재 투입 가능 구간을 설정 (제거된 값인데, 매뉴얼에만 남아 있는 걸로 보임) |

### 설정값

| 값 | 설명 |
|---|------|
| (hh:mm:ss),(hh:mm:ss) | 설정 항목 = #WorkTime인 경우,  Work Time의 “시작 시점, 종료 시점”을 입력합니다. (설정값 = 00:00:00,06:00:00, FACTORY_START_TIME = 08:00:00인 경우, 08:00:00~14:00:00 값이 적용됩니다.) |
| (hh:mm:ss),(hh:mm:ss),(String),Y/N | 설정 항목 = #OffTime인 경우,  Off Time의 “시작 시점, 종료 시점, Off Time Name, Lot Split Y/N”를 입력합니다. |
| (Int) | 설정 항목 = #Capacity인 경우,  Capacity Value를 양의 정수(Integer)로 입력합니다. |
| (Double) | Double로 입력합니다. |
| (0 &lt; Double ≤ 1) | 설정 항목 = #Yield인 경우,  Operation Yield를 0 &lt; Double ≤ 1로 입력합니다. |

### 설정값 유형

| 값 | 설명 |
|---|------|
| String | 문자열로 데이터 타입을 지정 |
| Int | 정수형으로 데이터 타입을 지정 |
| Double | 부동 소수점 숫자형 (Double)으로 데이터 타입을 지정 |
| Decimal | 부동 소수점 숫자형 (Decimal)형으로 데이터 타입을 지정 |
| DateTime | 날짜 시간형으로 데이터 타입을 지정 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ATTR_TYPE | #RunTat, #WaitTat, #Yield, #Capacity, #Constraint, #InfiniteMaterial, #WorkTime, #OffTime, #UsagePer, #UtilizationRate |
| ATTR_VALUE | (hh:mm:ss),(hh:mm:ss), (hh:mm:ss),(hh:mm:ss),(String),Y/N, (Int), (0 &lt; Double ≤ 1), (Double) |
| ATTR_DATA_TYPE | String, Int, Double, Decimal, DateTime |
