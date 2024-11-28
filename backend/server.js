/*const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());


// Chemin vers le dossier frontend
const frontendPath = path.join(__dirname, "../frontend");

// Servir les fichiers statiques du frontend
app.use(express.static(frontendPath));

// Gérer les requêtes inconnues et renvoyer l'index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static("public"));

// Route pour la soumission du formulaire
app.post("/submit-form", async (req, res) => {
  const { name, email, message } = req.body;

  // Valider les champs
  if (!name || !email || !message) {
    return res.status(400).send("Tous les champs sont requis.");
  }

  try {
    // Configurer le transporteur d'e-mail
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "louane.augsburger@gmail.com",
        pass: "Louane1011",   
      },
    });

    // Définir les options de l'email
    const mailOptions = {
      from: email,
      to: "louane.augsburger@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Message envoyé avec succès !");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de l'envoi de l'email.");
  }
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});*/