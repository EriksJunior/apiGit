import { http } from './config'

export default {
    listar: (nome) => {
        return http.get(`${nome}`)
    }
}