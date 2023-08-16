//Ý tưởng: Biến chuỗi thành array --> Lặp qua array nếu phần tử chưa xuất hiện ở Result thì push vào --> Biến array thành string.
let deleteDuplicateChar = function(text){
    //B1: Biến chuỗi thành array
    let textArray = text.split(''); 
    let charaters = [];
    let index = 0;
    let result;

    //B2: Vòng lặp
    while(index < textArray.length){
        let currentChar = textArray[index];
        //Nếu phần tử trong chuỗi chưa xuất hiện ở result thì push vào
        if(charaters.indexOf(currentChar)===-1){
            charaters.push(currentChar);
        }
        index++;
    }
    //B3: Biến array thành string
    result= charaters.join('');
    console.log(result);

   
}

deleteDuplicateChar("qeqeqwccbabacc");