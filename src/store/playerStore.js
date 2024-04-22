import { create } from "zustand";

export const usePlayerStore =  create((set) => ({ //callback ->set -> actuzaliza estado
    isPlaying: false, //definición de estado inicial
    currentMusic: { playlist: null, song: null, songs: []},//definición de estado inicial
    volume: 1,
    //se definen las funciones para actulizar estados
    setVolume: (volume) => set({volume}),
    setIsPlaying: (isPlaying) => set({ isPlaying }),//actualiza el estado isPlaying con el parámetro isPlaying
    setCurrentMusic: (currentMusic) => set({ currentMusic })//lo mismo acá
}))
//Al usar usePlayerStore podemos acceder al estado global y las funciones para actualizarlo
