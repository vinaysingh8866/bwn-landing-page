import { Text, VStack } from "@chakra-ui/react";
import IntroCard from "./IntroCard";
import FadeUp from "./FadeUp";
// import { useEffect } from "react";
// import AOS from 'aos';


/* eslint-disable no-empty-pattern */
interface IntroProps{
    
}

export default function Intro({}:IntroProps ){
    // useEffect(()=>{
    //     AOS.init()
    // },[])
    return(
        <VStack w={'full'}    justifyContent={'center'} alignItems={'center'} py={'5rem'} gap={'5rem'}>
            <FadeUp delay={0.05}>
                <Text data-aos="fade-up" data-aos-duration='1000' className="intro-heading" fontSize={{'base':'30px','md':'40px'}} w={'full'} maxW={'1327px'} lineHeight={{'base':'40px','md':'50px'}} fontWeight={'600'} textAlign={'center'} px={'1rem'}>
                    Avant Garde Feature Set
                </Text>
            </FadeUp>

            <VStack w={'full'} justifyContent={'center'} alignItems={'center'} gap={{'base':'5rem','md':'13rem'}}>
                <IntroCard imgOnLeft={false} imgAddress={'/chatbot.webm'}>
                    <VStack justifyContent={'center'} alignItems={'start'}>
                        <Text fontSize={{'base':'30px','md':'40px'}} lineHeight={{'base':'36px','md':'60px'}} fontWeight={'700'}>Chatbots</Text>

                        <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'28px','md':'32px'}} fontWeight={'700'}>
                        Real-Time Help and Personalised Suggestions.
                        </Text>

                        <Text  fontWeight='400'
                        fontSize={{'base':'16px','md':'18px'}} lineHeight={{'base':'24px','md':'27px'}}>
                        Get instant page summaries, contextual assistance, and interactive tutorials. Enjoy personalised product recommendations, quick translations, and optimised searches. Easily annotate, share, and discuss pages, with added privacy insights and enhanced shopping through price comparisons and deal tracking.
                        </Text>

                        {/* <Button mt={'1rem'} fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'} color={'white'} variant={'none'} border={'1px solid #1966C0'} bg={'#1966C0'} px={'28px'} py={'20px'} rounded={'full'} _hover={{bg:'transparent',color:'#1966C0'}} type="button">
                            Button
                        </Button> */}
                    </VStack>
                </IntroCard>

                <IntroCard imgOnLeft={true} imgAddress={'/wallet.webm'}>
                    <VStack justifyContent={'center'} alignItems={'start'}>
                        <Text fontSize={{'base':'30px','md':'40px'}} lineHeight={{'base':'36px','md':'60px'}} fontWeight={'700'}>Digital Identity Wallet</Text>

                        <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'28px','md':'32px'}} fontWeight={'700'}>
                        Effortless and Secure Digital Transactions
                        </Text>

                        <Text fontWeight='400'
                        fontSize={{'base':'16px','md':'18px'}} lineHeight={{'base':'24px','md':'27px'}}>
                        Enhance convenience and security with seamless e-signing, ensuring transaction authenticity and integrity. Meet legal e-signature requirements and manage certificates easily. Establish trust online and streamline workflows for personal and professional use.
                        </Text>


                        {/* <Button mt={'1rem'} fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'} color={'white'} variant={'none'} border={'1px solid #1966C0'} bg={'#1966C0'} px={'28px'} py={'20px'} rounded={'full'} _hover={{bg:'transparent',color:'#1966C0'}} type="button">
                            Button
                        </Button> */}
                    </VStack>
                </IntroCard>

                <IntroCard imgOnLeft={false} imgAddress={'/ssi.webm'}>
                    <VStack justifyContent={'center'} alignItems={'start'}>
                        <Text fontSize={{'base':'30px','md':'40px'}} lineHeight={{'base':'36px','md':'60px'}} fontWeight={'700'}>Certificate Generator</Text>

                        <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'28px','md':'32px'}} fontWeight={'700'}>
                        Efficient, Secure Document Authentication.
                        </Text>

                        <Text fontWeight='400'
                        fontSize={{'base':'16px','md':'18px'}} lineHeight={{'base':'24px','md':'27px'}}>
                        Create and manage digital certificates within your browser to authenticate and sign documents with legal compliance. Enhance security for transactions, secure emails, and authenticate users effortlessly. Streamline workflows and reduce costs for both personal and enterprise use.
                        </Text>

                        {/* <Button mt={'1rem'} fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'} color={'white'} variant={'none'} border={'1px solid #1966C0'} bg={'#1966C0'} px={'28px'} py={'20px'} rounded={'full'} _hover={{bg:'transparent',color:'#1966C0'}} type="button">
                            Button
                        </Button> */}
                    </VStack>
                </IntroCard>

                <IntroCard imgOnLeft={true} imgAddress={'/SEARCH.webm'}>
                    <VStack justifyContent={'center'} alignItems={'start'}>
                        <Text fontSize={'16px'} lineHeight={'24px'} fontWeight={'400'}>
                        Simplify and enhance your browsing with
                        </Text>

                        <VStack mt={'2rem'} justifyContent={'center'} alignItems={'start'} gap={'2rem'}>
                            <VStack  justifyContent={'center'} alignItems={'start'} gap={'1rem'}>
                                <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'32px','md':'36px'}} fontWeight={'700'}>Research Mode</Text>
                                <Text fontSize={{'base':'18px','md':'20px'}} lineHeight={{
                                    'base':'26px','md':'30px'}} fontWeight={'400'}>
                                Easily conduct in-depth research on any topic. Access a vast database of scientific papers, review studies, and gather accurate information efficiently.
                                </Text>
                            </VStack>

                            <VStack justifyContent={'center'} alignItems={'start'} gap={'1rem'}>
                                <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'32px','md':'36px'}} fontWeight={'700'}>DocSign</Text>
                                <Text fontSize={{'base':'18px','md':'20px'}} lineHeight={{
                                    'base':'26px','md':'30px'}} fontWeight={'400'}>
                                Effortlessly fill, annotate, and sign PDFs. This allows users to complete forms, add notes, and apply legally binding signatures using generated digital certificates.
                                </Text>
                            </VStack>

                            <VStack justifyContent={'center'} alignItems={'start'} gap={'1rem'}>
                                <Text fontSize={{'base':'20px','md':'24px'}} lineHeight={{'base':'32px','md':'36px'}} fontWeight={'700'}>Scanner</Text>
                                <Text fontSize={{'base':'18px','md':'20px'}} lineHeight={{
                                    'base':'26px','md':'30px'}} fontWeight={'400'}>
                                    Effortlessly scan QR codes directly from your screen, documents, or using your device's camera.
                                </Text>
                            </VStack>
                        </VStack>
                        {/* <Button mt={'1rem'} fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'} color={'white'} variant={'none'} border={'1px solid #1966C0'} bg={'#1966C0'} px={'28px'} py={'20px'} rounded={'full'} _hover={{bg:'transparent',color:'#1966C0'}} type="button">
                            Button
                        </Button> */}
                    </VStack>
                </IntroCard>

            </VStack>
        </VStack>
    )
}