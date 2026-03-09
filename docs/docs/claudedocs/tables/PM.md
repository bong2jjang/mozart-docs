# PM

- **테이블 유형**: Input Table
- **컬럼 수**: 10
- **예약어 수**: 13

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PM_ID | String | Y | N | PM ID |
| 2 | PM_PRIORITY | Int | Y | N | PM 우선순위 (겹치는 PM이 여러 개 존재하는 경우, PRIORITY 값이 낮은 PM만 적용) |
| 3 | PM_START_TIME | TimeSpan | N | N | PM의 시작 시간 |
| 4 | PM_TIME | Double | N | Y | PM 소요 시간 |
| 5 | EFF_START_DATE | DateTime | N | N | PM의 시작 날짜 |
| 6 | EFF_END_DATE | DateTime | N | N | PM 종료 날짜 |
| 7 | PATTERN_TYPE | String | N | Y | PM 반복 패턴 |
| 8 | PATTERN_VALUE | String | N | Y | 반복 주기 또는 요일을 입력 (PATTERN TYPE에 따라 달라짐) |
| 9 | PM_POLICY | String | N | Y | PM 정책 (PM과 Lot 작업 충돌시) |
| 10 | PM_POLICY_VALUE | Double | N | Y | 정책에 필요한 추가 정보 |

## 예약어 (Reserved Words)

### PATTERN_TYPE

| 값 | 설명 |
|---|------|
| (Null) | EFF_START_DATE + PM_START_TIME ~ EFF END DateTime 설정한 기간 동안, 일회성 PM 설정 |
| Everyday | 매일 설정 |
| EveryNDays | 특정 주기로 설정 (Ex. PATTERN_VALUE에 4 입력 시 4일 마다 반복) |
| DaysOfWeek | 특정 요일에만 설정 (Mon, Tue, Wed, Thu, Fri, Sat, Sun) |
| DaysOfMonth | 매월 특정 날짜마다 설정 |

### PATTERN_VALUE

| 값 | 설명 |
|---|------|
| (Null) | PATTERN_TYPE = (Null) or Everyday인 경우,  입력하지 않습니다. |
| (0 < Int) | PATTERN_TYPE  = EveryNDays인 경우,  일(날짜)단위 주기를 입력합니다. |
| Mon,Tue,Wed,Thu,Fri,Sat,Sun | PATTERN_TYPE = DaysOfWeek인 경우, 요일을 입력합니다. |
| 1,11,21 (매달 n일) | PATTERN_TYPE = DaysOfMonth인 경우, 날짜를 입력합니다. |

### PM_POLICY

| 값 | 설명 |
|---|------|
| Fix_None | PM이 고정(Fix)된 상태에서 설비 Lot 작업이 PM 일정에 맞춰서 조정됩니다.  이 때, Lot의 Split이 발생하지 않습니다. |
| Fix_Split | PM이 고정(Fix)된 상태에서 Resource 작업이 PM 일정에 맞춰서 조정됩니다.  이 때, PM 전, 후로 Lot의 Split이 발생합니다. |
| Push | 설비 Lot 작업이 완료될 때까지 PM을 밀어서(Push) 진행합니다. |

### PM_START_TIME

| 값 | 설명 |
|---|------|
| (hh:mm:ss) | PM을 시작하는 시간을 hh:mm:ss 양식으로 입력합니다. |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PM_START_TIME | (hh:mm:ss) |
| PATTERN_TYPE | (Null), Everyday, EveryNDays, DaysOfWeek, DaysOfMonth |
| PATTERN_VALUE | (Null), (0 < Int), Mon,Tue,Wed,Thu,Fri,Sat,Sun, 1,11,21 (매달 n일) |
| PM_POLICY | Fix_None, Fix_Split, Push |
