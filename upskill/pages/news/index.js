import Link from "next/link";
export default function NewsArticleList({ articles }) {
    return (
        <>
            <h1>List of News Articles</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <Link
                                href={{
                                    pathname: '/news/[title]',
                                    query: { title: article.title },
                                }}
                            >
                                {article.title}
                            </Link>
                            <h2>{article.id} {article.title} | {article.body}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

//for using server side pages ==> this fun:
// 1)this fun runs only on server side and never runs on client
//2) only in pages not components
// 3) this fun will run at request time
export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            articles: data
        }
    }
}