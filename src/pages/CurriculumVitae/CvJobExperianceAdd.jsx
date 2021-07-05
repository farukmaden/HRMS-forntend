import React from 'react'
import jobExperienceService from '../../services/jobExperienceService'
import {Button,Label} from 'semantic-ui-react'
import { Formik,Form } from 'formik'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

export default function CvJobexperianceAdd() {
    let JobExperianceService = new jobExperienceService()
    const initialValues = { workplaceName: "", jobPosition: "", startYear: "", endYear: "" , curriculumVitaeId:2 }
    return (
        <div>
            <Formik 
            initialValues={initialValues}
            onSubmit = {(values)=>{
                console.log(values)
                JobExperianceService.addJobExperience(values).then(result=>console.log(result.data.data))
            }}
            >
                <Form className="ui form">
                    <Label>İş Tecrübeleriniz</Label>
                    <HrmsTextInput name="workplaceName" placeholder="Şirket İsmi"/>
                    <HrmsTextInput name="jobPosition" placeholder="Pozisyon İsmi"/>
                    <HrmsTextInput type="date" name="startYear" placeholder="Başlama yılı"/>
                    <HrmsTextInput type="date" name="endYear" placeholder="Bitiş yılı "/>
                   
                </Form>
            </Formik>
        </div>
    )
}
