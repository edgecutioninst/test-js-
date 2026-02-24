// function sum(num1, num2)
// {
//     console.log(num1 + num2);
// }

function sum(num1, num2)
{
    // let result =  num1 + num2;
    // return result;

    return num1 + num2; 
}

const result = sum(3,3)

// console.log("result: ", result)

function loginUserMessage(username) 
{
    if(username=== undefined)
        {
            console.log("pls enter username");
            return
        }
    return `${username} just logged in`
}

console.log(loginUserMessage("EHE"))
// returns undefines when no username passed

