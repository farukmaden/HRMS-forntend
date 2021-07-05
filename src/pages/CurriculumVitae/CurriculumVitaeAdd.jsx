import React from 'react'
import curriculumVitaeService from '../../services/curriculumVitaeService'
import { Formik, Form } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import { Button, Label } from 'semantic-ui-react';
import CvTalentAdd from '../CurriculumVitae/CvTalentAdd';
import CvEducationAdd from '../CurriculumVitae/CvEducationAdd';
import CvJobexperianceAdd from '../CurriculumVitae/CvJobExperianceAdd';
import CvForeignLanguageAdd from '../CurriculumVitae/CvForeignLanguageAdd';
import CvPhotoAdd from './CvPhotoAdd';

export default function CurriculumVitaeAdd() {
    let CurriculumVitaeService = new curriculumVitaeService();

    const initialValues = { gitHub: "", linkedin: "", description: "", candıdateId: 1 }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                    CurriculumVitaeService.addCurriculumVitae(values).then(result => console.log(result.data.data))
                }}
            >
                <Form className="ui form">
                    <Label>Hakkınızda</Label>
                    <HrmsTextInput name="gitHub" placeholder="GitHub" />
                    <HrmsTextInput name="linkedin" placeholder="Linkedin" />
                    <HrmsTextInput name="description" placeholder="Hakkımda" />
                    <CvPhotoAdd/>
                    <CvEducationAdd />
                    <CvJobexperianceAdd />
                    <CvForeignLanguageAdd />
                    <CvTalentAdd />
                    <Button color="teal" type="subimt">Ekle</Button>
               </Form>
            </Formik>
        </div>
            )
}
