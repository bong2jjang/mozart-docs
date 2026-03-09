# COMPARE_BOM_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 12
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | STAGE_ID | String |  |  | Stage ID |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | PHASE_NO | Int |  |  | Phase 번호 |
| 6 | DEMAND_ID | String |  |  | Demand ID |
| 7 | DEMAND_ITEM_ID | String |  |  | Demand Item ID |
| 8 | ISB_ID | String |  |  | ItemSiteBuffer ID |
| 9 | USED_BOM_ID | String |  |  | 최종 선택된 BOM ID |
| 10 | INIT_BOM | String |  |  | 선택 가능한 BOM ID들 |
| 11 | FILTERED_BOM | String |  |  | 선택 가능한 BOM 중 필터된 BOM ID들 |
| 12 | USABLE_BOM | String |  |  | 우선순위 정렬 대상이 된 BOM ID들 |
