import React from 'react'
import MainHeader from './MainHeader'

export default function Layout(props) {
  return (
    <React.Fragment>
      <MainHeader/>
      {props.children}
    </React.Fragment>
  )
}
