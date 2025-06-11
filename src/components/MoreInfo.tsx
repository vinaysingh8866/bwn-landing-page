import { Text, VStack } from "@chakra-ui/react";
import FadeUp from "./FadeUp";

/* eslint-disable no-empty-pattern */
interface MoreInfoProps{
    
}

export default function MoreInfo({}:MoreInfoProps ){
    return(
        <VStack position={'relative'} bg={'#D02230'} w={'full'} h={{'base':'full','md':'clamp(30rem,50vh,37rem)'}} justifyContent={'center'} _after={{content:'""',bgImage:'/more-info-bg.svg',position:'absolute',inset:'0'}}>
            <VStack justifyContent={'center'} alignItems={'center'} textAlign={'center'} gap={'0rem'} w={'full'} maxW={'1248px'} px={'1rem'} py={{'base':'5rem','md':'1.5rem'}}>
                <FadeUp delay={0.05}>
                    <Text 
                    // data-aos="zoom-in-up" data-aos-delay='200' ata-aos-duration='1000' 
                    fontSize={{'base':'28px','md':'40px'}} lineHeight={{'base':'40px','md':'60px'}} fontWeight={'700'} color={'white'}>Next Step in Digital Freedom</Text>
                </FadeUp>
                <Text  mt={'1rem'} fontSize={{'base':'18px','md':'24px'}} lineHeight={{'base':'24px','md':'36px'}} fontWeight={'700'} color={'white'}>
                Worlds First Non Custodial Desktop SSI(Self Soverign Indentity) Agent
                </Text>
                
                <Text  fontSize={{'base':'16px','md':'20px'}} lineHeight={{'base':'20px','md':'30px'}} fontWeight={'400'} color={'white'}>
                    Introducing the world's first non-custodial desktop SSI agent, a groundbreaking software that empowers users to fully control and manage their digital identities directly from their desktop computers, without relying on third-party custodians. This innovation ensures enhanced privacy, security, and autonomy in the digital identity landscape.
                </Text>
            </VStack>

        </VStack>
    )
}