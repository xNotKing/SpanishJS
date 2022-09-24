let escribir, retornar, log_en_consola, si_igual, si_no_igual, si_igual_si_no, selecionar_escribir_html, selecionar_escribir_texto, selecionar, redireccionar, abrir_ventana, documento_añadir_evento, selector_añadir_evento, javascript, javascript_español, variable, esperar, eseprar_infinito, atributo;

// ------ 
// console.log()
log_en_consola = (arg) => {
    console.log(arg)
}
// return
retornar = (arg = null) => {
    return arg
}
// if ==
si_igual = (arg, arg2, arg3) => {
    if (arg == arg2) {
        setTimeout(arg3, 1)
    }
}
// if == else 
si_igual_si_no = (arg, arg2, arg3, arg4) => {
    if (arg == arg2) {
        setTimeout(arg3, 1)
    } else {
        setTimeout(arg4, 1)
    }
}
// if !=
si_no_igual = (arg, arg2, arg3) => {
    if (arg != arg2) {
        setTimeout(arg3, 1)
    }
}
selecionar = (arg) => {
    document.querySelector(arg)
}
// Print text
selecionar_escribir_html = (arg, arg2) => {
    document.querySelector(arg).innerHTML = arg2
}
selecionar_escribir_texto = (arg, arg2) => {
    document.querySelector(arg).innerText = arg2
}
redireccionar = (arg) => {
    location.href = arg;
}
abrir_ventana = (arg) => {
    window.open(arg)
}
documento_añadir_evento = (arg, arg2) => {
    document.addEventListener(`${arg}`, () => {
        setTimeout(arg2, 1)
    })
}
selector_añadir_evento = (arg, arg2, arg3) => {
    selector = document.querySelector(arg)
    selector.addEventListener(`${arg2}`, () => {
        setTimeout(arg3, 1)
    })
}
esperar = (arg = null, arg2 = 1) => {
    setTimeout(arg, arg2)
}
eseprar_infinito = (arg = null, arg2 = 1) => {
    setInterval(arg, arg2)
}
atributo = (arg, arg2) => {
    return document.querySelector(arg).attributes[`${arg2}`]
} 
javascript_español = () => {
    log_en_consola("Estas usando la version 1.0.0 de Spanis JS")
}