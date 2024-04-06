function myData(){
    event.preventDefault()
    let userEmail= document.getElementById("email").value
    let userPassword= document.getElementById("password").value
    console.log(userEmail);
    console.log(userPassword);
    
    
    
    let correctEmail="zainbrohi000@gmail.com"
    let CorrectAPassword="12345"
    
    if(userEmail===correctEmail && userPassword===CorrectAPassword){
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully ",
            showConfirmButton: false,
            timer: 1500
          });
    
    }else{
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "User Credentials are wrong!",
           
          });
    }
    
    
    }