import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST') {
        try {

            let hash = await bcrypt.hash(request.body.password, 10)
            console.log(request.body)
            console.log(hash)
            console.log(request.body)

            request.body.password = hash

            // 중복 체크
            // 빈칸/긴 문자 거르기



            const db = (await connectDB).db('forum')
            let result = await db.collection('user_cred').insertOne(request.body)
        
            return response.status(200).json('가입 성공!')
            // return response.status(200).redirect(302, '/list')

        } catch(error) {
            return response.status(500).json('DB 오류. 관리자에게 문의해주세요.')
        }
    }
}