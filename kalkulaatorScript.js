function saiaKalk(){
    let k=document.getElementById("kogus");
    let vastus=document.getElementById("vastus");
    const juustuHind=1.20;
    const mooniHind=1.30;
    const kaneeliHind=1.50;
    const lihagaHind=2.00;

    let saiatyyp=document.getElementById("saiatyyp");

    if(saiatyyp.selectedIndex===0){
        vastus.innerHTML="palun vaja saia tüüp!"
        vastus.style.backgroundColor='LightBlue';
    }

    if(saiatyyp.selectedIndex===1){
        vastus.innerHTML=juustuHind*k.value + '€';
        vastus.style.backgroundColor='LightBlue';
    }

    if(saiatyyp.selectedIndex===2){
        vastus.innerHTML=mooniHind*k.value + '€';
        vastus.style.backgroundColor='LightBlue';
    }

    if(saiatyyp.selectedIndex===3){
        vastus.innerHTML=kaneeliHind*k.value + '€';
        vastus.style.backgroundColor='LightBlue';
    }

    if(saiatyyp.selectedIndex===4){
        vastus.innerHTML=lihagaHind*k.value + '€';
        vastus.style.backgroundColor='LightBlue';
    }
}
//
function juhuslikPilt() {
    const pildid = [
        'img/heart.png',
        'img/maja.png',
        'img/paike.png',
        'img/taht.png'
    ];
    const juhuslikPilt = Math.floor(Math.random() * pildid.length);
    const pilt = pildid[juhuslikPilt];
    const rpilt = document.getElementById("random-pilt");

    rpilt.src = pilt;
}

function raadioKontroll(){
    let vastus2=document.getElementById("vastus2");
    const rpilt = document.getElementById("random-pilt");
    const valik=document.getElementsByName("valik"); //mitu elementi name on üks
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value===rpilt.getAttribute("src")){
                vastus2.innerHTML="Õige vastus";
                vastus2.style.color='LightGreen';
            }
            else{
                vastus2.innerHTML="Vale vastus";
                vastus2.style.color='LightCoral';
            }
        }
    }
}

function KraadideTeisendamine() {
    let temp = document.getElementById("tempValue").value;
    let konversioontyyp = document.getElementById("konversioontyyp").value;
    let vastus3 = document.getElementById("vastus3");

    if (konversioontyyp === "CelsiuseJargi") {
        vastus3.innerHTML = ((temp - 32) * 5 / 9).toFixed(2) + "°C";
        vastus3.style.backgroundColor='LightBlue';
    } else if (konversioontyyp === "FahrenheitiJargi") {
        vastus3.innerHTML = ((temp * 9 / 5 + 32)).toFixed(2) + "°F";
        vastus3.style.backgroundColor='LightBlue';
    }
}

function vanusKalk() {
    let sunnikuupaev = document.getElementById("synthimiseKuupaev").value;
    let vastus4 = document.getElementById("vastus4");
    let sunnikuupaevDate = new Date(sunnikuupaev);
    let tananeKuupaev = new Date();
    let vanus = tananeKuupaev.getFullYear() - sunnikuupaevDate.getFullYear();

    if (tananeKuupaev < sunnikuupaevDate.setFullYear(tananeKuupaev.getFullYear())) {
        vanus--; // Väheneb 1 võrra, kui sünnipäev pole veel toimunud
    }

    vastus4.innerHTML = "Teie vanus on: " + vanus + " aastat.";
    vastus4.style.backgroundColor = 'LightBlue';
}
