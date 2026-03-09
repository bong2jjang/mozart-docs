# PROP_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 6
- **예약어 수**: 18

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PROP_CATEGORY | String | N | N | Property 카테고리 |
| 2 | PROP_ID | String | Y | N | Property ID |
| 3 | DATA_TYPE | String | N | Y | Property Value의 데이터 타입 |
| 4 | DEFAULT_VALUE | String | N | Y | Property Value의 기본값 %_PROP_VALUE 테이블에서 PROP_VALUE 값을 입력하지 않은 경우, 적용되는 기본 값입니다. 입력하지 않은 경우, Default로 Null이 등록됩니다. |
| 5 | RESERVED_WORD | String | N | Y | Property Value의 예약어 목록 Property Value에 대해 예약어가 없는 경우, 입력하지 않습니다. 예약어가 있는 경우, ‘예약어1,예약어2,…’ 형태로 입력합니다. |
| 6 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### 데이터 유형

| 값 | 설명 |
|---|------|
| String | 문자열로 데이터 타입을 지정 |
| Int | 정수형으로 데이터 타입을 지정 |
| Double | 부동 소수점 숫자형(Double)으로 데이터 타입을 지정 |
| Decimal | 부동 소수점 숫자형(Decimal)으로 데이터 타입을 지정 |
| DateTime | YYYY-MM-DD hh:mm:ss 형태로 데이터 타입을 지정 |

### 추가 속성 카테고리

| 값 | 설명 |
|---|------|
| Item | ITEM_PROP_VALUE에서 설정하는 Property인 경우 |
| Site | SITE_PROP_VALUE에서 설정하는 Property인 경우 |
| Buffer | BUFFER_PROP_VALUE에서 설정하는 Property인 경우 |
| ItemSiteBuffer | ITEM_SITE_BUFFER_PROP_VALUE에서 설정하는 Property인 경우 |
| Bom | BOM_PROP_VALUE에서 설정하는 Property인 경우 |
| BomRouting | BOM_ROUTING_PROP_VALUE에서 설정하는 Property인 경우 |
| RoutingOper | ROUTING_OPER_PROP_VALUE에서 설정하는 Property인 경우 |
| Demand | DEMAND_PROP_VALUE에서 설정하는 Property인 경우 |
| Cust | CUST_PROP_VALUE에서 설정하는 Property인 경우 |
| Wip | WIP_PROP_VALUE에서 설정하는 Property인 경우 |
| Res | RES_PROP_VALUE에서 설정하는 Property인 경우 |
| OperRes | OPER_RES_PROP_VALUE에서 설정하는 Property인 경우 |
| OperAddRes | OPER_ADD_RES_PROP_VALUE에서 설정하는 Property인 경우 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PROP_CATEGORY | Item, Site, Buffer, ItemSiteBuffer, Bom, BomRouting, RoutingOper, OperRes, OperAddRes, Demand, Cust, Wip, Res |
| DATA_TYPE | String, Int, Double, Decimal, DateTime |
