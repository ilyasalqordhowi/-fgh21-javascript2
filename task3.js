function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        return 'Nilai akhir harus lebih besar dari nilai awal';
    }
    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }

    let container = [];

    for (let i = 0; i < dataArray.length; i++) {
        let dataSaatIni = dataArray[i]; 
        if (dataSaatIni > nilaiAwal && dataSaatIni < nilaiAkhir) {
            if (container.length === 0) {
                container[0] = dataSaatIni; 
            } else {
                let dataYangDitambahkan = false;
               
                for (let j = 0; j < container.length; j++) {
                    if (dataSaatIni< container[j]) {
                       
                        for (let k = container.length; k > j; k--) {
                            container[k] = container[k - 1];
                        }
                        container[j] = dataSaatIni;  
                        dataYangDitambahkan= true;
                        break;
                    }
                }
                if (!dataYangDitambahkan) {
                    container[container.length] = dataSaatIni;
                }
            }
        }
    }

   
    if (container.length === 0) {
        return 'nilai tidak ada';
    }

    return container;
}

const result = seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
console.log(result);  
