//contoh searchName
const nama = [
    'Abigail', 'Alexandra', 'Alison',
     'Amanda', 'Angela', 'Bella',
     'Carol', 'Caroline', 'Carolyn', 
     'Deirdre', 'Diana', 'Elizabeth', 
     'Ella', 'Faith', 'Olivia', 'Penelope'
    ];
const menyaringNama = nama.filter(name => nama.includes('an'));

console.log(menyaringNama); 

const namaSudahTerfilter = [ 
'Alexandra', 
'Amanda', 
'Diana' 

];
console.log(namaSudahTerfilter.indexOf("Alexandra"));
console.log(namaSudahTerfilter.indexOf("Amanda")); 
console.log(namaSudahTerfilter.indexOf("Diana"));
