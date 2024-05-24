'use client'

// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

export default function DetailLink(){
    
    let router = useRouter()

    return (
        <button onClick={()=>{ router.push('/link') }}>페이지 이동 버튼</button>
    )
}