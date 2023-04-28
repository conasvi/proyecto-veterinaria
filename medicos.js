let tablaMedicos=document.getElementById("tabla-medicos");
let cuerpoTable=tablaMedicos.querySelector("tbody");

class medicos {

constructor(nombreMedico,apellidoMedico,cedulaMedico,especialidadMedico,consultorioMedico,correoMedico,pacienteMedico){
 this.nombreMedico=nombreMedico;
 this.apellidoMedico=apellidoMedico;
 this.cedulaMedico=cedulaMedico;
 this.especialidadMedico=especialidadMedico;
 this.consultorioMedico=consultorioMedico;
 this.correoMedico=correoMedico;
 this.pacienteMedico=pacienteMedico;

}
}
function agregar(medicos) {
    
let fila=cuerpoTable.insertRow();
let celdaNombreMedico=fila.insertCell();
let celdaApellidoMedico=fila.insertCell();
let celdaCedulaMedico=fila.insertCell();
let celdaEspecialidadMedico=fila.insertCell();
let celdaConsultorioMedico=fila.insertCell();
let celdaCorreoMedico=fila.insertCell();
let celdaPacienteMedico=fila.insertCell();

celdaNombreMedico.textContent=medicos.nombreMedico;
celdaApellidoMedico.textContent=medicos.apellidoMedico;
celdaCedulaMedico.textContent=medicos.cedulaMedico;
celdaEspecialidadMedico.textContent=medicos.especialidadMedico;
celdaConsultorioMedico.textContent=medicos.consultorioMedico;
celdaCorreoMedico.textContent=medicos.correoMedico;
celdaPacienteMedico.textContent=medicos.pacienteMedico;
}
//Objetos

let medico_1=new medicos("Jorge","Rodriguez","1234567","Veterinario","703","medico@clinicos.com","Luna");
let medico_2=new medicos("Santiago","Lopez","6897456","Cirujano","701","medicoS@clinicos.com","Orion");
let medico_3=new medicos("Samuel","Fernandez","883724556","Cirujano","700","medicoSS@clinicos.com","Lilo");

agregar(medico_1);
agregar(medico_2);
agregar(medico_3);