   // 쿠키 확인 함수
   function getCookie(name) {

    // 쿠키를 얻는다. 
    var cookies = document.cookie.split("; ");
    console.log(cookies);
    for (var i in cookies) {
        if (cookies[i].search(name) != -1) { //!= -1 찾았다는 의미
            return true; //찾은 의미로 true 반환
        }
    }
}

    // 쿠키 생성 함수 () - 매개변수를 받아서
        // 해당 이름으로 1일간 유지되는 쿠키를 생성
        function createCookie(name) {
            
            var date = new Date (); //날짜 생성
            date.setDate( date.getDate() +1); // 현재일자 +1 

            var cookie = ""; // 쿠키 문자열
            cookie += name + "=" +"true;";
            cookie += "expires=" + date.toUTCString;

            console.log(cookie);

            document.cookie = cookie; // 종료확인해주기

        }
