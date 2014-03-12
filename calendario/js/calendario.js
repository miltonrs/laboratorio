function getFeriados () {
	var feriados = new Array();
	for (var i = 0; i < 12; i++) {
		feriados[i] = new Array();
		for (var j = 1; j < 32; j++) {
			feriados[i][j] = new Array();
		}
	}
	/*feriados[1][1] = "Confraternização Universal.";
	feriados[11][2] = "Finados.";
	feriados[4][21] = "Tiradentes.";
	feriados[5][1] = "Dia do trabalho.";
	feriados[9][7] = "Independência do Brasil.";
	feriados[10][12] = "Nossa Sra. Aparecida.";
	feriados[11][15] = "Proclamação da República.";
	feriados[12][25] = "Natal.";*/
	return feriados;
}

function getCalendario (ano) {
	var data = new Date (ano, 0, 1);
	var calendario = document.createElement ("div");
	var feriados = getFeriados ();
	
	for (var numMes = 0; numMes < 12; numMes++) {
		var table_mes = document.createElement("table");
		//table_mes.setAttribute("border", "1");

		var lnFeriados = document.createElement ("tr");
		var listaFeriados = document.createElement("td");
		listaFeriados.setAttribute ("colspan", "7");
		listaFeriados.setAttribute ("class", "feriados");
		
		var th_titulo_mess_meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		var dias = ["D", "S", "T", "Q", "Q", "S", "S"];
		
		var tr_cabecalho_titulo = document.createElement("tr");
		
		var th_titulo_mes = document.createElement("th");
		th_titulo_mes.setAttribute("colspan", "7");
		th_titulo_mes.innerHTML = th_titulo_mess_meses[numMes] + " - " + data.getFullYear();
		tr_cabecalho_titulo.appendChild(th_titulo_mes);
		
		var tr_cabecalho_dias_semana = document.createElement("tr");
		
		// Criando cabeçalho com as letras iniciais dos dias da semana
		for (var numDiaSemana = 0; numDiaSemana < 7; numDiaSemana++) {
			var th_dia_semana = document.createElement("th");
			th_dia_semana.innerHTML = dias[numDiaSemana];
			tr_cabecalho_dias_semana.appendChild(th_dia_semana);
		}
		
		// Adicionando Cabecalhos
		table_mes.appendChild(tr_cabecalho_titulo);
		table_mes.appendChild(tr_cabecalho_dias_semana);
		
		for (var j = 0, numDia = 0; j < 6; j++) {
			var tr_semana = document.createElement("tr");
			for (var k = 0; k < 7; k++) {
				var primeiroDia = new Date(data.getFullYear(), numMes, 1);
				var ultimoDia = new Date(data.getFullYear(), numMes, 0);
				
				var td_dia = document.createElement("td");
				
				if (j < 1 && k < primeiroDia.getDay()) {
					td_dia.innerHTML = '';
				} else {
					numDia++;
					if (numDia <= ultimoDia.getDate()) {
						if (feriados[numMes][numDia].length > 0) {
							listaFeriados.innerHTML += numDia + ' - ' + feriados[numMes][numDia] + ' ';
							td_dia.setAttribute("class", "feriado");
						}
						td_dia.innerHTML = numDia;
					}
				}		
				tr_semana.appendChild(td_dia);
			}
			table_mes.appendChild(tr_semana);
		}
		lnFeriados.appendChild(listaFeriados);
		table_mes.appendChild(lnFeriados);
		calendario.appendChild(table_mes);
	}
	return calendario;
}
window.onload = function() {
	calendario = getCalendario(2014);
	document.body.appendChild(calendario);
}