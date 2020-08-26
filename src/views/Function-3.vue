<template>
  <div id="function3">
    <div id="div1" class="mt-8 d-flex justify-center">
      <div id="div2" class="mt-2 setWidth">
        <v-container grid-list-xs>
          <v-row>
            <v-col cols="6">
              <v-btn class="mr-4" @click="clear" color="error">Clear</v-btn>
              <v-btn class="mr-4" @click="findMax2nd">Find second max</v-btn>
              <v-text-field
                v-for="(n, index) in numberOfInput"
                :key="index"
                type="number"
                placeholder="input number "
                v-model.number="number[index]"
              >
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <div class="d-flex justify-center">
                <v-btn color="info" @click="numberOfInput += 1"
                  >Add a number</v-btn
                >
              </div>
              <div v-if="isActive">
                List of numbers :
                <span v-for="(n, index) in number" :key="index"> {{ n }}</span>
              </div>
              <v-card
                class="d-flex align-center justify-center pa-4 mx-auto"
                max-width="550"
                min-height="76"
                outlined
                v-if="isActive"
              >
                <div>Max2nd = {{ max2nd }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- <v-text-field
          max="10"
          min="1"
          label="Main input"
          type="number"
          name="numberOfInput"
          v-model.number="numberOfInput"
          :rules="rules"
          @input="test($event)"
        ></v-text-field> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: [],
      sortedNum: [],
      max: 0,
      max2nd: null,
      isActive: false,
      //ตัว Input
      numberOfInput: 1,
      // rules: [
      //   (value) => !!value || "Required.",
      //   (value) => (value && value <= 10) || "max 10 ",
      // ],
    };
  },
  methods: {
    sortedArray() {
      this.sortedNum = this.number.sort(function(a, b) {
        return a - b;
      });
      console.log(this.sortedNum);
    },
    findMax() {
      this.sortedArray();
      // this.max = this.sortedNum[this.sortedNum.length - 1];
      this.max = Math.max(...this.sortedNum);
      console.log("ค่าแม็ก" + this.max);
    },
    findMax2nd() {
      this.sortedArray();
      this.findMax();
      this.isActive = true;
      // เช็คหาค่าสูงสุดลำดับ 2
      for (let i = this.sortedNum.length; i >= 0; i--) {
        if (this.max > this.sortedNum[i]) {
          this.max2nd = this.sortedNum[i];
          break;
        } else if (this.sortedNum.length === 1 ) {
          this.max2nd = this.sortedNum[i];
        } else if (this.max === this.sortedNum[0]){
          this.max2nd = this.max;
        } else {
          this.max2nd = "null";
        }
        // else if (this.sortedNum[i] == )
      }
      console.log("ค่าแม็กที่2 " + this.max2nd);
    },

    test() {
      console.log(typeof this.numberOfInput);
    },
    clear() {
      this.number = [];
      this.sortedNum = [];
      this.max = 0;
      this.max2nd = null;
      this.isActive = false;
      //ตัว Input
      this.numberOfInput = 1;
    },
  },
};
</script>

<style>
.setWidth {
  width: 500px;
}
</style>
