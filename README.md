# Vue-Router

### 1. router.js
* 전체 컴포넌트를 불러온 다음 라우터가 주소창에 입력이 되면 하나씩 보여지게 됨
* 맨 처음에 전체 컴포넌트를 라우터가 쥐고 있어야 함 > 처음 로딩 속도가 느려짐
* lazy-loaded : 주소창에 값이 입력 됐을 때 이 값에 해당하는 컴포넌트 내용만 불러오겠다!


### 2. router-view 태그 
* 페이지 표시 태그
* url에 따른 컴포넌트가 화면에 그려지는 영역


### 3. @click="$router.push({ })" 클릭이벤트로 이동하기
* router 에 값을 push 하겠다! 라는 뜻
* 객체로 써주는 경우가 현업에서 많이 쓰인다.


### 4. <router-link> 태그로 이동하기
* to="{name: 'home'}" 는 <a href="/"></a> a태그와 같다.


### 5. vuetify 의 router 로 이동하기
* :to="{name: 'home'}" 으로 태그안에 :to로 v-bind 해준다.
* 햄버거메뉴에서 about으로 이동하게 되면 home과 about 두개에 파란색으로 표시가 됨
* / 라는 것이 들어가 있으면 active 되라 라는 뜻인데, <br>
  /about 일때도 / 가 포함이 되므로 중복으로 파란색으로 표시가 된다.
* 그래서 태그안에 exact 를 넣어서 path가 똑같을 때에만 active 할 수 있다.


### 6. mode: "history"
* router의 기본 모드는 hash # 이다
* 이를 없애고 싶으면 mode를 history 로 해주면 # 해쉬가 없어진다.


### 7. path: "/users/:userId" path 주소창으로 값 전달 받기
* router.js에서 속성 이름을 지정해줘서 주소창을 통해 값을 전달 받을 수도 있다.


### 8. params 로 값 전달 받기
* params 객체 안에 값을 넣어서 전달할 수 있다.


### 9. query
* /users/4321?group=shop&category=outer
* params 처럼 값을 숨겨서 전달 할 수가 없기 때문에 <br>
  넘겨주는 값을 어떻게 사용 하는 지와, 이 페이지가 어떤 보안을 갖춰야 하는지에 따라서<br>
  parmas 와 query를 용도에 맞게 써야한다.


### 10.하위경로 설정하기
* /users/users-detail 같이 하위 경로를 설정할려면  user안에 children으로 객체를 또 선언해주면 된다.

