let userName = localStorage.getItem('userName');
let fullName = sessionStorage.getItem('userFullName');

console.log(userName);
console.log(fullName);
let p = document.createElement('p');
p.textContent = sessionStorage.getItem('userFullName');
console.log(p.innerText);