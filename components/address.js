import {required, minLength } from 'vuelidate/lib/validators';

const adress = {
  name: 'adress',
  data: () => ({
    index: '',
    country: '',
    oblast: '',
    city: '',
    street: '',
    house: '',
  }),
  validations: {
    city: {required, Name: value => /[a-zA-Zа-яА-Я]$/i.test(value)}
  },
  methods: {

  },

  template: `
    <div>
      <h2>Адрес</h2>
      <div class="wrapper">
        <label for="index">Индекс</label>
        <input type="text" placeholder="Индекс" id='index' v-model.trim="index">
      </div>
      <div class="wrapper">
        <label for="country">Страна</label>
        <input type="text" placeholder="Страна" id='country' v-model.trim="country">
      </div>
      <div class="wrapper">
        <label for="oblast">Область</label>
        <input type="text" placeholder="Область" id='oblast' v-model.trim="oblast">
      </div>
      <div class="wrapper">
        <label for="city">Город</label>
        <input type="text" placeholder="Город" id='city' v-model.trim="city"
        :class="{invalid: ($v.city.$dirty && !$v.city.required) || ($v.city.$dirty && !$v.city.Name)}"
        >
        <small class='invalid-err' v-if="$v.city.$dirty && !$v.city.required" >Поле Город не должно быть пустым</small>
        <small class='invalid-err' v-else-if="$v.city.$dirty && !$v.city.Name" >Имя не должно содержать цифры</small>

      </div>
      <div class="wrapper">
        <label for="street">Улица</label>
        <input type="text" placeholder="Улица" id='street' v-model.trim="street">
      </div>
      <div class="wrapper">
        <label for="house">Дом</label>
        <input type="text" placeholder="Дом" id='house' v-model.trim="house">
      </div>
    </div>
  `
}

export default adress;