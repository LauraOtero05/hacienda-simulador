const btnCalcular = document.querySelector("#btnCalcular");
const salarioBruto = document.querySelector("#salarioBruto");
const montoNeto = document.getElementById("montoNeto");
const porcentaje = document.getElementById("porcentaje")
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(event) {

    const salario = salarioBruto.value;

    if(salario > 30000){
        montoNeto.textContent = (salario - (salario * 0.20)) / 14;
        porcentaje.textContent = "20";
        resultado.style.color = "red";
    }else{
        montoNeto.textContent = (salario - (salario * 0.15)) / 14;
        porcentaje.textContent = "15";
        resultado.style.color = "blue";
    }

    salarioBruto.value = "";

});