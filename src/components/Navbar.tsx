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
                <Box height={'28px'}>
                    <Image w={'full'} h={'full'} src="/logo-with-text.svg"/>
                </Box>
                <Box  position={'relative'}>
                    <Button zIndex={2} onClick={()=>dropdownRef?.current?.classList.toggle('dropdown-hide')} variant={'none'} type="button"py={'20px'} px={'28px'} bg={'#E72F3E'} color={'white'} lineHeight={'24px'} fontSize={'16px'} fontWeight={'600'} rounded={'full'} border={'1px solid #E72F3E'} _hover={{bg:'white',color:'#E72F3E'}}>
                        <HStack justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                            <Text>
                                Install BharatWeb Navigator
                            </Text>
                            <Image src="/arrow-down.svg" h={'6.77px'}/>
                        </HStack>
                    </Button>

                    {/* Dropdown */}
                    <VStack onMouseLeave={()=>dropdownRef?.current?.classList.add('dropdown-hide')} transition={'all 0.3s ease 0s'} border={'1px solid #0000001A'} ref={dropdownRef} className="dropdown-hide" zIndex={-1} top={'3rem'} right={'-1rem'} bg={'white'} position={'absolute'} shadow={'xl'} w={'full'} maxW={'246px'} rounded={'lg'} gap={0}>

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
        </HStack>
    )
}