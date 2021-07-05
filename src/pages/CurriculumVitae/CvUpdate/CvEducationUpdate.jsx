import React from 'react'
import educationService from '../../../services/educationService'
import { Formik ,Form} from 'formik';
import { Label } from 'semantic-ui-react';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';


export default function CvEducationUpdate() {
    let EducationSerivce = new educationService();

    const initialvalues={curriculumVitaeId:18,educationId:"",schoolName:"",schoolDepartment:"",startYear:"",endYear:""}

    return (
        <div>
            <Formik
            initialValues={initialvalues}
            onSubmit={(values)=>{
                console.log(values)
                EducationSerivce.updateEducatiın(values).then(result=>console.log(result.data.data))
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
