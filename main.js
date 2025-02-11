"use strict"


const imagens = [
    'img/spike.jpg', 
    'img/Edward1.jpg', 
    'img/faye.jpg', 
    'img/jet.jpg', 
    'img/cachorro.jpg'
];

let indiceAtual = 0;

document.getElementById('trocar-imagem').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.body.style.backgroundImage = `url(${imagens[indiceAtual]})`;
});