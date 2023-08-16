//B1: Thiết kế bảng morse
const morseCodeMap = {
    'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.',  'H': '....', 'I': '..',  'J': '.---',
    'K': '-.-',  'L': '.-..', 'M': '--',   'N': '-.',  'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.',  'S': '...', 'T': '-',
    'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
};

//B2: Viết function
function textToMorse(text){
    // Lọc dữ liệu text đưa vào.
    let cleanText = text.trim();
    let upperCaseText = cleanText.toUpperCase();

    // Biến chứa mã morse
    let morse = '';

    //Vòng lặp để duyệt qua các kí tự.
        // For each -- concat , push
    for(let i = 0;i<upperCaseText.length;i++){
        let char = upperCaseText[i];    //Lấy từng kí tự
        if(char === ' '){
            morse += ' ';
        }else if(morseCodeMap[char]){
            morse += morseCodeMap[char];
        }else{
            morse += '';
        }

    }
    return morse;
}

//B3: Viết output
let inputText = "khoathuan";
let Result = textToMorse(inputText);
console.log(Result);