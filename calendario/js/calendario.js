var dataAtual = new Date();
var calendario = document.createElement("div");

var feriados = new Array();
for (var i = 0; i < 12; i++) {
	feriados[i] = new Array();
	for (var j = 1; j < 32; j++) {
		feriados[i][j] = new Array();
	}
}

feriados[0][0] = "Confraternização Universal.";
feriados[10][2] = "Finados.";
feriados[3][21] = "Tiradentes.";
feriados[4][1] = "Dia do trabalho.";
feriados[8][7] = "Independência do Brasil.";
feriados[9][12] = "Nossa Sra. Aparecida.";
feriados[10][15] = "Proclamação da República.";
feriados[11][25] = "Natal.";


for (var i = 0; i < 12; i++) {
	var mes = document.createElement("table");
	//mes.setAttribute("border", "1");
	
	
	var lnFeriados = document.createElement("tr");
	var listaFeriados = document.createElement("td");
	listaFeriados.setAttribute("colspan", "7");
	listaFeriados.setAttribute("class", "feriados");
	
	var cabecalho = document.createElement("tr");
	
	
	var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	var dias = ["D", "S", "T", "Q", "Q", "S", "S"];
	
	
	var lntitulo = document.createElement("tr");
	
	var titulo = document.createElement("th");
	titulo.setAttribute("colspan", "7");
	titulo.innerHTML = meses[i] + " - " + dataAtual.getFullYear();
	
	lntitulo.appendChild(titulo);
	
	for (var c = 0; c < 7; c++) {
		var s = document.createElement("th");
		s.innerHTML = dias[c];
		cabecalho.appendChild(s);
	}
	
	mes.appendChild(lntitulo);
	mes.appendChild(cabecalho);
	
	var contador = 0;
	
	for (var j = 0, l = 0; j < 6; j++) {
		var semana = document.createElement("tr");
		for (var k = 0; k < 7; k++) {
			var primeiroDia = new Date(dataAtual.getFullYear(), i, 1);
			var ultimoDia = new Date(dataAtual.getFullYear(), i, 0);
			
			var dia = document.createElement("td");
			
			if (j < 1 && k < primeiroDia.getDay()) {
				dia.innerHTML = '';
			} else {
				l++;
				if (l <= ultimoDia.getDate()) {
					if (feriados[i][l].length > 0) {
						listaFeriados.innerHTML += l + ' - ' + feriados[i][l] + ' ';
						dia.setAttribute("class", "feriado");
					}
					dia.innerHTML = l;
				}
			}
			
			
			semana.appendChild(dia);
		}
		mes.appendChild(semana);

	}
	lnFeriados.appendChild(listaFeriados);
	mes.appendChild(lnFeriados);
	calendario.appendChild(mes);
}

window.onload = function() {
	document.body.appendChild(calendario);
}