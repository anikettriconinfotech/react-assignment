var details = document.getElementById("btn");
details.addEventListener("click", getUserList);

function getUserPosts() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            pdateUserPosts(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function updateUserPosts(response) {
    for (var i = 0; i < response.length; i++) {
        var user = response[i];
        var userElement = document.createElement('div');
        userElement.className = 'user';
        var name = document.createElement('p');
        name.innerHTML = user.name;
        var email = document.createElement('p');
        email.innerHTML = user.email;
        var phone = document.createElement('p');
        phone.innerHTML = user.phone;
        userElement.appendChild(name);
        userElement.appendChild(email);
        userElement.appendChild(phone);

        document.getElementById('user-list').appendChild(userElement);
    }


}