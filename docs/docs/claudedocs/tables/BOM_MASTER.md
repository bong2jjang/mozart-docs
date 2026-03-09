# BOM_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 7
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | BOM_ID | String | Y | N | BOM ID |
| 2 | BOM_TYPE | String | N | N | BOM 타입 |
| 3 | Demand_Item_ID | Int | N | Y | BOM을 사용할 수 있는 Target의 Demand_Item_ID |
| 4 | BOM_PRIORITY | Int | N | Y | 우선 순위 |
| 5 | EFF_START_DATE | DateTime | N | Y | BOM 유효 시작 시간 |
| 6 | EFF_END_DATE | DateTime | N | Y | BOM 유효 종료 시간 |
| 7 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### BOM 유형

| 값 | 설명 |
|---|------|
| Normal | Assembly나 Split이 없는 경우이며,  가장 일반적으로 사용됩니다. |
| Assembly | 둘 이상의 서로 다른 ISB가 조립되는 경우입니다. |
| SplitBy | 분해가 일어나는 경우이며, To ISB의 수량 합 = 1이 돼야 합니다.  주로 부산물이 생성되는 상황이나 품질 테스트 후 등급이 달라지는 상황을 모델링 할 때 사용합니다. (ItemA 1개 → ItemB 0.1개 + ItemC 0.9개) |
| SplitCo | 분해가 일어나는 경우이며, From ISB의 수량 합과 To ISB의 수량 합이 상이합니다.  주로 작업물이 복수 개로 분할되는 상황을 모델링 할 때 사용합니다.  (ItemA 1개 → ItemB 3개 + ItemC 4개) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| BOM_TYPE | Normal, Assembly, SplitBy, SplitCo |
