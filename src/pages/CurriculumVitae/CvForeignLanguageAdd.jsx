import React from 'react'
import foreignLanguageService from '../../services/foreignLanguageService'
import { Formik,Form } from 'formik'
import {Button,Label} from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
export default function CvForeignLanguageAdd() {
    let ForeignLnaguageService=new foreignLanguageService

    const  initialValues = { languageLevel: "", languageName: "",  curriculumVitaeId:2 }

    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{
                console.log(values)
                ForeignLnaguageService.addForeignLanguage(values).then(result=>console.log(result.data.data))
            }}
            >
                <Form className="ui form">
                    <Label>Yabancı Dil Bilgileriniz</Label>
                    <HrmsTextInput name="languageName" placeholder="Dil"/>
                    <HrmsTextInput name="languageLevel" placeholder="Seviye"/>
                    
                </Form>
            </Formik>
        </div>
    )
}
