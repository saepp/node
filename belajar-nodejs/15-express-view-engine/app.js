const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // res.sendFile("/index.html", { root: __dirname })
  const mahasiswa = [
    {
      nama: "Septian",
      email: "septian@gmail.com",
    },
    {
      nama: "Adhitya",
      email: "adhitya@gmail.com",
    },
    {
      nama: "Septian Adhitya",
      email: "septianadhitya@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Septian Adhitya",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) =>
  // res.sendFile("/about.html", { root: __dirname })
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  })
);

app.get("/contact", (req, res) =>
  // res.sendFile("/contact.html", { root: __dirname })
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  })
);

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID :  ${req.params.id} <br /> Category ID : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
