import mongoose from 'mongoose';
import app from './app';
import { port, database_url } from './app/config';

async function main() {
  try {
    await mongoose.connect(database_url as string);
    console.log('Database connected,', database_url);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
