import {http} from '../configuração/config'




export default {


salvar:(user) =>{


return http.post('/createuser',user )
}

}