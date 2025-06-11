import { ReactNode, useRef } from "react"
import {motion, useInView} from 'motion/react'

interface FadeUpProps{
    children:ReactNode;
    delay?:number
}

export default function FadeUp({children,delay}:FadeUpProps ){
    const contRef = useRef<HTMLDivElement | null>(null)
    const inView = useInView(contRef,{once:false,initial:false,amount:0.05})
    return(
        <motion.div animate={{
                opacity:inView ? 1 : 0,
                y:inView ? '0px' : '100px'
            }} transition={{type:'tween',delay:delay ?? 0}} ref={contRef} style={{width:'100%'}} > 
            {children}
        </motion.div>
    )
}