import React from 'react'

const Content = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((item) => {
        return (
          <pre key={item.id}>{JSON.stringify(item)}</pre>
        )
      })}
    </div>
  )
}

export default Content