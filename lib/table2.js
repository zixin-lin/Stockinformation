export default function Getdata(props) {
  // console to check data props is available or not
  
  //destructuring data from props
  const data = props
  const res = data.props
  //console.log('testcode')
  
  //Iterating array using map function
 console.log(res)
  const stock = res.map( d =>
    <tr key = {d}>
       <td>{d.Symbol}</td>
        <td>{d.Exchange}</td>
        <td>{d.Date}</td>
        <td>{d.prediction}</td>
    
    </tr>
    
  )

  return (
    <div>
      <table>
        <thead>
          <th>SYMBOL</th>
          <th>EXCHANGE</th>
          <th> Date</th>
          <th>Prediction</th>
          
        </thead>
        <tbody>
          {stock}
        </tbody>
      </table>
    </div>
  )
}