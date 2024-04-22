import { useState, useRef, useEffect } from 'react'
import { usePlayerStore } from "../store/playerStore"

export const Pause = () => (
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
    )
export const Play = () => (
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
    )

//Componente 
const CurrentSong = ({ image, title }) => {
    return (
        <div className={`flex items-center gap-5 relative overflow-hidden`}>
        <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
<img src={image} alt={title} />
        </picture>
        <h3 className="font-bold block"> { title }</h3>
         </div>
    )
}



export function Player () {
const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state) //Pedimos el estado global y las funciones para actualizarlo
//const [currentSong, setCurrentSong] = useState(null); <---Todo esto era a nivel componente, ahora manejamos el estado global.
const audioRef = useRef() //No olvidar agregar el elemento audio al final del HTML
 
//Vigilamos el estado global de isPlaying
useEffect(() => {
isPlaying
? audioRef.current.play()
: audioRef.current.pause()
}, [isPlaying])

//Cuando cambie la playlist cambiamos la reproducción de la música
useEffect(() => {
const { song, playlist, songs } = currentMusic
if (song) {
const src = `/music/${playlist?.id}/0${song.id}.mp3`
audioRef.current.src = src 
audioRef.current.play()
}
}, [currentMusic])
/*
useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`
}, []) //Establece la url del audio al renderizarse el componente
*/
const handleClick = () => {
   /* if (isPlaying) {
        audioRef.current.pause() //Esto pausa el audio y también actualiza su estado interno 
        //para que se recuerde la posición en la que se detuvo.
    } else {
        audioRef.current.play()
        // el audio se reanuda desde la posición en la que se detuvo, 
        //porque esa posición se mantuvo en el estado interno del elemento de audio.
 } <-- Todo esto era a nivel componente, ahora manejamos el estado global.
*/
    setIsPlaying(!isPlaying)
}
return (
    <div className="flex flex-row justify-between w-full px-4 z-50">

         <div>
        <CurrentSong {...currentMusic.song} />
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


