let vorschautext = document.getElementById("vorschautext");
let anzeige = document.getElementById("anzeige");
let font = document.getElementById("font");
let font_size = document.getElementById("font_size");
let bodoni = document.getElementById("bodoni");
let openSans = document.getElementById("openSans");
let yusei = document.getElementById("yusei");
let roboto = document.getElementById("roboto");

function changeFontsSize() {
    console.log(font_size.value);
    anzeige.innerHTML = vorschautext.value;
    anzeige.classList.add(font.value);
    anzeige.style.fontSize = font_size.value + 'px';
}