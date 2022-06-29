// Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/text.txt", "Hello World secara synchronous");
// } catch (err) {
//   console.log(err);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile("data/text.txt", "Hello World secara Asynchronous", (err) => {
//   console.log(err);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync("data/text.txt", "utf-8");
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile("data/text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan nomor hp anda : ", (nomor) => {
    const contact = { nama, nomor };
    const file = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data!");
    rl.close();
  });
});
