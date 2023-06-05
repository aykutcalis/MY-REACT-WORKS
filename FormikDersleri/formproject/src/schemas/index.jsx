import * as yup from 'yup';
const passwordRules =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
    email:yup.string().email('Geçerli bir email giriniz').required('Email girmek zorunludur'),
    age:yup.number().positive('lütfen pozitif bir yaş giriniz').integer('Lütfen yaşınızı bir tam sayı olarak girniz').required('Yaş girmek zorunludur'),
    password:yup.string().min(5,'Lütfen minimum 5 karakter giriniz').matches(passwordRules,{
        message:'Lütfen en az 1 büyük harf 1 küçük harf ve bir sayı giriniz '
    }).required('Şifre girmek zorunludur'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler Eşleşmiyor').required('Şifre girmek zorunludur')

})

export const advancedSchema=yup.object().shape({
    userName:yup.string().min(3,'Kullanıcı adı Minimum 3 karakter uzunluğunda olmalıdır').required('Kullanıcı Adı zorunludur'),
    university:yup.string().oneOf(['bogazici','gsu','odtü','itü'],'Lütfen üniversite seçiniz').required('Lütfen üniversite seçiniz'),
    isAccepted:yup.boolean().oneOf([true],'Kullanım koşullarını kabul ediniz')
   
})