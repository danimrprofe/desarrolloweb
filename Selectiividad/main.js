function calcula_nota_BO(){

    var nota_BO1 = parseFloat(document.getElementById('NOTA_BO_1').value);    
    var nota_BO2 = parseFloat(document.getElementById('NOTA_BO_2').value);
    var nota_BO3 = parseFloat(document.getElementById('NOTA_BO_3').value);
    var nota_BO4 = parseFloat(document.getElementById('NOTA_BO_4').value);
    var nota_BO5 = parseFloat(document.getElementById('NOTA_BO_5').value);
    
    var nota_BO_media = (nota_BO1+nota_BO2+nota_BO3+nota_BO4+nota_BO5)/4;
    
    document.getElementById("nota_BO_media").value = nota_BO_media;

// Calcular nota de acceso

var nota_NMB = parseFloat(document.getElementById('nota_NMB').value);
var nota_acceso = nota_BO_media*0.4 + nota_NMB*0.6;
document.getElementById("nota_CAO").value = nota_acceso;

}
