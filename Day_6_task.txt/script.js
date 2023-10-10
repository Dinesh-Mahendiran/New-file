var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
result.onload=function()
{
    var res1=JSON.parse(result.response);
    var res2=res1.filter((obj)=>obj.population<200000);
    console.log(res2);
};