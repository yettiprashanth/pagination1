import React from 'react'

function Pagenation({postsParPage,totalPosts,paginate}) {
 const pageNumbers=[];
  for(let i=1; i<=Math.ceil(totalPosts/postsParPage);i++){
     pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className='pagination justify-content-center'>
      {
        pageNumbers.map(number=>(
          <li className='page-item' key={number}>
            <a href="!#" className='page-link' onClick={()=>paginate(number)}>{number}</a> 
          </li>
        ))
      }
      </ul>
      
    </nav>
  )
}

export default Pagenation
