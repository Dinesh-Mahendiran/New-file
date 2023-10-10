var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload=function()
{
    var result2 = JSON.parse(request2.response);
    for( var i in result2)
    {
       console.log(result2[i].name,result2[i].region,result2[i].subregion,result2[i].population);
    }
}

