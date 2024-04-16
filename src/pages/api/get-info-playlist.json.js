import { allPlaylists, songs as allSongs } from "../../lib/data"
//creamos un API
export async function GET({ params, request }) {
    //recuperar la id de la url
    const { url } = request
    //const [, querystring] = url.split("?") 
    /*Con el split separamos el params por medio del "?"
    [, querystring] -> así descartamos la primera parte desestructurando.
    Otra forma de hacerlo sería:
    const querystring = url.split("?")[1]
    y nos quedamos con la segunda que la nombramos querystring */
const urlObject = new URL(url)
const id = urlObject.searchParams.get('id') 

//buscamos la playlist que tena la misma id
const playlist = allPlaylist.find((playlist) => playlist.id === id)
//Buscamos las canciones que perteneces a esa playlist
const songs = allSongs.filter(song => song.albumId === playlist?.albumId)
return ner Response(JSON.stringify({ playlist, songs }){
    headers: { "content-type": "application/json"}
})

}