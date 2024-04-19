import React from "react"
import Draggable from "./Draggable"
import { DraggableList } from "./ElementsList.jsx"

const Elements = ({ droppableChildren }) => {
  return (
    <div className="p-2 border-neutral-100 h-full rounded-xl bg-neutral-200 flex-wrap w-[600px]">
      <div className="flex gap-2 flex-wrap h-min">
        <p className="w-full border-b-2 border-neutral-800 text-2xl">
          Элементы:
        </p>
        {Object.entries(DraggableList).map(([id, component]) =>
          !droppableChildren.includes(id) ? (
            <div
              key={id}
              className="p-2 bg-neutral-200 flex items-center justify-center rounded-lg border-2 border-neutral-300"
            >
              <Draggable id={id}>{component}</Draggable>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default Elements
