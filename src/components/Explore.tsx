import { Box, Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import {  useState } from "react";
import {motion} from 'motion/react'
import { Download } from "lucide-react";

/* eslint-disable no-empty-pattern */
interface ExploreProps{
    
}

export default function Explore({}:ExploreProps ){
    // const dropdownRef=useRef<HTMLDivElement | null>(null)
    const [showDropdown,setShowDropdown]=useState(false)
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

                <Box py={3} onMouseLeave={()=>{setShowDropdown(false)}}>
                    <Button onClick={()=>{
                        setShowDropdown(!showDropdown)
                        // dropdownRef.current?.classList.toggle('dropdown-hide')
                    }} 
                    fontSize={{'base':'clamp(16px,1vw,18px)','md':'24px'}} lineHeight={'36px'} fontWeight={'600'} type="button" px={{'base':'0.5rem','md':'52px'}} py={{'base':'10px','md':'32px'}} bg={'#E72F3E'} border={'1px solid #E72F3E'} rounded={'full'} shadow={'sm'} color={'white'} variant={'none'} _hover={{bg:{'md':'black'},color:'#E72F3E'}}>
                        <Text display={{'base':'none','md':'block'}}>
                            Install BharatWeb Navigator
                        </Text>
                        {/* <Text display={{'base':'block','md':'none'}}>Download</Text> */}
                        {/* <Image display={{'base':'block','md':'none'}} src="/download-w.svg" w={'1rem'} maxH={'18px'} minH={'16px'} alt="Download"/> */}
                        <Box display={{'base':'block','md':'none'}}>
                            <Download/>
                        </Box>
                    </Button>

                    {/* Dropdown */}
                    <motion.div
                        style={{position:'relative'}}
                        initial={{opacity:0,y:'-60px',visibility:'hidden'}}
                        transition={{type:'tween',duration:0.15}}
                        animate={{
                            opacity: showDropdown ? 1 : 0,
                            y: showDropdown ? '-60px' : '-100px',
                            visibility: showDropdown ? 'visible' : 'hidden'
                        }}
                    >
                        <VStack border={'1px solid #0000001A'} 
                        // ref={dropdownRef} 
                        // className="dropdown-hide" 
                        zIndex={-1} top={{'base':'3.5rem','md':'4.5rem'}} left={{'base':'-8rem','md':'-0'}} bg={'white'} position={'absolute'} shadow={'xl'} w={'full'} maxW={'246px'} minW={{'base':'12rem','md':'0'}} rounded={'lg'} gap={0}>

                        <Stack ps={'0.85rem'} pe={'0.5rem'} py={'6px'} w={'full'}  fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'} >
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                                    <Image h={'20px'} src="/windows-logo.svg"/>
                                    <Text>Windows</Text>
                                </HStack>
                                <Button
                                _hover={{ opacity: "0.5", bg: "gray.100" }}
                                variant={"none"}
                                type="button"
                                p="0"
                                onClick={() => {
                                    // goto public/installers/unsigned_bwn.exe
                                    window.location.href = "https://purple-abundant-anaconda-910.mypinata.cloud/ipfs/QmbChqPoTTTNdam5G5pfZyKK7m2CMw2qzAQ2nXf9o74UJW/BWN.exe";
                                }}
                                >
                                <Image src="/download.svg" h={"16px"} />
                                </Button>
                            </HStack>
                        </Stack>

                        <Stack ps={'0.85rem'} pe={'0.5rem'} py={'6px'} w={'full'}  fontSize={'14px'} fontWeight={'500'} lineHeight={'18px'} >
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                                <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                                    <Image h={'20px'} src="/android-logo.svg"/>
                                    <Text>Android</Text>
                                </HStack>
                                <Button
                                _hover={{ opacity: "0.5", bg: "gray.100" }}
                                variant={"none"}
                                type="button"
                                p="0"
                                onClick={() => {
                                    window.location.href = "https://olive-rubber-aphid-157.mypinata.cloud/ipfs/QmSEFK6X69QxPg2cJXcTr7TsJ7qsprYkn66kCmXDWhb1yD/BharatWebNavigator.apk";
                                }}
                                >
                                <Image src="/download.svg" h={"16px"} />
                                </Button>
                            </HStack>
                        </Stack>

                        <Stack
                            ps={"0.85rem"}
                            pe={"0.5rem"}
                            py={"6px"}
                            w={"full"}
                            fontSize={"14px"}
                            fontWeight={"500"}
                            lineHeight={"18px"}
                            >
                            <HStack
                                w={"full"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <HStack
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={"0.5rem"}
                                >
                                <Image h={"20px"} src="/Icons8_flat_linux.svg.png" />
                                <Text>Linux</Text>
                                </HStack>
                                <HStack justifyContent={'end'} alignItems={'center'} gap={'0.75rem'} mr={'0.85rem'}>
                                    <Button fontSize={'12px'}
                                        _hover={{ opacity: "0.5", bg: "gray.100" }}
                                        variant={"none"}
                                        type="button"
                                        p="0"
                                        onClick={() => {
                                            window.location.href =
                                            "https://olive-rubber-aphid-157.mypinata.cloud/ipfs/QmSEFK6X69QxPg2cJXcTr7TsJ7qsprYkn66kCmXDWhb1yD/bharat-webnavigator-stable-128.0.6572.0-1.x86_64.rpm";
                                        }}
                                        >
                                        .rpm
                                        <Image src="/download.svg" h={"16px"} />
                                    </Button>
                                    <Button fontSize={'12px'}
                                        _hover={{ opacity: "0.5", bg: "gray.100" }}
                                        variant={"none"}
                                        type="button"
                                        p="0"
                                        onClick={() => {
                                            window.location.href =
                                            "https://olive-rubber-aphid-157.mypinata.cloud/ipfs/QmSEFK6X69QxPg2cJXcTr7TsJ7qsprYkn66kCmXDWhb1yD/bharat-webnavigator-stable_128.0.6572.0-1_amd64.deb";
                                        }}
                                        >
                                        .deb
                                        <Image src="/download.svg" h={"16px"} />
                                    </Button>
                                </HStack>
                            </HStack>
                            </Stack>
                            <Stack
                            ps={"0.85rem"}
                            pe={"0.5rem"}
                            py={"6px"}
                            w={"full"}
                            fontSize={"14px"}
                            fontWeight={"500"}
                            lineHeight={"18px"}
                            >
                            <HStack
                                w={"full"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <HStack
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={"0.5rem"}
                                >
                                <Image h={"20px"} src="/macos-logo.svg" />
                                <Text>macOs</Text>
                                </HStack>

                                <Button
                                _hover={{ opacity: "0.5", bg: "gray.100" }}
                                variant={"none"}
                                type="button"
                                p="0"
                                onClick={() => {
                                    // goto public/installers/unsigned_bwn.dmg
                                    window.location.href = "https://olive-rubber-aphid-157.mypinata.cloud/ipfs/QmSEFK6X69QxPg2cJXcTr7TsJ7qsprYkn66kCmXDWhb1yD/BWN.dmg";
                                }}
                                >
                                <Image src="/download.svg" h={"16px"} />
                                </Button>
                            </HStack>
                            </Stack>
                        </VStack>

                    </motion.div>
                </Box>
            </HStack>
        </VStack>
    )
}