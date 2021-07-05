import { Formik ,Form} from 'formik';
import React from 'react'
import curriculumVitaeService from '../../../services/curriculumVitaeService'
import { Button,Label } from 'semantic-ui-react';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';
import CvForeignLanguagaeUpdate from './CvForeignLanguagaeUpdate';
import CvEducationUpdate from './CvEducationUpdate';
import CvJobExparianceUpdate from './CvJobExparianceUpdate';
import CvTalentUpdate from './CvTalentUpdate';


export default function CurriculumVitaeUpdate() {
    let CurriculumVitaeSrvice = new curriculumVitaeService();

    const initialvalues={id:18,candıdateId:1,description:"",gitHub:"",linkedin:""}

    return (
        <div>
            <h3>Güncelleme</h3>
            <Formik
            initialValues= {initialvalues}
            onSubmit ={(values)=>{
                console.log(values)
                CurriculumVitaeSrvice.updateCurriculumVitae(values).then(result=>console.log(result.data.data))
            }}
            >
                <Form className="ui form">
                    <Label>Hakkınızda</Label>
                    <HrmsTextInput name="gitHub" placeholder="GitHub" />
                    <HrmsTextInput name="linkedin" placeholder="Linkedin" />
                    <HrmsTextInput name="description" placeholder="Hakkımda" />
                    <CvForeignLanguagaeUpdate/>
                    <CvEducationUpdate/>
                    <CvTalentUpdate/>
                    <CvJobExparianceUpdate/>
                    <Button color="teal" type="subimt">Güncelle</Button>
               </Form>
            </Formik>
        </div>
    )
}
