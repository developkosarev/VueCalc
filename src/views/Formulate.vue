<template>
  <div class="container">
    <h1>Formulate</h1>

    <!--
    <FormulateForm
      :errors="{
        username: 'That username is already taken',
        password: [
          'You can’t re-use an old password',
          'That password was too weak'
        ]        
      }"
      :form-errors="[
        'Sorry, an unexpected error occurred. Please try again soon.'
      ]"      
    >
      <FormulateInput name="username" label="Select a username" type="text" />
      <FormulateInput
        name="password"
        label="Choose your password"
        type="password"
      />
      <FormulateErrors />
      <FormulateInput type="submit" label="Submit Order" />
    </FormulateForm>
    -->

    <FormulateForm
      name="login"
      v-model="formValues"
      :form-errors="formErrors"
      :errors="inputErrors"
      #default="{ hasErrors }"
      @submit="login"
    >
      <FormulateInput type="email" name="email" validation="required|email" />
      <FormulateInput type="password" name="password" validation="required" />
      <FormulateErrors />
      <FormulateInput
        type="submit"        
        :disabled="hasErrors"        
      />
      <FormulateInput
        type="button"
        label="Reset"
        data-ghost
        @click="reset"
      />
      <pre class="code" v-text="formValues" />
      <pre class="code" v-text="formErrors" />
      <pre class="code" v-text="inputErrors" />
      <pre class="code" v-text="hasErrors" />
    </FormulateForm>

    <button @click="click">Validate</button>
  </div>
</template>

<script>
export default {
  name: "Formulate",
  data() {
    return {
      formValues: {},
      formErrors: [],
      inputErrors: {}
    };
  },
  methods: {
    async login() {
      try {
        setTimeout(() => console.log(111111), 3000);

        //const res = await this.$axios.post('/login')
        //this.$cookie.setToken(res.data.token) // do some auth
      } catch (err) {
        // here's where things get nasty
        //if (err.response && err.response.status) {
        //  switch (err.response.status) {
        //    case 422:
        //      this.inputErrors = err.response.data.errors // assign field errors
        //      this.formErrors = err.response.data.message
        //      return
        //    case 401:
        //      this.$cookie.removeToken()
        //      return
        //    // ... add lots more cases of bad things that can happen here
        //  }
        //}
        //this.formErrors = ['Sorry, an unexpected error occurred. Please try again soon..']
      }
    },
    reset () {
      this.$formulate.reset('login')
    },
    click() {
      //this.formErrors = ['eeeeeeeeeeeeee']
      console.log('Validate');

      let res = this.$formulate.submit('login');
      console.log(res);
    }
  }
};
</script>
