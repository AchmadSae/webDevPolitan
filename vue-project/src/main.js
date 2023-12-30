import "./assets/main.css";
import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import $ from "jquery";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.component("Icon", Icon);

app.mixin({
  data() {
    return {
      slugText: "sample your %$ coverage",
      products: [],
      maximum: 20,
      cart: [],
      style: {
        convertDisplay: false,
      },
    };
  },
  mounted() {
    var $fixedBtn = $("#cartInfo"); // Select the button element using jQuery

    $(window).scroll(function () {
      console.log("Scroll");
      if ($(this).scrollTop() > 300) {
        // Adjust the scroll position as needed
      }
    });

    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data; // Assign the fetched data to the 'products' data property
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  },

  // },
  methods: {
    addToCart(item) {
      // Directly push the item into the cart array
      this.cart.push(item);
  
      // Update the length after pushing the item
      this.$nextTick(() => {
        console.log("Cart length:", this.cart.length);
      });
    },
    currencyFormat: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
  computed: {
    changeText: function () {
      return this.slugText
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    },
  },
  computed: {
    convertOff: function () {
      return this.style.convertDisplay ? "d-flex" : "d-none";
    },
  },
});

app.mount("#app");
