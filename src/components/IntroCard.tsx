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
                <HStack maxW={'1327px'} px={'5rem'} w={'full'} justifyContent={'space-between'} alignItems={'center'} gap={'5rem'}>
                <Box w={'38%'} >
                    {/* <Image src={imgAddress} w={'full'} h={'full'}/> */}
                    <video className="left-video" style={{width:'100%'}} src={imgAddress} autoPlay loop muted></video>
                        {/* <Image src="/left-bg-circle.svg"/> */}
                </Box>

                <Box w={'45%'}>
                    {children}
                </Box>
                </HStack>

                <Box w={'12vw'} h={'12vw'} maxW={'20rem'} maxH={'20rem'} rounded={'full'} bg={'transparent'} border={'6px solid #DEE7ED'} position={'absolute'} right={'clamp(-6vw,-6vw,-20rem)'} bottom={'50%'} transform={'translateY(60%)'}>

                </Box>
            </HStack>
            :

            <HStack data-aos="fade-up" data-aos-duration='1000' justifyContent={'center'} w={'full'} position={'relative'}>
                <HStack  maxW={'1327px'} px={'5rem'} w={'full'} justifyContent={'space-between'} alignItems={'center'} gap={'5rem'}>
                    <Box w={'45%'}>
                        {children}
                    </Box>

                    <Box w={'38%'}>
                        {/* <Image src={imgAddress} w={'full'} h={'full'}/> */}
                        <video className="right-video" style={{width:'100%'}} src={imgAddress} autoPlay loop={true} muted></video>
                    </Box>
                </HStack>

                <Box w={'10vw'} h={'10vw'} maxW={'20rem'} maxH={'20rem'} rounded={'full'} bg={'transparent'} border={'6px solid #DEE7ED'} position={'absolute'} left={'clamp(-5vw,-5vw,-20rem)'} bottom={'50%'} transform={'translateY(80%)'}>

                </Box>
            </HStack>
        }
        </>
    )
}