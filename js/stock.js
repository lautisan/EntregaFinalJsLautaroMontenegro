//LOS PRODUCTOS SE VAN AGREGANDO.
const fragment = document.createDocumentFragment(); //CREAN ESPACIO DONDE IRA LA CARD
const templateCard = document.getElementById('template-card').content; //LA CARD
const items = document.getElementById('listar-productos')
//MI ARRAY DE OBJETOS (PRODUCTOS EN VENTA)
class Producto {

    constructor(item){
        this.id = item.id;
        this.titulo = item.titulo
        this.imagen = item.imagen
        this.precio = item.precio
        this.descripcion= item.descripcion
    }

};

const agregarProductos = [
    new Producto ({id: "1", titulo: "Ryzen 3 3200 16ram", imagen: "img/producto1.jpg" ,precio: 1599, descripcion: "¡La mejor experiencia para jugar juegos actuales! Además, trae 5 Juegos Instalados: FORTNITE, CSGO, NFS PAYBACK, LOL y MINECRAFT. (Los juegos NO son intercambiables, puede cambiarlos cada cliente a su gusto) "}),
    new Producto ({id: "2", titulo: "Teclado Gamer", imagen: "img/producto2.jpg" ,precio: 200, descripcion: "Este teclado HP de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto, y hacer que tus jugadas alcancen otro nivel."}),
    new Producto({ id: "3", titulo: "Combo Auriculares + Mouse Gaming", imagen: "img/producto3.jpg", precio: 190, descripcion: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Stinger Core no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. El mouse de regalo. " }),
    new Producto ({id: "4", titulo: "Joystick Inalambrico", imagen: "img/producto4.jpg" , precio: 150, descripcion:"Te permite jugar sin necesidad de que haya cables de por medio. Está pensado no solamente para controlar mejor tus videojuegos, sino también para aumentar su realismo y experiencia."}),
    new Producto ({id: "5", titulo: "Monitor Gamer Samsung", imagen: "img/producto5.jpg" , precio: 300, descripcion:"Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Buscamos siempre la conformidad de nuestros clientes."}),
    new Producto ({id: "6", titulo: "Laptop Apple Gamer", imagen: "img/producto6.jpg" , precio: 1050, descripcion:"Con más espacio para que tu creatividad brille, la envolvente pantalla Retina de 16 pulgadas de la MacBook Pro te muestra blancos luminosos, negros más intensos y un brillo máximo de 500 nits (1)."}),

];

//CREANDO CARDS

agregarProductos.forEach((item) => {
    templateCard.querySelector('h3').textContent = item.titulo
    templateCard.querySelector('span').textContent = item.precio
    templateCard.querySelector('img').setAttribute("src", item.imagen)
    templateCard.querySelector('p').textContent = item.descripcion
    templateCard.querySelector('.agregar-carrito').dataset.id = item.id


    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
})
//SE PINTA LA CARD
items.appendChild(fragment)
