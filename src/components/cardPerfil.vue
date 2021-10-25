<template>
  <div id="container">
    <div id="dadosGerais">
      <div id="logoConfig">
        <img
          :src="dados.avatar_url != '' ? dados.avatar_url : avatar"
          id="logo"
        />
      </div>
      <div id="infoPessoa">
        <p>Nome: {{ dados.name }}</p>
        <p>Cidade: {{ dados.location }}</p>
        <p>Bio: {{ dados.bio }}</p>
      </div>

      <div class="realizarBuscar">
        <p ><input type="text" placeholder="nome..." v-model="nome"/></p>
        <button class="buscar" @click="buscarDados">BUSCAR</button>
        <button class="buscar" @click="limparBusca">LIMPAR</button>
      </div>
    </div>
  </div>
</template>


<script>
import { http } from "../services/config"

export default {
  data() {
    return {
      dados: {name: '', bio: '', location: '', avatar_url: ''},
      nome: '',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    };
  },
  methods: {
    async buscarDados() {
      try {
        if(this.nome === ''){
            alert('Informe um nome para realizar a busca')
            return 
          }
        const {data} = await http.get(`users/${this.nome}`)
        Object.assign(this.dados, data)
        this.nome = ''
        console.log(data)
        return data
        
      } catch (error) {
        alert('Usuario não encontrado')
      }
    },
    limparBusca(){
      this.dados.name = ''
      this.dados.bio = ''
      this.dados.location = ''
      this.dados.avatar_url = ''
    }
  },
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  width: 350px;
  height: 95%;
  background: rgb(51, 51, 109);
  border-radius: 5px;
}

input{
  border-radius: 5px;
  height: 25px;
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

#infoPessoa {
  width: 300px;
}

.realizarBuscar {
}

.buscar {
  border-radius: 5px;
  border-radius: 5px;
  margin-top: 65px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  box-shadow: 0px;
  outline: none;
  height: 25px;

}

p {
  color: wheat;
  font-family: "Courier New", Courier, monospace;
}

#dadosGerais {
  max-width: 350px;
  text-align: center;
}

#logo {
  cursor: pointer;
  width: 150px;
  height: 150px;
  margin-top: 8px;
  background-color: white;
  border-radius: 50%;
  outline: none;
}
</style>