document.getElementById("RestoreForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Помилка',
            text: 'Паролі не співпадають!',
            confirmButtonText: 'OK'
        });
        return false;
    }

    if (!newPassword.match(/[A-Z]/) || !newPassword.match(/[0-9]/) || !/^[A-Za-z0-9]+$/.test(newPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'Помилка',
            text: 'Пароль повинен містити принаймні одну велику літеру, одну цифру та бути на латиниці.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: 'Успіх!',
        text: 'Пароль відновлено!',
        confirmButtonText: 'OK'
    }).then(function () {
        window.location.href = 'login.html'; 
    });
});

document.getElementById('goBack').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.location.href = 'login.html'; 
});


$("#showNewPassword").click(function () {
    var passwordInput = $("#new-password");
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


$("#showConfirmPassword").click(function () {
    var passwordInput = $("#confirm-password");
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
