console.log("Bienvenido a IN-CURSO");
const boton=document.getElementById("continuar");

boton.onclick=function(){

localStorage.setItem("videoVisto","si");

window.location.href="dashboard.html";

}
