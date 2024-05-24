import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    
    let session = await getServerSession(request, response, authOptions)
    console.log('api에서 세션 출력')
    console.log(session)

    if (session) {
        request.body.author = session.user.email
    }

    if (request.method == "POST") {
        // console.log(request.body)
        // 1. 예외처리
        if(request.body.title == ""){
            return response.status(401).json('제목을 입력해주세요')
        } 

        // 2. db 에러 대비 try-catch
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(request.body)
            // return response.status(200).json('저장 완료')
            return response.status(200).redirect(302, '/list')

        } catch(error) {
            return response.status(500).json('DB 오류. 관리자에게 문의해주세요.')
        }

        // return response.status(200).json('저장 완료')
        // return response.status(200).redirect(302, '/list')

        // if(request.body.title == ""){
        //     return response.status(401).json('제목을 입력해주세요')
        // } else {
        //     let result = await db.collection('post').insertOne(request.body)
        //     return response.status(200).json('저장 완료')
        // }
    }
}