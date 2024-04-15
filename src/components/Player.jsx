import { useState, useRef, useEffect } from 'react'
import { usePlayerStore } from "../store/playerStore"

export const Pause = () => (
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
    )
export const Play = () => (
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
    )



export function Player () {
const { isPlaying, setIsPlaying } = usePlayerStore(state => state) //Pedimos el estado global y las funciones para actualizarlo
const [currentSong, setCurrentSong] = useState(null);
const audioRef = useRef() //No olvidar agregar el elemento audio al final del HTML

useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`
}, []) //Establece la url del audio al renderizarse el componente

const handleClick = () => {
    if (isPlaying) {
        audioRef.current.pause() //Esto pausa el audio y también actualiza su estado interno 
        //para que se recuerde la posición en la que se detuvo.
    } else {
        audioRef.current.play()
        // el audio se reanuda desde la posición en la que se detuvo, 
        //porque esa posición se mantuvo en el estado interno del elemento de audio.


    }
    setIsPlaying(!isPlaying)
}
return (
    <div className="flex flex-row justify-between w-full px-4 z-50">

         <div>
        Current Song...
        </div>
        <div className="grid place-content-center gap-4 flex-1">
            <div className="flex justify-center">
                <button className="bg-white rounded-full p-2" onClick={handleClick}>
                    {isPlaying? <Pause /> : <Play />}
                </button>
            </div>
        
        </div>
        <div>
        Volumen...
        </div>
        <audio ref={audioRef} /> 
        
    </div>
)

}


