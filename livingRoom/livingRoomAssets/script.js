window.localStorage.clear();
window.localStorage.setItem('doorbellStatus', '0');
let value = window.localStorage.getItem('doorbellStatus');

let tv = "0";
let frontCamVideo = "1";
let notification = "3";
let yesButton = "4";
let noButton = "5";
let resetTime = 30000;

function yesButtonClicked(){
    room.objects[tv].video_id= "paused";
    room.objects[notification].visible="false";
    room.objects[yesButton].visible="false";
    room.objects[noButton].visible="false";
}

function noButtonClicked(){
    room.objects[notification].visible="false";
    room.objects[yesButton].visible="false";
    room.objects[noButton].visible="false";
    room.objects[frontCamVideo].visible="false";
}

function restoreToNormal(){
  room.objects[tv].video_id="play";
  room.objects[frontCamVideo].visible="false";
  room.objects[notification].visible="false";
  room.objects[yesButton].visible="false";
  room.objects[noButton].visible="false";
  check();
}

function doorbellEvent(){
  window.localStorage.setItem('doorbellStatus', '0');

  room.playSound("doorbell");
  room.objects[frontCamVideo].visible="true";
  room.objects[notification].visible="true";
  room.objects[yesButton].visible="true";
  room.objects[noButton].visible="true";

  setTimeout(restoreToNormal, resetTime);
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
