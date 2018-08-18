import React from 'react'

import '../../styles/general/loading.styl'
import loading_image from '../../assets/loading_image.png'

const LoadingScreen = () => {
  return (
    <div className="loading_screen">
        <div className="loading_container">
            <div className="pulsing-delayed"></div>
            <div className="pulsing"></div>
            <img src={ loading_image }
            alt="loading_animation"/>
        </div>
    </div>
  )
}

export default LoadingScreen
