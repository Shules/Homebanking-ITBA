function mostrarSaldoActual(saldoActual)
{
    let saldoMostrar = document.getElementById("saldoActual");
    saldoMostrar.textContent = saldoActual;
}

function convertirMoneda(monto, moneda)
{
    if (moneda == "Dolares")
    {
        return monto*700;
    }

    if(moneda == "Euro")
    {
        return monto*500;
    }
}

function mostrarAviso() {
    let botonContinuar = document.getElementById("continuar");
    let confirmacion = confirm("¿Seguro que desea continuar?");
    let saldoActual = parseFloat(document.getElementById("saldoActual").textContent);
    let monto = parseFloat(document.getElementById("monto").value);
    let moneda = document.getElementById("Importe").value

    if(moneda != 'Pesos')
    {
        monto = convertirMoneda(monto, moneda);
    }

    if (confirmacion && saldoActual >= monto && monto > 0){
        saldoActual -= monto;
        mostrarSaldoActual(saldoActual);
        alert("¡Transferencia exitosa! Tu saldo actual es de $" + saldoActual);
    }else if(saldoActual<monto){
        alert("No dispone del dinero solicitado");
    }else if(monto < 0){ 
        alert("Monto no valido.");
    }else {
        alert("Transferencia cancelada.");
    }
}




