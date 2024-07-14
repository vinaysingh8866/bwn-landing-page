
import { VStack } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'animate.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    window.addEventListener('load',()=>{
      AOS.init()
    })
},[])
  return (
    <>
      <VStack className='fadeIn duration-1s delay-0s' bg={'#F4F7F9'} minH={'100vh'} w={'full'} gap={0}>
        <Navbar/>

        <Home/>
      </VStack>
    </>
  )
}

export default App
