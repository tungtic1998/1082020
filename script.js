var n = prompt("enternumber");
var i = 1
var text=""
do {
    text += i + " ";
    i++;
} while (i <= n)

document.getElementById("from1ton").innerHTML = text;