// immediately invoked function expressions

(function tea()
{
    console.log(`DB connected`)
})();
// () -> execution call to avoid global scope pollution
// ; = needed


//No named iife
((name) => {
    console.log(`DB CONNECTED ${name}`)
})("HAHA")



