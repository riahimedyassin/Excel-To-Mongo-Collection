const fs = require("fs-extra");
const { uploadToDB } = require("../utils/UploadToDB");

const { ExcelToJSON } = require("../utils/ExcelToJSON");
const { getModel } = require("../utils/GetModel");

const UploadController = async (req, res, next) => {
  try {
    const data = ExcelToJSON(req.file);
    await getModel(req.file.path,"Feuille 1","test")
    if (data) {
      await uploadToDB(data, "Feuille 1").then(() => {
        fs.remove(req.file.path);
      });
      return res.status(200).json({ data });
    }
    return res
      .status(400)
      .json({ message: "Bad Request : No file has been provided" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      status: 500,
    });
  }
};

module.exports = { UploadController };
