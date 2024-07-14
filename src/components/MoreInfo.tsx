import { Text, VStack } from "@chakra-ui/react";

/* eslint-disable no-empty-pattern */
interface MoreInfoProps{
    
}

export default function MoreInfo({}:MoreInfoProps ){
    return(
        <VStack position={'relative'} bg={'#D02230'} w={'full'} h={'clamp(30rem,50vh,37rem)'} justifyContent={'center'} _after={{content:'""',bgImage:'/more-info-bg.svg',position:'absolute',inset:'0'}}>
            <VStack justifyContent={'center'} alignItems={'center'} textAlign={'center'} gap={'0rem'} w={'full'} maxW={'1248px'} px={'1rem'} py={'1.5rem'}>
                <Text data-aos="zoom-in-up" data-aos-delay='200' ata-aos-duration='1000' fontSize={'40px'} lineHeight={'60px'} fontWeight={'700'} color={'white'}>Next Step in Digital Freedom</Text>
                
                <Text  mt={'1rem'} fontSize={'24px'} lineHeight={'36px'} fontWeight={'700'} color={'white'}>
                Worlds First Non Custodial Desktop SSI(Self Soverign Indentity) Agent
                </Text>
                
                <Text  fontSize={'20px'} lineHeight={'30px'} fontWeight={'400'} color={'white'}>
                    Introducing the world's first non-custodial desktop SSI agent, a groundbreaking software that empowers users to fully control and manage their digital identities directly from their desktop computers, without relying on third-party custodians. This innovation ensures enhanced privacy, security, and autonomy in the digital identity landscape.
                </Text>
            </VStack>

        </VStack>
    )
}