$(document).ready(function () {
    $("#country").change(function () {
        var selectedCountryCode = $(this).find(":selected").data("phone-code"); 
        $("#phone").val("+" + selectedCountryCode); 
    });

    
    $("#editForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val();
        var dob = $("#dob").val();
        var password = $("#password").val();

        
        if (!dob) {
            Swal.fire({
                icon: 'error',
                title: 'Помилка',
                text: 'Будь ласка, введіть дату народження.',
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

        
        Swal.fire({
            icon: 'success',
            title: 'Успіх!',
            text: 'Дані змінено успішно!',
            confirmButtonText: 'OK'
        }).then(function () {
            window.location.href = 'profile.html'; 
        });
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

    $(".back-button").click(function () {
        window.location.href = 'profile.html'; 
    });
});
