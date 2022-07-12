/* var number=0;

setInterval(change, 10000);
function change(){
  if(number===0){
    room.objects["3"].visible="false";
  }
  else{
    room.objects["3"].visible="true";
  }

  number=(number+1)%2;
}
*/

window.localStorage.clear();
window.localStorage.setItem('doorbellStatus', '0');
let value = window.localStorage.getItem('doorbellStatus');

function restoreToNormal(){
  room.objects["1"].visible="false";
  room.objects["3"].visible="false";
  check();
}

function doorbellEvent(){
  window.localStorage.setItem('doorbellStatus', '0');
  room.playSound("doorbell");
  room.objects["1"].visible="true";
  room.objects["3"].visible="true";
  setTimeout(restoreToNormal,10000);
}

function check(){
  value = window.localStorage.getItem('doorbellStatus');
  value = parseInt(value);

  if(value === 0){
    setTimeout(check, 1000);
  }
  else{
    doorbellEvent();
  }
}

check();
