// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️
// https://randomuser.me/api/?result=1;
document.getElementById("user-input").addEventListener("input", debounce(fetchRandomUser, 500))
function displayUser(user) {
    const userCard = document.getElementById('user-card');
    userCard.style.display = 'block';
    userCard.innerHTML = `
    <img src="${user.picture.large}" />
    <p>${user.email}</p>
    `

}

function fetchRandomUser() {
    const userInput = document.getElementById("user-input").value;

    if(userInput.length > 0) {
        fetch(
            "https://randomuser.me/api/?result=1"
        ).then(
            (res) => {
                return res.json();
            }
        ).then(
            (data) => {
                return displayUser(data.results[0]);
            }
        ).catch(
            error => {
                console.log("The error is ", error);
            }
        )
    }
}

function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args),delay)
    }

}