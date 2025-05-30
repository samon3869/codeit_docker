# Ⅰ. 세팅 배경 지식

[Docker Cheat sheet](https://www.canva.com/design/DAGRvX_W5Ug/GmD2peFIJEpvc9mmwo-f8A/view?utm_content=DAGRvX_W5Ug&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## cf. Question 정리

① Hypervisor와 Container 기술의 차이점?
 
> → **Hypervisor**: 하나의 하드웨어 위에 여러 OS 격리실행 </br>
> - **단위**: VM(Virtual Machine)
 
> → **Container**: 하나의 OS 위에 여러 App 격리실행 </br>
> - **단위**: Container
> - **Container build할 내용저장**: Image </br>
>   - **Image**작성방법: 의미있는 단위(layer)들을 조합하여 생성. 변경내용 존재시, 변경이 발생한 layer만 수정하여 조합 </br>
>   - **Image**버전관리방법: Digest (Imager version을 지칭, SHA 해시값) </br>
>       - **Digest**관리방법: 중요한 Digest(해시값)에는 tag를 이용하여 별칭함 </br>
>       - **tag예시**: 가장 최근의 Digest에는 자동으로 "latest" tag가 붙음


</br>

② 일반 Process와 Container의 차이점?

> → **Process**: 메모리 수준에서 격리 </br>

> → **Container**: 네트워크, 파일시스템, 메모리 수준에서 격리 </br>
(기본 Process보다 더 강하게 격리된 Process)

</br>

## 1. Image 관리

### ① 기초정보

[docker iamge syntax](https://docs.docker.com/reference/cli/docker/image/) </br>
[docker hub](https://hub.docker.com/) # 이미 만들어진 image들 정보 검색

### ② Image pull

```bash
# docker image pull [OPTIONS] NAME[:TAG|@DIGEST]
$ docker image pull node:20.15.1 # tag 이용해서 pull
$ docker image pull node@sha256:b21bcf3e7b6e68d723eabedc6067974950941167b5d7a9e414bd5ac2011cd1c4 # digest 이용해서 pull
$ docker image pull node # 그냥 pull (latest tag가 pull 됨)
```

### ② Image list

```bash
# docker image ls [OPTIONS] [REPOSITORY[:TAG]]
$ docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
node         latest    ac646c3c87d5   4 days ago      1.13GB
node         <none>    1d063816b8cc   10 months ago   199MB
node         20.15.1   fe6f5eb26002   10 months ago   1.1GB

# diegest를 이용하여 pull하는 경우 tag가 없음(dangling images)
```

### ③ Image remove

```bash
# docker image rm [OPTIONS] IMAGE [IMAGE...]
$ docker image rm node:20.15.1
$ docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
node         latest    ac646c3c87d5   4 days ago      1.13GB
node         <none>    1d063816b8cc   10 months ago   199MB
```

```bash
# docker image prune [OPTIONS]
$ docker image prune -a -f # -a 옵션없으면 모든 dangling images만 삭제함 # -f 옵션 없으면 진짜 삭제할 것인지 한번 더 물어봄
$ docker image ls
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```

# Ⅱ. 세팅 배경 지식

## 1. 
### 
```bash
# 소스코드 최상위 위치로 이동하여 실행
$ 
```