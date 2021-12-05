// First API Call
const genre = document.querySelector("#genres1");
const genredropdown = document.querySelector("#genredrop");
const dropdown1 = document.querySelector("#dropdownMenu2");



async function getGameData(genres) {
    await fetch(`https://api.rawg.io/api/games?key=8d248e60c35d4a06aa9e584a6a9d9167&genres=${genres}`)
        .then(response => response.json())
        .then(games => console.log(games))
        // const data = response.json();
}
getGameData("action");


console.log("genre",genre);

genre.addEventListener("click", function() {
    console.log("button was clicked");
    // add class "show" to genredropdown
    // add class "show" to dropdown1
    // if "show" class exists, remove else add
});