function isprime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
document.getElementById("id_submit").addEventListener("click",()=>{
    let num =document.getElementById("input_id").value;
    let result=isprime(num);
    if(result){
        document.getElementById("msg").innerHTML =num + " is a prime number.";
    }else{
        document.getElementById("msg").innerHTML =num + " is not a prime number.";
    }
});
document.getElementById("id_clear").addEventListener("click",()=>{
    document.getElementById("input_id").value="";
    document.getElementById("msg").innerHTML="Result";
});