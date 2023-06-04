# ShowLink

### :memo: 개요

- 공연들의 정보를 알려주고 댓글을 통해 의견을 공유할 수 있는 사이트입니다.
- 리액트의 컨셉과 유사하지만 조금 더 많은 정보를 담고 있는 kopis api 를 이용해 만든 사이트입니다.
- SSR 방식의 NEXT를 이용해 CRUD가 가능한 댓글 기능이 있습니다.
- 댓글을 통해 의견공유나 번개 등을 계획할 수 있지 않을까 하는 생각으로 만들었습니다.

### ⚙️ 기술

- NEXT
- Axios
- kopis API
- KAKAO login API
- maria db

### 🔗 URL

<https://nextjs-project-2.vercel.app//>

### 🧰 구현 기능

- 현재 공연상태와 공연의 장르를 선택해 각각의 조건에 맞는 공연정보를 알 수 있습니다.
- 로그인 정보에 따라 로그인메뉴 or 로그아웃, 마이 페이지 메뉴가 나타납니다.
- 상세 페이지에서 즐겨찾기를 할 수 있고, 로그인 상태가 아닐 시에 로그인 페이지로 넘어갑니다.
- 즐겨찾기된 항목은 마이 페이지에서 확인 할 수 있습니다.
- 로그인 시에 댓글을 작성과 삭제가 가능합니다.

### 💻 구현 화면

| 로그인                                                                                                                          | 목록옵션                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" src="https://user-images.githubusercontent.com/74894952/233289413-05624098-b0ef-4238-9b27-4f151ae73af5.gif"/> | <img width="100%" src="https://user-images.githubusercontent.com/74894952/233289419-dd541648-0d24-4a0b-9bef-bb6687ebfd52.gif"/> |

| 디테일                                                                                                                          | 즐겨찾기                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" src="https://user-images.githubusercontent.com/74894952/233289425-78384010-353b-4c0e-924d-f5c4394a7a10.gif"/> | <img width="100%" src="https://user-images.githubusercontent.com/74894952/233289429-ee20c88c-7f4b-4ac0-afd6-a0918e45c3ad.gif"/> |

| 댓글                                                                                                                            | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" src="https://user-images.githubusercontent.com/74894952/233289435-09e11233-1c76-4b38-84aa-3263fb547778.gif"/> | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

### 🤔 느낀 점

- 처음으로 데이터베이스를 통한 CRUD가 가능한 사이트를 만들면서 페이지 이동 시에 어떤 값을 넘겨줘야하는지 전체적인 구조에 대해 생각해 볼 수 있는 시간이었습니다.
- react프로젝트 때보다 더 좋은 api를 찾았지만 xml 방식으로 밖에 주지 않아 문제가 있었지만, json방식으로 변환하는 방법을 찾아 해결하여 원하는 바를 이룰 수 있었습니다.
- 전체적으로 react때보다 다양한 경험과 나은 결과물이 나아 만족스러운 시간이었습니다.
