var number1=document.getElementById("num-val1");
var number2=document.getElementById("num-val2");
var resultval=document.getElementById("result-val");
var form=document.getElementById("percentage-form");

form.addEventListener('submit',function(event){
    //var x=number1.value;
    //var y=number2.value;
    if(!number1.value || !number2.value)
        {
            alert("Enter vallues first");
        }
    else
        {
            var x=parseFloat(number1.value);
            var y=parseFloat(number2.value);
            var result= x/y;
            var percentage=result * 100;
            resultval.innerText="Answer "+percentage+" %";
           // alert("Result "+percentage);
            event.preventDefault();
        }
    console.log(x+ "   "+y);
});