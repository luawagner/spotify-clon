import { Pause, Play } from "./Player"
import { usePlayerStore } from "../store/playerStore"

export function CardPlayButton ({ id }) {
const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)
/* Devuelve todo el estado global (state). Esto significa que el componente se volverá a renderizar 
cada vez que cualquier parte del estado global cambie. Es una forma de asegurarse de que el componente
 esté siempre actualizado con la última información del estado. 
 Si solo necesitara el valor de isPlaying, podría usar usePlayerStore(state => state.isPlaying) 
 para que el componente solo se vuelva a renderizar cuando isPlaying cambie.*/
   
 const handleClick = () => {
setCurrentMusic({ 
    // seteamos el currentMusic pasándole un objeto con la id de la playlist.
    playlist: {
        id
    }
})

    setIsPlaying(!isPlaying)
 } //negamos el estado anterior

/*Este componente recibe por prop una id de la plyslist que estamos intentando reproducir.
Para identificar cuál es la playlist cuyo botón debe cambiar (si le doy play que muestre pausa y viceversa),
se cambiará el botón de la card(playlist) cuya id coincida 
con la id de la playlist guardada en el estado.
*/
const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
 return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4">
           {isPlayingPlaylist ? <Pause /> : <Play />} 
        </button>
    )
} /* Cuando de click al play, los botones play (card y player) 
pasarán a pausa porque el esato de isPlaying es global y a cada boton le indicamos lo mismo
{isPlaying ? <Pause /> : <Play />} */