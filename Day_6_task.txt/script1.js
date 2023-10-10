var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
result.onload=function()
{
    var res1=JSON.parse(result.response);
    var res2=res1.filter((obj)=>obj.region=="Asia");
    console.log(res2);
    // var countryData=JSON.parse(result.response);
    // const asia=countryData.filter((element)=>{
    //     if(element.region==='Asia'){
    //         return element.name;
    //     }
    // })
    // console.log(asia);
}
