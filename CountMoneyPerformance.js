//B1 Check Money

const isMoney = function(money){
    if(money % 10000 === 0){
        return true;
    }
    else{
        return false;
    }
}

//B2 Function ATM

const countMoney = function(money){
    const currencies = [500000,200000,100000,50000,20000,10000];
    let notification = [];
    let remain = money;

    if(!isMoney(money)){
        return "Lỗi";
    }
    for(const currency of currencies){
        const count = Math.floor(remain / currency);
        if(count !== 0){
            notification.push(`${count} tờ ${currency.toLocaleString()}`)
        }
        remain  = remain % currency;
    }
    const output = notification.join(" ");
    return output;
}

console.log(countMoney(2960000));