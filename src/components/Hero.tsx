import { Box, Image, Text, VStack } from "@chakra-ui/react";
// import AnimatedLetters from "../lib/AnimatedLatters";
import { useEffect, useRef, } from "react";
// import HoverButton from '../util/ImageCont'

/* eslint-disable no-empty-pattern */
interface HeroProps{
    
}

export default function Hero({}:HeroProps ){
    // const [letterClass,setLetterClass]=useState('text-animate')
    const imgContRef=useRef<HTMLImageElement | null>(null)
    const elCursorRef=useRef<HTMLDivElement |null>(null)
    // const [initialPosition,setInitialPosition]=useState({x:0,y:0})

    useEffect(()=>{
        const elCursor = document.querySelector(".cursor") as HTMLElement;
        const transitionDuration = 1000;
        elCursor.style.setProperty("--t-duration", transitionDuration.toString());
    },[])
    return(
        <VStack className="" w={'full'} justifyContent={'center'} overflow={'hidden'}>
            <VStack w={'full'} justifyContent={'center'} gap={'0'} maxW={'1327px'} pt={'2.5rem'} px={'1rem'} textAlign={'center'}>
                <Text className=" animate__fadeInUp" style={{animationDelay:'0.2s',animationDuration:'0.7s'}} fontSize={{'base':'clamp(24px,2vw,32px)','md':'48px'}} lineHeight={{'base':'clamp(32px,3vw,54px)','md':'72px'}} fontWeight={'700'}>
                    Welcome to India’s all New Internet
                </Text>
                {/* <AnimatedLetters styles={{fontSize:'48px',lineHeight:'72px',fontWeight:'700'}} letterClass={letterClass} 
                strAry={['W','e','l','c','o','m','e',' ','t','o',' ','I','n','d','i','a’','s',' ','a','l','l',' ','N','e','w',' ','I','n','t','e','r','n','e','t']}
                idx={2}
                /> */}
                <Text className="hero-heading " style={{animationDelay:'0.1s',animationDuration:'0.5s'}} fontSize={{'base':'clamp(18px,1.5vw,24px)','md':'32px'}} lineHeight={{'base':'clamp(24px,2vw,32px)','md':'40px'}} fontWeight={'600'} mb={'0.75rem'}>
                    Discover, Connect, Transact and Secure
                </Text>
                <Text className="" style={{animationDelay:'0.15s',animationDuration:'0.6s'}} fontWeight={'700'} fontSize={{'base':'clamp(14px,1vw,16px)','md':'16px'}} lineHeight={{'base':'18px','md':'24px'}}>
                    Engage in real-time discussions with integrated chatbots, sign documents securely with DIDs, and manage your crypto assets  
                </Text>
                <Text className="" style={{animationDelay:'0.3s',animationDuration:'0.7s'}} fontWeight={'400'} fontSize={{'base':'clamp(14px,1vw,16px)','md':'16px'}} lineHeight={{'base':'18px','md':'24px'}}>   
                    with ease. Dive deep into research with professional tools and insights. Experience the cutting-edge of web browsing today.
                </Text>
            </VStack>

            <Box position={'relative'} h={'60vh'} maxH={'585px'} w={'full'} 
            // bgGradient={'linear-gradient(97.62deg, #E0345F 0%, #B20833 100%)'} 
            bgImage={'/hero-bg.svg'} bgSize={'cover'} bgRepeat={'no-repeat'}
            mt={'20rem'} >
                {/* <Box className="cursor" position={'absolute'} top={0} left={0} pointerEvents={'none'} h={'85vh'} maxH={'710px'} w={'full'}>

                </Box> */}

                <Box display={{'md':'block','base':'none'}} position={'absolute'} left={'50%'} bottom={'5rem'} transform={'translateX(-50%)'} h={'85vh'} maxH={'710px'} w={'full'} maxW={'1099.01px'} px={'2rem'} >
                    <VStack id="app" 
                    onMouseMove={(e)=>{
                        const elCursor=elCursorRef.current
                        const elButton=imgContRef.current
                        if(!elCursor || !elButton) return
                        elCursor.style.setProperty("--x", e.clientX.toString());
                        elCursor.style.setProperty("--y", e.clientY.toString());
                
                        elButton.style.setProperty("--pointer-x", e.clientX.toString());
                        elButton.style.setProperty("--pointer-y", e.clientY.toString());
                    }}>
                    <Box ref={elCursorRef} className="cursor" position={'absolute'} top={0} left={0} pointerEvents={'none'} h={'full'} w={'full'}>

                    </Box>
                    <Image
                    ref={imgContRef}

                    onMouseEnter={()=>{
                        const elCursor=elCursorRef.current
                        const elButton=imgContRef.current
                        if(!elButton || !elCursor) return

                        elButton.style.transitionDuration='0.3s'
                        const rect = elButton.getBoundingClientRect();
            
                        elCursor.dataset.hover = 'true';
            
                        elCursor.style.setProperty("--hover-x", rect.left.toString());
                        elCursor.style.setProperty("--hover-y", rect.top.toString());
                        elCursor.style.setProperty("--w", rect.width.toString());
                        elCursor.style.setProperty("--h", rect.height.toString());
            
                        elButton.style.setProperty("--x", rect.left.toString());
                        elButton.style.setProperty("--y", rect.top.toString());
                        elButton.style.setProperty("--w", rect.width.toString());
                        elButton.style.setProperty("--h", rect.height.toString());
                    }}

                    onMouseLeave={()=>{
                        const elCursor=elCursorRef.current
                        const elButton=imgContRef.current
                        if(!elButton || !elCursor) return

                        elButton.style.transitionDuration='0.3s'
                        delete elCursor.dataset.hover;
            
                        elCursor.style.removeProperty("--hover-x");
                        elCursor.style.removeProperty("--hover-y");
                        elCursor.style.removeProperty("--w");
                        elCursor.style.removeProperty("--h");
                    }}

                    onMouseOver={()=>{
                        const elButton=imgContRef.current
                        if(!elButton) return

                        elButton.addEventListener('mouseover',()=>{
                            setTimeout(()=>{
                                elButton.style.transitionDuration='0s'
                            },300)
                        })
                    }}

                    className="animate__fadeInUp hover-button" style={{animationDelay:'0.1s',animationDuration:'0.85s'}} w={'full'} h={'full'} objectFit={'contain'} src="/Browser Landing.svg"/>
                    </VStack>
                </Box>

                <Box display={{'md':'none','base':'block'}} position={'absolute'} left={'50%'} bottom={'5rem'} transform={'translateX(-50%)'} h={'85vh'} maxH={'710px'} w={'full'} maxW={'1099.01px'} px={'2rem'} >
                    <Image minW={'850px'} className=" scroll-inline" w={'full'} h={'full'} objectFit={'contain'} src="/Browser Landing.svg" />
                </Box>
            </Box>
        </VStack>
    )
}