// Script principal

// Eventos
document.querySelector("button").onclick = function(){
	this.blur();
}
// Fim dos eventos

function verificarFormulario(){
	let entradaAltura = document.getElementById("altura");
	let entradaPeso = document.getElementById("peso");
	let altura = parseFloat(entradaAltura.value);
	let peso = parseFloat(entradaPeso.value);

	new IMC().atribuirIMC(altura, peso);
	location = "#resultado";
}

function mostrarResultado(cor, descricao, imgLink){
	let resultadoDiv = document.getElementById("resultado");
	let containerResultado = document.getElementById("container-resultado");
	let resultImg = containerResultado.querySelector("img");
	let resultDesc = containerResultado.querySelector("p");
	
	resultadoDiv.style.display = "block";
	resultImg.src = imgLink;
	resultDesc.textContent = descricao;
	resultDesc.style.backgroundColor = cor;
}