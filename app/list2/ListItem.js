'use client'

import Link from "next/link"
import { useEffect } from "react"
import DetailLink from "./DetailLink"

export default function ListItem({result}){

    // 클라이언트에서 db 직접 가져오는건 보안 위험있어서..
    // 근데 이 방법은 검색엔진에 안 잡힘
    // useEffect(()=>{
    //     // 서버에 부탁해서 db 게시물 가져옴
    //     // result = db 게시물
    // },[])

    return(
        <div>
              
            {
                result.map((item, idx)=> {
                    return (
                            <div className="list-item" key={idx}>
                                <Link href={`/detail/${item._id}`}><h4>{item.title}</h4>
                                </Link>
                                <DetailLink></DetailLink>
                                <Link href={`/edit/${item._id}`}>✏️ </Link>
                                <p>1월 1일</p>
                                <span onClick={(e)=>{
                                    // 방법2.
                                    fetch('/api/abc/park')
                                    // fetch('/api/test?name=kim&age=20')
                                    // 방법1.
                                    // // 터미널이 아니라 진짜 콘솔창에 뜸 
                                    // fetch( '/api/post/delete', {
                                    //     method : 'DELETE',
                                    //     body : item._id
                                    // }).then((r)=>{
                                    //     if(r.status == 200) {
                                    //         return r.json()
                                    //     } else {
                                    //         //서버가 에러코드전송시 실행할코드
                                    //     }
                                    // }).then((result)=>{ 
                                    //     //성공시 실행할코드
                                    //     e.target.parentElement.style.opacity = 0;
                                    //     setTimeout(()=>{
                                    //         e.target.parentElement.style.display = 'none';
                                    //     },1000)
                                    // }).catch((error)=>{
                                    //     //인터넷문제 등으로 실패시 실행할코드
                                    //     console.log(error)
                                    // })
                                }}>삭제</span>
                            </div>
                    )
                })
            }
        </div>
    )
}