$(document).ready(function () {
    $(".profile-button").click(function () {
        $("#profileDropdown").toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.profile-menu').length) {
            $("#profileDropdown").hide();
        }
    });

    $('#createBlogForm').on('submit', function(event) {
        event.preventDefault(); 

        var formData = new FormData(this);

        Swal.fire({
            icon: 'success',
            title: 'Успіх!',
            text: 'Запит надіслано!',
            confirmButtonText: 'OK'
        }).then(function() {
            window.location.href = 'home.html';
        });
    });
});
