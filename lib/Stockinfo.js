import Link from 'next/link'
//import Image from 'next/image'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
export default function Stockinfo({ recipe }) {

  const { method, thumbnail} = recipe.fields
  
  
  //res1 = JSON.parse(res)
  return (
    <>
     <div className={styles.content}>
			<div className = {styles.wenzi}><p>
            {documentToReactComponents(method)}
        </p>article</div>
			<div className={styles.tupian}> 
            <img 
          src={'https:' + thumbnail.fields.file.url}
          alt="Picture of the author"
          width={400}
          height={300}
        /></div>
		</div>

     
      
      
</>
  )
}














