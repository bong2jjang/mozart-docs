# ERROR_LOG

- **테이블 유형**: Output Table
- **컬럼 수**: 10
- **예약어 수**: 15

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | PLAN_VER | String |  |  | 결과 정보 버전 |
| 2 | PROJECT_ID | String |  |  | 프로젝트 ID |
| 3 | CATEGORY | String |  |  | 오류 타입 |
| 4 | MODULE_ID | String |  |  | 모듈 ID |
| 5 | TARGET_KEY | String |  |  | 오류 발생 위치 (테이블명@컬럼키) |
| 6 | TARGET_DATA | String |  |  | 오류 발생 데이터 |
| 7 | REFERRED_KEY | String |  |  | 참고 테이블 (테이블명@컬럼명)^(테이블명@컬럼명) |
| 8 | SEVERITY | String |  |  | 오류 심각성 |
| 9 | REASON_CODE | String |  |  | 오류 발생 사유 코드 |
| 10 | REASON_DETAIL | String |  |  | 오류 발생 상세 사유 |

## 예약어 (Reserved Words)

### CATEGORY

| 값 | 설명 |
|---|------|
| Input | Input Persist 과정에서 발생되는 Error |

### REASON_CODE

| 값 | 설명 |
|---|------|
| AutoCorrectionData | [Info ] 입력 정보를 자동으로 수정하여 엔진을 구동합니다. |
| NotFoundKeyInput | [Critical ] 필수 입력 정보가 누락되었습니다. 해당 정보를 입력해야 엔진이 구동할 수 있습니다. |
| IncompatibleConfig | [Critical ] Experiment에 설정된 “PlanScenario” 값은 SCENARIO_CONFIG의 SCENARIO_ID에 있는 정보를 설정해야 합니다.  해당 정보를 수정해야 엔진을 구동할 수 있습니다. |
| NotFoundReferredData | [Warning ] 입력 정보가 참조 관계 오류를 가집니다. 해당 정보를 삭제 후 엔진을 구동했습니다. |
| MismatchReservedWord | [Warning ] 예약어가 아닌 정보를 입력하였습니다. 해당 정보를 삭제 후 엔진을 구동했습니다. |
| DataTypeMisMatch | [Warning ] 입력 정보의 데이터 타입이 적절하지 않습니다. 해당 정보를 삭제 후 엔진을 구동했습니다. |
| IncompatibleRule | [Warning ] Rule 관련 기준 정보 설정에 문제가 있거나, 입력 정보에 설정된 Factor가 소스 코드 상에 없습니다. |
| InvalidBomPath | [Warning ] ITEM_MASTER의 ITEM_TYPE 값이 “Product”인 경우에는 첫번째 Buffer까지 BOM 정보가 연결되어야 합니다. |
| OutOfRange | [Warning ] 입력 정보가 허용 범위를 벗어났습니다. 해당 정보를 삭제 후 엔진을 수행했습니다. |
| ChainError | [Warning ] 하나의 오류 사항으로 인해 발생하는 연쇄적인 오류에 대한 코드입니다.  - 현재 Buffer, ISB, BOM, Routing Oper, WIP에 대해서만 ChainError가 발생합니다. |

### SEVERITY

| 값 | 설명 |
|---|------|
| Critical | 발생 시 시스템의 동작을 중단시키는 오류 → 이 오류는 발생하는 경우 OUTPUT 창에 기록하고 시스템을 SHUTDOWN 시킴 |
| Warning | 시스템 다운을 유발하지 않지만 의도한 것과 다르게 동작시킬 수 있는 경우 (Ex. 필요한 정보가 없는 경우) |
| Notice | 연관 기준정보가 없어서 엔진에서 삭제한 데이터에 대한 기록 |
| Info | 단순히 사용자에게 공유하기 위한 내용을 기록 |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| CATEGORY | Input |
| SEVERITY | Critical, Warning, Info, Notice |
| REASON_CODE | AutoCorrectionData, NotFoundKeyInput, IncompatibleConfig, NotFoundReferredData, MismatchReservedWord, DataTypeMisMatc... |
