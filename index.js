let hitungLuas = document.getElementById("hitung-luas")
let sisiLuas = document.getElementById("sisi_luas")
let showLuas = document.getElementById("showluas")
let resetLuas = document.getElementById("reset-luas")


// Hitung Luas Persegi

hasilLuas = () => {
    nilaisisiLuas = parseInt(document.getElementById("sisi_luas").value);
    result = nilaisisiLuas * nilaisisiLuas
    
    document.getElementById("output_luas").innerHTML = result
    document.getElementById("input_luas1").innerHTML = nilaisisiLuas
    document.getElementById("input_luas2").innerHTML = nilaisisiLuas

}

hitungLuas.addEventListener("click", function() {
    showLuas.classList.remove("show-luas")
})

// reset luas

resetLuas.addEventListener("click", function() {
    showLuas.classList.add("show-luas")
    sisiLuas.value = ""
})


// 


let hitungKeliling = document.getElementById("hitung-keliling")
let sisiKeliling = document.getElementById("sisi_keliling")
let showKeliling = document.getElementById("showkeliling")
let resetKeliling = document.getElementById("reset-keliling")


// Hitung Keliling Persegi

hasilKeliling = () => {
    nilaisisiKeliling = parseInt(document.getElementById("sisi_keliling").value);
    result = 4 * nilaisisiKeliling
    
    document.getElementById("output_keliling").innerHTML = result
    document.getElementById("input_keliling1").innerHTML = nilaisisiKeliling
    

}

hitungKeliling.addEventListener("click", function() {
    showKeliling.classList.remove("show-keliling")
})

// reset Keliling

resetKeliling.addEventListener("click", function() {
    showKeliling.classList.add("show-keliling")
    sisiKeliling.value = ""
})
