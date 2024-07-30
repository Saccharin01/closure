import React,{useState, useEffect} from "react";

const TestStateEffect:React.FC = () => {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    console.log("Component Mounted");
    return ()=>{
      console.log("Component UnMounted")
    }
  },[])

  const handleClick = ()=>{
    setCount(count+1)
  }

  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
  <img className="w-full" src="https://via.placeholder.com/400x300" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
      <h1>you Click the button {count}Time</h1>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" type="button" onClick={handleClick}>디스 이즈 어 버튼</button>

      <div>Hello,World!</div>
    </div>
  )
}


export default TestStateEffect