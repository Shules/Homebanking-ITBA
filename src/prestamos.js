function mostrarAviso()
{
    var confirma= confirm("Esta seguro que desea realizar el prestamo?");
    var Personal = document.getElementById("Personal");
    var Emprendimiento = document.getElementById("Emprendimiento");
    var Capital = document.getElementById("Capital");  
    var contenido = document.getElementsByClassName("prestamo-menu");
    var confirmacion = document.getElementById("confirmacion");

    if(confirma)
    {
        if(Personal.checked)
        {
            confirmacion.textContent = "Se ha realizado un prestamo personal con exito!";
        }else if(Emprendimiento.checked)
        {
            confirmacion.textContent = "Se ha realizado un prestamo de emprendimiento con exito!";
        }else if(Capital.checked)
        {
            confirmacion.textContent = "Se ha realizado un prestamo de capital con exito!";
        }else
        {
            confirmacion.textContent = "seleccione una opcion por favor!";
        }   
    }
}

function cancelacion()
{
    var Personal = document.getElementById("Personal");
    var Emprendimiento = document.getElementById("Emprendimiento");
    var Capital = document.getElementById("Capital");
    var confirmacion = document.getElementById("confirmacion");  

    Personal.checked = false;
    Emprendimiento.checked = false;
    Capital.checked = false;
    confirmacion.textContent = "";
}