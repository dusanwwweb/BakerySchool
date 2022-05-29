let parentEl_1 = document.getElementsByClassName('parent-click')[0];
let btn_1 = document.getElementsByClassName('btn-click')[0];
let el_1 = document.getElementsByClassName('el-click')[0];

let parentEl_2 = document.getElementsByClassName('parent-click')[1];
let btn_2 = document.getElementsByClassName('btn-click')[1];
let el_2 = document.getElementsByClassName('el-click')[1];

let parentEl_3 = document.getElementsByClassName('parent-click')[2];
let btn_3 = document.getElementsByClassName('btn-click')[2];
let el_3 = document.getElementsByClassName('el-click')[2];



let croissant = `<p style="font-size: 1.2em">
    Un croissant est une viennoiserie à base d’une pâte levée feuilletée spécifique, la pâte à croissant, 
    qui comporte de la levure et une proportion importante de beurre. L’existence du kipferl, ancêtre du croissant, serait attestée en Autriche depuis le XIIIe siècle.
    La première recette a été publiée en 1891, mais elle était différente de celle que l’on retrouve aujourd’hui. 
    La première recette d’un croissant feuilleté a été publiée en France pour la 
    première fois en 1905 et ce n’est que dans les années 1920 que cette « viennoiserie » rencontra le succès. 
</p>`

let painChoc = `<p style="font-size: 1.2em">
    Le pain au chocolat ou chocolatine, est une viennoiserie constituée d’une pâte levée feuilletée identique à celle du croissant, 
    rectangulaire enroulée sur une ou plusieurs barres de chocolat.
    Ces dénominations sont synonymes :  petit pain ou petit pain au chocolat, en Suisse, 
    en Wallonie, et dans la majeure partie de la France, chocolatine, dans le sud-ouest de la France;
</p>`

let danois = `<p style="font-size: 1.2em">
    Une viennoiserie danoise ou tout simplement une danoise est une pâtisserie feuilletée sucrée appartenant à la catégorie 
    des viennoiseries. Elle fut introduite au Danemark par des boulangers autrichiens, avant de devenir une spécialité danoise. 
    Tout comme les autres viennoiseries, par exemple les croissants, elle se prépare avec une pâte feuilletée levée, 
    ce qui lui donne une texture en plusieurs couches.
</p>`


el_1.classList.add('re-active')
el_2.classList.add('re-active')
el_3.classList.add('re-active')

btn_1.addEventListener('click', ()=>{
    parentEl_1.removeChild(btn_1);
    el_1.insertAdjacentHTML("afterend", croissant);

})

btn_2.addEventListener('click', ()=>{
    parentEl_2.removeChild(btn_2);
    el_2.insertAdjacentHTML("afterend", painChoc);

})

btn_3.addEventListener('click', ()=>{
    parentEl_3.removeChild(btn_3);
    el_3.insertAdjacentHTML("afterend", danois);
})

