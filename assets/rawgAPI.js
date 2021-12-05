// First API Call

async function getGameData(genres) {
    await fetch(`https://api.rawg.io/api/games?key=8d248e60c35d4a06aa9e584a6a9d9167&genres=${genres}`)
        .then(response => response.json())
        .then(games => console.log(games))
        // const data = response.json();
}
getGameData("action");

const genre = document.querySelector("#genres1");
console.log("genre",genre);

genre.addEventListener("click", function() {
    console.log("button was clicked");
    
});