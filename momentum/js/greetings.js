const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout-button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    updateUIBasedOnLoginStatus();
}

function logOutClick() {
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
    updateUIBasedOnLoginStatus();
}

function updateUIBasedOnLoginStatus() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null) {
        // 로그인 상태가 아닐 때
        greeting.classList.add(HIDDEN_CLASSNAME);
        logoutButton.classList.add(HIDDEN_CLASSNAME);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        // 로그인 상태일 때
        greeting.innerText = `Hello ${savedUsername}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
        logoutButton.classList.remove(HIDDEN_CLASSNAME);
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }
}

// 초기 페이지 로드 시 UI 상태 업데이트
// updateUIBasedOnLoginStatus(); 를 사용해도 상관없지만,,,
/*
네, 코드를 직접 updateUIBasedOnLoginStatus(); 호출로 변경하는 것은 기술적으로 가능해요. 
이 변경은 DOMContentLoaded 이벤트 리스너 없이도 페이지가 로드될 때 updateUIBasedOnLoginStatus 함수를 바로 실행하게 만들어, 초기 UI 상태를 설정하게 해요. 
하지만 이 방식을 사용할 때 몇 가지 고려해야 할 점이 있어요:

1. 스크립트 실행 위치: 만약 이 스크립트가 HTML 문서의 <body> 태그 끝 부분에 위치하지 않고, <head> 태그 내에 있다면, updateUIBasedOnLoginStatus 함수가 실행될 때 DOM 요소들이 아직 완전히 로드되지 않았을 수 있어요. 
    이 경우 document.querySelector로 요소를 찾으려고 할 때, 해당 요소들이 아직 존재하지 않아서 에러가 발생할 수 있어요.

2. 로드 시점의 유연성: DOMContentLoaded 이벤트 리스너를 사용하면, 스크립트가 HTML 문서의 어느 위치에 있든 상관없이, DOM 요소들이 모두 로드되고 준비된 후에 함수가 실행되도록 할 수 있어요.
    이는 스크립트의 로드 시점에 대한 유연성을 제공하며, 특히 외부 스크립트 파일을 사용하는 경우 유용해요.

3. 실행 시점의 명확성: DOMContentLoaded를 사용하면, 코드의 의도가 명확해져요. 
    즉, 이 이벤트 리스너가 있으면, 다른 개발자들도 이 스크립트가 DOM이 준비된 직후에 실행되어야 한다는 것을 쉽게 이해할 수 있어요.

직접 함수를 호출하는 방식으로 변경할 때는 이런 점들을 고려해야 해요. 
만약 당신의 스크립트가 항상 <body> 태그의 끝에 위치하며, 실행 시점에 대한 유연성이나 다른 개발자들과의 코드 의도 공유가 크게 중요하지 않다면, 직접 호출하는 방식으로 가도 되요. 
하지만 일반적인 상황에서는 DOMContentLoaded 이벤트 리스너를 사용하는 것이 더 안전하고, 코드의 실행 시점을 더 명확하게 만들어 줘요.
*/

document.addEventListener("DOMContentLoaded", updateUIBasedOnLoginStatus);

// 로그인 폼 이벤트 리스너 설정
loginForm.addEventListener("submit", onLoginSubmit);

// 로그아웃 버튼 이벤트 리스너 설정
logoutButton.addEventListener("click", logOutClick);


