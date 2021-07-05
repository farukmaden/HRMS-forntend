import React from 'react'
import curriculumVitaeService from '../../services/curriculumVitaeService'
import { Formik,Form } from 'formik';
import { Label } from 'semantic-ui-react';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';


export default function CvPhotoAdd() {
    let CurriculumVitaeService = new curriculumVitaeService();

    const initialValues ={cvId:7,multipartFile:""}
    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{
                console.log(values)
                CurriculumVitaeService.addPhoto(values).then(result=>console.log(result.data.data))
            }}
            >
                <Form className="ui form">
                    <Label>Fotoğraf</Label>
                    <HrmsTextInput type="image"  name="multipartFile" placeholder="Foroğrafınız"/>
                    </Form>
            </Formik>
        </div>
    )
}
