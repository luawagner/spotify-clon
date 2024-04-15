import { Pause, Play } from "./Player"
import { usePlayerStore } from "../store/playerStore"

export function CardPlayButton ({ id }) {
const { currentSong, isPlaying, setIsPlaying, setCurrentSong } = usePlayerStore(state => state)
/* Devuelve todo el estado global (state). Esto significa que el componente se volverá a renderizar 
cada vez que cualquier parte del estado global cambie. Es una forma de asegurarse de que el componente
 esté siempre actualizado con la última información del estado. */
    return (
        <div className="card-play-button rounded-full bg-green-500 p-4">
           {isPlaying ? <Pause /> : <Play />} 
        </div>
    )
}