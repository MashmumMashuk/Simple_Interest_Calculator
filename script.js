function compute(){

    var principal = document.getElementById("principal").value;

    if(principal<=0){
        alert("Enter a positive number")
        const prinFocus = document.getElementById("principal");
        prinFocus.focus()
    }else{



    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal*rate*years/100 ;

    var amount = parseInt(principal) + parseInt(interest)

    var year = new Date().getFullYear()+parseInt(years);

    
    document.getElementById("result").innerHTML = "If you deposit <b><mark>" + principal + "</mark></b> at an interest rate of <b><mark>" + rate + "%</mark></b>." + " You will receive an amount of <b><mark>" + interest + "</mark></b>, in the year <b><mark>" + year +"</mark></b>";
    }
}


function updateRate (){
    var rateval= document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval;
}