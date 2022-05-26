# Vue-Router

### router.js
* 전체 컴포넌트를 불러온 다음 라우터가 주소창에 입력이 되면 하나씩 보여지게 됨
* 맨 처음에 전체 컴포넌트를 라우터가 쥐고 있어야 함 > 처음 로딩 속도가 느려짐
* lazy-loaded : 주소창에 값이 입력 됐을 때 이 값에 해당하는 컴포넌트 내용만 불러오겠다!


### router-view 태그 
* 페이지 표시 태그
* url에 따른 컴포넌트가 화면에 그려지는 영역


### @click="$router.push({ })" 클릭이벤트로 이동하기
* router 에 값을 push 하겠다! 라는 뜻
* 객체로 써주는 경우가 현업에서 많이 쓰인다.

### <router-link> 태그로 이동하기
* to="{name: 'home'}" 는 <a href="/"></a> a태그와 같다.

### vuetify 의 router 로 이동하기
* :to="{name: 'home'}" 으로 태그안에 :to로 v-bind 해준다.
