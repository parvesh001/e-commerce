import React from 'react'
import DarkButton from '../../UI/DarkButton/DarkButton'
import style from './TemplateA.module.scss'

export default function TemplateA(props) {
  return (
    <div className={`${style["template-A"]} ${'mt-2 mt-md-5 d-flex flex-column justify-content-center'}`}>
      <h4>{props.templateTitle}</h4>
      <h2>{props.templateText}</h2>
      <DarkButton>{props.templateBtn}</DarkButton>
    </div>
  )
}
