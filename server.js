const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//PERSISTENCIA
mongoose.connect(
  "mongodb+srv://Rafael3:rafael33@cluster0-hjxoz.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//Configurar app para usar body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo porta
const PORT = process.env.port || 3000;

//ROTAS
const productRoute = require("./src/routes/product-routes");
const clientRoute = require("./src/routes/client-route");
const vendaRoute = require("./src/routes/venda-route");
const indexRoute = require("./src/routes/index-routes");
const userRoute = require("./src/routes/user-route");

//Vincular a aplicacao(app) com o motor de rotas
app.use("/api", indexRoute);
app.use("/api/products", productRoute);
app.use("/api/client", clientRoute);
app.use("/api/venda", vendaRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("server on");
});
