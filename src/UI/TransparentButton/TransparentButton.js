import React from 'react'

export default function TransparentButton(props) {
  return (
    <div>
    <button onClick={props.onClick} className={`${props.className} ${'btn btn-outline-light px-4 px-3'}`}>{props.children}</button>
   </div>
  )
}
