import Vue from 'vue';
import Vuelidate from 'vuelidate';
import MyForm from './components/form';
Vue.config.devtools=true;

Vue.use(Vuelidate)
const app = new Vue({
  el: '#app',
  components: {
    MyForm,
  },
  data: {

  },
  methods: {

  },
})