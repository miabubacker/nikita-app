import React from 'react'
import Centre from '../Molecules/Center/Centre'
import Right from '../Molecules/Right/Right'
import Leftmain from '../Molecules/Left/Leftmain'

import './Cards.scss'
export default function Cards() {
  return (
    <section className='Cards_container'>
        <Leftmain/>
        <Centre/>

<Right/>    </section>
  )
}
