# WIP

- **테이블 유형**: Input Table
- **컬럼 수**: 15
- **예약어 수**: 6

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | WIP_ID | String | Y | N | WIP ID |
| 2 | WIP_QTY | Double | N | N | WIP 수량 |
| 3 | WIP_TYPE | String | N | N | WIP 타입 |
| 4 | WIP_STATUS | String | N | N | WIP 상태 |
| 5 | ITEM_ID | String | N | Y | WIP의 Item ID |
| 6 | SITE_ID | String | N | Y | WIP이 위치한 Site ID |
| 7 | BUFFER_ID | String | N | Y | WIP의 Buffer ID |
| 8 | ROUTING_ID | String | N | Y | WIP의 Routing ID |
| 9 | OPER_ID | String | N | Y | WIP의 Operation ID |
| 10 | RES_ID | String | N | Y | WIP을 작업 중인 Resource ID |
| 11 | STAGE_ID | String | N | Y | WIP이 속한 Stage |
| 12 | AVAILABLE_DATETIME | DateTime | N | Y | WIP 사용 가능 시작 시간 |
| 13 | TRACK_IN_DATETIME | DateTime | N | Y | Resource 로딩 시간 |
| 14 | WIP_VER | String | N | Y | WIP 버전(Version) |
| 14 | Demand_ID | String | N | Y | WIP과 하드 Pegging 예정인 Demand 코드 |

## 예약어 (Reserved Words)

### 사용가능한 날짜

| 값 | 설명 |
|---|------|
| (Null) | 사용가능한 날짜 = Null 인 경우, PLAN_START_DATE + FACTORY_START_TIME 값으로 반영됩니다. |
| (YYYY-MM-DD hh:mm:ss) | WIP을 사용할 수 있는 시간을 입력합니다. |

### 재공 상태

| 값 | 설명 |
|---|------|
| Wait | 작업 진행하지 않고 대기 중인 WIP |
| Run | 설비(Resource)에서 작업 진행 중인 WIP |

### 재공 유형

| 값 | 설명 |
|---|------|
| Inventory | Buffer에 WIP이 위치하는 경우 |
| Wip | Operation에 WIP이 위치하는 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| WIP_TYPE | Inventory, Wip |
| WIP_STATUS | Wait, Run |
