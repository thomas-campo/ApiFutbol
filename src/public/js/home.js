const API_URL = "https://api.football-data.org/v4/matches?X-Auth-Token=b337f2e7aaa141f38ab6fd54909b7e44";

fetch(API_URL,{
    method: "GET"
    // headers: {
    //     "X-Auth-Token": "b337f2e7aaa141f38ab6fd54909b7e44",
    //     "Access-Control-Allow-Origin" : "*",
    //     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    //     "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    //     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    // }
})
    .then(resp => resp.json())
    .then(data =>{
        console.log(data,"data")
    })
    .catch(error => console.log('Authorization failed : ' + error.message + error));

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(resp => resp.json())
//     .then(data =>{
//         console.log(data)
// })