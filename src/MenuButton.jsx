import React from "react"

const MenuButton = (props) => {
  return (
    <button className="flex border-2 px-2.5 pt-1.5 pb-1 items-center justify-center rounded-lg border-amber-400">
      <img src={props.img} />
      <span className="font-montserrat leading-3 pb-1 pr-1">{props.text}</span>
    </button>
  )
}

export default MenuButton
