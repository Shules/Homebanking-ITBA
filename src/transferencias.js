function mostrarAviso() {
    let botonContinuar = document.getElementById("continuar");
    let confirmacion = confirm("¿Seguro que desea continuar?")
    function restarSaldo(){
            let monto = document.getElementById("monto").value;
            let montoFinal = (saldo - monto);
            return montoFinal;
        }
    let saldoActual = restarSaldo()
    if (confirmacion){
        alert("¡Transferencia exitosa! Tu saldo actual es de $" + saldoActual);
        }
     else {
        alert("Transferencia cancelada.")
    }
}





