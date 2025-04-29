function konversi() {
    let nilai_konversi = document.getElementById("konversi-input").value
    let result_output = (parseInt(nilai_konversi) * 9/5) + 32
    function hasil() {
        document.write(result_output);
    }
}