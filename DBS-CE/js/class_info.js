let resUser = '小爱';

function changeName() {
    resUser = document.getElementById("txt_chg").value;
}

// function addCommentCallBack(result) {
//     if (result.code === 200) {
//         alert("评论成功！");
//     }
//     window.location.href = "class_info.html?cno=" + cno;
// }

// function addComment() {
//     let user = getCookie("user");
//     let comment = document.getElementById("comment").value;
//     let url = baseUrl + "evaluate/new";

//     let commentDTO = {
//         cno: cno,
//         econtent: comment,
//         sno: user.sno
//     };

//     request(url, "POST", commentDTO, addCommentCallBack);
// }

// function initCourseCallBack(result) {
//     document.getElementById("course-name").innerText = result.cname;
//     document.getElementById("course-teacher").innerText = "授课教师：" + result.cteacher;
//     document.getElementById("course-time").innerText = "授课时间：" + result.cdate;
//     document.getElementById("course-campus").innerText = "校区：" + result.cdept;
//     document.getElementById("course-introduction").innerText = result.cinfo;
// }

// function initCommentCallBack(result) {
//     for (let i = 0; i < result.length; ++i) {
//         $("#comment-list").append(
//             formatTemplate(result[i], $('script[type="text/template-comment"]').html()));
//     }
// }

// function init() {
//     let user = getCookie("user");
//     let url_course = baseUrl + "course/" + cno;
//     let url_comment = baseUrl + "evaluate/" + cno;

//     request(url_course, "GET", null, initCourseCallBack);
//     request(url_comment, "GET", null, initCommentCallBack);
//     document.getElementById("comment-username").innerText = user.nickname;
// }