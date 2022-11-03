import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Rough = () => {

  const[item, setItem] = useState([])

  useEffect(() => {
    Axios.get('https://api.quotable.io/random')
    .then((res) => {
      setItem(res.data)
      console.log(res.data);
    })
  },[])

  return (
    <div>
      <p>{item.content}</p>
      <h6>{item.author}</h6>
    </div>
  )
};

export default Rough