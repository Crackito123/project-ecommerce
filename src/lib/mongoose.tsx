import mongoose from "mongoose";



export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } 
  else {
    const uri = 'mongodb+srv://Crackito:Rorobg95@ecommerce.a5mhk72.mongodb.net/';
    return mongoose.connect(uri);
  }
}  