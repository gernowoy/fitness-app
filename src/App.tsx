import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";

export type SelectedPageType = 'главная' | 'преимущества' | 'занятия' | 'контакты' 

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPageType>('главная')

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage('главная')
      }
      if ((window.scrollY !== 0)) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
