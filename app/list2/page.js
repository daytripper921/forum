import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"
import ListItem from "./ListItem"

export const revalidate = 20;

export default async function list(){

  const db = (await connectDB).db('forum') // 위 두 줄 축약
  let result = await db.collection('post').find().toArray()

// console.log(result[0].title);
    return (

        <div className="list-bg">
            <ListItem result={result}/>
        {/* {
            result.map((item, idx)=> {
                return (
                        <div className="list-item" key={idx}>
                            <Link href={`/detail/${item._id}`}><h4>{item.title}</h4>
                            </Link>
                            <DetailLink></DetailLink>
                            <p>1월 1일</p>
                            <Link href={`/edit/${item._id}`}>✏️ </Link>
                        </div>
                )
            })
        } */}
        </div>
    )
}