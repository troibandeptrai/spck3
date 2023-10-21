import { auth } from './config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const emailELm = document.getElementById('email')
const passwordElm = document.getElementById('password')
const registerBtn = document.getElementById('register-btn')

const handleLogin = () => {
    const email = emailELm.value;
    const password = passwordElm.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert('Đăng kí thành công.Đặng nhập ngay!');

        })
        .catch((error) => {
            const errorCode = error.code;
            alert('Tên tài khoản đã tồn tại');

        });

};


registerBtn.addEventListener('click', handleLogin)