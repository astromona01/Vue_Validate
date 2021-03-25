import {required } from 'vuelidate/lib/validators';
const passport = {
  name: 'passport',
  data: () => ({
    passportType: '',
    issuedDate: null,
  }),
  validations: {
    issuedDate: {required, minValue: value => value <= new Date().toISOString()},
    passportType: {required, }
  },

  template: `
     <div>
        <h2>Паспорт</h2>
        <div class="wrapper">
          <label for="passport-type">Тип документа*</label>
          <select name="" id="passport-type" v-model="passportType" 
          :class="{invalid: $v.passportType.$dirty && !$v.passportType.required}"
          >
            <option value="Паспорт">Паспорт</option>
            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
            <option value="Вод. удостоверение">Вод. удостоверение</option>
          </select>
          <small class='invalid-err passport-type-err' v-if="$v.passportType.$dirty && !$v.passportType.required">Выберите тип документа</small>
        </div>
        <div class="wrapper">
          <label for="series">Серия</label>
          <input type="text" placeholder="Серия" id='series' class='right-input'>
        </div>
        <div class="wrapper">
          <label for="number">Номер</label>
          <input type="text" placeholder="Номер" id='number' class='right-input'>
        </div>
        <div class="wrapper">
          <label for="issued-by">Кем выдан</label>
          <input type="text" placeholder="Кем выдан" id='issued-by' class='right-input'>
        </div>
        <div class="wrapper">
          <label for="issued-date">Дата выдачи*</label>
          <input type="date" placeholder="Дата выдачи" id='issued-date' v-model="issuedDate"
          :class="{invalid: ($v.issuedDate.$dirty && !$v.issuedDate.required) || ($v.issuedDate.$dirty && !$v.issuedDate.minValue)}"
          >
          <small class='invalid-err' v-if="$v.issuedDate.$dirty && !$v.issuedDate.required" >Поле Дата выдачи не должно быть пустым</small>
          <small class='invalid-err' v-else-if="$v.issuedDate.$dirty && !$v.issuedDate.minValue" >Дата должна быть не позднее сегодняшнего числа</small>
        </div>
     </div>
  `
}

export default passport