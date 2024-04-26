
import { Frame } from '@components/Frame'
import { Canvas } from '@components/Canvas'
import { useSelector } from 'react-redux'
import { modeSelector } from '@/module/reducers/currentMode'
function App() {
  const currentMode = useSelector(modeSelector)
  const getCursorClass = (modeType: boolean) => {
    switch (modeType) {
      case true:
        return 'Pencil';
      case false:
        return 'Eraser';
      default:
        return 'Pencil';
    }
  };
  const cursorClass = getCursorClass(currentMode.type);
  console.log(cursorClass);
  return (
    <div className={`flex flex-col  justify-end items-center `} style={{ cursor: 'crosshair' }}>
      <p> Current mode: {cursorClass}</p>
      <Canvas />
      <Frame />
    </div>

  )
}

export default App

// dotted-bg bg-[#F5F4EF] flex flex-col min-h-screen justify-end items-center 