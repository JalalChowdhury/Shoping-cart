
//CaseNumber Common Function
function updateCaseNumber(products,price,isIncrease) {

    const caseInput = document.getElementById(products + '-number');
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
       
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        console.log(caseNumber);

        caseNumber = parseInt(caseNumber) - 1;

    }

    caseInput.value = caseNumber;

    // update case total 
    const caseTotal = document.getElementById(products + '-total');
    caseTotal.innerText = caseNumber * price;

    // calculate total
    calculateTotal();

}

// calculate Sub total 
function getInputValue(products){
    const productInput = document.getElementById(products + '-number');
    const productNumber = parseInt(productInput.value);

    return productNumber;
}

function calculateTotal(){

    const phoneTotal = getInputValue('case') * 1219 ;
    const caseTotal = getInputValue('main-case') * 59 ;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal/10;

    const total = subTotal + tax ;
    
    // main total cal
    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tax-amount').innerText = tax ;
    document.getElementById('total-price').innerText = total ;
}



// handle case incease/ decrease event handle
document.getElementById('case-plus').addEventListener('click', function () {

    updateCaseNumber('case',1219,true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case',1219,false);
})

// handle main-case incease/ decrease event handle
document.getElementById('main-case-plus').addEventListener('click', function () {

    updateCaseNumber('main-case',59,true);

})

document.getElementById('main-case-minus').addEventListener('click', function () {
    updateCaseNumber('main-case',59,false);
})

