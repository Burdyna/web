$(document).ready(function () {
    document.getElementById('goBack').addEventListener('click', function (event) {
        event.preventDefault(); // Відміна стандартної дії кнопки
        window.location.href = 'index.html'; // Перенаправлення на головну сторінку блогу
    });

    // Показ або приховування паролю
    $("#showPassword").click(function () {
        var passwordInput = $("#password");
        var type = passwordInput.attr("type");
        if (type === "password") {
            passwordInput.attr("type", "text");
            $(this).attr("src", "images/image1.png"); // Змінюємо зображення на image1.png
            $(this).attr("alt", "Hide Password"); // Змінюємо альтернативний текст
        } else {
            passwordInput.attr("type", "password");
            $(this).attr("src", "images/image.png"); // Змінюємо зображення на image.png
            $(this).attr("alt", "Show Password"); // Змінюємо альтернативний текст
        }
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

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
