import React, { useState } from "react"
import { useSettings } from "./lib/store"
import { HexColorInput, HexColorPicker } from "react-colorful"
import { cn } from "./lib/utils"

const Settings = () => {
  const showStatusBar = useSettings((state) => state.showStatusBar)
  const setShowStatusBar = useSettings((state) => state.setShowStatusBar)
  const backgroundColor = useSettings((state) => state.backgroundColor)
  const setBackgroundColor = useSettings((state) => state.setBackgroundColor)

  const changeTheme = (val) => {
    if (val === "light") {
      document.documentElement.classList.remove("dark")
      setBackgroundColor("#fafafa")
      return
    }
    document.documentElement.classList.add("dark")
    setBackgroundColor("#202020")
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 text-lg ml-4 items-center">
        <p className="dark:text-neutral-100">Тема:</p>
        <div className="rounded-lg overflow-hidden">
          <button
            className="px-4 py-2 !bg-blue-400 text-white dark:!bg-transparent dark:hover:!bg-neutral-600 transition-colors"
            onClick={() => changeTheme("light")}
          >
            Светлая
          </button>
          <button
            onClick={() => changeTheme("dark")}
            className="px-4 py-2 hover:bg-neutral-300 dark:text-white dark:!bg-blue-500 transition-colors"
          >
            Темная
          </button>
        </div>
      </div>
      <button
        className="flex items-center gap-2 hover:bg-neutral-300 px-4 py-2 rounded-lg transition-colors dark:hover:bg-neutral-600"
        onClick={() => setShowStatusBar(!showStatusBar)}
      >
        <p className="text-lg dark:text-neutral-100">
          Показывать строку состояния
        </p>
        <div
          className={cn(
            "h-5 w-5 rounded-md border-2 border-black transition-colors dark:border-neutral-300",
            {
              "bg-blue-400": showStatusBar,
            }
          )}
        />
      </button>
      <div className="flex ml-4 gap-4">
        <div>
          <p className="text-lg dark:text-neutral-100">Цвет фона</p>
          <HexColorInput
            className="w-20"
            color={backgroundColor}
            onChange={setBackgroundColor}
            prefixed
          />
        </div>
        <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
      </div>
    </div>
  )
}

export default Settings
