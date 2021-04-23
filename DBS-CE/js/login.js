function loginCallBack(result) {
    console.log(result);
    if (result.code === 200) {
        console.log(window.location);
        console.log(result.data);
        setCookie("user", result.data);
        //页面跳转
        window.location.href = "http://localhost:5501/pages/index.html";
    }
}

function login() {
    var url = baseUrl + "student/login";
    let userData = {
        userId: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    if (document.getElementById("check").checked === true) {
        setCookie("loginData", userData);
    }
    request(url, "POST", userData, loginCallBack);
}


function init() {
    if (getCookie("sno") !== undefined && getCookie("sno") !== "") {
        document.getElementById("username").value = getCookie("sno");
        removeCookie("sno");
    } else if (getCookie("loginData") !== undefined && getCookie("loginData") !== "") {
        var userData = getCookie("loginData");
        document.getElementById("username").value = userData.userId;
        document.getElementById("password").value = userData.password;
    }
    removeCookie("user");
}
init();