import React from 'react'
import educationService from '../../services/educationService';
import { Formik, Form } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import { Button,Label } from 'semantic-ui-react';

export default function CvEducationAdd() {
    let EducationService = new educationService();

    const initialValues = { schoolName: "", schoolDepartment: "", startYear: "", endYear: "", curriculumVitaeId: 2 }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                    EducationService.addEducation(values).then(result => console.log(result.data.data))
                }}
            >
                <Form className="ui form">
                    <Label>Eğitim Bilgileriniz</Label>
                    <HrmsTextInput name="schoolName" placeholder="Okul İsmi" />
                    <HrmsTextInput name="schoolDepartment" placeholder="Bölüm İsmi" />
                    <HrmsTextInput type="date" name="startYear" placeholder="Başlama yılı" />
                    <HrmsTextInput type="date" name="endYear" placeholder="Bitiş yılı " />
                    
                </Form>
            </Formik>
        </div>
    )
}
