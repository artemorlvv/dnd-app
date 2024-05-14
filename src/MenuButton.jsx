import React from "react"
import { useActiveButton } from "./lib/store"
import { cn } from "./lib/utils"

const MenuButton = (props) => {
  const activeMenuButton = useActiveButton((state) => state.activeMenuButton)
  const setActiveMenuButton = useActiveButton(
    (state) => state.setActiveMenuButton
  )
  return (
    <button
      className={cn(
        "flex border-2 px-2.5 pt-1.5 pb-1 items-center justify-center active:!bg-amber-500 rounded-lg border-amber-400 hover:bg-amber-400 hover:text-white transition-colors dark:text-neutral-100",
        {
          "!bg-amber-400 !text-white":
            activeMenuButton === props.text && props.preview,
        }
      )}
      onClick={() => setActiveMenuButton(props.text)}
    >
      <img src={props.img} />
      <span className="font-montserrat leading-3 pb-1 pr-1">{props.text}</span>
    </button>
  )
}

export default MenuButton
