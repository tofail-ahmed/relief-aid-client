
import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hook";

function App() {
  const darkMode=useAppSelector((store)=>store.theme.darkMode);
  console.log(darkMode)
  return (
    <div className={`${darkMode?"bg-black text-white":""}`}>
      <MainLayout/>
     

    </div>
  );
}

export default App;
