const convert = require("convert-excel-to-json");

const getColumnsNames = (file, feuille) => {
  const json = convert({
    sourceFile: file,
    header: {
      rows: 0,
    },
    range: "A1:L1",
  });
  return [...Object.values(json[feuille][0])];
};

module.exports={getColumnsNames}
