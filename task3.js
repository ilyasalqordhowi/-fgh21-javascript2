function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length > 5) {
        let container = [];
        for (let i = 0; i < dataArray.length; i++) {
            if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir){
                container.push(dataArray[i]);
               container.sort((a,b) => a-b);
            }
        }if (container.length == 0){
            return 'nilai tidak ada'
        }
        return container;
            }else{
                return  "Jumlah angka dalam dataArray harus lebih dari 5"
            }
        }else{
            return 'Nilai akhir harus lebih besar dari nilai awal'
        }
        }
    const result =seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
    console.log(result)
   