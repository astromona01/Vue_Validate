import {required, minLength } from 'vuelidate/lib/validators';

const formMain = {
  name: 'formMain',
  data: () => ({
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    date: '',
    tel: '',
    clientsGroup: [],
    smsControl: '',
    doctor: ''
  }),
  validations: {
    name: {required, Name: value => /^[a-zA-Zа-яА-Я]{3,15}$/.test(value)},
    surname: {required, Surname: value => /^[a-zA-Zа-яА-Я]{3,15}$/.test(value)},
    date: {required, minValue: value => value < new Date('2005.01.01').toISOString()},
    tel: {required, Value: value => /(7)[0-9]{10}$/.test(value)},
    clientsGroup: {required,}
  },
  updated(){

  },

  template: `
    <div>
      <div class="wrapper">
        <label for="surname">Фамилия</label>
        <input type="text" name="Фамилия" id="surname" placeholder="Фамилия" v-model.trim="surname"
        :class="{invalid: ($v.surname.$dirty && !$v.surname.required) || ($v.surname.$dirty && !$v.surname.Surname)}"
        >
        <small class='invalid-err'
        v-if="$v.surname.$dirty && !$v.surname.required">Поле Фамилия не должно быть пустым</small>
        <small class='invalid-err'
        v-else-if="$v.surname.$dirty && !$v.surname.Surname">Поле не может содержать цифры и длина от 3-х до 15 символов</small>
      </div>
      <div class="wrapper">
        <label for="name">Имя</label>
        <input type="text" name="name" id="name" placeholder="Имя" v-model.trim="name"
        :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.Name)}"
        >
        <small class='invalid-err'
        v-if="$v.name.$dirty && !$v.name.required">Поле Имя не должно быть пустым</small>
        <small class='invalid-err'
        v-else-if="$v.name.$dirty && !$v.name.Name">Поле не может содержать цифры и длина от 3-х до 15 символов</small>
      </div>
      <div class="wrapper">
        <label for="middle-name">Отчество</label>
        <input type="text" name="name" id="middle-name" placeholder="Отчество" v-model.trim="patronymic">
      </div>

      <div class="wrapper">
        <label for="birthday">Дата рождении</label>
        <input type="date" name="date" id="birthday" v-model="date"
        :class="{invalid: ($v.date.$dirty && !$v.date.required) || ($v.date.$dirty && !$v.date.minValue)}"
        >

        <small class='invalid-err'
        v-if="$v.date.$dirty && !$v.date.required">Поле Дата не должно быть пустым</small>
        <small class='invalid-err'
        v-else-if="$v.date.$dirty && !$v.date.minValue">Дата должна быть не позже 2005.01.01</small>
      </div>

      <div class="wrapper">
        <label for="tel">Телефон</label>
        <input type="tel" name="tel" id="tel" placeholder="Телефон" v-model.trim="tel"
        :class="{invalid: ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.Value)}"
        >
        <small class='invalid-err'
        v-if="$v.tel.$dirty && !$v.tel.required">Поле Телефон не должно быть пустым</small>
        <small class='invalid-err'
        v-else-if="$v.tel.$dirty && !$v.tel.Value">Телефон должен содержать 11 цифр и начинаться с 7</small>

      </div>
      <div class="gender-wrapper wrapper">
        <label for="gender">Пол</label>
        <select name="" id="gender" v-model="gender">
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </div>
      <div class="clients-group-wrapper wrapper">
        <label for="clients-group">Группа клиентов</label>
        <select name="" id="clients-group" multiple size="3" v-model="clientsGroup"
        :class="{invalid: $v.clientsGroup.$dirty && !$v.clientsGroup.required}"
        >
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>

        <small class='invalid-err clients-group-err' 
        v-if="$v.clientsGroup.$dirty && !$v.clientsGroup.required">Выберите группу клиентов</small>

      </div>
      <div class="doctor-name-wrapper wrapper">
        <label for="doctor">Лечащий врач</label>
        <select name="" id="doctor" v-model="doctor">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>
      <div class="sms-control-wrapper wrapper">
        <label for="sms-control">Не отправлять СМС</label>
        <input type="checkbox" name="" id="sms-control" v-model="smsControl">
      </div>
    </div>
  `
}
export default formMain;