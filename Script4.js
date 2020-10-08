var n = prompt("insert number: ")

var oddcount = 0;
var evencount = 0;
while (n > 0) {
    var loz = n % 2;
    if (loz != 0) {
        oddcount++;
    } else {
        evencount++;
    }
    n = Math.floor(n / 10);
}

if (oddcount == 0) {
    alert("All digits in the number are even digit")
} else if (evencount == 0) {
    alert("All digits in the number are odd digit")
} else if (oddcount != 0 && evencount != 0) {
    alert("Number of odd digits: " + oddcount + " " + "Number of even digits: " + evencount)
}

// đếm số lượng đơn vị chẵn(lẻ) trong 1 số đc input + thông báo nếu tất cả là chẵn(lẻ)