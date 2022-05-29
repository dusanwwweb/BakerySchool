let parentEl_1 = document.getElementsByClassName('parent-click')[0];
let btn_1 = document.getElementsByClassName('btn-click')[0];
let el_1 = document.getElementsByClassName('el-click')[0];

let parentEl_2 = document.getElementsByClassName('parent-click')[1];
let btn_2 = document.getElementsByClassName('btn-click')[1];
let el_2 = document.getElementsByClassName('el-click')[1];

let parentEl_3 = document.getElementsByClassName('parent-click')[2];
let btn_3 = document.getElementsByClassName('btn-click')[2];
let el_3 = document.getElementsByClassName('el-click')[2];



let painLev = `<p style="font-size: 1.2em">Le pain au levain est un pain fait à base de levain, 
c'est-à-dire d'un mélange d'eau et de farine où se développe une culture de levure et de bactérie lactique. 
La farine est fermentée par cette culture. Cette fermentation, en dégageant du dioxyde de carbone, permet à la pâte de lever. 
Le levain est la plus ancienne technique connue pour obtenir du pain levé, 
et il est resté la seule jusqu'au xviie siècle.
Le goût du pain au levain est légèrement acidulé, avec des arômes complexes et subtils 
en raison des acides lactiques et acétiques que dégagent les bactéries lactiques du levain.</p>`

let painBag = `<p style="font-size: 1.2em">
La baguette fait partie des symboles de l’identité française. Parmi les pains les plus consommés en France, on retrouve la baguette classique et la baguette tradition. 
La première de ces marques a été lancée par un groupement de meuniers (UNIMIE) sous le nom de Banette. 
Selon le décret 93-1074 du 13 septembre 1993, la baguette « de tradition française » ne peut être fabriquée qu'avec les ingrédients suivants : 
farine de blé, eau, levure et/ou levain, sel.</p>`

let painBor = `<p style="font-size: 1.2em">Le borodinski (en russe бородинский хлеб) est un pain de seigle d'origine russe.
En plus de la farine de seigle, de la levure et du sel, le borodinski contient du malt de seigle, de la mélasse et de la coriandre. 
Il peut aussi être préparé avec de la pâte à choux.
Ce pain est également utilisé dans la fabrication du kvas, boisson traditionnelle des pays de l'Est, très légèrement alcoolisé. 
Pour ce faire, des tranches de borodinski sont grillées, puis mises à bouillir dans de l'eau avec du sucre, de la levure et des raisins secs.
</p>`


el_1.classList.add('re-active')
el_2.classList.add('re-active')
el_3.classList.add('re-active')

btn_1.addEventListener('click', ()=>{
    parentEl_1.removeChild(btn_1);
    el_1.insertAdjacentHTML("afterend", painLev);

})

btn_2.addEventListener('click', ()=>{
    parentEl_2.removeChild(btn_2);
    el_2.insertAdjacentHTML("afterend", painBag);

})

btn_3.addEventListener('click', ()=>{
    parentEl_3.removeChild(btn_3);
    el_3.insertAdjacentHTML("afterend", painBor);
})

