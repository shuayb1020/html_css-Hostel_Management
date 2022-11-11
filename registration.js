const psw = document.getElementById('psw');
const confirm = document.getElementById('confirm');
const myBtn = document.getElementById('btn');
function confirmation() {
    if (confirm.value !== psw.value ) {
        // alert("the password is not correct");
        document.getElementById("message").innerHTML = "&times password does not correspond with confirm passsword"
        return false;
    }else{
        window.location.href = "login.html"
    }
    
}






// myBtn.addEventListener('click', ()=>{

//     if(confirm.value !== psw.value){
//         alert("The password is not correct, check the password and refill infromation");
//         return false;
//         location.href ="registration.html";
        
//     }else if (confirm.value === psw.value ) {
//         location.href = "login.html";
//         return true;
//      } 

// });