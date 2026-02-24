const user = {
    username: "haha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
    //this refers the current context
}


// user.welcomeMessage()
// user.username = "hehe"
// user.welcomeMessage()

//global object in browser: window object
// console.log(this);

/*
function tea(){
    let username= "hehe"
    console.log(this.username);
    //does not work in function
    
}
tea()
*/
const chai = () =>  //arrow function
{
    let username= "hehe"
    console.log(this);
}
// chai()

/*  // explicit return
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))
*/

//implicit return
const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4))


