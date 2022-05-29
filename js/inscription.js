let formData = document.querySelector('#dataForm');
let idMail = document.getElementById('mail');

//ECOUTER LA MODIFICATION DU NOM
formData.nom.addEventListener('change', function() {

    valideName(this);
});
//ECOUTER LA MODIFICATION DU PRENOM
formData.prenom.addEventListener('change', function() {

    valideName(this);
});

//ECOUTER LA MODIFICATION DU MAIL
formData.mail.addEventListener('change', function() {
    console.log(formData.mail.value);

    valideEmail(this);
});

//ECOUTER LA MODIFICATION DU PASSWORD1
formData.password1.addEventListener('change', function() {

    validePassword(this);
});

//ECOUTER LA MODIFICATION DU PASSWORD2
formData.password2.addEventListener('change', function() {

    validePassword(this);
    comparePassword(this);
});


//ECOUTER LE SOUMISSION DU FORMULAIRE
formData.addEventListener('submit', function(e) {
    //je casse l'evenement par defaut
    e.preventDefault();




    if (valideName(formData.nom) && valideName(formData.prenom) && valideEmail(formData.mail) && comparePassword(formData.password2)) {

        let fullName = formData.nom.value + " " + formData.prenom.value;
        let user = {
            nom: formData.nom.value,
            prenom: formData.prenom.value,
            mail: formData.mail.value
        };

        let ok = confirm(`validez vous les donnees suivante\nnom : ${formData.nom.value}\nprenom : ${formData.prenom.value}\nmail:  ${formData.mail.value}`)

        if (ok) {
            alert('vos donnees ont ete transmises');
            localStorage.setItem('userName', formData.prenom.value);
            sessionStorage.setItem('userFullName', fullName);
            formData.submit();
        }

    }
});




//****************************VERIFICATION DU PRENOM  ET DU NOM************************************************* */

//FONCTION QUI VALIDE UN CHAMP NOM PRENOM
const valideName = function(input) {
    // REGEX POUR VALIDER LE NOM OU LE PRENOM

    let nameRegExp = new RegExp('^[a-zA-Zéàçèäâîï-]+$', 'g');


    //JE RECUPERE L'ELEMENT QUI SE TROUVE APRES LE INPUT LE SMALL DANS MON HTML
    let small = input.nextElementSibling;
    let testNom = nameRegExp.test(input.value.trim());

    //ON TEST L'EXPRESSION REGULIERE 
    if (testNom) {
        small.classList.remove('erreur');
        small.classList.add('succes');
        return true;

    } else {
        small.textContent = 'format invalide';
        small.classList.remove('succes');
        small.classList.add('erreur');
        return false;
    }
};

//****************************VERIFICATION DE L'EMAIL************************************************* */


//FONCTION QUI VALIDE UN CHAMP EMAIL
const valideEmail = function(inutEmail) {
    // REGEX POUR VALIDER LE NOM OU LE PRENOM
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,5}$', 'g');


    //JE RECUPERE L'ELEMENT QUI SE TROUVE APRES LE INPUT LE SMALL DANS MON HTML
    let small = idMail.nextElementSibling;


    let testEmail = emailRegExp.test(idMail.value.trim());

    //ON TEST L'EXPRESSION REGULIERE 
    if (testEmail) {
        small.classList.remove('erreur');
        small.classList.add('succes');
        return true;

    } else {
        small.textContent = 'format invalide exemple@gmail.com';
        small.classList.remove('succes');
        small.classList.add('erreur');
        return false;
    }
};

//FONCTION QUI VALIDE le CHAMP PASSWORD
const validePassword = function(inputPassword) {
    let message;
    let verif = false;

    // REGEX POUR VALIDER LE NOM OU LE PRENOM
    if (inputPassword.value.length < 5) {
        message = 'le password doit contenir 6 caracteres';
    }
    //MOT DE PASSE DOIT CONTENIR 1 MAJUSCULE
    else if (!/[A-Z]/.test(inputPassword.value.trim())) {
        message = 'le password doit contenir 1 majuscule';
    }
    //MOT DE PASSE DOIT CONTENIR 1 CHIFFRE
    else if (!/[0-9]/.test(inputPassword.value.trim())) {
        message = 'le password doit contenir 1 chiffre';
    } else {
        verif = true;
    }



    let small = inputPassword.nextElementSibling;
    //ON TEST L'EXPRESSION REGULIERE 
    if (verif) {
        small.classList.remove('erreur');
        small.classList.add('succes');

    } else {
        small.textContent = message;
        small.classList.remove('succes');
        small.classList.add('erreur');
    }
};



const comparePassword = function(inputPassword) {
    let message = 'les mots de passe ne sont pas identiques';
    let password1 = formData.password1.value.trim();
    let password2 = inputPassword.value.trim();
    let small1 = formData.password1.nextElementSibling;
    let small2 = inputPassword.nextElementSibling;

    if (password1 !== password2) {
        small1.textContent = message;
        small1.classList.remove('succes');
        small1.classList.add('erreur');
        small2.textContent = message;
        small2.classList.remove('succes');
        small2.classList.add('erreur');
        return false;
    } else {
        small1.classList.remove('erreur');
        small1.classList.add('succes');
        small2.classList.remove('erreur');
        small2.classList.add('succes');
        return true;
    }



};