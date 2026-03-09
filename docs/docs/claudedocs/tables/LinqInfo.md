# LinqInfo

- **테이블 유형**: Input Table
- **컬럼 수**: 5
- **예약어 수**: 0

## 스키마

| # | Column Name | Data Type | PK | Nullable | Description |
|---|-------------|-----------|:--:|:--------:|-------------|
| 1 | NAME | String | N | Y | 정의한 LINQ 스크립트(QUERY)의 이름 |
| 2 | TYPE | String | N | Y | LINQPad에서 사용하는 언어 유형으로, 현재는 C# Expression, C# Statements, C# Program만 사용 가능합니다. |
| 3 | QUERY | String | N | Y | LINQ 구문 |
| 4 | ARGUMENTS | String | N | Y | LINQ 구문에서 정의한 '$' Argument와 기본 값으로, 형식은 Argument= Default Value입니다. Argument는 필수 입력 사항이며, 여러개의 Argument를 입력하는 경우 쉼표(,... |
| 5 | DESCRIPTION | String | N | Y | LINQ에 대한 설명 |
