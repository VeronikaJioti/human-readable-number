module.exports = function toReadable(number) {
    let result;
    if (number > 999) {
        return result = 'to big number';
    }
    // if (number = 0) {
    //     return result='zero';
    // }
    let strValue = number.toString();
    let str = ["", "", ""];
    let hundreds = '';
    let tens = '';
    let ones = '';
    if (number > 99) {
        str[0] = strValue[0];
        str[1] = strValue[1];
        str[2] = strValue[2];
    } else if ((number > 9) && (number <= 99)) {
        str[1] = strValue[0];
        str[2] = strValue[1];
    }
    if (number > 0 && number <=9 ) {
        str[2] = strValue[0];
    }
    // console.log(str);
    // if (str.length = 3) {
    switch (str[0]) {
        case '1': hundreds = 'one hundred';
            break;
        case '2': hundreds = 'two hundred';
            break;
        case '3': hundreds = 'three hundred';
            break;
        case '4': hundreds = 'four hundred';
            break;
        case '5': hundreds = 'five hundred';
            break;
        case '6': hundreds = 'six hundred';
            break;
        case '7': hundreds = 'seven hundred';
            break;
        case '8': hundreds = 'eight hundred';
            break;
        case '9': hundreds = 'nine hundred';
            break;
    }
    if (str[1] !== '1') {
        switch (str[1]) {
            // case '0':  tens = '';
            // break;
            case '2': tens = 'twenty';
                break;
            case '3': tens = 'thirty';
                break;
            case '4': tens = 'forty';
                break;
            case '5': tens = 'fifty';
                break;
            case '6': tens = 'sixty';
                break;
            case '7': tens = 'seventy';
                break;
            case '8': tens = 'eighty';
                break;
            case '9': tens = 'ninety';
                break;
        }
        switch (str[2]) {
            // case '0': ones = 'zero'
            //     break;
            case '1': ones = 'one';
                break;
            case '2': ones = 'two';
                break;
            case '3': ones = 'three';
                break;
            case '4': ones = 'four';
                break;
            case '5': ones = 'five';
                break;
            case '6': ones = 'six';
                break;
            case '7': ones = 'seven';
                break;
            case '8': ones = 'eight';
                break;
            case '9': ones = 'nine';
                break;
            default: ones ='zero';
        }
    } else {
        switch (str[1]+str[2]) {
            case '10': tens = 'ten';
                break;
            case '11': tens = 'eleven';
                break;
            case '12': tens = 'twelve';
                break;
            case '13': tens = 'thirteen';
                break;
            case '14': tens = 'fourteen';
                break;
            case '15': tens = 'fifteen';
                break;
            case '16': tens = 'sixteen';
                break;
            case '17': tens = 'seventeen';
                break;
            case '18': tens = 'eighteen';
                break;
            case '19': tens = 'nineteen';
                break;
        }
    }
    // }
    // console.log(str);
    // console.log(ones);
    return result = `${hundreds}${hundreds!=='' && tens !== '' ? " " : ""}${tens}${(tens !== '' || hundreds !== '') && (ones!== '' && ones !== 'zero')? " " : ""}${(ones === 'zero' && hundreds === '' && tens === '') || (ones !== 'zero') ? ones : ''}`;
    //
}

    // console.log(module.exports(0));