const convert = require("convert-excel-to-json");
const fs = require("fs-extra");
const dist_path = "C:/Users/riahi/OneDrive/Desktop/Excel To JSON/dist/text.js";

const getModel = (file, feuille, fieldName) => {
  if (!file) return null;
  const json = convert({
    sourceFile: file,
    header: {
      rows: 0,
    },
    range: "A1:L1",
  });
  const identifyType = convert({
    sourceFile: file,
    header: {
      rows: 1,
    },
    range: "A2:L2",
  });
  let res = [];
  let typos = [];
  json[feuille].forEach((column) => {
    res.push(Object.values(column));
  });
  const regex = /[0-9]+/;
  const tabOfTypes = [...Object.values(identifyType[feuille][0])];
  tabOfTypes.forEach((column) => {
    regex.test(column)
      ? typos.push("number")
      : typos.push("string");
  });
  const template = "name : {type:checktype}";
  fs.appendFile(
    dist_path,
    "const mongoose=require('mongoose') \nconst fieldSchema = mongoose.Schema({",
    { flag: "a" }
  );

  for (let i = 0; i < res[0].length; i++) {
    const newTemplate = String(template);

    fs.appendFile(
      dist_path,
      `${newTemplate
        .replace("name", res[0][i])
        .replace("checktype", typos[i])}, \n`,
      {
        flag: "a",
      }
    ).then(() => {
      if (i === res[0].length - 1)
        fs.appendFile(
          dist_path,
          "}) \nmodule.exports=mongoose.model(" +
            fieldName +
            "," +
            fieldName +
            "Schema)",
          { flag: "a" }
        );
    });
  }

  return res[0];
};

module.exports = { getModel };
