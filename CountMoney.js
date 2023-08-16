//Cách 1
// Hàm check số tiền nhập vào

// Method --> Khai báo const 

const isMoney = function(money){
    if(money % 10000 === 0){
        return true;
    }
    else{
        return false;
    }
}

const countMoney = function(money){
    let count = 0;
    let remain = 0;
    let notification = "";
    if(isMoney(money)){
        if(Math.floor(money / 500000) != 0){
            count = Math.floor(money / 500000);
            remain = money - (500000 * count);
            notification = notification.concat(`${count} tờ 500.000 `);
        }
        if(Math.floor(remain / 200000) != 0){
            count = Math.floor(remain / 200000);
            remain = remain - (200000 * count);
            notification = notification.concat(`${count} tờ 200.000 `);
        }
        if(Math.floor(remain / 100000) != 0){
            count = Math.floor(remain / 100000);
            remain = remain - (100000 * count);
            notification = notification.concat(`${count} tờ 100.000 `);
        }
        if(Math.floor(remain / 50000) != 0){
            count = Math.floor(remain / 50000);
            remain = remain - (50000 * count);
            notification = notification.concat(`${count} tờ 50.000 `);
        }
        if(Math.floor(remain / 20000) != 0){
            count = Math.floor(remain / 20000);
            remain = remain - (20000 * count);
            notification = notification.concat(`${count} tờ 20.000 `);
        }
        if(Math.floor(remain / 10000) != 0){
            count = Math.floor(remain / 10000);
            remain = remain - (10000 * count);
            notification = notification.concat(`${count} tờ 10.000 `);
        }

        console.log(notification);
    }
    else{
        console.log("Lỗi");
    }
}


countMoney(2960000);


