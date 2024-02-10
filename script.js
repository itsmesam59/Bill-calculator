
let bill_total = document.getElementById('bill-total');
let total = document.getElementById('total');
let count = document.getElementById('count-btn')

count.onclick = () => {
    calculatebill();
}

const calculatebill = () => {
    total.innerHTML = `<p>${bill_total.value}</p>`;
}