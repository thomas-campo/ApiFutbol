const API_URL = "https://api.football-data.org/v4/matches";
const OPTIONS "http://api.football-data.org/v1/competitions/355/leagueTable";

fetch(API_URL,{
    method: OPTIONS,
    headers: {
        'X-Auth-Token' : "b337f2e7aaa141f38ab6fd54909b7e44",
        'authToken':"b337f2e7aaa141f38ab6fd54909b7e44"
    }
})
    .then(resp => resp.json())
    .then(data =>{
        console.log(data,"data")
    })
    .catch(error => console.log(error.message));

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(resp => resp.json())
//     .then(data =>{
//         console.log(data)
// })