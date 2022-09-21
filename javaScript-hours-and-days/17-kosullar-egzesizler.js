
let userName = prompt("isminizi yazınız.");
let myName = document.getElementById("myName");

myName.innerHTML = `${userName ? userName : "anonymous"}`
document.getElementById("myName").style.color = "#E67E22"
//kolay yontem
// let saatBilgisi = document.querySelector("div#myClock")
// const d = new Date();
// let hour = d.getHours();

// if (d){saatBilgisi.innerHTML= d}
// else if (hour) {saatBilgisi.innerHTML = hour}
// else{saatBilgisi.innerHTML="saat bilgisi yok"};

// diger yontem

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    document.getElementById("myClock").style.color ="#E67E22";
    setTimeout(showTime, 1000);
    let day = days[d.getDay()];
    let benimSaat = document.getElementById("myClock")
    if (days){benimSaat.innerHTML = time + " " + day}
    else {"zaman ve gun bilgisi yok"}
}

showTime();

    let text1 = document.querySelector(".text1").style.color="#E67E22"
    document.querySelector(".text1").style.fontSize ="35px"
    document.querySelector(".text1").style.fontFamily ="Lucida Sans"