import React, { useState } from "react"
import Elements from "./Elements"
import Settings from "./Settings"
import TabButton from "./TabButton"

const ElementsAndSettings = (props) => {
  const [activeTab, setActiveTab] = useState("elements")

  return (
    <div className="p-2 h-full rounded-xl bg-neutral-200 flex-wrap w-[600px] dark:bg-neutral-700">
      <div className="flex mb-3 border-b-2 border-black dark:border-neutral-300">
        <TabButton
          active={activeTab === "elements"}
          onClick={() => setActiveTab("elements")}
        >
          Элементы
        </TabButton>
        <TabButton
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        >
          Настройки
        </TabButton>
      </div>
      {activeTab === "elements" ? (
        <Elements droppableChildren={props.droppableChildren} />
      ) : (
        <Settings />
      )}
    </div>
  )
}

export default ElementsAndSettings
