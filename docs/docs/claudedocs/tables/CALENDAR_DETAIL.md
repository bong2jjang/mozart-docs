# CALENDAR_DETAIL

- **테이블 유형**: Input Table
- **컬럼 수**: 8
- **예약어 수**: 8

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | CALENDAR_ID | String | Y | N | Calendar ID |
| 2 | PATTERN_ID | String | Y | N | 계획 구간 (Calendar의 세부 분류 항목입니다) |
| 3 | EFF_START_DATE | DateTime | N | Y | 계획 구간의 시작 날짜 |
| 4 | EFF_END_DATE | DateTime | N | Y | 계획 구간의 종료 날짜 |
| 5 | PATTERN_TYPE | String | N | Y | Calendar Pattern |
| 6 | PATTERN_VALUE | String | N | Y | Pattern 반복 주기 또는 요일을 입력 (패턴 유형에 따라 달라짐) |
| 7 | DESCRIPTION | String | N | Y | 부가 설명 |
| 8 | PATTERN_PRIORITY | Int | N | Y | Pattern 적용 우선순위 (오름차순) |

## 예약어 (Reserved Words)

### 패턴 반복 주기

| 값 | 설명 |
|---|------|
| (Null) | 패턴 유형 = Everyday 인 경우,  입력하지 않습니다. |
| 00 (Day 기준 적용 주기) | 패턴 유형 = EveryNdays인 경우,  일단위 주기를 입력합니다. |
| Mon,Tue,Wed,Thu,Fri,Sat,Sun (요일 선택) | 패턴 유형 = DaysOfWeek인 경우,  요일을 입력합니다. |
| 1,11,21 (매달 n일) | 패턴 유형 = DaysOfMonth인 경우,  날짜를 입력합니다. |

### 패턴 유형

| 값 | 설명 |
|---|------|
| Everyday | Calendar Based Attribute를 매일 적용 |
| DaysOfWeek | Calendar Based Attribute를 매주 특정 요일마다 적용 |
| EveryNdays | Calendar Based Attribute를 n일마다 적용 (Capa Calendar는 n일 동안 Capa 공유) |
| DaysOfMonth | Calendar Based Attribute를 매월 특정 날짜마다 적용 (Capa Calendar는 특정 날짜 사이에 Capa 공유) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PATTERN_TYPE | Everyday, EveryNdays, DaysOfWeek, DaysOfMonth |
| PATTERN_VALUE | (Null), 00 (Day 기준 적용 주기), Mon,Tue,Wed,Thu,Fri,Sat,Sun (요일 선택), 1,11,21 (매달 n일) |
