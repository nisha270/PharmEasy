var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// x.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


let x = Math.floor(Math.random() * 1000)+100
document.querySelector("#continue").addEventListener("click",function(){
    let num=document.querySelector("#nums").value;
    
    let otp=document.querySelector("#otp").value;

    if(num.length>10||num.length<10){
        alert("Enter your 10 digit Number")
    }
    else{
        alert("Your OTP is "+x)
    }
    document.querySelector("#submit").addEventListener("click",function(){
        let otp=document.querySelector("#otp").value;
        if(otp==x){
            document.querySelector("#log").innerText="Login Successful..."
            alert("Login Successful...")
        }
        else{
            alert("You have entered wrong OTP")
        }
    })
})