# CFG/ODV_ITEM_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 11
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | ITEM_ID | String | Y | N | Item ID |
| 2 | ITEM_TYPE | String | N | Y | Item(제품) 타입 |
| 3 | ITEM_NAME | String | N | Y | Item 명 |
| 4 | Item_Group_ID | String | N | Y | Item Group |
| 5 | Item_Priority | Int | N | Y | Item 우선순위 |
| 6 | Item_UOM | String | N | Y | Item 단위 |
| 7 | PROCUREMENT_TYPE | String | N | Y | Item 구매 타입 |
| 8 | PROD_TYPE | String | N | Y | Item 생산 타입 |
| 9 | Item_Size_Type | String | N | Y | Item 사이즈 |
| 10 | Item_Spec | String | N | Y | Item 사이즈 |
| 99 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### 제품 유형

| 값 | 설명 |
|---|------|
| Product | 공정을 진행해야 하는 제품 및 완성된 제품과 같이 주요 생산관리 대상이 되는 제품 (BlockProductSupply으로 신규(Intarget) 투입 여부를 설정) |
| Material | 원자재나 구매 자재와 같이 외부에서 가져오는 제품 (ApplyInfiniteMaterial으로 신규(Intarget) 투입 여부를 설정) |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| ITEM_TYPE | Product, Material |
