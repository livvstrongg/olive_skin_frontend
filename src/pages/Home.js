import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
        <h5>Olive Skin</h5>
        <div className='card-image'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwhZnsJeAZDahaceKz-nwH3YkCmfL-ACkvA&usqp=CAU'/>
        </div>
        <div className='card-content'>
          <h6>title</h6>
          <p>info about the skin care</p>
        </div>
      </div>
    </div>
  )
}

export default Home