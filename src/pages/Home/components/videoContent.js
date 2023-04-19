import video2 from './videos/video1.mp4'
import {forwardRef, useImperativeHandle ,useRef} from 'react'


function VideoContent(props,ref){
const videoRef=useRef()
    useImperativeHandle(ref,()=>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video 
        ref={videoRef}
        src={video2}
        width={280}
    />
    )
}
export default forwardRef(VideoContent)