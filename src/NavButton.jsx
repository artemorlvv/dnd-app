import React from "react"

const NavButton = (props) => {
  return (
    <button className="flex flex-col items-center justify-center text-neutral-600">
      <img src={props.img} />
      {props.children}
    </button>
  )
}

export default NavButton
