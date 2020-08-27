# Bull with Nestjs

이 레포지토리는 여러 bull processor 가 같은 queue 를 처리하는 상황에서 오직 하나의 job 이 오직 하나의 processor 에게만 할당되는지를 테스트하기 위해 설계되었다.  

## Prerequisites

- Nodejs v12.x.x
- [Yarn](https://yarnpkg.com/)
- [Bull](https://github.com/OptimalBits/bull)
- [Nestjs](https://nestjs.com/)
- [docker](https://www.docker.com/)

## 실험하기

### Redis 실행하기

redis 를 실행하기 위해 도커를 사용한다.

도커 환경이 아니라 직접 로컬에 redis 를 설치해도 무방하다. 

```shell
$ docker run --rm -p 6379:6379 --name bull-redis redis
```

### 2개의 consumer 실행하기

한 터미널에서

```shell
$ cd consumer
$ yarn start:1
```

다른 터미널에서

```shell
$ cd consumer
$ yarn start:2
```

를 각각 실행한다.

### Nestjs Producer

```shell
$ cd nest-producer
$ yarn start
```

실행 후, browser 를 통해 `localhost:3000` 으로 접속한다.

### Plain Bull Producer

```shell
$ cd producer
$ yarn start
```

## 결과

producer 에서 작업을 더할 때마다 consumer1 혹은 consumer2 에 오직 한 번만 job 이 실행되게 된다.
