# RES_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 15
- **예약어 수**: 13

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RES_ID | String | Y | N | Resource ID |
| 2 | RES_CATEGORY | String | N | N | Resource 카테고리 |
| 3 | RES_TYPE | String | N | Y | Resource 타입 (설비 카테고리 = Resource 경우, 입력 필요) |
| 4 | RES_SITE_ID | String | N | Y | Resource의 Location 정보 (설비 사이트 코드의 값이 SITE_MASTER에 없어도 에러가 발생하지 않습니다.) |
| 5 | CAPA_TYPE | String | N | Y | Resource의 Capacity 타입 |
| 6 | INFINITY_CAPA_YN | String | N | Y | 무한 Capacity 사용여부 본 컬럼에 값을 입력하지 않을 시, N이 입력됩니다. N을 입력할 경우, Calendar로 정의된 Capacity 만 사용하도록 설정합니다. |
| 7 | RES_GROUP_ID | String | N | N | Resource가 속한 Resource Group 코드 |
| 8 | RES_NAME | String | N | Y | Resource 이름 |
| 9 | SETUP_ID | String | N | Y | Setup ID |
| 10 | PM_ID | String | N | Y | PM ID |
| 11 | UTIL_RATE | Double | N | Y | Utilization Rate (가동률) 본 컬럼에 값을 입력하지 않을 시, 1이 입력됩니다. 1을 입력할 경우, 설비가동률이 100%로 적용됩니다. |
| 12 | CAPA_CALENDAR_ID | String | N | N | Capacity에 대한 Calendar ID |
| 13 | UTIL_RATE_CALENDAR_ID | String | N | Y | Utilization Rate에 대한 Calendar ID |
| 14 | LOT_RESV_POLICY | String | N | Y | Lot Qty가 커서 Time Resource의 하루 Capa.를 모두 사용하였을 때, 어떤 설비의 Capa.를 사용할 지에 대한 정책 설정 |
| 15 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### Capa. 유형

| 값 | 설명 |
|---|------|
| Time | Resource의 Capacity를 시간 기준으로 정의 |
| Quantity | Resource의 Capacity를 수량 기준으로 정의 |

### Lot 예약 정책

| 값 | 설명 |
|---|------|
| Lot | Time Resource의 하루 Capa.를 모두 사용하였을 때, 해당 Lot이 다음날 같은 설비 사용 |
| Split | Time Resource의 하루 Capa.를 모두 사용했을 때, Lot을 Split하고 같은 날짜에 다른 설비 사용 |
| LotGroup | Time Resource의 하루 Capa.를 모두 사용했을 때, Lot이 속한 Lot Group이 다음날 같은 설비 사용 |

### 가동률

| 값 | 설명 |
|---|------|
| (0 &lt; Double) | 0보다 큰 double 값을 입력합니다. |
| 1 | 1로 입력할 경우, 설비 가동률이 100%로 적용됩니다. |

### 무제한 Capa. 유무

| 값 | 설명 |
|---|------|
| Y | Calendar로 정의된 Capacity 이상으로 사용하도록 설정 (무한 Capa) |
| N | Calendar로 정의된 Capacity 만 사용하도록 설정 |

### 설비 유형

| 값 | 설명 |
|---|------|
| Table | 한 번에 하나의 Lot만 처리하는 설비 타입 |

### 설비 카테고리

| 값 | 설명 |
|---|------|
| Resource | 공정을 진행할 때, 사용하는 주요 설비 |
| AddResource | 공정을 진행할 때, 주요 설비와 함께 필요한 부가 장비 |
| SetupResource | Setup을 할 때, 사용하는 Setup 자원 (e.g. Setup Crew) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| RES_CATEGORY | Resource, AddResource, SetupResource |
| RES_TYPE | Table |
| CAPA_TYPE | Time, Quantity |
| INFINITY_CAPA_YN | Y, N |
| UTIL_RATE | (0 &lt; Double), 1 |
| LOT_RESV_POLICY | Lot, Split, LotGroup |
