import React from 'react'
import {BadgeStyles} from "./styles/Badge.styled"
export default function Badge({text} : {text: string}) {
  return (
    <BadgeStyles>{text}</BadgeStyles>
  )
}
