import expensedata from '../data.json';
export default function Barchart() {
    let total = expensedata.reduce((accu,esdata) => {
      return accu + esdata.amount
    },0)
    let expense = expensedata.map((value) => {
      return (
        <div className="day mon">
          <span className="value">{value.amount}</span>
          <span style={{height:value.amount,background:(value.amount >50)? "hwb(186 46% 26%)" : 'hsl(10, 79%, 65%)'}} className="bar"></span>
          <p className="weekday">{value.day}</p>
        </div>
        
      )
    })
    return (
           expense
    )}