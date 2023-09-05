// using 3 lines of code in js rather than coping same thing in html
for (i = 0; i < 3; i++) {
  let clone = document.getElementById("container").cloneNode(true);
  document.getElementById('quote').appendChild(clone);
}
