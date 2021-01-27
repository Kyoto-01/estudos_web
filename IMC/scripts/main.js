// Script principal

// Eventos
document.querySelector("button").onclick = function(){
	verificarFormulario();
	this.blur();
}
// Fim dos eventos

function verificarFormulario(){
	let entradaAltura = document.getElementById("altura");
	let entradaPeso = document.getElementById("peso");
	let altura = parseFloat(entradaAltura.value);
	let peso = parseFloat(entradaPeso.value);
	
	if (!entradaAltura.value || !entradaPeso.value){
		alert("Preencha todos os espaços!");
	}
	else if (altura < entradaAltura.min || altura > entradaAltura.max ){
		alert(`No campo altura são permitidos apenas valores de ${entradaAltura.min} até ${entradaAltura.max}!`);
	}
	else if (peso < entradaPeso.min || peso > entradaPeso.max){
		alert(`No campo peso são permitidos apenas valores de ${entradaPeso.min} até ${entradaPeso.max}!`);
	}
	else{
		new IMC().atribuirIMC(altura, peso);
		location = "#resultado";
		return;
	}
	resetarInformacoes(entradaAltura, entradaPeso);	
}

function mostrarResultado(cor, descricao, imgLink){
	let containerResultado = document.getElementById("container-resultado");
	let resultImg = containerResultado.querySelector("img");
	let resultDesc = containerResultado.querySelector("p");
	
	atribuirVisibilidadeDoResultado("block");
	resultImg.src = imgLink;
	resultDesc.textContent = descricao;
	resultDesc.style.backgroundColor = cor;
}

function atribuirVisibilidadeDoResultado(visibilidade){
	let resultadoDiv = document.getElementById("resultado");
	resultadoDiv.style.display = visibilidade;
}

function resetarInformacoes(...inputs){
	inputs.reduce((acumulador, input) => input.value = "", 1);
	atribuirVisibilidadeDoResultado("none");
}