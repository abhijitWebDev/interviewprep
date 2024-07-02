const url = 'https://api.chucknorris.io/jokes/random';
const displayJoke = document.getElementById("display-joke");
const btn = document.getElementById("getJoke")
let latestRequest = 0;

// handle this end point with XMLHttpRequest


// handle this end point with promises
btn.addEventListener('click', getJoke)

function getJoke() {
    const currentRequest = ++ latestRequest;
    fetch(url).then(
        
        response => {
            if(!response.ok) {
                throw new Error(`Http error status: ${response.status}`)

            }
            return response.json();
        }).then(data => {
            console.log(`currentRequest: ${currentRequest}`);
            console.log(`latestRequest: ${latestRequest}`);
            if(currentRequest === latestRequest){
                displayJoke.innerHTML = `${data.value}`
            }
            
        }

    ).catch(
        error => {
            console.error(`Error fetching data:${error}`)
            displayJoke.innerHTML = "something went wrong";
        }
    )
}


// handle the case of race condition
