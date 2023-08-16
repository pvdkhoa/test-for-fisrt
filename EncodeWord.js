//B1: Thiết kế bảng morse
const morseCodeMap = {
    'A': '1',   'B': '2', 'C': '3', 'D': '4', 'E': '5',
    'F': '6', 'G': '7',  'H': '8', 'I': '9',  'J': '10',
    'K': '11',  'L': '12', 'M': '13',   'N': '14',  'O': '15',
    'P': '16', 'Q': '17', 'R': '18',  'S': '19', 'T': '20',
    'U': '21',  'V': '22', 'W': '23',  'X': '24', 'Y': '25',
    'Z': '26'
};

//B2: Viết function
const encode =  function (text) {
    // Lọc dữ liệu text đưa vào.
    let cleanText = text.trim();
    let upperCaseText = cleanText.toUpperCase();

   
    let containText = '';

    //Vòng lặp để duyệt qua các kí tự.
    for (let i = 0; i < upperCaseText.length; i++) {
        let char = upperCaseText[i];    // Lấy từng kí tự
        if (char === ' ') {
            containText = containText.concat(' - ');
        } else if (morseCodeMap[char]) {
            containText = containText.concat(morseCodeMap[char], ',');
        } else {
            containText = containText.concat('');
        }
    }
    return containText;
}

//B3: Viết output
let inputText = "khoa thuan";
let Result = encode(inputText);
console.log(Result);