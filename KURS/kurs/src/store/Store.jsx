import {configureStore} from '@reduxjs/toolkit'
import { formReducer } from './Slices/formSlice'
import { courseReducer } from './Slices/CourseSlice'


export const store =configureStore({
    reducer:{
        form: formReducer,
        courses:courseReducer
    }
})