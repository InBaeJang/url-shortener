## Config 안내

- ormconfig.example.json -> ormconfig.json으로 변경
- username, password, database 기입 후 run
- typeorm create table

```bash
typeorm migration:create -n [MigrationName]
```

```bash
npm run migration:run
```

## Todo list

- [x] env file 분리
- [x] PG connection pool 적용
- [x] typescript package path alias
- [x] Http Status Code 적용
- [x] shorten url logic 구성
- [x] remove typescript package path alias(배포 시 경로 추적 불가 문제 발생)
      remove pg connection pool & set connection to postgres db with typeorm
- [x] db connection 이후 앱 실행하기 [참고](https://github.com/andregardi/jwt-express-typeorm)
- [x] Entity 정보를 가지고 table을 생성하는 기능은 migration -> url 테이블 생성하기
- [x] url table id에 code 저장 code는 cuid에서 생성된 id에서 뒷자리 4개를 뽑아서 사용 - [ ] url 조회 [참고](https://typeorm.io/#/find-options)
- [ ] jtest 사용해서 테스트 코드 작성해보기

- 참고: [express-typescript-typeorm-boilerplate](https://github.com/mkosir/express-typescript-typeorm-boilerplate)
