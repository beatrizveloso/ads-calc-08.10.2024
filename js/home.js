function escolha(){
    var numero = prompt("Insira um número ")
    document.write ("<select multiple style='height:400px; width:300px'> ")
    var resto;
    for (var n1=0; n1 <= numero; n1++){
        resto = n1 % 2;
        if (resto == 0){
            document.write ("<option>" + n1 +  "</option>" )
        }
// document.write ("<option>" + numero + "x" + n1 + "=" + (numero * n1) + "</option>" ) -- tabuada
    }
    document.write ("</select>")
    document.write ("<br><br><input type= 'button' value='volta' onclick'volta()'>")
}
function volta(){
    window.location.reload(true);
}