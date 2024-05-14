import React from "react"
import Draggable from "./Draggable"
import { DraggableList } from "./ElementsList.jsx"

const Elements = ({ droppableChildren }) => {
  return (
    <div className="flex gap-2 flex-wrap h-min">
      {Object.entries(DraggableList).map(([id, component]) =>
        !droppableChildren.includes(id) ? (
          <div
            key={id}
            className="p-2 bg-neutral-200 flex items-center justify-center rounded-lg border-2 border-neutral-300 dark:bg-neutral-600 dark:border-neutral-500"
          >
            <Draggable id={id}>{component}</Draggable>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Elements
