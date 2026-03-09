# CONSTRAINT

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 9

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | CONSTRAINT_ID | String | Y | N | 제약 ID |
| 2 | PROP_ID | String | N | N | Property ID |
| 3 | PROP_VALUE | String | N | N | Property 값 |
| 4 | CALENDAR_ID | String | N | N | 제약 수량을 정의한 Calendar ID |
| 5 | CONSTRAINT_POLICY | String | N | Y | 제약 수량 누적 여부 |

## 예약어 (Reserved Words)

### CONSTRAINT_POLICY

| 값 | 설명 |
|---|------|
| None | 제약 수량을 누적하여 사용하지 않는 경우 |
| Cumulative | 과거 일자의 잔여 제약 수량을 미래 일자에 누적해서 사용하는 경우 |

### PROP_ID

| 값 | 설명 |
|---|------|
| #ITEM_ID | ITEM_ID를 Constraint로 설정 |
| #ITEM_GRADE | ITEM_GRADE를 Constraint로 설정 |
| #ITEM_GROUP | ITEM_GROUP을 Constraint로 설정 |
| #ITEM_SIZE | ITEM_SIZE를 Constraint로 설정 |
| #ITEM_SPEC | ITEM_SPEC을 Constraint로 설정 |
| #PROCUREMENT_TYPE | PROCUREMENT_TYPE를 Constraint로 설정 |
| #PROD_TYPE | PROD_TYPE을 Constraint로 설정 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| PROP_ID | #ITEM_ID, #ITEM_GRADE, #ITEM_GROUP, #ITEM_SPEC, #PROCUREMENT_TYPE, #PROD_TYPE, #ITEM_SIZE |
| CONSTRAINT_POLICY | Cumulative, None |
