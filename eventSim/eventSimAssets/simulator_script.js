window.localStorage.clear();
let button=document.getElementById('doorbellButton');
button.addEventListener('click', function(){
  window.localStorage.setItem('doorbellStatus', '1');
});
