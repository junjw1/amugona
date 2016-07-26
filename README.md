# AMUGONA
팀 커뮤니케이션을 위한 메신저 웹 애플리케이션

# Contributors
- [MoonG25](https://github.com/MoonG25)

# Index
- [포스트모텀](#포스트모텀)

## 팀 만들고 채팅시작하기
1. 이메일 입력
2. 팀이름 입력
3. 자기이름 입력
4. 최종 확인하기
5. 팀 페이지 채팅 화면

## 디렉토리
```
.
|-- public
|-- app.js
`-- src
    |-- components
    |   |-- create
    |   |   |-- teamname.js
    |   |   |-- name.js
    |   |   `-- confirm.js
    |   `-- chat
    |       |-- header
    |       |   |-- header.js
    |       |   |-- teamname.js
    |       |   `-- desc.js
    |       |-- chat-body
    |       |   |-- chat_body.js
    |       |   |-- chat_nav.js
    |       |   `-- chat_msg.js
    |       |-- footer
    |       |   |-- footer.js
    |       |   `-- input_chat.js
    |       `-- chat.js
    `-- main.js
```
##라우팅
route | 설명
------------ | -------------
/ | 메인 홈 페이지, 이메일 입력
/create | 팀 이름과 주소 입력
/create/name | 사용자 이름 입력
/create/confirm | 입력 내용 확인
/chat | 팀 페이지

## 사용 기술
View - React

## 포스트모텀
### React
사용자가 작성하는 React 컴포넌트 클래스는 대문자로만 작성해야 하며, 
소문자로 시작하는 컴포넌트 이름은 모두 HTML 엘리먼트로 간주됩니다.
