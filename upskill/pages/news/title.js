export default function ArticleListBytitle({articles,title}){
    return(
        <>
        <h1>Showing news for title <i>{title}</i></h1>
        {
            articles.map(article=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
        
        </>
    )
}

export async function getServerSideProps(context){
    const {params,req,res,query}=context
    const response=await fetch(`http://localhost:4000/news?title=${params.title}`);
    const data=await response.json();
    return {
        props:{
            articles:data,
            title:params.title,
        }
    }
   
}