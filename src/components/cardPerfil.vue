<template>
  <div id="container">
    <div id="dadosGerais">
      <div id="logoConfig">
        <img
          src="https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_rick_and_morty_1147486360_1_20201210150106.jpg"
          id="logo"
        />
      </div>
      <div id="infoPessoa">
        <p>Nome: {{ dados.name }}</p>
        <p>Cidade: {{ dados.location }}</p>
        <p>Bio: {{ dados.bio }}</p>
      </div>

      <div class="realizarBuscar">
        <p><input type="text" v-model="nome"/></p>
        <button id="buscar" @click="buscarDados">Buscar</button>
      </div>
    </div>
  </div>
</template>


<script>
import Pessoa from "../services/pessoas";

export default {
  data() {
    return {
      dados: {},
      nome: ''
    };
  },
  methods: {
    buscarDados() {
      Pessoa.listar(this.nome).then(({ data }) => {
        this.dados = data;
        console.log(data);
      });
    },
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

#infoPessoa {
  width: 300px;
}

.realizarBuscar {
}

#buscar {
  border-radius: 5px;
  border-radius: 5px;
  margin-top: 65px;
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
}
</style>