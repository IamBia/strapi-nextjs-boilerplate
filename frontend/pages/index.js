// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {fetchAPI} from '../utils/api'
import axios from "axios"

export default function Home({ home }) {
  console.log(home);
  return (
    <div>
     <h1>{home.Hero.title}</h1>
     <p>Description: {home.Hero.description}</p>
    </div>
  )
}

export async function getStaticProps() {
  const homeRes = await axios.get("http://localhost:1337/home");
  
  // const home = await Promise.all([
  //   fetchAPI("/home")
  // ]);

  return {
    props: {
      home: homeRes.data,
    }
  }
}
