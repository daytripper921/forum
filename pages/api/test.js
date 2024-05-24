import { connectDB } from "@/util/database"

export default async function handler(request, response){

    const today = new Date();
    
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()
  

    if(request.method == "GET") {
        console.log('get')
        console.log(request.query)
        console.log(request.body.name)

        // return response.status(200).json(result)
        return response.status(200).json(today)


    } else if (request.method == "POST") {
        console.log('post')
        return response.status(200).json('처리완료')
    }
}