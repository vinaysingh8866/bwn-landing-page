import { Box, Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";

/* eslint-disable no-empty-pattern */
interface ExploreProps{
    
}

export default function Explore({}:ExploreProps ){
    const dropdownRef=useRef<HTMLDivElement | null>(null)
    return(
        <VStack h={'clamp(10rem,45vh,402px)'} w={'full'} 
        bgGradient={'linear-gradient(271.82deg, #000000 0%, #1A1A1A 100%)'} justifyContent={'center'} >
            <HStack w={'full'} maxW={'1245px'} justifyContent={'space-between'} alignItems={'center'} gap={'3rem'} px={'2rem'} py={'1.5rem'}>
                <VStack  justifyContent={'center'} alignItems={'start'} gap={0}>
                    <Text fontWeight={'700'} fontSize={{'base':'clamp(20px,5vw,32px)','md':'40px'}} lineHeight={{'base':'clamp(32px,6vw,54px)','md':'60px'}} color={'white'}>Start Exploring with </Text>
                    <Text fontWeight={'700'} fontSize={{'base':'clamp(20px,5vw,32px)','md':'40px'}} lineHeight={{'base':'clamp(32px,6vw,54px)','md':'60px'}}>
                        <span style={{color:'#E72F3E'}}>BharatWeb</span>{' '}<span style={{color:'#0057FF'}}>Navigator</span>
                    </Text>
                </VStack>

                <Box  zIndex={5} position={'relative'} >
                    <Button onClick={()=>dropdownRef.current?.classList.toggle('dropdown-hide')} 
                    fontSize={{'base':'clamp(16px,1vw,18px)','md':'24px'}} lineHeight={'36px'} fontWeight={'600'} type="button" px={{'base':'0.5rem','md':'52px'}} py={{'base':'10px','md':'32px'}} bg={'#E72F3E'} border={'1px solid #E72F3E'} rounded={'full'} shadow={'sm'} color={'white'} variant={'none'} _hover={{bg:{'md':'black'},color:'#E72F3E'}}>
                        <Text display={{'base':'none','md':'block'}}>
                            Install BharatWeb Navigator
                        </Text>
                        {/* <Text display={{'base':'block','md':'none'}}>Download</Text> */}
                        <Image display={{'base':'block','md':'none'}} src="/download-w.svg" w={'1rem'} maxH={'18px'} minH={'16px'} alt="Download"/>
                    </Button>

                    {/* Dropdown */}
                    <VStack onMouseLeave={()=>dropdownRef?.current?.classList.add('dropdown-hide')} transition={'all 0.3s ease 0s'} border={'1px solid #0000001A'} ref={dropdownRef} className="dropdown-hide" zIndex={-1} top={{'base':'3.5rem','md':'4.5rem'}} left={{'base':'-8rem','md':'-0'}} bg={'white'} position={'absolute'} shadow={'xl'} w={'full'} maxW={'246px'} minW={{'base':'12rem','md':'0'}} rounded={'lg'} gap={0}>

                        <Stack ps={'0.85rem'} pe={'0.5rem'} py={'6px'} w={'full'}  fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'}>
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                                    <Image h={'20px'} src="/macos-logo.svg"/>
                                    <Text>macOs</Text>
                                </HStack>

                                <Button _hover={{opacity:'0.5',bg:'gray.100'}} variant={'none'} type="button" p='0'>
                                    <Image src="/download.svg" h={'16px'}/>
                                </Button>
                            </HStack>
                        </Stack>

                        <Stack ps={'0.85rem'} pe={'0.5rem'} py={'6px'} w={'full'}  fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'} >
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                                    <Image h={'20px'} src="/windows-logo.svg"/>
                                    <Text>Windows</Text>
                                </HStack>
                                <Button _hover={{opacity:'0.5',bg:'gray.100'}} variant={'none'} type="button" p='0'>
                                    <Image src="/download.svg" h={'16px'}/>
                                </Button>
                            </HStack>
                        </Stack>

                        <Stack ps={'0.85rem'} pe={'0.5rem'} py={'6px'} w={'full'}  fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'} >
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                                    <Image h={'20px'} src="/android-logo.svg"/>
                                    <Text>Android</Text>
                                </HStack>
                                <Button _hover={{opacity:'0.5',bg:'gray.100'}} variant={'none'} type="button" p='0'>
                                    <Image src="/download.svg" h={'16px'}/>
                                </Button>
                            </HStack>
                        </Stack>
                    </VStack>
                </Box>
            </HStack>
        </VStack>
    )
}