const bir = parseFloat(prompt(" 1 - sonni kiriting "))

const ikki = parseFloat(prompt("tanlang \n 1) + \n 2) / \n 3) * \n 4) -"))

const ikkinchison = parseFloat(prompt("2 chi sonni kiriting"))

let belgi;

if (ikki === 1) { belgi = bir + ikkinchison }
else if (ikki === 2) { belgi = bir / ikkinchison }
else if (ikki === 3) { belgi = bir * ikkinchison }
else if (ikki === 4) { belgi = bir - ikkinchison }
else (
    alert("notogri javob")
)
document.getElementById("belgi").textContent = belgi;
body.document.appendChild(belgi);

// document.getElementsByClassName("big").textContent = big;
// body.document.appendChild(big);





