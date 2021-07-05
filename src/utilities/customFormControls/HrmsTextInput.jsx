import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'

export default function HrmsTextInput({ ...props }) {



    const [field, meta] = useField(props)

    return (
        <FormField >
            <input {...field} {...props} />
         
        </FormField>
    )
}
