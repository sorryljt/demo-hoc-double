import React, { useState } from 'react'
import CountView from './components/hoc1'
import { Button } from 'antd'

const Hoc = () => {
  const [count, setCount] = useState(1)
  const btnClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>HocDemo测试</h1>
      <CountView
        count = {count}
      />
      <Button onClick={btnClick} type="primary" style={{ marginTop: '15px'}}>点我+1</Button>
    </>
  )
}

export default Hoc