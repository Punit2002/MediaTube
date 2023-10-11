import React from 'react'

const Videocard = ({videos}) => {
  return (
    <div className='flex '>
    <div>
    {
      videos && videos.map((video)=>{
          return <div className=''>
            <div><img src={video?.snippet?.thumbnails?.high?.url} width="300px" height="300px"></img></div>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Videocard