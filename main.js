var arr=[1,256,3];
var sum=0;

for (var i=0;i<arr.length;i++){
sum+=arr[i];
}
console.log(sum);


var a=1.124790;

var result=parseFloat(a.toFixed(4));
console.log(result);


function five(x){
  return  Math.ceil(x/5)*5;
}

var n=946;
console.log(five(n));


   var date1 =new Date("12/08/1995");
    var date2=new Date("05/07/2020");
    
    var difference_year=date2.getFullYear()-date1.getFullYear();
    var difference_month=date2.getMonth()-date1.getMonth();
    var difference_day=date2.getDay()-date1.getDay();
    console.log(date1  + date2  + difference_day +" day"+ difference_month + " months " + difference_year + " year");
