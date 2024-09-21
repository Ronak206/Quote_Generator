const api_url = "https://official-joke-api.appspot.com/random_joke";
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

async function getJoke(url) {
    
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
}

getJoke(api_url);
