import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
  comment: Yup.string()
    .trim()
    .min(2, 'Коментар занадтно короткий - має містити мінімум 10 символів.')
    .max(2000, 'Коментар занадтно довга ий має містити максимум 63 символів.')
    .test(
      'word-length',
      'Одне або кілька слів перевищують максимальну довжину в 20 символів',
      value => {
        if (!value) return true;
        const words = value.split(' ');

        for (const word of words) {
          if (word.length > 20) {
            return false;
          }
        }

        return true;
      }
    )
    .required("Коментар є обов'язковим полем"),
  contactMail: Yup.string()
    .min(
      10,
      'Контактна пошта занадто коротка - має містити мінімум 10 символів.'
    )
    .max(
      63,
      'Контактна пошта занадто довга - має містити максимум 63 символів.'
    )
    .email('Невалідна пошта')
    .test(
      'is-valid-email',
      'Будь ласка введіть валідну адресу контактної пошти',
      value => {
        if (!value) return true;

        const russianBelarusDomains = ['ru', 'by'];
        const splitValue = value.split('@');
        if (splitValue.length !== 2) return false;

        const domain = splitValue[1].split('.')[1];

        if (russianBelarusDomains.includes(domain)) {
          return false;
        }

        return true;
      }
    )
    .matches(
      /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      'Будь ласка введіть валідну адресу контактної пошти'
    )
    .required("Контактна пошта є обов'язковим полем"),
  contactPhone: Yup.string()
    .matches(
      /^[1-9]\d{8}$/,
      'Контактний номер не починається з цифри 0 та повинен містити 9 цифр після коду країни'
    )
    .required("Контактний телефон є обов'язковим полем"),
  name: Yup.string()
    .trim()
    .min(4, "Ім'я занадто коротке - має містити мінімум 4 символи")
    .max(30, "Ім'я занадтно довге - має містити максимум 30 символів")
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ ]*$/,
      "Ім'я повинно містити лише літери та пробіли"
    )
    .required("Ім'я є обов'язковим полем"),
  agreement: Yup.bool()
    .oneOf([true], 'Згода має бути надана')
    .required("Згода на обробку даних є обов'язковим полем"),
});
