# OPER_ADD_RES

- **테이블 유형**: Input Table
- **컬럼 수**: 11
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 10 | Routing_ID | String | N | Y | 라우팅 코드 |
| 20 | Oper_ID | String | N | Y | 공정 코드 |
| 30 | Res_Group_ID | String | N | Y | 설비 그룹 코드 |
| 40 | Res_ID | String | N | Y | 설비 코드 |
| 50 | From_Item_ID | String | N | Y | 투입 제품 코드 |
| 60 | To_Item_ID | String | N | Y | 산출 제품 코드 |
| 70 | Add_Res_Group_ID | String | N | Y | 부수 설비 그룹 코드 |
| 80 | Add_Res_ID | String | N | Y | 부수 설비 코드 |
| 90 | Priority | Int | N | Y | 부수 설비의 우선 순위 |
| 100 | Usage_Per | Double | N | Y | 단위 사용 Capa. (Add Res의 UsagePer) |
| 110 | Res_Cnt | Int | N | Y | 필요 부수 설비 대수 |
