let a = 100
const b = 20
// var c = 30

// {} //scope 

if (1)
{
    let a = 10 //stays in scope
    const b = 20
    // var c = 30 //fk scope
    // console.log(a) 

}

/*
console.log(a)
console.log(b)
*/
function one()
{
    const username = "haha"

    function two()
    {
        // const website = "Utoob"
        console.log(username)
    }
    // console.log(website)
    //child accesses parents, not the other way around
    two()
}

// one()

if(1){
    const username ="ehe"
    if(username === "ehe")
    {
        const website =  " utoob"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

//+++++++++++++QUES
 

console.log(addOne(5)); // no error

function addOne(num){
    return num + 1
}


// addTwo(5) // error 

const addTwo = function(num){
    return num + 2
}

    