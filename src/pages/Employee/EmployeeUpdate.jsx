import React from 'react'
import employeeService from '../../services/employeeService'
import { Formik,Form } from 'formik';
import { Label,Button } from 'semantic-ui-react';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';

export default function EmployeeUpdate() {

    let EmployeeService= new employeeService();

    const initialValues = {email:"",firstName:"",lastName:"",password:"",passwordRepeat:"",id:7}

    return (
        <div>
            <Formik
            initialValues = {initialValues}
            onSubmit = {(values)=>{
                EmployeeService.updateEmployee(values).then(result=>console.log(result.data.data))
            }}
            >
                <Form className="ui form">
                    <Label>Uygulama Çalışanı Ekleme</Label>
                    <HrmsTextInput name="firstName" placeholder="İsim"/>
                    <HrmsTextInput name="lastName" placeholder="Soyisim"/>
                    <HrmsTextInput name="email" placeholder="Mail"/>
                    <HrmsTextInput name="password" placeholder="Şifre"/>
                    <HrmsTextInput name="passwordRepeat" placeholder="Şifre tekrarı"/>
                    <Button color="teal" type="subimt">Güncelle</Button>
                </Form>
            </Formik>
        </div>
    )
}
