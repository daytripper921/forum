import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://dkssudzz921:dldlsfk92@cluster0.qcultnx.mongodb.net/forum?retryWrites=true&w=majority&appName=Cluster0'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo_) { 
    global._mongo_ = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo_
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// const client = await MongoClient.connect('mongodb+srv://dkssudzz921:<Dldlsfk921!>@cluster0.qcultnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {useNewUrlParser : true})

// export {client}