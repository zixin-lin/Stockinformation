export default function Getdata(props) {
  
  const data = props
  const res = data.props
  console.log(res)
  const stock = res.map( d =>
    <tr key = {d}>
      <td>{d.Symbol}</td>
      <td>{d.Exchange}</td>
      <td>{d.StartDate} </td>
      <td>{d.EndDate}</td>
      <td>{d.Performance}</td>

    </tr>
  )
    return (
      <div>
        <table>
          <thead>
            <th>Symbol</th>
            <th>Exchange</th>
            <th>StartDate </th>
            <th>EndDate</th>
            <th>Performance</th>
          </thead>
          <tbody>
            {stock}
          </tbody>
        </table>
      </div>
    )
  }