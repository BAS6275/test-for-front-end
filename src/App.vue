<template>
  <v-app>
    <v-card
      class="mx-auto rounded-lg mt-3"
      width="1000"
      outlined
      dark
      color="#718096"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 d-flex justify-center"
            >Test Front-end</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <!-- bottom -->
    <div class="mx-auto rounded-lg ">
      <v-card-actions class="d-flex justify-center">
        <router-link to="/" exact=""><v-btn text>Home</v-btn></router-link>
        <router-link to="/Fetch-Pokemon's-API" exact="">
          <v-btn text>Pokemon</v-btn>
        </router-link>
        <router-link to="/Function-1"
          ><v-btn text>Function 1</v-btn></router-link
        >
        <router-link to="/Function-2"
          ><v-btn text>Function 2</v-btn></router-link
        >
        <router-link to="/Function-3"
          ><v-btn text>Function 3</v-btn></router-link
        >
      </v-card-actions>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
/* v-btn.router-link-active{
    
    background : blueviolet;
  } */
</style>
