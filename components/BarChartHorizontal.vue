<template>
  <div class="level">
    <v-card-subtitle class="sidebar rounded-lg pt-3 pb-3">
      Position
    </v-card-subtitle>
    <div
      class="chart"
      id="barchart"
      style="width: 100%; height: 34vh"
      :accurate="accurate"
      :acceptable="acceptable"
      :fail="fail"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      grid: {
        left: 100,
        top: 20,
        right: 80,
        bottom: 40,
      },
      xAxis: {
        name: "Trial",
        nameTextStyle: {
          fontSize: 12,
          color: "#fff",
        },
        axisLabel: {
          fontSize: 13,
          // verticalAlign: "bottom",
          textStyle: {
            color: "#fff",
          },
          interval: 1,
        },
      },
      yAxis: [
        {
          type: "category",
          axisLabel: {
            fontSize: 13,
            textStyle: {
              color: "#fff",
            },
          },
          data: ["Fail", "Acceptable", "Accurate"],
        },
      ],
      series: [
        {
          type: "bar",
          encode: {
            x: "Trial",
            y: "product",
          },
          data: [
            {
              value: 2,
              itemStyle: {
                color: "#c73a3a",
                // borderColor:"red",
                // borderWidth:2,
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
            {
              value: 2,
              itemStyle: {
                color: "#3a41c7",
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
            {
              value: 2,
              itemStyle: {
                color: "#30ab61",
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
          ],
        },
      ],
    };
    var myChart = this.$echarts.init(document.getElementById("barchart"));
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

  updated() {
    const option = {
      grid: {
        left: 100,
        top: 20,
        right: 80,
        bottom: 40,
      },
      xAxis: { name: "Trial" },
      yAxis: [{ type: "category", data: ["Fail", "Acceptable", "Accurate"] }],
      series: [
        {
          type: "bar",
          encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product",
          },
          data: [
            {
              value: this.fail,
              itemStyle: {
                color: "#c73a3a",
                // borderColor:"red",
                // borderWidth:2,
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
            {
              value: this.acceptable,
              itemStyle: {
                color: "#3a41c7",
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
            {
              value: this.accurate,
              itemStyle: {
                color: "#30ab61",
                // shadowBlur:5,
                opacity: 0.8,
              },
            },
          ],
        },
      ],
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
  props: ["id", "accurate", "acceptable", "fail"],
};
</script>

<style scoped>
.v-card__subtitle {
  font-size: 0.9em;
  padding: 0px 0px 0px 40px;
  color: aliceblue;
}
</style>
