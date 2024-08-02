const userData = document.querySelector('#userdata');
const resulata = document.querySelector(".result");
userData.max  = new Date().toISOString().split("T")[0];

function calculate(){
    let user = new Date(userData.value);
    
    let d1 = user.getDate();
    let m1 = user.getMonth() +1 ;
    let y1 = user.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1 ;
    let y2 = today.getFullYear();   


    let d3, m3, y3;

    y3 = y2 - y1

    if (m2 >= m1) {
        m3 = m2 - m1;

    }else{
        y3--;
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getNewDate(y1, m1) + d2 - d1;
    }
    if (m3 < 0 ) {
        m3 = 11;
        y3--;
    }
    console.log(y3, m3, d3);
    resulata.innerHTML = `You are ${y3} years   ${m3}  month ${d3} days `
}

function getNewDate(year, month){
    return new Date(year, month, 0).getDate();
}
