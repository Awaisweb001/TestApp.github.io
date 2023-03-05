import React from 'react'

const Cv = () => {

  const ran = JSON.parse(localStorage.getItem('student'))
  // console.log(render);

  const ddda = [ran]
  let mpp = ddda.map((e)=>{
    return(
    <>
    <h1>{e.Name}</h1>
    <h1>{e.City}</h1>
    <h1>{e.Email}</h1>
    </>
    )
  })
  return (
    <>
      {mpp}
    </>
  )
}

export default Cv