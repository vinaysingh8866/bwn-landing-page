import { Box, HStack,  } from "@chakra-ui/react";
import { ReactNode,   } from "react";
// import AOS from 'aos'


interface IntroCardProps{
    children:ReactNode;
    imgOnLeft:boolean;
    imgAddress:string;
}

// eslint-disable-next-line no-empty-pattern
export default function IntroCard({children,imgOnLeft,imgAddress}:IntroCardProps ){
    // useEffect(()=>{
    //     AOS.init()
    // },[])
    return(
        <>
        {imgOnLeft?
            <HStack data-aos="fade-up" data-aos-duration='1000' overflowX={'hidden'} justifyContent={'center'} w={'full'} position={'relative'}>
                <HStack maxW={'1327px'} px={{'base':'1.5rem','md':'5rem'}} w={'full'} justifyContent={'space-between'} alignItems={'center'} gap={'5rem'} flexDir={{'base':'column','md':'row'}}>
                <Box w={{'base':'full','md':'38%'}} px={{'base':'2rem','md':'0'}}>
                    {/* <Image src={imgAddress} w={'full'} h={'full'}/> */}
                    <video className="left-video" style={{width:'100%'}} src={imgAddress} autoPlay loop muted></video>
                        {/* <Image src="/left-bg-circle.svg"/> */}
                </Box>

                <Box w={{'base':'full','md':'45%'}}>
                    {children}
                </Box>
                </HStack>

                <Box zIndex={{'base':'-1','md':'0'}} w={{'base':'12rem','md':'12vw'}} h={{'base':'12rem','md':'12vw'}} maxW={'20rem'} maxH={'20rem'} rounded={'full'} bg={'transparent'} border={'6px solid #DEE7ED'} position={'absolute'} right={{'base':'-6rem','md':'clamp(-6vw,-6vw,-20rem)'}} bottom={{'base':'25%','md':'50%'}} transform={'translateY(60%)'}>

                </Box>
            </HStack>
            :

            <HStack data-aos="fade-up" data-aos-duration='1000' justifyContent={'center'} w={'full'} position={'relative'} >
                <HStack  maxW={'1327px'} px={{'base':'1.5rem','md':'5rem'}} w={'full'} justifyContent={'space-between'} alignItems={'center'} gap={'5rem'} flexDir={{'base':'column-reverse','md':'row'}}>
                    <Box w={{'base':'full','md':'45%'}} >
                        {children}
                    </Box>

                    <Box w={{'base':'full','md':'38%'}} px={{'base':'2rem','md':'0'}}>
                        {/* <Image src={imgAddress} w={'full'} h={'full'}/> */}
                        <video className="right-video" style={{width:'100%'}} src={imgAddress} autoPlay loop={true} muted></video>
                    </Box>
                </HStack>

                <Box zIndex={{'base':'-1','md':'0'}} w={{'base':'10rem','md':'10vw'}} h={{'base':'10rem','md':'10vw'}} maxW={'20rem'} maxH={'20rem'} rounded={'full'} bg={'transparent'} border={'6px solid #DEE7ED'} position={'absolute'} left={{'base':'-5rem','md':'clamp(-5vw,-5vw,-20rem)'}} bottom={{'base':'25%','md':'50%'}} transform={'translateY(80%)'}>

                </Box>
            </HStack>
        }
        </>
    )
}