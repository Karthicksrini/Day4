var url="https://restcountries.eu/rest/v2/all";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    for(let i=0; i<data.length; i++){
        console.log(data[i].name, data[i].region, data[i].subregion, data[i].population)
    }
})
.catch(function(error){
    console.log(error);
});