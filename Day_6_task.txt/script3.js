var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
result.onload=function()
{
    var res1=JSON.parse(result.response);
    res1.reduce((acc,ele)=>acc+ele);
    //res1.map(x=>population).reduce((accumalator,element)=>accumulator+element);
    console.log(res1);
    
}; 
