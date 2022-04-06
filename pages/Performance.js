import { sql_query } from "../lib/db";
//import Table from "./table";
import Getdata from "../lib/table";


export default function Blog(props) {
    //console.log(props)
 

    const {posts} =props
    //console.log(posts)
    if (!posts) return <p>Something went wrong....</p>
    return <div className="content"> 
                <h1>Welcome to the Today Stock Recommendation page</h1>
                
                {/*<Table data = {posts} />*/}
                <Getdata props = {posts} />
                    
            </div>
  }
  
  export async function getStaticProps(context) {
    try {
        const result = await sql_query(`
          SELECT Date,Symbol,Exchange,prediction FROM DailyOutputs
          where Date = (select max(Date) from DailyOutputs)
        
      `);
      console.log(result)
      let posts = JSON.parse(JSON.stringify(result))
        return {
            props: {posts}// will be passed to our blog page component as prop
        }
      } catch (e) {
        return {props: {posts:false}} 
      }
  }
 
