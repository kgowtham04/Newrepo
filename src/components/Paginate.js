import React from 'react'
import './Form.css'
const Paginate = ({datasPerPage,totalDatas,Pagination}) => {
    const noofPages=[];
    for(let i=1; i<=Math.ceil(totalDatas/datasPerPage); i++){
        noofPages.push(i)
    }
  return (
    <div className='page'>
      <a href='#'>&laquo;</a>
      {noofPages.map((num,i)=>{
        return <div key={i}>
            <a href='#' onClick={()=>Pagination(num)}>{num}</a>
            </div>
      })}
       <a href='#'>&raquo;</a>
    </div>
  )
}
export default Paginate
