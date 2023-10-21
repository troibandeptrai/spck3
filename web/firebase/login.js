import { auth } from './config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const emailELm = document.getElementById('email')
const passwordElm = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')

const handleLogin = () => {
    const email = emailELm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert('thành công')

             window.location = './trangchu.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            alert('sai mật khẩu')

        })
};


loginBtn.addEventListener('click', handleLogin)