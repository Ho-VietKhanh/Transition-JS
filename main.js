function getRealTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    // Thêm số 0 khi chỉ có 1 chữ số
    let preFixHour = currentTime.getHours() < 10 ? "0" : "";
    let preFixMinute = currentTime.getMinutes() < 10 ? "0" : "";
    let preFixSecond = currentTime.getSeconds() < 10 ? "0" : "";

    let summary = (`${preFixHour}${hour} : ${preFixMinute}${minutes} : ${preFixSecond}${seconds}`);

    let realTime = document.querySelector("#clock");
    // console.log(realTime.innerHTML);
    realTime.innerHTML = summary;
    console.log(realTime.innerHTML);
}

setInterval(getRealTime, 1000); 