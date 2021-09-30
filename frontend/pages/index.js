import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {fetchAPI} from '../utils/api'

export default function Home() {
  return (
    <div>
     <h1>Hello</h1>
    </div>
  )
}

// export async function getStaticProps() {
//   const [homepage] = await Promise.all([
//     fetchAPI("homepage")
//   ]);

//   return {
//     props: {
//       homepage: homepage,
//       revalidate: 1,
//     }
//   }
// }