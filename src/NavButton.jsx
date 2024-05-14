import React from "react"
import { useActiveButton } from "./lib/store"
import { cn } from "./lib/utils"

const NavButton = (props) => {
  const activeNavButton = useActiveButton((state) => state.activeNavButton)
  const setActiveNavButton = useActiveButton(
    (state) => state.setActiveNavButton
  )
  return (
    <button
      className={cn(
        "flex flex-col items-center w-full h-[80%] transition-colors active:!bg-neutral-300 dark:hover:bg-neutral-800 dark:active:!bg-neutral-700 rounded-lg justify-center text-neutral-400 hover:bg-neutral-200 dark:text-neutral-400",
        {
          "text-neutral-900 !bg-neutral-200 dark:text-neutral-200 dark:!bg-neutral-700":
            activeNavButton === props.children && props.preview,
        }
      )}
      onClick={() => setActiveNavButton(props.children)}
    >
      <img src={props.img} />
      {props.children}
    </button>
  )
}

export default NavButton
