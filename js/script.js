

const contenedor = document.querySelector(".flex-container");
function crearCebolla(nombre, modelo, precio) {
    img = "<img class='cebolla-img' src='cebolla.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>modelo ${modelo}</h2>`;
    precio = `<p>Precio: <b>${precio}€</b></p>`;
    return [img, nombre, modelo, precio];
}

const changeHidden = (number) => {
    document.querySelector(".onion-data").value = number;
}
let documentFragment = document.createDocumentFragment();
for (var i = 0; i < 32; i++) {
    let modeloRandom = Math.round(Math.random() * 1000);
    let precioRandom = Math.round(Math.random() * 10 * Math.random() * 3);
    let cebolla = crearCebolla(`cebolla ${i}`, `${modeloRandom}`.padStart(4, "0"), precioRandom)
    let div = document.createElement("DIV");
    div.addEventListener("click", () => { changeHidden(modeloRandom) });
    div.tabIndex = i;
    div.classList.add('flex-item', `item-${i}`);
    div.innerHTML = cebolla[0] + cebolla[1] + cebolla[2] + cebolla[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);