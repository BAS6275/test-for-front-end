<template>
  <div id="fetchPokemonsApi">
    <h1>PokemonsAPI</h1>
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="px-3 pt-3 pb-3"
    >
      <h2 class="d-flex justify-center">Pokemon</h2>
      <v-container
        ><v-row>
          <v-col cols="2" v-for="n in 18"
              :key="n">
            <v-skeleton-loader              
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col> 
          </v-row
      ></v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "fetchPokemonsApi",
  inject: ["theme"],
};
</script>

<style></style>
