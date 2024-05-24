import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){

    const db = (await connectDB).db('forum') // 위 두 줄 축약
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    console.log(result)

    // db 수정
    // await db.collection('post').updateOne({_id : new ObjectId(props.params.id)}, {$set : {}})

    return (
        <div className="p-20">
            <h4>글수정</h4>
            <form action="/api/post/edit" method="POST">
                {/* 그냥 value면 수정 안 되고 defauldValue면 수정 가능함 */}
                <input type="text" name="title" defaultValue={result.title}/>
                <input type="text" name="content" defaultValue={result.content}/>
                <input style={{ display : 'none' }} type="hidden" name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}