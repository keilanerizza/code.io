window.onload = function(){
	document.forms["enviaMensagem"].onsubmit = function() {
		var nome = document.getElementById("nome").value;
		alert("Obrigado " + nome + "! Sua mensagem foi enviada com sucesso! Entraremos em contato brevemente.");
	}
	document.forms["enviaOpiniao"].onsubmit = function(){
		alert("Obrigado! Sua opinião foi enviada com sucesso!");
	}
}