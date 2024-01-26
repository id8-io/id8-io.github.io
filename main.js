let adcoreDbElement = document.getElementById("adcore_db");

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    if (value > 900 && value <= 1500) {
        adcoreDbElement.style.opacity = 1;
        adcoreDbElement.style.transform = "translateX(0)";
    } else {
        adcoreDbElement.style.opacity = 0;
        adcoreDbElement.style.transform = "translateX(-400px)";
    }
});

let offerTextElement = document.getElementsByClassName("offer_text")[0];

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    if (value > 900 && value <= 1500) {
        offerTextElement.style.opacity = 1;
        offerTextElement.style.transform = "translateX(0)";
    } else {
        offerTextElement.style.opacity = 0;
        offerTextElement.style.transform = "translateX(400px)";
    }
});

let datamktElement = document.getElementById("data_mkt");

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    if (value > 1450 && value <= 2030) {
        datamktElement.style.opacity = 1;
        datamktElement.style.transform = "translateX(0)";
    } else {
        datamktElement.style.opacity = 0;
        datamktElement.style.transform = "translateX(-400px)";
    }
});

let sec_offerTextElement = document.getElementsByClassName("offers2_text")[0];

window.addEventListener("scroll", function() {
    let value = window.scrollY;

    if (value > 1450 && value <= 2030) {
        sec_offerTextElement.style.opacity = 1;
        sec_offerTextElement.style.transform = "translateX(0)";
    } else {
        sec_offerTextElement.style.opacity = 0;
        sec_offerTextElement.style.transform = "translateX(400px)";
    }
});

function openNewWindow() {
    event.preventDefault();
    window.open('privacy.html', '_blank', 'width=600,height=400'); 
}
