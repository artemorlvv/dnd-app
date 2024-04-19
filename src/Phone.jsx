import React from "react"
import statusbar from "./assets/statusbar.svg"
import Droppable from "./Droppable"
import { DraggableList, DroppableList } from "./ElementsList"

const Phone = ({ droppableChildren, draggableActive }) => {
  return (
    <div className="bg-neutral-200 flex flex-col w-[375px] h-[812px] rounded-[20px] border-black border-[5px] over">
      <img src={statusbar} className="select-none" draggable="false" alt="" />
      <div className="w-full h-full max-h-full grid grid-cols-12 grid-rows-[repeat(40,minmax(0,1fr))] gap-1 py-1 px-2 grow">
        {DroppableList.map((dropValues, index) => (
          <Droppable
            key={index}
            id={index}
            style={{
              gridColumnStart: dropValues[0][0],
              gridColumnEnd: dropValues[0][1],
              gridRowStart: dropValues[1][0],
              gridRowEnd: dropValues[1][1],
              justifyContent: dropValues[2] || "center",
              alignItems: dropValues[3] || "center",
            }}
            childId={droppableChildren[index]}
            childIsDragging={
              draggableActive && draggableActive === droppableChildren[index]
            }
          >
            {DraggableList[droppableChildren[index]]}
          </Droppable>
        ))}
      </div>
    </div>
  )
}

export default Phone
