let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

function fromDollarToYen (a){
    return a/oneEuroIs.USD*oneEuroIs.JPY;
}


function fromEuroToDollar (a){
    return a*oneEuroIs.USD;
}


function fromYenToPound (a){
    return a/oneEuroIs.JPY*oneEuroIs.GBP;
}

 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };