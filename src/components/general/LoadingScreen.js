import React from 'react'

import '../../styles/general/loading.styl'

const LoadingScreen = () => {
  return (
    <div className="loading_screen">
        <div className="loading_container">
            <div className="pulsing-delayed"></div>
            <div className="pulsing"></div>
            <img src="https://pbs.twimg.com/profile_images/470682672235151360/vI0ZZlhZ_400x400.png" 
            alt="loading_animation"/>
        </div>
    </div>
  )
}

export default LoadingScreen
