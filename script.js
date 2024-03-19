console.log("Hello World");

    let B = false;
        I = false;
        N = false;
        G = false;
        O = false;

grn(75);

function grn(max){
    let rndmnumber = Math.floor(Math.random() * max) + 1;
    //if...else if...else statement
    //if( conditions ) { block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if(rndmnumber <= 15){
         console.log(`Random Number ${ rndmnumber } is in B. 1 - 15`);
        B = true;
    } 
    else if (rndmnumber >= 16 && rndmnumber <= 30)
    {
         console.log(`Random Number ${ rndmnumber } is in I. 16 - 30`)
        I = true;
    } 
    else if (rndmnumber >= 31 && rndmnumber <= 45)
    {
         console.log(`Random Number ${ rndmnumber } is in N. 31 - 45`)
        N = true;
    } 
    else if (rndmnumber >= 46 && rndmnumber <= 60)
    {
         console.log(`Random Number ${ rndmnumber } is in G. 46 - 60`)
        G = true;
    } 
    else if (rndmnumber >= 61 && rndmnumber <= 75)
    {
         console.log(`Random Number ${ rndmnumber } is in O. 61 - 75`)
        O = true;
    } 
    else 
    {
         console.log(`Ramdom Number is Invalid`);
    }

    if (B = true && I == true && N == true && G == true && O == true) {
        console.log(`Bingo!!!`);
    }
    
}
console.log("Hello World");
grn(75);

