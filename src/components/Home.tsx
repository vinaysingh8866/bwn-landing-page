import Explore from "./Explore";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import MoreInfo from "./MoreInfo";

/* eslint-disable no-empty-pattern */
interface HomeProps{
    
}

// import { useEffect } from "react";
// import AOS from 'aos';

export default function Home({}:HomeProps ){
    // useEffect(()=>{
    //     AOS.init()
    // },[])
    return(
        <>
            <Hero/>

            <Intro/>

            <MoreInfo/>

            <Explore/>

            <Footer/>
        </>
    )
}