function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById('email').innerText = profile.getEmail();
    document.getElementById('name').innerText = profile.getName();
    document.querySelector('.profile-data').style.display = 'block';
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById('email').innerText = '';
        document.getElementById('name').innerText = '';
        document.querySelector('.profile-data').style.display = 'none';
        console.log('User signed out.');
    });
}
