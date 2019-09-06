import {createStore} from 'redux'

const initialState = {
    jugadores: [
        {id:1, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rui/large/17098.png", nombre: "Rui Patrício"},
        {id:2, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/l/lop/large/18729.png", nombre: "Anthony Lopes"},
        {id:3, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/bet/large/19510.png", nombre: "Beto"},
        {id:4, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/bru/large/14307.png", nombre: "Bruno Alves"},
        {id:5, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/p/pep/large/15365.png", nombre: "Pepe"},
        {id:6, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rap/large/22795.png", nombre: "Raphael Guerreiro"},
        {id:7, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/f/fon/large/20756.png", nombre: "Fonte"},
        {id:8, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rub/large/34331.png", nombre: "Rúben Dias"},
        {id:9, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/ric/large/23489.png", nombre: "Ricardo Pereira "},
        {id:10, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mar/large/25369.png", nombre: "Mário Rui"},
        {id:11, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/c/ced/large/21386.png", nombre: "Cedric Soares"},
        {id:12, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/man/large/17016.png", nombre: "Manuel Fernandes"},
        {id:13, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mou/large/16492.png", nombre: "Moutinho"},
        {id:14, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/j/joa/large/25946.png", nombre: "João Mário"},
        {id:15, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/ber/large/25769.png", nombre: "Bernardo Silva"},
        {id:16, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/w/wil/large/24457.png", nombre: "William Carvalho"},
        {id:17, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/b/bru/large/22536.png", nombre: "Bruno Fernandes"},
        {id:18, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/s/sil/large/17220.png", nombre: "Adrien Silva"},
        {id:19, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/c/cri/large/14558.png", nombre: "Cristiano"},
        {id:20, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/a/and/large/31985.png", nombre: "André Silva"},
        {id:21, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/g/gon/large/30466.png", nombre: "Gonçalo Guedes"},
        {id:22, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/g/gel/large/31753.png", nombre: "Gelson Martins"},
        {id:23, foto: "http://as01.epimg.net/img/comunes/fotos/fichas/deportistas/q/qua/large/14438.png", nombre: "Quaresma"}
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador)