# FACTOR_MASTER

- **테이블 유형**: Input Table
- **컬럼 수**: 6
- **예약어 수**: 2

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | RULE_POINT | String | Y | N | Factor가 적용되는 Rule Point |
| 2 | FACTOR_ID | String | Y | N | Factor ID |
| 3 | FACTOR_TYPE | String | N | N | Factor 개발 타입 |
| 4 | FACTOR_SCRIPT | String | N | Y | Factor 스크립트  (FACTOR_TYPE = Custom 인 경우 유효) C# Statement 로서 빌드되어 실행될 수 있는 소스 정보 (현재는 미지원하는 기능) |
| 5 | FACTOR_VALUE | String | N | Y | Factor에 설정할 파라미터 값 |
| 6 | DESCRIPTION | String | N | Y | 부가 설명 |

## 예약어 (Reserved Words)

### FACTOR_TYPE

| 값 | 설명 |
|---|------|
| Predefined | 엔진 소스 내부에 정의되어 있는 Factor |
| Custom | Script를 통해 정의된 Factor |

## 컬럼별 허용값

| Column | 허용값 |
|--------|--------|
| FACTOR_TYPE | Predefined, Custom |
