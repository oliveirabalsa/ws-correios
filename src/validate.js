module.exports = (data) => {
  const fields = ["nCdServico", "sCepOrigem", "sCepDestino", "nVlPeso",
    "nCdFormato", "nVlComprimento", "nVlAltura", "nVlLargura",
    "nVlDiametro", "sCdMaoPropria", "nVlValorDeclarado", "sCdAvisoRecebimento"];

  const errors = fields.filter((field) => {
    if (!data[field]) {
      return field;
    }
  });
  if (errors.length)
    return { error: "Voce esqueceu de prencher os campos", required: errors };

  return null;
};
