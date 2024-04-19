import React from "react"
import statusbar from "./assets/statusbar.svg"
import { DraggableList, DroppableList } from "./ElementsList"

const PhoneOverlay = ({ droppableChildren, setOverlayVisible }) => {
  return (
    <div className="flex absolute w-full h-[100vh] top-0 left-0 items-center justify-center bg-neutral-500/50">
      <div
        className="w-full z-0 h-[100vh] absolute top-0 left-0"
        onClick={() => setOverlayVisible(false)}
      />
      <div className="absolute z-10 bg-neutral-200 flex flex-col w-[375px] h-[812px] rounded-[20px] border-black border-[5px] over">
        <img src={statusbar} className="select-none" draggable="false" alt="" />
        <div className="w-full h-full max-h-full grid grid-cols-12 grid-rows-[repeat(40,minmax(0,1fr))] gap-1 py-1 px-2 grow">
          {DroppableList.map((dropValues, index) => (
            <div
              className="flex items-center justify-center"
              key={index}
              style={{
                gridColumnStart: dropValues[0][0],
                gridColumnEnd: dropValues[0][1],
                gridRowStart: dropValues[1][0],
                gridRowEnd: dropValues[1][1],
                justifyContent: dropValues[2] || "center",
                alignItems: dropValues[3] || "center",
              }}
            >
              {DraggableList[droppableChildren[index]]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhoneOverlay
