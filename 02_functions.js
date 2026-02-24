function calculateCartPrice(val1,val2, ...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000)) 
//op: 500,2000 since val occupies 200 and 400

const user = {
    username: "John Doe",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)    
}

// handleObject(user) 
handleObject({
    username: "Jane Doe",
    price: 399
})

const myNewArr = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([20,40,50,60]));
