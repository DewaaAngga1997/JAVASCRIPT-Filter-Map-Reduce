const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >=3 (angka yang lebih besar dari samadengan 3 )

// menggunakan for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

//menggunakan filter
const newAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka);
//mengunakan filter dan penulisan nya menggunakan arrow function
const newAngka = angka.filter((a) => a >= 3);
console.log(newAngka);

//menggunakan map
//memetakan semua element pada array dengan sebuah fungsi yang baru
//bisa di gunakan untuk mengubah warna dan menambah karakter dll
//tidak mengubah aray angka nya hanya menambahkan
//contoh kalikan semua angka dengan 2
const newAngka = angka.map((a) => a * 2);
console.log(newAngka);
//coba tampilkan variabel angka masih tetap dengan yang sebelumnya
console.log(angka);

//reduce
//ini untuk melakukan sesuatu terhadap seluruh element pada array nya
//contoh menjumlahkan seluruh element pada array
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //0 adalah nilai awal jika tidak di isi ngak apa
console.log(newAngka);

//method chaining
//mencari angka > 5
//lalu kalikan 3
//lalu di jumlahkan
const hasil = angka
  .filter((a) => a > 5) //8,9,9
  .map((a) => a * 3) // 24,27,27 map nya di ulang" ngak apa kalau memang perlu
  .reduce((acc, cur) => acc + cur, 0); //0 adalah nilai awal jika tidak di isi ngak apa

console.log(hasil);
