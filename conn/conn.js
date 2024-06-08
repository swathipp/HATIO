const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");
const conn = async (req,res) => {
   try {
    await mongoose
    .connect(
        "mongodb+srv://swathivinod70:XONQZD6XNVXer9Rf@cluster0.9vg11f4.mongodb.net/"
    )
    .then(() => {
        console.log("connected");
    });

   } catch (error) {
   }
 };
conn();