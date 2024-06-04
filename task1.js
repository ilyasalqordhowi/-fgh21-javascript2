//Array Methods

//1.concat()
// Mengembalikan array baru yang terdiri dari array ini yang digabungkan dengan array dan/atau nilai lain.
// 2.every()
// Mengembalikan true jika setiap elemen dalam array ini memenuhi fungsi pengujian yang disediakan.
// 3.filter()
// Membuat array baru dengan semua elemen array ini di mana fungsi pemfilteran yang disediakan mengembalikan true.
// 4.forEach()
// Memanggil fungsi untuk setiap elemen dalam array.
// 5.indexOf()
// Mengembalikan indeks elemen pertama (terkecil) dalam array yang sama dengan nilai yang ditentukan, atau -1 jika tidak ditemukan.
// 6.join()
// Menggabungkan semua elemen array menjadi string.
// 7.lastIndexOf()
// Mengembalikan indeks elemen (terbesar) terakhir dalam array yang sama dengan nilai yang ditentukan, atau -1 jika tidak ada yang ditemukan.
// 8.map()
// Membuat array baru dengan hasil memanggil fungsi yang disediakan pada setiap elemen dalam array ini.
// 9.pop()
// Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
// 10.push()
// Menambahkan satu atau beberapa elemen ke akhir array dan mengembalikan panjang array yang baru.

//contoh
//1.concat()
const hobbies = [
    'gaming',
    'swimming',
    'photography'
];
const hobbies2 = [
    'climb',
    'explore'
];

const semuaHobbies = hobbies.concat(hobbies2);

console.log(semuaHobbies);

//2.every()
const numbers = [5,6,7,8,9,10];

const proses = numbers.every(num => num > 4);

console.log(proses);

//3.filter()
const names = ['ilyas', 'anggie','iqbal','setiawan', 'ivan', 'iwan','ilham','aan android'];

const menyaringNama = names.filter(name => name.startsWith('i'));

console.log(menyaringNama); 

// 4.forEach()
const Buah= ['Stroberi', 'Jambu', 'Apel', 'Mangga'];

Buah.forEach(buah => {
  console.log(`Buah: ${buah}`);
});

// 5.indexOf()
const hobby = ["gaming","swimming","photography"]

console.log(hobbies.indexOf("gaming"));
console.log(hobbies.indexOf("swimming")); 
console.log(hobbies.indexOf("photography"));

//6.join()
const nama= ["ilyas", "mamat", "isa"];

console.log(nama.join(", ")); 

//7.lastIndex()
let number = [1, 2, 3, 2, 1];
let index = number.lastIndexOf(2);
console.log(index);


//8.map()
let arr = [1, 2, 3, 2, 1];
let result = arr.map((value, index) => {
  if (value === 2) {
    return index;
  }
});
let lastIndex = result[result.length - 1];
console.log(lastIndex); 

//9.pop()
let skills = ['JavaScript','HTML','CSS'];
let lastSkill = skills.pop();
console.log(lastSkill); 
console.log(skills); 

//10.push()
let makanan = [
];
makanan.push('Nasi');
makanan.push('Rendang');
makanan.push('Burger');

console.log(makanan);