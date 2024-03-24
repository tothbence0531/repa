


function generateRandomNumber() {
    return Math.floor(Math.random() * 6);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

const kerdes = [];
kerdes[0] = "Mi a répa tudományos neve?";
kerdes[1] = "Milyen tápanyagokat tartalmaz a répa?";
kerdes[2] = "Milyen színűek lehetnek a répák?";
kerdes[3] = "Hogyan befolyásolja a répa a látást?";
kerdes[4] = "Milyen ételekben használják a répát?";
kerdes[5] = "Hogyan termesztik a répát?";

const jovalasz = [];
jovalasz[0] = "A répa tudományos neve a Daucus carota.";
jovalasz[1] = "A répa gazdag A-vitaminban, K-vitaminban, B6-vitaminban.";
jovalasz[2] = "Narancssárga, lila, fehér, vörös vagy sárga színűek.";
jovalasz[3] = "A répa magas A-vitamin tartalma segíthet a látás javításában, különösen éjszaka.";
jovalasz[4] = "Salátákban, levesekben, pörköltekben, süteményekben használják.";
jovalasz[5] = "Nem szereti az átültetést. Szereti a napos helyeket és a jól lecsepegtetett talajt.";

const valasz = [];
valasz[0] = "A répa tudományos neve a Solanum tuberosum.";
valasz[1] = "A répa gazdag C-vitaminban és vasban.";
valasz[2] = "A répák mindig narancssárga színűek.";
valasz[3] = "A répa fogyasztása rontja a látást.";
valasz[4] = "A répát általában csak nyersen fogyasztják, nem használják főzéshez vagy sütéshez.";
valasz[5] = "A répát általában konténerekben termesztik, és nem szereti a napfényt.";

const valasz2 = [];
valasz2[0] = "A répa tudományos neve a Brassica oleracea.";
valasz2[1] = "A répa gazdag D-vitaminban és kalciumban.";
valasz2[2] = "A répák mindig zöld színűek.";
valasz2[3] = "A répa fogyasztása javítja a hallást.";
valasz2[4] = "A répát csak grillezve fogyasztják, nem használják salátákhoz vagy levesekhez.";
valasz2[5] = "A répát általában szobanövényként termesztik, és nem szereti a vízben való növekedést.";

const szam = generateRandomNumber(); 

const options = [];

window.onload = function() {
    document.getElementById("question").innerHTML = kerdes[szam];
    
    for (let i = 1; i < Object.values(document.getElementById('answer').options).length; i++) {
        const element = Object.values(document.getElementById('answer').options)[i];
        options[i-1] = element;
    }

    shuffle(options);

    options[0].text = jovalasz[szam];
    options[1].text = valasz[szam];
    options[2].text = valasz2[szam];
}

////////////////////// ALERT //////////////////////


function closeAlert() {
    const overlay = document.querySelector(".overlay");
    const errorOverlay = document.querySelector(".errorOverlay");

    overlay.style.display = "none";
    errorOverlay.style.display = "none";
}

function openAlert() {
    const overlay = document.querySelector(".overlay");
    const errorOverlay = document.querySelector(".errorOverlay");
    const select = document.getElementById('border');
    const code = document.getElementById('discountText');
    if(document.getElementById('answer').options[document.getElementById('answer').options.selectedIndex].text == jovalasz[szam]) {
        code.innerHTML = generateRandomNumber1();
        overlay.style.display = "block";
        select.style.display = "none";

    } else if (document.getElementById('answer').options[document.getElementById('answer').options.selectedIndex].text == "Válassz") {
    } else {
        errorOverlay.style.display = "block";
        select.style.display = "none";
    }
}

function generateRandomNumber1() {
    let num = Math.floor(Math.random() * 9) + 1;
    for(let i = 0; i < 15; i++) {
        num = num * 10 + Math.floor(Math.random() * 10); 
    }
    return num;
}
