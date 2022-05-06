import axios from "axios";

// http://viacep.com.br/ws/01310930/json/ baseURL é a URl
// base da "api". Neste caso http://viacep.com.br/ws/   o restante é variável

const cepapi = axios.create({
    baseURL:"http://viacep.com.br/ws"
});

export default cepapi;

