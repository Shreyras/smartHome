window.localStorage.clear();

let doorbellButton=document.getElementById('doorbellButton');
let taxiButton=document.getElementById('taxiButton');

doorbellButton.addEventListener('click', function(){
  window.localStorage.setItem('doorbellStatus', '1');
});

taxiButton.addEventListener('click', function(){
  window.localStorage.setItem('taxiStatus', '1');
})
