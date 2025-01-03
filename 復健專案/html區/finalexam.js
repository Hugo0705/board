var i=0, imgArr=new Array();
var a=0;
var intervalID;
imgArr[0]="https://drive.google.com/thumbnail?id=1H0rNnBmsClkVkgPdeSb0hZX5zWKjk2m3&sz=w593";
imgArr[1]="https://drive.google.com/thumbnail?id=1zFO8AcWQnlylKhEoosOqPB29UXOtKd03&sz=w593";
imgArr[2]="https://drive.google.com/thumbnail?id=1SIYHmokrkHFNeNbPyGaISkdbhVGQSbMS&sz=w593";
imgArr[3]="https://drive.google.com/thumbnail?id=1RtNLXBCR_8zP2L81FYezEhVj85ZIitGG&sz=w593";
imgArr[4]="https://drive.google.com/thumbnail?id=1hNYon4SgjrWhfLHQXhhMQiOry5N9JjHq&sz=w593";
imgArr[5]="https://drive.google.com/thumbnail?id=13ySu5gV5aoJWr0AL2Yr8veMUD7COjaJx&sz=w593";
imgArr[6]="https://drive.google.com/thumbnail?id=1vZh1W5nJdmnMiwkzexscq3kUz_YQIVQV&sz=w593";
imgArr[7]="https://drive.google.com/thumbnail?id=1hGzxae2iDl3AYgXK90DwqMETHQa5jAMl&sz=w593";
//0代表不動 1代表動
function tof(){
    const element = document.getElementById('btn');
    if (a=0){
        element.style.opacity = 0;
        intervalID=setInterval(chan,1000);
        a = 1;
    }
    else{
        element.style.opacity = 1;
        clearInterval(intervalID);
        a = 0;
    }
}

function chan(){
    document.getElementById('ico').src = imgArr[i];
    i = (i+1)%8;
}

let title = document.getElementById("title");
let content = document.getElementById("content");
let bttn = document.getElementById("btn");
let list = document.getElementById("list");
function newd(){
  list.innerHTML = list.innerHTML + `<div class="news">
    <h4>${title.value}</h4>
    <p>${content.value}</p><hr>
  </div>
  `;
};