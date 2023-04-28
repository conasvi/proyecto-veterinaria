let tablaMascotas=document.getElementById("tabla-mascotas");
let cuerpoTable =tablaMascotas.querySelector("tbody");

//Objetos
let mascotas =[
{
 nombreMascota:"Luna",
 nombreDueño:"Ana",
 cedulaDueño:"1234567",
 edadMascota:"5 años",
 telefonoDueño:"3105678946",
 especialidad:"Veterinaria Conductual",
 medico:"Jorge",
},
{
nombreMascota:"Orion",
nombreDueño:"Jorge",
cedulaDueño:"6789015",
edadMascota:"2 meses",
telefonoDueño:"12345678909",
especialidad:"Medicina interna",
medico:"Daniela",
},
{
nombreMascota:"Maily",
nombreDueño:"Kevin",
cedulaDueño:"5678954",
edadMascota:"2 años",
telefonoDueño:"5678902567",
especialidad:"Dermatologia veterinaria",
medico:"Andres",
},{
nombreMascota:"Mystic",
nombreDueño:"Nicolas",
cedulaDueño:"56723982",
edadMascota:"8 años",
telefonoDueño:"5678952567",
especialidad:"Farmacología veterinaria",
medico:"Jeisson"
}

]
for(let i=0;i<mascotas.length;i++){
    let mascota=mascotas[i];
    let fila =cuerpoTable.insertRow();
    let CeldaNombreMascota=fila.insertCell();
    let celdaNombreDueño=fila.insertCell();
    let celdaCedulaDueño=fila.insertCell();
    let celdaEdadMascota=fila.insertCell();
    let celdaTelefonoDueño=fila.insertCell();
    let celdaEspecialidad=fila.insertCell();
    let celdaMedico=fila.insertCell();

    CeldaNombreMascota.textContent=mascota.nombreMascota;
    celdaNombreDueño.textContent=mascota.nombreDueño;
    celdaCedulaDueño.textContent=mascota.cedulaDueño;
    celdaEdadMascota.textContent=mascota.edadMascota;
    celdaTelefonoDueño.textContent=mascota.telefonoDueño;
    celdaEspecialidad.textContent=mascota.especialidad;
    celdaMedico.textContent=mascota.medico;
}   

