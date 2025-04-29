function konversi() {

//    membuat HTML tidak refresh, kalau tidak kalkulasi di readonly textarea hilang
    document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})

//    definisi variabel yang dipakai
    let nilai_konversi = document.getElementById("konversi-input").value
    let nilai_hasil = (parseFloat(nilai_konversi) * 9/5) + 32
    const detail = document.querySelector("textarea[name='calculate-detail']")
    const hasil = document.querySelector("textarea[name='result-output']")

    hasil.value = nilai_hasil.toFixed(2) + "°F"
    console.log(hasil.value)

//    output hasil konversi dengan metode queryselector
    detail.value = "(" + nilai_konversi + "°C * 9/5) + 32 = " + nilai_hasil.toFixed(2) + "°F"
    console.log(detail.value)

}