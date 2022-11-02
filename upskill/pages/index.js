import Head from 'next/head'
import Image from 'next/image'
import { SampleInput } from '../components/SampleInput'
// import styles from '../styles/Home.module.css'
import { TextField } from '@material-ui/core'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <SampleInput label="Name" variant="outlined" type="text" color="secondary"/>
       <TextField id="standard-basic" label="Standard" />
</main>

     
    </div>
  )
}