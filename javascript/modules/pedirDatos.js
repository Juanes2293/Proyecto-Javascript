import mostrarPrecio from './mostrarPrecio.js';

export default function pedirDatos() {
  const btn = document.querySelector("#btn");
  const menu = document.querySelector("#menu");

  btn.onclick = (event) => {
    event.preventDefault();
    switch (menu.selectedIndex) {
      case 1:
        mostrarPrecio(
          "../img/naranja.png",
          "imagen de naranja",
          "Naranja",
          "1.500"
        );
        break;

      case 2:
        mostrarPrecio(
          "../img/manzana.png",
          "imagen de Manzana",
          "Manzana",
          "1.300"
        );
        break;

      case 3:
        mostrarPrecio(
          "../img/fresa.png",
          "imagen de Fresa",
          "Fresa",
          "2.500"
        );
        break;

      case 4:
        mostrarPrecio(
          "../img/mango.png",
          "imagen de Mango",
          "Mango",
          "2.000"
        );
        break;

      default:
        alert("Debes seleccionar una fruta");
        break;
    }
  };
}