export default function Getdata(props) {
  
    const data = props
    const res = data.props
    console.log(res)
    const stock = res.map( d =>
      <tr key = {d}>
          <td>{d.Date}</td>
        <td>{d.Symbol}</td>
        <td>{d.Exchange}</td>
        <td>{d.PredictPercent} </td>
        <td>{d.ActualPercent}</td>
    
  
      </tr>
    )
      return (
        <div>
          <table>
            <thead>
                <th>Date</th>
              <th>Symbol</th>
              <th>Exchange</th>
              <th>PredictPercent</th>
              <th>ActuralPredict</th>
              
            </thead>
            <tbody>
              {stock}
            </tbody>
          </table>
        </div>
      )
    }