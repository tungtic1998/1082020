var n = prompt("enter: ");
var i = n;
var b = 0;
var digit = 0;

while (n > 0) {
    digit = n % 10;
    b = b * 10 + digit;
    n = Math.floor(n / 10);
}

if (i == b) {
    alert(true)
} else {
    alert(false)
}

// kiểm tra số đối xứng