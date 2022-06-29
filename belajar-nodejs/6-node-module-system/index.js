// const nama = "Septian Adhitya";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // third party module / npm module / node_modules

// console.log("Hello WPU");

const coba = require("./coba");

console.log(
  coba.cetakNama("Septian"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
