function switcher(buttonId) {
    document.getElementById("div1").setAttribute("hidden", true);
    document.getElementById("div2").setAttribute("hidden", true);
    document.getElementById("div" + buttonId).removeAttribute("hidden");
}

function changePasswordCallBack(result) {
    console.log(result);
    alert("修改密码成功！");
}

function changePassword() {
    var user = getCookie("user");
    var url = baseUrl + "student/password";
    let updateDTO = {
        password: document.getElementById("oldpassword").value,
        updateInfo: document.getElementById("newpassword").value,
        userId: document.getElementById("studentId").value,
        verificationCode: document.getElementById("code").value
    }
    console.log(updateDTO);
    if (updateDTO.updateInfo !== document.getElementById("newpassword2").value) {
        alert("两次密码不一致！请重试！");
        return;
    }
    request(url, "POST", updateDTO, changePasswordCallBack);
}

function init() {
    // formatTemplate("填充成功！", $('script[type="text/template-tr"]').html());
    var user = getCookie("user");
    // console.log(user);
    // div1
    document.getElementById("nickname").innerText = user.nickname;
    document.getElementById("name").innerText = user.sname;
    document.getElementById("studentId").innerText = user.sno;
    document.getElementById("college").innerText = user.ssex;
    document.getElementById("major").innerText = user.sage;
    document.getElementById("grade").innerText = user.sdept;
}
init();