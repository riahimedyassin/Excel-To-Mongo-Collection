const convert = require("convert-excel-to-json");
const {getColumnsNames} = require("./GetAllKeys")

const ensureKeys = (objectsArray, keysArray)=> {
  const result = [];
  for (const obj of objectsArray) {
    const newObj = { ...obj }; 
    for (const key of keysArray) {
      if (!(key in newObj)) {
        newObj[key] = "0"; 
      }
    }
    result.push(newObj);
  }
  return result;
}



const ExcelToJSON = (file,feuille) => {
  if (!file || file == "undefined") {
    return null;
  } else {
    const filePath = file.path;
    const keys = getColumnsNames(filePath,feuille)
    let data = convert({
      sourceFile: filePath,
      header: {
        rows: 1,
      },
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    })[feuille];
    data = ensureKeys(data,keys)
    return data;
  }
};

module.exports = { ExcelToJSON };
