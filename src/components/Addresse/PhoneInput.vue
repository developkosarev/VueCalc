<template>
  <div>
    <h3>Phone Input</h3>
    <FormulateInput
      v-bind="$attrs"
      ref="tel"
      name="telephone"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
  mounted() {
    //const initOption = {
    //  initialCountry: "us"
    //}
    console.log(1)
  }
};
</script>
