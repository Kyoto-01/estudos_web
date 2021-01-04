function validarCPF(cpfInput){
	var cpf = cpfInput.value;
	var digitosVerificadores = [cpf[cpf.length - 2], cpf[cpf.length - 1]];

	if((digitosVerificadores[0] != identificarDigitosVerificadores(cpf, 1)) ||
	  (digitosVerificadores[1] != identificarDigitosVerificadores(cpf, 2)) ||
	   verificarCpfInvalidoPassouNoAlgoritmo(cpf)){
		window.alert("CPF inválido");
		cpfInput.value = "";
	}
}

function identificarDigitosVerificadores(cpf, digito){
	var multiplicadorInicial = 9 + digito;
	var numeroVerificador = 0;
	var indexCpf = 0;
	
	while(multiplicadorInicial >= 2){
		numeroVerificador += multiplicadorInicial * cpf[indexCpf];
		multiplicadorInicial--;
		indexCpf++;
	}
	numeroVerificador *= 10;
	numeroVerificador %= 11;
	numeroVerificador = numeroVerificador == 10 ? 0 : numeroVerificador;
	
	return numeroVerificador;
}

function verificarCpfInvalidoPassouNoAlgoritmo(cpf){
	var digitos = cpf.split("");
	var somaDosDigitos = digitos.reduce((a,b) => parseInt(a, 10) + parseInt(b, 10), 0);

	return somaDosDigitos == digitos[0] * 11;
}