import './animation.scss'

type AnimatedLettersProps={
    letterClass:string,
    strAry:Array<string>,
    idx:number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styles:any
}

const AnimatedLetters=({letterClass,strAry,idx,styles}:AnimatedLettersProps)=>{
    return(
        <span>
            {strAry.map((char,i)=>{
               return  <span style={{...styles}} key={char+i} className={`${letterClass} _${i+idx}`}> {char} </span>
            })}
        </span>

    )
}

export default AnimatedLetters;