import {required, minLength } from 'vuelidate/lib/validators';
import formMain from './formMain';
import adress from './address';
import passport from './passport';
import '../styles/styles.css';

const MyForm = {
  name: 'my-form',
  components: {
    formMain,
    adress,
    passport,
  },
  data: () => ({
    
  }),

  validations: {
    
  },
  methods: {
    submitHandler(){
      const components = ['formMain', 'adress', 'passport']
      components.forEach((el, idx) => {
        if (this.$refs[el].$v.$invalid){
          this.$refs[el].$v.$touch()
          return
        }else {
          if (idx !== components.length - 1){
            this.continue
          }else {
            alert('Новый клиент успешно создан!');
            // this.clearInputs(components)
          }
        }

      })
    },

    // clearInputs(components){
    //   components.forEach((el, idx) => {
    //     let data = this.$refs[el]._data
    //     for(let key in data){
    //       if (key == 'clientsGroup'){
    //         data[key] = []
    //       }else if (key == 'issuedDate'){
    //         data[key] = null
    //       }else {
    //         data[key] = '';
    //       }
    //     }
    //   })
    // },


  },
  mounted(){

  },
  template: `
    <form @submit.prevent="submitHandler">
      <formMain ref="formMain"></formMain>
      <adress ref="adress"></adress>
      <passport ref="passport"></passport>
      <button type="submit" value="Создать" class='create-button'>Создать</button>
    </form>
  `
}
export default MyForm