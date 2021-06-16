import React, { useState, useEffect } from 'react'
import { Formik, useField, useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup';
import { Button, Dropdown, Input, TextArea, Card, Form, Grid, Label } from "semantic-ui-react";
import CityService from '../services/cityService';
import JobTitleService from '../services/jobTitleService';
import TypeOfWorking from '../services/typeOfWork';
import WorkingTime from '../services/workingTime';
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementAdd() {

    let jobAdvertisementService=new JobAdvertisementService();
    const JobAdvertisementAdd = Yup.object().shape({
        cityId: Yup.string().required("Boş kalamaz"),
        jobTitleId: Yup.string().required("Boş Kalamaz"),
        typeOfWorkId: Yup.string().required("Boş kalamaz"),
        workingTimeId: Yup.string().required("Boş kalamaz"),
        salaryRange: Yup.string().required("Boş kalamaz").min(0),
        applicationDeadline: Yup.date().required("Boş kalamaz"),
        description: Yup.string().required("Boş kalamaz"),
        jobCount: Yup.number().required("Boş kalamaz").min(0)
    });

    const formik = useFormik({
        initialValues: {
            cityId: "",
            jobTitleId: "",
            typeOfWorkId: "",
            workingTimeId: "",
            salaryRange: "",
            applicationDeadline: "",
            description: "",
            jobCount: "",
            employerId: ""
        },
        validationSchema: JobAdvertisementAdd,
        onSubmit: (values) => {

            // formik.values.city.id = parseInt(values.city.id),
            // formik.values.jobTitle.id = parseInt(values.jobTitle.id)
            // formik.values.typeOfWork.id = parseInt(values.typeOfWork.id)
            // formik.values.workingTime.id = parseInt(values.workingTime.id)
            formik.values.employerId=62
            console.log(values)
            jobAdvertisementService.addjobAdvertisements(values).then(result => console.log(result.data.data))
        },
    });

    const [cities, setCities] = useState([])
    const [titles, setTitles] = useState([])
    const [typeOfWork, setTypeOfWork] = useState([])
    const [workingTime, setworkingTime] = useState([])

    useEffect(() => {

        let cityService = new CityService();
        cityService.getCity().then(result => setCities(result.data.data));

        let titlesService = new JobTitleService();
        titlesService.getJobTitle().then(result => setTitles(result.data.data));

        let typeOfWorkService = new TypeOfWorking();
        typeOfWorkService.getTypeOfWorking().then(result => setTypeOfWork(result.data.data));

        let workingTimeService = new WorkingTime();
        workingTimeService.getWorkingTime().then(result => setworkingTime(result.data.data));
    }, [])

    const citySelection = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,
    }));
    const jobTitleSelection = titles.map((title, index) => ({
        key: index,
        text: title.title,
        value: title.id
    }));
    const typeOfWorkSelection = typeOfWork.map((typeOfWork, index) => ({
        key: index,
        text: typeOfWork.typeOfWork,
        value: typeOfWork.id
    }));
    const workingTimeSelection = workingTime.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingTime,
        value: workingTime.id
    }));
    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div>
            <Card fluid calassName="shadow">
                <Card.Content header='İlan Ver' />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <Label basic className="float-left my-1">Eklemek istedğiniz pozisyonu seçin</Label>
                            <Dropdown clearable
                                item
                                placeholder="Pozisyon"
                                selection onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobTitleId")
                                }
                                onBlur={formik.onBlur}
                                id="jobTitleId"
                                value={formik.values.jobTitleId}
                                options={jobTitleSelection} />
                            {formik.errors.jobTitleId && formik.touched.jobTitleId &&(
                                <div className={"ui pointing red basic label"}>{formik.errors.jobTitleId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Label basic className="float-left my-1">Şehir seçiniz</Label>
                            <Dropdown clearable
                                item
                                placeholder="Şehirler"
                                selection onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={citySelection} />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.cityId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Label basic className="float-left my-1">Çalışma türü seçiniz</Label>
                            <Dropdown clearable
                                item
                                placeholder="Çalışma türü"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "typeOfWorkId")
                                }
                                onBlur={formik.onBlur}
                                id="typeOfWorkId"
                                value={formik.values.typeOfWorkId}
                                options={typeOfWorkSelection} />
                            {formik.errors.typeOfWorkId && formik.touched.typeOfWorkId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.typeOfWorkId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Label basic className="float-left my-1">Çalışma zamanı seçiniz</Label>
                            <Dropdown clearable
                                item
                                placeholder="Çalışma zamanı"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workingTimeId")
                                }
                                onBlur={formik.onBlur}
                                id="workingTimeId"
                                value={formik.values.workingTimeId}
                                options={workingTimeSelection} />
                            {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.workingTimeId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Label basic className="float-left my-1">Maaş aralığını giriniz</Label>
                                    <Form.Input
                                        style={{ width: "100%" } }
                                        type="number"
                                        placeholder="Minimum Maaş"
                                        value={formik.values.salaryRange}
                                        name="salaryRange"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}>

                                    </Form.Input>
                                    {formik.errors.salaryRange && formik.touched.salaryRange && (
                                        <div className={"ui pointing red basic label"}>{formik.errors.salaryRange}</div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Label basic className="float-left my-1">Açık Pozisyon Adedi Girin: </Label>
                                    <Form.Input
                                        style={{ width: "100%" }}
                                        id="jobPostingCount"
                                        name="jobCount"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="açık pozisyon adedi" />
                                    {formik.errors.jobCount && formik.touched.jobCount && (
                                        <div className={"ui pointing red basic label"}>{formik.errors.jobCount}</div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Label basic className="float-left my-1">Son Başvuru Tarihi Seçin:</Label>
                                    <Form.Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.applicationDeadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "applicationDeadline")
                                        }
                                        value={formik.values.applicationDeadline}
                                        onBlur={formik.handleBlur}
                                        name="applicationDeadline"
                                        placeholder="Son başvuru tarihi" />
                                    {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.applicationDeadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                        <Label basic className="float-left my-1">Açıklama Girin:</Label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.description).toString()}
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.description}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                         positive 
                         type="submit" 
                         disabled={!formik.dirty || formik.isSubmitting}
                         className="float-left"
                         >
                             Oluştur
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}