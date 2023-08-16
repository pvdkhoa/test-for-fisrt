//B1: Check input
let isValid = function(time){
    // if(time >=0 && time<=3600){
    //     return true;
    // }else{
    //     return false;
    // }
    return !!(time >=0 && time<=3600);
}

//B2: Format
let formatTime = function(time){
    const temp = `${Math.floor(time / 60)}`
    if(isValid(time)){
        let minutes = temp.padStart(2,'0');
        let seconds = String(time % 60).padStart(2,'0');
        console.log(`${minutes}:${seconds}`); 
    }
    else{
        console.log("Lỗi")
    }
}

formatTime(2119);

