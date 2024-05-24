import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    
    let session = await getServerSession(request, response, authOptions)
    console.log('api에서 세션 출력')
    console.log(session)

    if (request.method == "DELETE") {
        console.log(request.body)
        console.log(JSON.parse(request.body))
        let data = JSON.parse(request.body);

        if (session && data.item.author == session.user.email) {
            console.log('request.body.author == session.user.email')
            // db 에러 대비 try-catch
            try {
                const db = (await connectDB).db('forum')
                // db 수정
                let result = await db.collection('post').deleteOne({_id : new ObjectId(data.item._id)})
                console.log(result)
                return response.status(200).json('삭제완료')
            
            } catch(error) {
                return response.status(500).json('DB 오류. 관리자에게 문의해주세요.')
            }
        } else {
            return response.status(500).json('작성자만 작성 글 삭제 가능합니다.')
        }
    }
}