import React from 'react'
import {BadgeStyles} from "./styles/BadgeStyles"
export default function Badge({text} : {text: string}) {
  return (
    <BadgeStyles>{text}</BadgeStyles>
  )
}
