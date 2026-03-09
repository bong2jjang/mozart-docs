# ITEM_SITE_BUFFER_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 9
- **예약어 수**: 4

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | ITEM_ID | String | Y | N | Item ID |
| 2 | SITE_ID | String | Y | N | Site ID |
| 3 | BUFFER_ID | String | Y | N | Buffer ID |
| 4 | INFINITY_MATERIAL_YN | String | N | Y | 무한 재고 설정 유무 |
| 5 | INPUT_LOT_SIZE | Double | N | Y | 투입 Lot 사이즈 |
| 6 | NO_CARRY_YN | String | N | Y | NoCarry 기능 허용 여부 |
| 7 | DESCRIPTION | String | N | Y | 부가 설명 |
| 8 | SAFETY_STOCK_QTY | String | N | Y | 안전재고 수량 설정 |
| 9 | SAFETY_STOCK_DAY | String | N | Y | 안전재고 일수 설정 |

## 예약어 (Reserved Words)

### No Carry 허용 유무

| 값 | 설명 |
|---|------|
| Y | NoCarry 기능 허용 |
| N | NoCarry 기능 허용하지 않음 |

### 자재 무한 공급 유무

| 값 | 설명 |
|---|------|
| Y | 재고량을 무한으로 설정 |
| N | 재고량을 무한으로 설정하지 않음 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| INFINITY_MATERIAL_YN | Y, N |
| NO_CARRY_YN | Y, N |
