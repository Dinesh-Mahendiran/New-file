var res = new XMLHttpRequest();
res.open("GET","https://restcountries.com/v2/all");
res.send();
res.onload=function(key,value)
{
    var result = JSON.parse(res.response);
    if(key=="birth")
    {
        return new Date(value);
    }
    else
    {
        return value;
    }
}