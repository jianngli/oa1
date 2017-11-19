/**
 * Created by sooglejay on 17/11/19.
 */

function login(userName, password) {
    $.ajax({
        method: 'POST',
        url: '../../controller/Login.php',
        data: {
            'userName': userName,
            'password': password
        },
        success: function (e) {
            console.log(e);
            if (e.code == 200) {
                window.location.href = 'index.html';
            } else if (e.message) {
                $("#myModal").modal('show');
                $(".modal-body").html(e.message);
            }
        },
        error: function () {
            $("#myModal").modal('show');
            $(".modal-body").html(e);
        }
    });
}
$(function () {
    $("#btnSubmit").click(function () {
        var userName = $("#userName").val().trim();
        var password = $("#userPassword").val().trim();
        if (userName == undefined || userName.length < 1) {
            $("#myModal").modal('show');
            $(".modal-body").html('请输入用户名');
            return;
        }
        if (password == undefined || password.length < 1) {
            $("#myModal").modal('show');
            $(".modal-body").html('请输入密码');
            return;
        }
        login(userName, password);
    });
});