var Alumnos = /** @class */ (function () {
    function Alumnos(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
        this.noControl = noControl;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.promedio = promedio;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.activo = activo;
    }
    return Alumnos;
}());
var alumno;
var counter = 0;
var alumnos = new Array(10);
function init() {
    for (var i = 0; i < alumnos.length; i++) {
        alumnos[i] = new Alumnos("", "", "", 0, "", new Date(), false);
    }
}
function mostrar() {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].activo) {
            console.log("No. de Control= " + alumnos[i].noControl + " Nombre= " + alumnos[i].nombre + "  Apellidos= " + alumnos[i].apellidos + " Promedio= " + alumnos[i].promedio + " Genero= " + alumnos[i].genero + " Fecha de Nacimiento= " + alumnos[i].fechaNacimiento + " Activo= " + alumnos[i].activo);
        }
    }
}
function agregar(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    if (counter < 10) {
        alumno = new Alumnos(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo);
        alumnos[counter] = alumno;
        counter++;
    }
}
function borrar(noControl) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl === noControl) {
            alumnos[i] = new Alumnos("", "", "", 0, "", new Date(), false);
        }
    }
}
function modificar(noControl, nombre, apellidos, promedio, genero, fechaNacimiento, activo) {
    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].noControl == noControl) {
            alumnos[i].noControl = noControl;
            alumnos[i].nombre = nombre;
            alumnos[i].apellidos = apellidos;
            alumnos[i].promedio = promedio;
            alumnos[i].genero = genero;
            alumnos[i].fechaNacimiento = fechaNacimiento;
            alumnos[i].activo = activo;
        }
    }
}
init();
agregar("13401087", "Carlos", "Carrillo González", 89, "M", new Date(), true);
agregar("13401098", "Berenice", "Partida Gomez", 97, "F", new Date(), true);
borrar("13401098");
mostrar();
