import * as React from 'react'

interface BtnProps  {
  onClick?: () => void
}

const Button: React.FC<BtnProps> = ({children,onClick}) => {
  return      ( 
  <button type='button' className='btn' onClick={onClick}>
  {children}
</button>
)
}

function Counter() {
  const [counter, setCounter] = React.useState<number>(0)

  const [counterHistory, setCounterHistory] = React.useState<Array<number>>([])


  const handler = ({type, step}: {type: 'increment' | 'decrement', step: number}) => {
    let newValue= 0;

    if (type === 'increment') {
      newValue = counter + step
    }

    if (type === 'decrement') {
      newValue = counter - step < 0 ? 0 : counter -step
    }

    setCounter(newValue)
    setCounterHistory([...counterHistory,newValue])
  }

  const maxValue = counterHistory.reduce((accum, current )=> {
    if (current > accum) {
      accum = current
    }
    return accum
  }, 0)

 console.log(Math.max(...counterHistory));
 

  return (
    <div>
      <p>{`The current count is ${counter}`}</p>

      <Button onClick={()=> handler({type: 'increment', step: 1})}>
        Increment
      </Button>
      <Button onClick={()=> handler({type: 'decrement' ,step: 1})}>
        Decrement
      </Button>
      <Button onClick={()=> handler({type: 'increment', step: 5})}>
        Increment + 5
      </Button>
      <Button onClick={()=> handler({type: 'decrement', step: 5})}>
        Decrement - 5
      </Button>

      <p>{`${counterHistory.join(' ')}`}</p>
      <p>{maxValue}</p>
    </div>
  )
}

export default Counter
