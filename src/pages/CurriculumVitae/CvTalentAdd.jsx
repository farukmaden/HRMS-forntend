import React from 'react'
import { Formik, Form,Field } from 'formik'
import {Button,Label} from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import talentService from '../../services/talentService'


export default function CvTalentAdd() {
    let TalentService=new talentService();

    const initialValues = { talentName: "",curriculumVİtaeId:2 }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                
                onSubmit={(values)=>{
                    console.log(values)
                    TalentService.addTalent(values).then(result=>console.log(result.data.data))
                }}
            >
                <Form className="ui form">
                    <Label>Yetenekleriniz</Label>
                    <HrmsTextInput name="talentName" placeholder="Yetenekleriniz"/>
                    
                </Form>
            </Formik>
        </div>
    )
}
