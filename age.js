function calculateAge(){
    var birthDate=document.getElementById("birthDate").value;
    if(birthDate){
        var today=new Date();
        var birthDate=new Date(birthDate);

        var age=today.getFullYear()-birthDate.getFullYear();
        var monthDiff=today.getMonth()-birthDate.getMonth();
        
        if(monthDiff<0 ||(monthDiff===0 &&today.getDate()<birthDate.getDate())){
            age--;
        }
        document.getElementById("result").innerHTML="You are"+ " "+ age + " "+ "Years Old.";
    }
    else{
        alert("Please enter your birthdate");
    }
}