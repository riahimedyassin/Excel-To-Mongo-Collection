const convert = require("convert-excel-to-json");

const ExcelToJSON = (file) => {
  if (!file || file == "undefined") {
    return null;
  } else {
    const filePath = file.path;
    const data = convert({
      sourceFile: filePath,
      header: {
        rows: 1,
      },
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    });
    return data;
  }
};

module.exports = { ExcelToJSON };
