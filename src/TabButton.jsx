import React from "react"
import { cn } from "./lib/utils"

const TabButton = (props) => {
  return (
    <button
      className={cn(
        "text-xl dark:text-white dark:hover:bg-blue-400 rounded-t-lg px-4 py-2 transition-colors hover:bg-blue-300",
        {
          "!bg-blue-400 text-white dark:!bg-blue-500": props.active,
        }
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default TabButton
