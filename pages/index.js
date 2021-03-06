import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'
import Stockinfo from '../lib/Stockinfo'

export async function getStaticProps() {

  const client = createClient({
    //space: '1k9sc9jp9bgo',
    //accessToken: 'g0D-Nlx4bbMMo7YjrG5pfnTYdELbi-f0TXq9OWI7mWk',
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "receipe" })
  
  return {
    props: {
      recipes: res.items,
    }
  }
}


export default function Home({recipes}) {
  console.log(recipes)
  
  
  return (

    <div className="recipe-list">
      {recipes.map(recipe => (
        <Stockinfo key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
    
    
 
  )
}
