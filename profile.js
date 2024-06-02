document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userName').textContent = localStorage.getItem('name');
    document.getElementById('userDob').textContent = localStorage.getItem('dob');
    document.getElementById('userGender').textContent = localStorage.getItem('gender');
    document.getElementById('userCountry').textContent = localStorage.getItem('country');
    document.getElementById('userPhone').textContent = localStorage.getItem('phone');
    document.getElementById('userEmail').textContent = localStorage.getItem('email');

    const profilePicture = localStorage.getItem('profilePicture');
    if (profilePicture) {
        document.getElementById('profileImage').src = profilePicture;
    }
});