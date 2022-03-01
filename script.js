function kalkulacio() {

    // Foglalt napok száma

    var erkezes = document.getElementById("erkezes").value;
    var tavozas = document.getElementById("tavozas").value;

    var erkdate = new Date(erkezes);
    var tavdate = new Date(tavozas);
    var napokszama = (tavdate.getTime()-erkdate.getTime()) / (1000 * 3600 * 24);



}