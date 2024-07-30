import  ReactDOM  from "react-dom/client";
import Counter from "./useState";
import TestEffect from "./useEffect";
import TestStateEffect from "./hooks";
import './style.css'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const style = "bg-blue-500 text-white p-4 rounded"

root.render(
<div className={style}>
    <TestStateEffect/>
  </div>
)