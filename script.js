//Create a function that takes an integer number as an argument and returns “Even” for even numbers or “Odd” for odd numbers.
function num(x) {
    if (x % 2 == 0) {
        return 'Even';
    } esle
    return 'Odd';
}

function num(x) {
    if (x % 2 == 0)
        return 'Even';
    else
        a = 5;
    x = 3;
    x = x + 1;
}

//Trolls are attacking your comment section! Create a function that takes a string and returns a new string with all vowels removed. For example, “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.

function attack(x) {
    let result = '';
    for (var i = 0; i < x.length; i++) {
        let c = x.charAt(i);
        if (c == 'a'||  c == 'e' ||  c == 'i' || c == 'o'|| c == 'u' )
        continue;
        result = result + c;
    }
    return result;
}

let result = attack ('Hello my name is Nik ...what is your name?')
console.log(result);

//Write a function which repeats the given string exact number of times. For example, repeatString("Hello", 5) returns “HelloHelloHelloHelloHello”.

function repeat (str, num) {
    let returnStr = '';
    for( var i = 0; i < num; i++){
        returnStr += str;
    }
}
return returnStr;