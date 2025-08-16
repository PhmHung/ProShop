import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conne = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongooseDB Connected: ${conne.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
