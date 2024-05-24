export default function Write(){
    
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="content" placeholder="content"/>
                <button type="submit">button</button>
            </form>
        </div>
    )
}