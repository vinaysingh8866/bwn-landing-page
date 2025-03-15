import { Box, Button, HStack, Image, Stack, Text, VStack,  } from "@chakra-ui/react";
import { useRef,  } from "react";

/* eslint-disable no-empty-pattern */
interface NavbarProps{
    
}

export default function Navbar({}:NavbarProps ){
    // const [showDropdown,setShowDropdown]=useState(false)
    const dropdownRef=useRef<HTMLDivElement | null>(null)
    return(
        <HStack zIndex={2} bg={'white'} px={'1rem'} py={'10px'} w={'full'} justifyContent={'center'} position={'sticky'} top={0}>
            <HStack w={'full'} maxW={'1327px'} justifyContent={'space-between'} alignItems={'center'}>
                <Box height={{'base':'18px','md':'28px'}}>
                    <Image w={'full'} h={'full'} src="/logo-with-text.svg"/>
                </Box>
                <Box  position={'relative'}>
                    <Button zIndex={2} onClick={()=>dropdownRef?.current?.classList.toggle('dropdown-hide')} variant={'none'} type="button"py={'20px'} px={'28px'} bg={'#E72F3E'} color={'white'} lineHeight={'24px'} fontSize={'16px'} fontWeight={'600'} rounded={'full'} border={'1px solid #E72F3E'} _hover={{bg:{'md':'white'},color:'#E72F3E'}}>
                        <HStack display={{'base':'none','md':'flex'}} justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                            <Text>
                                Install BharatWeb Navigator
                            </Text>
                            <Image src="/arrow-down.svg" h={'16px'}/>
                        </HStack>
                        <Image display={{'base':'block','md':'none'}} fill={'white'} src="/download-w.svg" alt="Download" w={'1rem'} h={'1rem'}/>
                    </Button>

                    {/* Dropdown */}
                    <VStack
                        onMouseLeave={()=>dropdownRef?.current?.classList.add('dropdown-hide')} transition={'all 0.3s ease 0s'} border={'1px solid #0000001A'} ref={dropdownRef} className="dropdown-hide" zIndex={-1} top={'3rem'} right={'-1rem'} bg={'white'} position={'absolute'} shadow={'xl'} w={'full'} minW={'12rem'} maxW={'246px'} rounded={'lg'} gap={0}
                    >
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
                            <Image h={"20px"} src="/windows-logo.svg" />
                            <Text>Windows</Text>
                            </HStack>
                            <Button
                            _hover={{ opacity: "0.5", bg: "gray.100" }}
                            variant={"none"}
                            type="button"
                            p="0"
                            onClick={() => {
                                // goto public/installers/unsigned_bwn.exe
                                window.location.href = "https://drive.google.com/file/d/16xJkzrG_8QA83gzt-Q48GYMrpPNs6iRJ/view?usp=sharing";
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
                            <Image h={"20px"} src="/android-logo.svg" />
                            <Text>Android</Text>
                            </HStack>
                            <Button
                            _hover={{ opacity: "0.5", bg: "gray.100" }}
                            variant={"none"}
                            type="button"
                            p="0"
                            onClick={() => {
                                window.location.href = "https://drive.google.com/file/d/1m0AXhQFskIuTdZTzPlrPMl36392QwOHs/view?usp=drive_link";
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
                                        window.location.href ="";
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
                                        window.location.href = "";
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
                                window.location.href = "";
                            }}
                            >
                            <Image src="/download.svg" h={"16px"} />
                            </Button>
                        </HStack>
                        </Stack>
                    </VStack>
                </Box>
            </HStack>
        </HStack>
    )
}
