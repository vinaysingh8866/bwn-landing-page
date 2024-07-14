import { HStack, Image, Text, VStack } from "@chakra-ui/react";

interface FooterProps{
    
}

// eslint-disable-next-line no-empty-pattern
export default function Footer({}:FooterProps ){
    return(
        <VStack w={'full'} h={'clamp(15rem,35vh,289px)'} bg={'#000'} justifyContent={'center'} >
            <HStack  w={'full'} maxW={'1327px'} justifyContent={'space-between'} alignItems={'center'} gap={'1rem'} px={'1.5rem'} py={'1.5rem'}>
                <HStack>
                    <Text textAlign={'center'} fontWeight={'700'} fontSize={'24px'} lineHeight={'36px'} color={'white'}>
                        Made with 🧡 In 
                    </Text>
                    <Image h={'36px'} src="/indian-flag.svg"/>
                </HStack>

                <Image src="/footer-right.svg"/>
            </HStack>
        </VStack>
    )
}