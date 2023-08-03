// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    switch (input) {
        case "Jane":
            return "Hello, " + input;
        case "Alex":
            return "Hello, " + input;
        case "Pat":
            return "Hello, " + input;
        default:
            return "Hello, World";
    }
    //return "Hello, " + input;
}

function isFive(number){
    return number == 5;

};

function isEven(number){
    return number % 2 ===0;
}



function isVowel(input) {

    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let result = (vowels.includes(input)) ? true : false

    return result;
}


