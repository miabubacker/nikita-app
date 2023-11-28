import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
 import gg from '../../../../../../../Assets/Imgs/map_dot.jpg'
 import prev from '../../../../../../../Assets/Imgs/preview.png'
 import './Globe.scss'
export default function Globes() {
   
   const name='abu'
   const globeEl = useRef();
   const[data,setData]=useState()
 
  

   useEffect(() => {
    // const directionalLight = globeEl.current.lights().find(obj3d => obj3d.type === 'DirectionalLight');
    // directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    globeEl.current.controls().autoRotate=true
    globeEl.current.controls().autoRotateSpeed=3 
    globeEl.current.controls().enableZoom=false
    globeEl.current.postProcessingComposer().poisition='relative'
    globeEl.current.postProcessingComposer().left='-490px'
     setData(globeEl.current.pointOfView())
     console.log(globeEl.current.postProcessingComposer())
      console.log(globeEl.current.controls())
  }, []);

  return (
    <div  className='timezone'>
      <div className='text'>
        <p className='area'>Georgia, Tbilisi</p>
        <p>(GMT+4)</p>
      </div>
         <Globe
          width={400}
          bumpImageUrl={gg}
          height={400}
           className={'poinu'}
          backgroundColor={'rgb(37, 37, 37)'}
          animateIn={true}
          ref={globeEl}
          // pointLabel={['sbuu']}
          
          globeImageUrl={gg}
          waitForGlobeReady={true}
          showGlobe={true}
          pointColor={()=>"Blue"}
          pointAltitude={0.2}
    pointsData={[data]}

  
  />
    </div>
  )
}
