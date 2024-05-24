import { connectDB } from "@/util/database";
// import { MongoClient } from "mongodb";

export const revalidate = 60;

export default async function Home() {

  // const client = await connectDB
  // const db = client.db('forum')

  const db = (await connectDB).db('forum') // 위 두 줄 축약

  let result = await db.collection('post').find().toArray()
  console.log(result)

  // (13강) 캐싱 방법
  // await fetch('/URL', {cache : 'force-cache'})

  return (
    <div>hi</div>
  );
}
