window.localStorage.clear();
window.localStorage.setItem('doorbellStatus', '0');
window.localStorage.setItem('taxiStatus', '0');


let tv = "tv";
let frontCamVideo = "popUp";
let bellNotification = "bellNotification";
let yesButton = "yesButton";
let noButton = "noButton";
let resetTime = 30000;

// All functions below are regarding the doorbell ringing event
function yesButtonClicked(){
    room.objects[tv].video_id= "paused";
    room.objects[bellNotification].visible="false";
    room.objects[yesButton].visible="false";
    room.objects[noButton].visible="false";
}

function noButtonClicked(){
    room.objects[bellNotification].visible="false";
    room.objects[yesButton].visible="false";
    room.objects[noButton].visible="false";
    room.objects[frontCamVideo].visible="false";
}

function restoreToNormal(){
  room.objects[tv].video_id="play";
  room.objects[frontCamVideo].visible="false";
  room.objects[bellNotification].visible="false";
  room.objects[yesButton].visible="false";
  room.objects[noButton].visible="false";
  check();
}

function doorbellEvent(){
  window.localStorage.setItem('doorbellStatus', '0');

  room.playSound("doorbell");
  room.objects[frontCamVideo].visible="true";
  room.objects[bellNotification].visible="true";
  room.objects[yesButton].visible="true";
  room.objects[noButton].visible="true";

  setTimeout(restoreToNormal, resetTime);
}

function checkDoorbell(){
  let value = window.localStorage.getItem('doorbellStatus');
  value = parseInt(value);

  if(value === 0){
    setTimeout(checkDoorbell, 1000);
  }
  else{
    doorbellEvent();
  }
}

checkDoorbell();


//All functions below are regarding the taxi notifcation event
let taxiNotification = "taxiNotification";

function restoreToNormalTaxi(){
  room.walk_speed = "1.8"; //back to default speed
  room.objects[taxiNotification].visible = "false";
  checkTaxi();
}

function avatarSpeedIncrease(){
  room.objects[taxiNotification].image_id = "speedInc";
  room.walk_speed = "3.6";   //default speed is 1.8
  setTimeout(restoreToNormalTaxi, 10000);
}

function taxiEvent(){
  window.localStorage.setItem('taxiStatus', '0');
  room.objects[taxiNotification].visible = "true";
  room.objects[taxiNotification].image_id = "taxiNotif";
  setTimeout(avatarSpeedIncrease, 10000);
}

function checkTaxi(){
  let taxiValue = window.localStorage.getItem('taxiStatus');
  taxiValue = parseInt(taxiValue);

  if(taxiValue === 0){
    setTimeout(checkTaxi, 1000);
  }
  else{
    taxiEvent();
  }
}

checkTaxi();
