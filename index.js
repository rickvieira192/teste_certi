const express = require("express");
const numberPackage = require("numero-por-extenso");
const app = express();

app.get("/:number", function(request, response) {
  const hasHyphen = request.params.number.includes("-");

  const sanitizedNumber =
    request.params.number < 0
      ? request.params.number * -1
      : request.params.number;

  let fullNumber = numberPackage.porExtenso(sanitizedNumber);

  if (hasHyphen) {
    fullNumber = "menos " + fullNumber;
  }

  return response.json({ extenso: fullNumber });
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
