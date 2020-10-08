var n
var i
var text=""
n = prompt("enternumber");

for (i = 1; i < n; i++) {
    if (i % 2 != 0) {
        text += i + " "
    }  
}

document.getElementById("from1ton").innerHTML = text;

// in ra các số từ 1 đến n (chẵn / lẻ)
