//Ý tưởng: Biến chuỗi thành array split(" ") --> Sau đó dùng array.length để đếm

let countWord = function(text){
    let count = 0;
    let charArray = text.split(' ');
    count = charArray.length;
    console.log(`đoạn văn có ${count} từ`);
}

countWord("pham vu dang khoa")
//qweqeqeqweqe