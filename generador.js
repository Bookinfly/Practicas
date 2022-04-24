
var elfoBoton = document.getElementById("elf");
elfoBoton.addEventListener("click", razaE);
var humanoBoton = document.getElementById("human");
humanoBoton.addEventListener("click", razaH);
var goblinBoton = document.getElementById("goblin");
goblinBoton.addEventListener("click", razaG);
var enanoBoton = document.getElementById("dwarf");
enanoBoton.addEventListener("click", razaD);
var medianoBoton = document.getElementById("halfling");
medianoBoton.addEventListener("click", razaM);
var elfo = { 
    magia: 4,
    puntos: -4,
    especial: "+1 a las tiradas efectuadas en bosques",
    especial2: "Ven en la oscuridad al aire libre"
}
var humano = "Nada especial";
var goblin = {
    magia: "4",
    especial: "+1 a las tiradas de noche, siempre que esten al aire libre",
    especial2: "Ven en la oscuridad bajo tierra"
}
var enano = {
    magia: "4",
    especial: "+1 a todas las tiradas en grutas y montañas",
    especial2: "Ven en la oscuridad bajo tierra"
}
var mediano = {
    magia: "4",
    especial: "+1 a todas las tiradas en su hogar(donde hayan residido mas de un año)"
}



function razaE(){raza(elfo); console.log(elfoBoton)}
function razaH(){raza(humano)}
function razaG(){raza(goblin)}
function razaD(){raza(enano)}
function razaM(){raza(mediano)}

function raza(especie)
{
    swich(especie)
    {
    case "elfo":
        console.log(especie);
        break;
    case "humano":
        console.log(especie);
        break;
    case "goblin":
        console.log(especie);
        break;
    case "enano":
        console.log(especie);
        break;
    case "mediano":
        console.log(especie);
        break;
    default :
        false;
        }
}