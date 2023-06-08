import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => console.log(`Database connected ${con.connection.host}`))
    .catch((err) => {
      console.error(`Database err ${err}`);
      process.exit(1);
    });
};

export default dbConnection;
