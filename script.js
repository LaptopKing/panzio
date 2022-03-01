function betolteskor() {
    document.getElementById("ajanlat").style.display = "none";
}

function kalkulacio() {

    // Foglalt napok száma

    var erkezes = document.getElementById("erkezes").value;
    var tavozas = document.getElementById("tavozas").value;

    var erkdate = new Date(erkezes);
    var tavdate = new Date(tavozas);
    var napokszama = (tavdate.getTime()-erkdate.getTime()) / (1000 * 3600 * 24);
    var szobaar = 0;
    if (document.getElementById("egyagy").checked == true)
    {
        szobaar = 9000;
    }
    if (document.getElementById("ketagy").checked == true)
    {
        szobaar = 15000;
    }
    if (document.getElementById("haromagy").checked == true)
    {
        szobaar = 18000;
    }
    if (document.getElementById("negyagy").checked == true)
    {
        szobaar = 21000;
    }

    var vendegszam = document.getElementById("vendegszam").value;

    var eletkorok = [];

    for (let i = 1; i < 5; i++) {
        if (document.getElementById("e" + i).value != "")
        {
            eletkorok.push(document.getElementById("e" + i).value);
        }
    }

    var ellatas = 0;

    if (document.getElementById("reggeli").checked == true)
    {
        ellatas = 900;
    }
    if (document.getElementById("felpanzio").checked == true)
    {
        szobaar = 2900;
    }
    if (document.getElementById("teljespanzio").checked == true)
    {
        szobaar = 4900;
    }

    var furdo = 0;

    if (document.getElementById("belteri").checked == true)
    {
        furdo += 800;
    }
    if (document.getElementById("kulteri").checked == true)
    {
        furdo += 800;
    }
    if (document.getElementById("szauna").checked == true)
    {
        furdo += 800;
    }
    if (document.getElementById("teljes").checked == true)
    {
        furdo = 2000;
    }

    document.getElementById("ajanlat").style.display = "block";
}