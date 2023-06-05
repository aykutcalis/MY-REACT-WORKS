import React from 'react'
import { useState } from 'react'
import useınput from './useınput'

function PersonellInfo() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const[firstName,bindFirstName,resetFirstName]=useınput('')
    const[lastName,bindLastName,resetLastName]=useınput('')
    const submitForm =(e)=>{
e.preventDefault
alert(`Hosgeldiniz ${firstName} ${lastName}`)
resetFirstName();
resetLastName();
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <div>
            <label htmlFor="">Ad</label>
            <input type="text" {...bindFirstName}/>
            </div>
            <div>
            <label htmlFor="">Soyad</label>
            <input type="text" {...bindLastName}/>
            </div>
            <button>
                Kaydet
            </button>
        </form>
    </div>
  )
}

export default PersonellInfo