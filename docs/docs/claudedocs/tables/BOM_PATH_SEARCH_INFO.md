# BOM_PATH_SEARCH_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 4
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | DEMAND_ID | String |  |  | Demand ID |
| 4 | BOM_PATH | String |  |  | 해당 Demand의 BOM Path ToBufferID/ToItem@ToSite@ToBuffer/BomID^FromBufferID/FromItem@FromSite@FromBuffer” |
