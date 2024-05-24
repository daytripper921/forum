import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response){
    
    if (request.method == "POST") {
        console.log(request.body)
        // 1. 예외처리
        if(request.body.title == ""){
            return response.status(401).json('제목을 입력해주세요')
        } 

        // request 중 _id는 필요 없기 때문에 새로 데이터를 만듦
        let newData = {
            title : request.body.title,
            content : request.body.content
        }

        // 2. db 에러 대비 try-catch
        try {
            const db = (await connectDB).db('forum')
            // db 수정
            let result = await db.collection('post').updateOne(
                // {_id : new ObjectId(request.body._id)}, //수정할 도큐먼트
                // {$set : {title : request.body.title, content : request.body.content}} // 수정할내용
                {_id : new ObjectId(request.body._id)}, 
                {$set : newData}
            )
            return response.status(200).redirect(302, '/list')
        
        } catch(error) {
            return response.status(500).json('DB 오류. 관리자에게 문의해주세요.')
        }

    }
}