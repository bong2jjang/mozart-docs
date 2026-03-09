# RPT_DEMAND_PLAN_ISB

- **테이블 유형**: Output Table
- **컬럼 수**: 37
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PROJECT_ID | String | N | N | 프로젝트 ID |
| 2 | PLAN_VER | String | N | N | 결과 정보 버전 |
| 3 | STAGE_ID | String | N | N | Stage ID |
| 4 | ROW_IDX | Index | N | N | 행 인덱스 |
| 5 | DEMAND_ID | String | N | N | 수요 코드 |
| 6 | DEMAND_ITEM_ID | String | N | N | 수요 제품 코드 |
| 7 | DEMAND_ITEM_NAME | String | N | N | 수요 제품 이름 |
| 8 | DEMAND_QTY | Double | N | Y | Demand 수량 |
| 9 | DUE_DATETIME | TimeSpan | N | Y | 납기 일시 |
| 10 | EXTD_DUE_DATETIME | TimeSpan | N | Y | 지연 가능 납기 일시 |
| 11 | CUST_ID | String | N | N | 고객 코드 |
| 12 | CUST_NAME | String | N | N | 고객명 |
| 13 | ITEM_ID | String | N | N | 제품 코드 |
| 14 | ITEM_NAME | String | N | Y | 제품 이름 |
| 15 | ITEM_TYPE | String | N | Y | 제품 유형 |
| 16 | SITE_ID | String | N | N | 사이트 코드 |
| 17 | SITE_NAME | String | N | Y | 사이트 이름 |
| 18 | BUFFER_ID | String | N | N | 버퍼 코드 |
| 19 | BUFFER_SEQ | Int | N | Y | 버퍼 순서 |
| 20 | TARGET_DATETIME | TimeSpan | N | Y | 목표 생산 일시 |
| 21 | EXTD_TARGET_DATETIME | TimeSpan | N | Y | 지연 가능 목표 일시 |
| 22 | TARGET_QTY | Double | N | Y | 목표 수량 |
| 23 | TARGET_UNIT_QTY | Double | N | Y | 수요 기준 목표 수량 (계산식 = TARGET_QTY/BCumChangeRatio) |
| 24 | PLAN_DATETIME | TimeSpan | N | Y | 생산 계획 일시 |
| 25 | PLAN_QTY | Double | N | Y | 생산 수량 |
| 26 | PLAN_UNIT_QTY | Double | N | Y | 수요량 기준 생산 수량 (계산식 = PLAN_QTY/BCumChangeRatio) |
| 27 | PLAN_GAP_SEC | Int | N | Y | 생산 일시 - 목표 일시 (초 단위) |
| 28 | PEG_QTY | Double | N | Y | 재공 사용 수량. Pegging된 Lot 수량 |
| 29 | PEG_UNIT_QTY | Double | N | Y | 수요량 기준 재공 사용량 (계산식 = PEG_QTY/BCumChangeRatio) |
| 30 | INPUT_TARGET_QTY | Double | N | Y | 목표 신규 투입량 |
| 31 | INPUT_TARGET_UNIT_QTY | Double | N | Y | 수요량 기준 신규 투입량 (계산식 = INPUT_TARGET_QTY/BCumChangeRatio) |
| 32 | INPUT_PLAN_QTY | Double | N | Y | 신규 투입량 |
| 33 | INPUT_PLAN_UNIT_QTY | Double | N | Y | 수요량 기준 신규 투입량 (계산식 = INPUT_PLAN_QTY/BCumChangeRatio) |
| 34 | INPUT_OPTION_YN | Json | N | Y | 신규 투입 가능 여부 |
| 35 | PROP_JSON | Json | N | Y | Property ID : Value 형태의 Json |
| 36 | PROP_01 ~ 10 | String | N | Y | 추가 속성 01 ~ 10 |
| 46 | PLAN_QTY_DETAIL_JSON | Json | N | Y | 날짜 별 생산 수량을 Json 형태로 기록 |
