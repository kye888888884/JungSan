"use strict";

const id = document.querySelector("#id"),
    pass = document.querySelector("#pass"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    if (!id.value) return alert("아이디를 입력해주세요.")
    if (!pass.value) return alert("비밀번호를 입력해주세요.");

    const req = {
        id: id.value,
        pass: pass.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res.success);
        if (res.success) {
            location.href = "/";
        } else {
            if (res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 에러"));
    });
}