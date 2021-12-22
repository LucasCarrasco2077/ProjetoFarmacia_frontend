function direct() {
  document.querySelector('.title title-second').onclick = 
  window.location.href="cadastro.html"
}

function Login(event) {
  event.preventDefault();
  var usuario = document.getElementsByName('email')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('password')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "admin@hotmail.com" && senha == "admin") {
    alert("Seja Bem-Vindo, Farmacia L.G.H");
    window.location = "index.html";
  }else{
    alert("Dados incorretos, tente novamente");
  }
}