
let bill_total = document.getElementById('bill-total');
let total = document.getElementById('total');
let tip = document.getElementById('tip');
let persons = document.getElementById('persons');

// Buttons
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');


let billtotal = 0;
let tip_amount = 0;
let total_amount = 0;
let people = 1;


minus.onclick = () => {
    if (people > 1) {
        people --;
        persons.innerHTML=`<p>${people}</p>`
    }
    calculate();
}

plus.onclick = () => {
    people ++;
    persons.innerHTML = `<p>${people}</p>`;
    calculate();
}

const calculate = () =>{
    tip_amount = Number(tip.value / 100);
    billtotal = Number(bill_total.value);
    total_amount = billtotal + (billtotal * tip_amount) ;
    total.innerHTML = `<p>$${total_amount * people}</p>`;
}
