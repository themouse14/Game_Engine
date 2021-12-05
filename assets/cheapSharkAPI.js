// Second API Call

async function testCall2() {
    await fetch("https://www.cheapshark.com/api/1.0/stores")
        .then(response => response.json())
        .then(gamesstore => console.log(gamesstore))
}
testCall2();



// Functions to pull data from APIs
// Genre Function








