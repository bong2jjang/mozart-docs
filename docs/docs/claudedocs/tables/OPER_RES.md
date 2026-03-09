# OPER_RES

- **테이블 유형**: Input Table
- **컬럼 수**: 9
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | ROUTING_ID | String | Y | N | Routing ID |
| 2 | OPER_ID | String | Y | N | Operarion ID |
| 3 | RES_ID | String | Y | N | Resource ID |
| 4 | FLOW_DURATION | Double | N | N | Usage Per * Lot 수량 만큼 소요된 이후 추가로 소요되는 시간 (Resource는 다음 재공 처리 가능) |
| 5 | USAGE_PER | Double | N | N | Lot 수량 1이 Resource를 점유하는 시간 (Resource 점유 시간 = Usage Per * Lot 수량) |
| 6 | RES_PRIORITY | Int | N | Y | Resource 우선순위 |
| 7 | USAGE_PER_CALENDAR_ID | String | N | Y | Usage Per에 대한 Calendar ID |
| 8 | FLOW_TIME_CALENDAR_ID | String | N | Y | Flow Time에 대한 Calendar ID |
| 8 | Batch_Size | String | N | Y | Res Type = Batch 일 때, 배치 크기 입력 |
