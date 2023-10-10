var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
result.onload=function()
{
    var res1=JSON.parse(result.response);
    res1.forEach((res2)=>console.log(res2.name,res2.capital,res2.flag));
    
}; 
