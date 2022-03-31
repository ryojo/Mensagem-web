

 var url = "http://localhost:8080/Sms"
    
  
function sendSms(){
  axios.post(url,{
    phoneNumber:  document.getElementById("phonenumber").value,
    message: document.getElementById("message").value     
  }).then((res) => {
    alert("Sms enviado para" )
    window.location.href = "./mensagem.html"
  }).catch((erro)=>{
     console.log("deu ruim" + erro)
  } )
}