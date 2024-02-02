function calculateMinimumBuses(n, familySizes) {
  // Validasi input: jumlah anggota keluarga di setiap baris harus sama dengan jumlah keluarga
  if (familySizes.length !== n) {
    return "Input harus sama dengan jumlah keluarga";
  }

  // Hitung jumlah bus minimum yang dibutuhkan
  let buses = 0;
  for (const familySize of familySizes) {
    buses += Math.ceil((familySize + 3) / 4); // Tambah 3 untuk sisa pembagian dan gunakan ceiling division
  }

  return buses;
}

// Contoh penggunaan
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan jumlah keluarga: ", (numFamilies) => {
  rl.question("Masukkan jumlah anggota keluarga setiap keluarga (pisahkan dengan spasi): ", (familySizes) => {
    const minimumBuses = calculateMinimumBuses(numFamilies, familySizes);
    console.log(`Jumlah bus minimum yang dibutuhkan: ${minimumBuses}`);
  });
});
