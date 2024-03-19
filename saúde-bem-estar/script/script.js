let boxBuscar= document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnfechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=>{
    boxBuscar.classList.add('ativar')
})
btnfechar.addEventListener('click', ()=>{
    boxBuscar.classList.remove('ativar')
})