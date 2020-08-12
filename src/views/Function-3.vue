<template>
  <div id="function3">
    <div class="d-flex justify-center">
      <div class="mb-8">
        <!-- <h2>Numbers = {{ number }}</h2> -->

        <v-text-field
          type="number"
          placeholder="input number 1"
          v-model="number[0]"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="input number 2"
          v-model="number[1]"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="input number 3"
          v-model="number[2]"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="input number 4"
          v-model="number[3]"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="input number 5"
          v-model="number[4]"
        ></v-text-field>
        <v-text-field
          type="number"
          placeholder="input number 6"
          v-model="number[5]"
        ></v-text-field>
        <h2 v-if="displayResult">Second Max = {{ max }}</h2>
        <v-btn class="mr-4" @click="findMax2, (displayResult = true)"
          >Find Second Max</v-btn
        >
        <v-btn class="mr-4" @click="clear">Clear</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "function3",
  data() {
    return {
      number: [],
      sortedNum: [],
      max: "",
      displayResult: false,
    };
  },
  methods: {
    sortedArray() {
      this.sortedNum = this.number.sort(function(a, b) {
        return a - b;
      });
    },
    findMax2() {
      this.sortedArray();
      if (this.sortedNum.length > 1) {
        this.max = this.sortedNum[this.sortedNum.length - 2];
      } else if (this.sortedNum.length == 1) {
        this.max = this.sortedNum;
      } else {
        this.max = "null";
      }
      console.log(this.max);
    },
    clear() {
      this.number = [];
      this.displayResult = false;
    },
  },
};
</script>

<style>
.setWidth {
  width: 500px;
}
</style>
