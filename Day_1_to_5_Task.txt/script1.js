var request1 = new  XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function()
{
    var result1 = JSON.parse(request1.response);
    for(var i in result1)
    {
        console.log(result1[i].flag);
    }
}

