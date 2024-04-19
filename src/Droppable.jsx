import { useDroppable } from "@dnd-kit/core"
import React from "react"
import { cn } from "./lib/utils"
import Draggable from "./Draggable"

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })

  return (
    <div
      className={cn(
        "flex items-center outline-2 outline-offset-[-2px] outline-neutral-400/50 outline-dashed bg-neutral-300/50 justify-center transition-colors",
        props.className,
        {
          "bg-transparent outline-transparent ": props.children,
        },
        {
          "bg-red-400/30 outline-red-500/30 outline outline-3":
            props.childIsDragging,
        },
        { "bg-green-300/50 outline-green-500/50 outline outline-3 ": isOver }
      )}
      ref={setNodeRef}
      style={props.style}
    >
      {props.children ? (
        <Draggable id={props.childId}>{props.children}</Draggable>
      ) : (
        <span
          className={cn(
            "font-medium w-full text-neutral-400 text-center text-xl font-mono",
            {
              "text-green-600": isOver,
            }
          )}
        >
          +
        </span>
      )}
    </div>
  )
}

export default Droppable
