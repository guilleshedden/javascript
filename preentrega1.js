


alert("Bienvenido al Banco Jacinto, a continuación podrá calcular su plazo fijo a 30 dias")
let inversion = parseInt (prompt("cuanto dinero quiere invertir"))

if( typeof(inversion) == "number" && inversion < 10000){
    let plazoFijo1 = inversion * 1.08;
    console.log("Ud tendra $", plazoFijo1, "despues de 30 dias")
    pregunta = prompt("Si desea invertir su dinero ingrese 'si'")
    if(pregunta == "si"){
        alert("Muchas gracias por invertir en Banco Jacinto, en 30 dias ud podra retirar su dinero")
    }
    else{
        alert("Muchas gracias por consultar en Banco Jacinto, lo esperamos la proxima")
    }
}
else if(typeof(inversion) == "number" && inversion >= 10000){
    let plazoFijo2 = inversion * 1.1;
    console.log("Ud tendra $", plazoFijo2, "despues de 30 dias")
    pregunta = prompt("Si desea invertir su dinero ingrese 'si'")
    if(pregunta == "si"){
        alert("Muchas gracias por invertir en Banco Jacinto, en 30 dias ud podra retirar su dinero")
    }
    else{
        alert("Muchas gracias por consultar en Banco Jacinto, lo esperamos la proxima")
    }
}
