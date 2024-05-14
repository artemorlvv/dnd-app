import { DndContext } from "@dnd-kit/core"
import Phone from "./Phone"
import Elements from "./Elements"
import { useState } from "react"
import { DroppableList } from "./ElementsList"
import PhoneOverlay from "./PhoneOverlay"
import ElementsAndSettings from "./ElementsAndSettings"

const App = () => {
  const [droppableChildren, setDroppableChildren] = useState(
    createArray(DroppableList.length)
  )
  const [draggableActive, setDraggableActive] = useState(null)
  const [overlayVisible, setOverlayVisible] = useState(false)

  function createArray(length) {
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(null)
    }
    return arr
  }

  const handleDragEnd = (event) => {
    const index = droppableChildren.indexOf(event.active.id)
    const newArray = [...droppableChildren]
    if (index !== -1) newArray[index] = null
    if (event.over) newArray[event.over.id] = event.active.id
    setDroppableChildren(newArray)
    setDraggableActive(null)
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={(event) => setDraggableActive(event.active.id)}
    >
      <div className="flex flex-col gap-8 items-center justify-center w-full h-[100vh] dark:bg-neutral-900">
        <div className="flex gap-4">
          <Phone
            droppableChildren={droppableChildren}
            draggableActive={draggableActive}
          />
          <ElementsAndSettings droppableChildren={droppableChildren} />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-400 px-[1em] py-[0.5em] rounded-lg text-white font-semibold text-lg"
            onClick={() => setOverlayVisible(true)}
          >
            Протестировать
          </button>
        </div>
      </div>
      {overlayVisible && (
        <PhoneOverlay
          droppableChildren={droppableChildren}
          setOverlayVisible={setOverlayVisible}
        />
      )}
    </DndContext>
  )
}

export default App
