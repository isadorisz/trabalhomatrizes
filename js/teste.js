var numeroLinhas1 = prompt("Digite o número de linhas");
var numeroColunas1 = prompt("Digite o número de colunas");

var m1 = new Array();
var m2 = new Array();

function criaMatriz(matriz) {
    for (var linha = 0; numeroLinhas1 > linha; linha++) {
        console.log('linha', linha)
        let coluna = [];
        for (var colunaLinha = 0; numeroColunas1 > colunaLinha; colunaLinha++) {
            coluna.push(Math.floor(Math.random() * 60));
        }

        matriz.push(coluna);
    }
}

function criaMatrizHtml(matriz) {
    for (var l1 = 0; l1 < matriz.length; l1++) {
        document.write("<tr>");
        for (var c1 = 0; c1 < matriz[l1].length; c1++) {
            document.write("<td>" + matriz[l1][c1] + "</td>");
        }
        document.write("</tr>");
    }
}

criaMatriz(m1);
criaMatriz(m2);

document.write("<br>");

document.write("<div class='matriz'>" + "<h3>" + "Matriz 1" + "</h3>");
document.write("<table border='1'>");
criaMatrizHtml(m1);
document.write("</table>" + "</div>");

document.write("<br>");

document.write("<div class='matriz'>" + "<h3>" + "Matriz 2" + "</h3>");
document.write("<table border='1'>");
criaMatrizHtml(m2)
document.write("</table>" + "</div>");

console.table(m2);


//soma matrizes 
function soma(m1, m2) {
    var soma = [];
    for (i = 0; i < numeroLinhas1; i++) {
        soma[i] = [];
        for (j = 0; j < numeroColunas1; j++) {
            soma[i][j] = m1[i][j] + m2[i][j];
        }
    }
    return soma
}

// multipicar matriz
function multiplicação(m1, m2) {
    var multi = [];
    var aux = 0; //mudar variavel
    for (var i = 0; i < 3; i++) {
        multi[i] = [];
        for (var j = 0; j < 3; j++) {

            for (var k = 0; k < 3; k++) {
                aux = (m1[i][k] * m2[k][j]) + (m1[i][k] + m2[k][j]);

                multi[i][j] = aux;
            }
        }
        return multi;
    }
}

//subtracao das matrizes
function subtracao(matriz1, matriz2) {
    var sub = [];
    for (i = 0; i < numeroLinhas1; i++) {
        sub[i] = [];
        for (j = 0; j < numeroColunas1; j++) {
            sub[i][j] = matriz1[i][j] - matriz2[i][j];
        }
    }
    return sub
}

var somamatrizes = soma(m1, m2);

document.write("<br>");

document.write("<div class='matriz'>" + "<h3>" + "Soma das matrizes" + "</h3>");
document.write("<table border='1'>");
criaMatrizHtml(somamatrizes)
document.write("</table>" + "</div>");

var matrizSubtraida = subtracao(m1, m2)
console.log('mult', matrizSubtraida);

document.write("<br>");

document.write("<div class='matriz'>" + "<h3>" + "Subtração das matrizes" + "</h3>");
document.write("<table border='1'>");
criaMatrizHtml(matrizSubtraida)
document.write("</table>" + "</div>");
