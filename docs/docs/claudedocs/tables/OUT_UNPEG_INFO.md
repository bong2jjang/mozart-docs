# OUT_UNPEG_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 19
- **예약어 수**: 19

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | AVAILABLE_DATETIME | DateTime |  |  | WIP의 유효 시작 시간 |
| 2 | OPER_ID | String |  |  | WIP이 속한 Operation ID |
| 3 | ROUTING_ID | String |  |  | WIP이 속한 Routing ID |
| 4 | WIP_STATUS | String |  |  | WIP 상태 |
| 5 | BUFFER_ID | String |  |  | WIP이 현재 소속된 Buffer ID |
| 6 | SITE_ID | String |  |  | WIP의 Site ID |
| 7 | ITEM_TYPE | String |  |  | WIP의 Item 타입 |
| 8 | ITEM_ID | String |  |  | WIP의 Item ID |
| 9 | REASON_DETAIL | String |  |  | 페깅되지 않은 사유에 대한 상세 정보 |
| 10 | UNPEG_REASON | String |  |  | 페깅되지 않은 사유 |
| 11 | UNPEG_CATEGORY | String |  |  | 페깅되지 않은 사유를 구분 |
| 12 | UNPEG_QTY | Double |  |  | 페깅되지 않은 WIP 수량 |
| 13 | WIP_QTY | Double |  |  | WIP 수량 |
| 14 | CREATION_TYPE | String |  |  | WIP 생성 타입 |
| 15 | WIP_ID | String |  |  | WIP ID |
| 16 | MODULE_ID | String |  |  | 모듈 ID |
| 17 | STAGE_ID | String |  |  | Stage ID |
| 18 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 19 | PLAN_VER | String |  |  | 결과 정보 버전 |

## 예약어 (Reserved Words)

### CREATION_TYPE

| 값 | 설명 |
|---|------|
| SplitByBom | BOM에 의해 Split된 Lot |
| StageOut | Stage Out으로부터 생성된 Wip |
| Wip | WIP으로 생성된 Lot |

### ITEM_TYPE

| 값 | 설명 |
|---|------|
| Product | 생산 대상이 되는 반제품 또는 완제품이며, 투입 여부를 옵션으로 설정할 수 있음 (BlockProductSupply) |
| Material | 생산을 위해 구매해서 사용하는 자재를 의미하며, 그렇기에 첫번째 Buffer까지 이어지지 않아도 문제되지 않음. 투입 여부 옵션이 Product와 구분되어 있음 (ApplyInfiniteMaterial) |

### UNPEG_CATEGORY

| 값 | 설명 |
|---|------|
| Remain | 페깅이 모두 끝난 후 Wip(or Inventory)의 잔여량이 남은 경우 |
| InvaildData | WIP 기준정보상의 오류로 페깅이 되지 않은 경우 |

### UNPEG_REASON

| 값 | 설명 |
|---|------|
| Excess | WIP이 Demand보다 많이 투입되어 기여할 수 있는 Demand가 없음 |
| No Target | WIP이 기여할 수 있는 Demand가 애초에 없음 |
| Not In Item Master | WIP의 Item ID가 ITEM_MASTER에 없음 |
| Not In Site Master | WIP의 Site ID가 SITE_MASTER에 없음 |
| Not In Buffer Master | WIP의 Buffer ID가 BUFFER_MASTER에 없음 |
| Not In Routing Master | WIP의 Routing ID가 ROUTING_MASTER에 없음 |
| Not In Bom Route Info | WIP의 BOM & Routing 정보가 BOM_ROUTING에 없음 |
| Not In Routing Operation | WIP의 Routing & Oper 정보가 ROUTING_OPER에 없음 |
| Not In Item Site Buffer Info | WIP의 ISB 정보가 ITEM_SITE_BUFFER_MASTER에 없음 |
| Not In BOM Master | WIP의 BOM 정보가 BOM_MASTER에 없음 |

### WIP_STATUS

| 값 | 설명 |
|---|------|
| Wait | 작업 진행하지 않고 대기 중인 WIP |
| Run | 설비(Resource)에서 작업 진행 중인 WIP |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| WIP_STATUS | Wait, Run |
| ITEM_TYPE | Product, Material |
| UNPEG_REASON | Excess, No Target, Not In Item Master, Not In Site Master, Not In Buffer Master, Not In Routing Master, Not In Bom Ro... |
| UNPEG_CATEGORY | Remain, InvaildData |
| CREATION_TYPE | SplitByBom, StageOut, Wip |
