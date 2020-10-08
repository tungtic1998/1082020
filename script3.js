var n;
var i;
var sum = 0;
var text="";
n = prompt("enternumber");

for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
    sum += i;    
    }
}

text = sum;

document.getElementById("from1ton").innerHTML = text;

//tính tổng các loại