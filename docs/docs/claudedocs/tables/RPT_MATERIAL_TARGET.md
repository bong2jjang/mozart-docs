# RPT_MATERIAL_TARGET

- **테이블 유형**: Output Table
- **컬럼 수**: 21
- **예약어 수**: 3

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 10 | Project_ID | String | N | N | 프로젝트 ID |
| 20 | Plan_Ver | String | Y | N | 결과 정보 버전 |
| 30 | Stage_ID | String | N | N | 스테이지 ID |
| 40 | Item_ID | String | N | N | 제품 ID |
| 50 | Site_ID | String | N | N | 사이트 ID |
| 60 | Buffer_ID | String | N | N | 버퍼 ID |
| 70 | To_Item_ID | String | N | N | To Buffer에서 바뀐 Item ID |
| 80 | Rpt_Datetime | DateTime | N | N | 생산 계획 일시 |
| 90 | Qty_Category_ID | String | N | Y | 집계 유형 |
| 100 | Rpt_Qty | Double | N | Y | 생산 계획 수량 |
| 110 | Buffer_Seq | Int | N | Y | 집계된 버퍼 순서 |
| 120 | Category_Seq | Int | N | Y | 카테고리 순서 |
| 130 | Rpt_Date | String | N | Y | 생산 계획일 |
| 130 | Rpt_Week | String | N | Y | 생산 계획 주 |
| 140 | Rpt_Month | String | N | Y | 생산 계획 월 |
| 150 | Rpt_Shift_Code | String | N | Y | 집계 Shift 코드 |
| 160 | Item_Name | String | N | Y | 제품 이름 |
| 170 | Item_Spec | String | N | Y | 제품 규격 |
| 180 | Site_Name | String | N | Y | 사이트 이름 |
| 190 | To_Item_Name | String | N | Y | 산출 제품 이름 |
| 200 | Item_Group_ID | String | N | Y | 제품 그룹 ID |

## 예약어 (Reserved Words)

### 집계 유형

| 값 | 설명 |
|---|------|
| REQ | 소요량 |
| ARRIVAL_WIP | 입고 예정량 |
| EOH | 예상 재고량 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| Qty_Category_ID | REQ, ARRIVAL_WIP, EOH |
