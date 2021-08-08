var url="https://restcountries.eu/rest/v2/all";
 fetch(url)
.then(function (response){
    return response.json();
})
.then(function(data){
    for(let i=0; i<data.length; i++){
        console.log(data[i].flag)
    }
})
.catch(function(error){
    console.log(error);
});


