import React from 'react'
import {Form,Formik} from 'formik'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas/index'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'
import {Link} from 'react-router-dom'

const onSubmit=async (values, actions)=>{
  await new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
  actions.resetForm();
  }

function PortalFom() {
  return (
    <> <Formik
    initialValues={{ userName: '', university: '', isAccepted: false }}
    onSubmit={onSubmit}
    validationSchema={advancedSchema}
  >
    {({isSubmitting}) => (
      <Form>
      <CustomInput label="Kullanıcı Adı"  name="userName" type="text" placeholder="Kullanıcı Adınızı Giriniz"
      />
      <CustomSelect   label="Okulunuz"
      name="university"
      placeholder="Lütfen Üniversitenizi seçiniz"    >
         <option value="">Lütfen üniversitenizi seçiniz</option>
         <option value="bogazici">Boğaziçi üniversitesi</option>
         <option value="gsu">Galatasaray üniversitesi</option>
         <option value="odtü">ODTU</option>
         <option value="itü">ITU</option>
      </CustomSelect>
     <CustomCheckbox
     type="checkbox"
     name="isAccepted"
     />
     <button disabled={isSubmitting} type="submit">Kaydet</button>
    <Link className='formLink' to='/'>Ana Forma Git </Link>
   </Form>
    )}
  </Formik></>
  )
}

export default PortalFom