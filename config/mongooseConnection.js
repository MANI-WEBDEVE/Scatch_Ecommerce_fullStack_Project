import mongoose from "mongoose";

const dataBaseConnection = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.DB_URL}${process.env.DB_URL_NAME}`
    );
    console.log(
      "Database Connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("Database connection error");
  }
};


export default dataBaseConnection
//* mongoose.connect('mongodb://127.0.0.1:27017/scatch')
