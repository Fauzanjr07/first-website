
let biodata = document.getElementById ('biodata');


const nama = "Muh. Fauzan Azima";
let umur = 19;
const kuliah = {
	kampus: "Universitas Hasanuddin",
	jurusan: "Teknik Elektro",
	programStudi: "Informatika"
}

function generateBiodata(){
	text1 = `Nama saya ${nama}, umur ${umur} saya merupakan mahasiswa ${kuliah.kampus} di jurusan ${kuliah.jurusan} dengan program studi ${kuliah.programStudi}`
	text2 = `Saya adalah mahasiswa yang sangat kupu-kupu (kuliah pulang kuliah pulang) dan nolep`
	return biodata.innerHTML = `${text1} ${text2}`
}

generateBiodata()
console.log("Test")

