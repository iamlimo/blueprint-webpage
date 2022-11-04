import React from 'react'
// import Quotes from '../Quotes'

const Rough = () => {

//   const[item, setItem]=useState([])

//   useEffect(() => {
//     Axios.get('https://api.quotable.io/random')
//     .then((res) => {
//       setItem(res.data)
//       console.log(res.data);
//     })
//   },[])


//   const quoteItem = Quotes[Math.floor(Math.random() * Quotes.length)];

const year = new Date().getFullYear()

console.log(year);

  return (
    <div>   
        copyright @ {year}    
    </div>
  )
};

export default Rough;