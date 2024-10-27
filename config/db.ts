import mongoose from 'mongoose';
 
const dbCache = {
  conn: null as mongoose.Connection | null,
  promise: null as Promise<mongoose.Connection> | null,
};
 
async function connectToDatabase() {
  if (dbCache.conn) {
    return dbCache.conn;
  }
 
  if (!dbCache.promise) {
    dbCache.promise = mongoose.connect(process.env.DATABASE_URL!, {
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose.connection; 
    });
  }
 
  dbCache.conn = await dbCache.promise;
  return dbCache.conn;
}
 
export default connectToDatabase;