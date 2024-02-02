function sortCharacters(str) {
  // Mengubah semua karakter menjadi huruf kecil dan menghilangkan spasi
  const lowerCaseStr = str.toLowerCase().split(' ').join('');

  // Membagi huruf menjadi vokal dan konsonan
  const vowels = lowerCaseStr.match(/[aeiou]/g) || [];
  const consonants = lowerCaseStr.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];

  // Mengurutkan kedua array
  vowels.sort();
  consonants.sort();

  // Gabungkan string vokal dan konsonan
  return {
    vowelCharacters: vowels.join(''),
    consonantCharacters: consonants.join(''),
  };
}

// Contoh input dan output
const str = "Sample Case";
const result = sortCharacters(str);
console.log("Input:", str);
console.log("Output:");
console.log("Vowel Characters:", result.vowelCharacters);
console.log("Consonant Characters:", result.consonantCharacters);


