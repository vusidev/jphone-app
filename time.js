
function startTime() {
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
document.getElementById('time').innerHTML =
h + ":" + m;
let t = setTimeout(startTime, 500);
}
function checkTime(i) {
if (i < 10) {i = "0" + i}; // add zero in front of numbers < 10
return i;
}
