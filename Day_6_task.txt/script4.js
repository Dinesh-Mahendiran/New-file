var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
console.log(result.status);
result.onload = function () {
    if (result.status == 200) {
      console.log("Passed");
      var res1 = JSON.parse(result.responseText);
      for (var i = 0; i < res1.length; i++) {
        if (res1[i].currencies){
          if (res1[i].currencies[0].code == "USD") {
          console.log(res1[i].name);
        }
      }
  }
    }
  };

// Missing closing brace for result.onload function



// onreadystatechange = function() {}

    // if(result.status==200)
    // {  
    //     console.log("Passed");
    //     var res1=JSON.parse(result.responseText);
    //     console.log(res1);
    //     for(var i=0;i<res1.length;i++) 
    //     {
    //       if(res1[i].currencies[0].code == "US")
    //       {
    //           console.log(res1[i].name,res1[i].currencies[0].code);
    //       }
    //   }
    // }
    // else
    // {
    //     console.log("Error");
    // }
