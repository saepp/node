const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "sera";
const ObjectId = require("mongodb").ObjectId;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log("Koneksi Gagal!");
  }

  // pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke collection sera
  // db.collection("sera").insertOne(
  //   {
  //     nama: "Sera",
  //     email: "sera@gmail.com",
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("gagal menambahkan data!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Menambahkan lebih dari 1 dara
  // db.collection("sera").insertMany(
  //   [
  //     {
  //       nama: "Septian",
  //       email: "septian@gmail.com",
  //     },
  //     {
  //       nama: "Adhitya",
  //       email: "adhitya@gmail.com",
  //     },
  //   ],
  //   (err, result) => {
  //     if (err) {
  //       return console.log("data gagal ditambahkan!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Menampilkan semua data yang ada di collection sera
  // console.log(
  //   db
  //     .collection("sera")
  //     .find()
  //     .toArray((err, result) => {
  //       console.log(result);
  //     })
  // );

  // Menampilkan data berdasarkan kriteria yang ada di collection sera
  // console.log(
  //   db
  //     .collection("sera")
  //     .find({ _id: "62c5440240220ba0f75beaff" })
  //     .toArray((err, result) => {
  //       console.log(result);
  //     })
  // );

  // Mengubah data berdasarkan id
  // const updatePromise = db.collection("sera").updateOne(
  //   { _id: ObjectId("62c5440240220ba0f75beafe") },
  //   {
  //     $set: {
  //       nama: "Septian",
  //     },
  //   }
  // );

  // updatePromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Mengubah data lebih dari 1, berdasarkan kriteria
  // db.collection("sera").updateMany(
  //   {
  //     nama: "Septian",
  //   },
  //   {
  //     $set: {
  //       nama: "Septian Ajah",
  //     },
  //   }
  // );

  // Menghapus 1 data
  // db.collection("sera")
  //   .deleteOne({
  //     _id: ObjectId("62c5432c57b527a047730da9"),
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Menghapus lebih dari 1 data
  db.collection("sera")
    .deleteMany({
      nama: "Septian Ajah",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
