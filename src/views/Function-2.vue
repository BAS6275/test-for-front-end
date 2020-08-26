<template>
  <div id="function2">
    <div class="d-flex justify-center">
      <v-card width="500">
        <h1 class="ml-4">Date Format</h1>
        <v-card-text>
          <p><span>แบบเดิม </span>{{ d }}</p>
          <p><span>แปลง </span>{{ d | moment("DD/MM/YYYY h:mm ") }}</p>
          <p><span>แปลง </span>{{ d | moment("DD MMMM YYYY h:mm ") }}</p>
          <p><span>จำนวนวันในเดือนนี้ </span>{{ nDayInMont }}</p>
          <p><span>ไตรมาสที่ </span>{{ thisQuoter }}</p>
          <p><span>Time Stamp Unix </span>{{ timeUX }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "function2",
  mounted() {
    this.dayAmountOFmont();
    this.whatsThisQuoter();
    this.timeStamp();
  },
  data() {
    return {
      d: new Date(),
      nDayInMont: 0,
      thisQuoter: "",
      timeUX: "",
    };
  },
  methods: {
    dayAmountOFmont() {
      let mont = this.d.getMonth() + 1;
      const kom = [1, 3, 5, 7, 8, 10, 12];
      const yon = [4, 6, 9, 11];

      for (let i = 0; i <= 7; i++) {
        if (mont == kom[i]) {
          this.nDayInMont = 31;
          break;
        } else if (mont == yon[i]) {
          this.nDayInMont = 30;
          break;
        } else {
          this.nDayInMont = 28;
        }
        console.log(mont);
      }
    },
    whatsThisQuoter() {
      let mont = this.d.getMonth() + 1;
      if (mont / 3 > 3) this.thisQuoter = 4;
      else if (mont / 3 > 2) this.thisQuoter = 3;
      else if (mont / 3 > 1) this.thisQuoter = 2;
      else this.thisQuoter = 1;
      console.log(`mont ${mont}`);
    },
    timeStamp() {
      this.timeUX = this.d.getTime();
    },
  },
};
</script>

<style>
span {
  color: tomato;
}
</style>
