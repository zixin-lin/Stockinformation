import Getdata from "./table"
import { sql_query } from "../lib/db";
//import Table from "./table";



export default function Performance(props) {
    //console.log(props)
 

    const {posts} =props
    //console.log(posts)
    if (!posts) return <p>Something went wrong....</p>
    return <div className="content"> 
                <h1>Welcome to the Today Stock Recommendation page.....</h1>
                
                {/*<Table data = {posts} />*/}
                <Getdata props = {posts} />
                    
            </div>
  }
  
  export async function getStaticProps(context) {
    try {
        const result = await sql_query(`
          SELECT * FROM StockPerformance
          LIMIT 10 
      `);
      //console.log(result)
      let posts = JSON.parse(JSON.stringify(result))
        return {
            props: {posts}// will be passed to our blog page component as prop
        }
      } catch (e) {
        return {props: {posts:false}} 
      }
  }
 
