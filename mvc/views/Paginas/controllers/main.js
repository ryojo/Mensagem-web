

 const http = "http://localhost:8080/users/createuser" 


  
   var nome = document.getElementById('nome').value;
  var  email = document.getElementById('email').value;
  var senha =  document.getElementById('senha').value;
   function  Postuser() {
  axios.post(http, {
      nome:  nome,
      email: email,
      senha: senha
  }) .then((res)=>   {
                    
    alert("salvo com sucesso")
    window.location.href ="./carta.html"
  } )
          
  
  .catch( (res)=> {
       console.error("não foi salvo " + error);

  } )
   
}


