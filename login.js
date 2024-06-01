$(document).ready(function () {
    document.getElementById('goBack').addEventListener('click', function (event) {
        event.preventDefault(); 
        window.location.href = 'index.html'; 
    });

    
    $("#showPassword").click(function () {
        var passwordInput = $("#password");
        var type = passwordInput.attr("type");
        if (type === "password") {
            passwordInput.attr("type", "text");
            $(this).attr("src", "images/image1.png"); 
            $(this).attr("alt", "Hide Password"); 
        } else {
            passwordInput.attr("type", "password");
            $(this).attr("src", "images/image.png"); 
            $(this).attr("alt", "Show Password");
        }
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var recaptchaResponse = grecaptcha.getResponse();

        if (!recaptchaResponse) {
            Swal.fire({
                icon: 'error',
                title: 'Помилка',
                text: 'Будь ласка, підтвердьте, що ви не робот.',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!password.match(/[A-Z]/) || !password.match(/[0-9]/) || !/^[A-Za-z0-9]+$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Помилка',
                text: 'Пароль повинен містити принаймні одну велику літеру, одну цифру та бути на латиниці.',
                confirmButtonText: 'OK'
            });
            return;
        }

        window.location.href = 'home.html';
    });
});

document.getElementById('goBack').addEventListener('click', function () {
    window.history.back();
});

document.getElementById('forgotPassword').addEventListener('click', function () {
    window.location.href = 'restore_password.html'; 
});
