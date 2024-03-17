<template>
  <div>
    <h3>Phone Input</h3>
    <FormulateInput
      v-bind="$attrs"
      id="phone"
      ref="tel"
      name="telephone"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default {
  name: "PhoneInput",
  data() {
    return {
      current: null
    };
  },
  mounted() {
    console.log(1);
    //const initOption = {
    //  initialCountry: "us"
    //}

    console.log(this.$refs.tel.$el);

    //const input = document.querySelector("#phone");
    const input = this.$refs.tel.$el.querySelector("#phone");
    this.current = intlTelInput(input, {
      initialCountry: "de"
    });
    input.addEventListener("countrychange", this.update);

    console.log(2);
  },
  unmount() {
    const input = this.$refs.tel.$el.querySelector("#phone");
    input.removeEventListener("countrychange", this.update);
  },
  methods: {
    update() {
      console.log("update");
      const num = this.current.getNumber();
      const countryIso = this.current.getSelectedCountryData().iso2;

      console.log(num);
      console.log(this.current.isValidNumber());
      console.log(countryIso);
      console.log("update-2");
    }
  }
};
</script>
