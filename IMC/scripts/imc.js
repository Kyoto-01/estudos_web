function IMC(){
	let calcularIMC = (altura, peso) => peso / (altura * altura);

	this.atribuirIMC = function(altura, peso){
		let imc = calcularIMC(altura, peso);
		
		if(imc < 18.5){
			mostrarResultado("red", "ATENÇÃO! Você está abaixo do peso!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0_Yqx5d3GdoZcB35ISHGlhSKaJADI9rMSw&usqp=CAU");
		}
		else if(imc >= 18.5 && imc < 25){
			mostrarResultado("green", "PARABÉNS! O seu peso está normal!", "https://www.superfabulosa.com/wp-content/uploads/2019/01/7-Alimentos-Aprovados-por-Nutricionistas-Para-Ser-Uma-Pessoa-Sauda%CC%81vel.jpg");
		}
		else if(imc >= 25 && imc < 30){
			mostrarResultado("orange", "CUIDADO! Você está com sobrepeso!", "https://www.sallet.com.br/wp-content/uploads/2018/04/1-690x518.png");
		}
		else if(imc >= 30 && imc < 35){
			mostrarResultado("orange", "CUIDADO! Você está com obesidade grau 1!", "https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_770,h_367/https://drogariasantoremedio.com.br/wp-content/uploads/2020/03/sobrepeso-e-obesidade-770x367.jpg");
		}
		else if(imc >= 35 && imc < 40){
			mostrarResultado("red", "ATENÇÃO! Você está com obesidade grau 2!", "data:image/jpeg;base64,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");
		}
		else{
			mostrarResultado("red", "ATENÇÃO! Você está com obesidade grau 3!", "data:image/jpeg;base64,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");
		}
	}
}