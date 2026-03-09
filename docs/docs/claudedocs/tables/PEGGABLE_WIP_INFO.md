# PEGGABLE_WIP_INFO

- **테이블 유형**: Output Table
- **컬럼 수**: 6
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VERSION | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | DEMAND_ID | String |  |  | Demand ID |
| 4 | PHASE_NO | Int |  |  | Phase 번호 |
| 5 | DEMAND_ISB_ID | String |  |  | Demand의 ItemSiteBuffer ID |
| 6 | WIP_INFO | String |  |  | 해당 Demand가 거쳐온 각 ISB 위치 별  (WIP 누적 수량) / (WIP 수량) |
