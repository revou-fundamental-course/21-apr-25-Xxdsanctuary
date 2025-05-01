//    fungsi konversi utk tombol konversi
function konversi() {

//    definisi variabel konversi()
    const detail = document.querySelector("textarea[name='calculate-detail']")
    const hasil = document.querySelector("textarea[name='result-output']")

//    membuat HTML tidak refresh, kalau tidak kalkulasi di readonly textarea hilang
    document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})

//    perhitungan konversi
    let nilai_konversi = document.getElementById("konversi-input").value
    let nilai_hasil = (parseFloat(nilai_konversi) * 9/5) + 32

    if (isNaN(nilai_konversi)) {
        detail.value = "Masukkan Angka yang Benar..."
        hasil.value = ""
        return
    }

//    output hasil konversi dengan metode queryselector
    hasil.value = nilai_hasil.toFixed(2) + "°F"
    console.log(hasil.value)

    detail.value = "(" + nilai_konversi + "°C × 9/5) + 32 = " + nilai_hasil.toFixed(2) + "°F"
    console.log(detail.value)

}

//    fungsi reset utk tombol reset
function reset_all() {

//    definisi variabel reset_all()
    const detail = document.querySelector("textarea[name='calculate-detail']")
    const hasil = document.querySelector("textarea[name='result-output']")
    const awal = document.querySelector("textarea[name='konversi-input']")

//    membuat HTML tidak refresh, kalau tidak kalkulasi di readonly textarea hilang
    document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})

//    output reset
    awal.value = ""
    detail.value = ""
    hasil.value = ""
    console.log("clearing all")

}

//    fungsi konversi_reverse untuk tombol reverse
function konversi_reverse() {

//    definisi variabel konversi()
    const detail_reverse = document.querySelector("textarea[name='calculate-detail']")
    const hasil = document.querySelector("textarea[name='result-output']")

//    membuat HTML tidak refresh, kalau tidak kalkulasi di readonly textarea hilang
    document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})

//    perhitungan konversi
    let nilai_konversi = document.getElementById("konversi-input").value
    let nilai_hasil = (parseFloat(nilai_konversi) * 9/5) + 32

    if (isNaN(nilai_konversi)) {
        detail_reverse.value = "Masukkan Angka yang Benar..."
        hasil.value = ""
        return
    }

//    output hasil konversi reverse dengan metode queryselector
    hasil.value = nilai_hasil.toFixed(2) + "°F"
    console.log(hasil.value)

    detail_reverse.value = "(" + nilai_hasil.toFixed(2) + "°F - 32) × 5/9 = " + nilai_konversi + "°C"
    console.log(detail_reverse.value)

}