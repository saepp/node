const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third-party middleware
app.use(expressLayouts);

// Built-In Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
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

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layout",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
