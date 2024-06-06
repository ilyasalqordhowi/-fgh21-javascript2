
const names = [
    'Abigail', 'Alexandra', 'Alison',
     'Amanda', 'Angela', 'Bella',
     'Carol', 'Caroline', 'Carolyn', 
     'Deirdre', 'Diana', 'Elizabeth', 
     'Ella', 'Faith', 'Olivia', 'Penelope'
];

  
  const searchName = function (keyword, limit, callback) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    let searchResult = [];
  
    for (let i = 0; i < names.length; i++) {
      const personName = names[i];
      let result = "";
  
      for (let i = 0; i < personName.length; i++) {
        let converted = false;
        for (let j = 0; j < uppercase.length; j++) {
          if (converted === false) {
            if (personName[i] === uppercase[j]) {
              result = result + lowercase[j];
              converted = true;
            }
            if (j === 25) {
              if (personName[i] !== uppercase[j]) {
                result = result + personName[i];
                converted = true;
              }
            }
          }
        }
      }
  
      let isFound = false;
      for (let m = 0; m < result.length; m++) {
        let segmen = "";
        if (result[m + 1] !== undefined) {
          segmen = result[m] + result[m + 1];
        } else {
          segmen = result[i];
        }
        if (segmen === keyword) {
          isFound = true;
        }
      }
      if (isFound === true) {
        searchResult = [...searchResult, personName];
      }
    }
    callback(searchResult, limit);
  };
  
  function limitResult(arr, lim) {
    let result = [];
    for (let a = 0; a < lim; a++) {
      if (arr[a]) {
        result = [...result, arr[a]];
      }
    }
    console.log(result);
  }
  
  searchName("an", 3, limitResult);