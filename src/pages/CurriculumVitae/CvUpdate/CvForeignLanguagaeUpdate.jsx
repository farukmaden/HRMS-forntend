import React from 'react'
import foreignLanguageService from '../../../services/foreignLanguageService';
import { Formik,Form } from 'formik';
import { Label } from 'semantic-ui-react';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';

export default function CvForeignLanguagaeUpdate() {
    let ForeiginLnaguageService=new foreignLanguageService();

    const initialvalues={languageName:"",languageLevel:"",languageId:"",curriculumVitaeId:""}

    return (
        <div>
            <Formik
            initialValues={initialvalues}
            onSubmit={(values)=>{
                console.log(values)
                ForeiginLnaguageService.updateForeignLanguage(values).then(result=>console.log(result.data.data))
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
