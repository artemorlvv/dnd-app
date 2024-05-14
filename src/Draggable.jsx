import { useDraggable } from "@dnd-kit/core"
import React from "react"

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div
      className="h-max w-max cursor-move relative"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
      <div className="absolute w-full h-full top-0 left-0" />
    </div>
  )
}

export default Draggable
