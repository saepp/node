function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Doddy Ferdiansyah",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Object orang telah dibuat");
  }
}

module.exports = { cetakNama, PI, mahasiswa, Orang };
