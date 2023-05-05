function display1() {
  document.getElementById("modal_1").classList.add("modal_display");
}
function display2() {
  document.getElementById("modal_1").classList.remove("modal_display");
}
// sun moom
function moonOn() {
  document.getElementById("sunOn").classList.add("display_block");
  document.getElementById("moonOn").classList.add("display_none");
  document.getElementById("sunOn").classList.remove("display_none");
}
function sunOn() {
  document.getElementById("sunOn").classList.add("display_none");
  document.getElementById("moonOn").classList.add("display_block");
  document.getElementById("moonOn").classList.remove("display_none");
}
function darkBody() {
  document.getElementById("myBody").classList.toggle("dark");
  document.getElementById("myBody").classList.remove("bg-body");
}
function videoOn() {
  document.getElementById("modal_2").classList.add("modal_display");
}
function videoOff() {
  document.getElementById("modal_2").classList.remove("modal_display");
}
