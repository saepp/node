const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sera", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Adhitya",
//   nohp: "0818877665",
//   email: "adhitya@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
