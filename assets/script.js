// First API Call

async function testCall() {
    await fetch("https://api.rawg.io/api/games?key=8d248e60c35d4a06aa9e584a6a9d9167")
.then(response => response.json())
.then(games => console.log(games))

}

testCall();

// Second API Call

async function testCall2() {
	await fetch("https://www.cheapshark.com/api/1.0/stores")
.then(response => response.json())
.then(gamesstore => console.log(gamesstore))

}

testCall2();


// Functions to pull data from APIs

// Genre Function





