test("1 euro deberia ser 1,2 dolares", function(){
   
    const { fromEuroToDollar } = require('./app.js')

  
    const dollars = fromEuroToDollar(3.5)

   
    const expected = 3.5 * 1.2; 
    
    
    expect(expected).toBe(dollars);
})

test("1 dolar deberia ser 106,58... yenes", function(){
    
    const { fromDollarToYen } = require('./app.js')

    
    const yens = fromDollarToYen(3.5)

    
    const expected = 3.5 / 1.2 * 127.9; 
    
    
    expect(expected).toBe(yens);
})

test("1 yen deberia ser 0,0063... libras", function(){
    
    const { fromYenToPound } = require('./app.js')

    
    const pounds = fromYenToPound(3.5)

     libras
    const expected = 3.5 / 127.9 * 0.8; 
    
    
    expect(expected).toBe(pounds);
})