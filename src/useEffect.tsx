import { useEffect } from "react";

const TestEffect = () => {
  useEffect(() => {
    console.log("component Mounted")
    return ()=>{
      console.log("component UnMounted")
    }
  },[])
  return <div>hello World!</div>
};

export default TestEffect