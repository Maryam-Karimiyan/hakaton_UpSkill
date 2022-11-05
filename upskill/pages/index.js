import Head from 'next/head'
import { SampleInput } from '../components/SampleInput'
import { useEffect, useState } from 'react'
import ImageComponent from '../components/ImageComponent'
import paint from '../public/paint.jpg'
// import styles from '../styles/Home.module.css'
export default function Home({articles}) {

  return (
    <div>
      <ImageComponent src={paint} width='500' height='500'/>
      <h2>Articles</h2>
      <main>
       

        {articles.map((aricle,index)=>{
          return(
            <h3 key={index}>{aricle.title}</h3>
          )
        })}
        {/* <SampleInput label="Name" variant="outlined" type="text" color="secondary" /> */}
        {/* <Home/> */}
      </main>


    </div>
  )
}

export const getStaticProps=async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles=await res.json();
  return {
    props:{ 
      articles:articles
    },
  }
}
