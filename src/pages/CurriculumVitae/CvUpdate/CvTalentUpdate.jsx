import { Formik ,Form} from 'formik';
import React from 'react'
import talentService from '../../../services/talentService'
import { Label } from 'semantic-ui-react';
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput';


export default function CvTalentUpdate() {
    let TalentService = new talentService();

    const initialValues = {talentName:"",talentId:"",curriculumVİtaeId:""}

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values)=>{
                    console.log(values)
                    TalentService.updateYalnet(values).then(result=>console.log(result.data.data))
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
