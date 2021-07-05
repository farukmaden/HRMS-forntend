import React from 'react'
import { useState, useEffect } from 'react'
import cityService from '../services/cityService'
import TypeOfWorking from '../services/typeOfWork'
import { Label, Dropdown, Button, Segment } from "semantic-ui-react";

export default function CvFilter({ applyFilters, handleChangePageSize }) {

    const [cities, setCities] = useState([])
    const [typeOfWork, setTypeOfWork] = useState([])
    const [filterCity, setFilterCity] = useState(null)
    const [filterTypeOfWork, setFilterTypeOfWork] = useState(null)

    useEffect(() => {
        let CityService = new cityService();
        CityService.getCity().then((result) => setCities(result.data.data))

        let TypeOfWorkService = new TypeOfWorking();
        TypeOfWorkService.getTypeOfWorking().then((result) => setTypeOfWork(result.data.data))

    }, [])

    const citySelect = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        values: city.id
    }))

    const typeOfWorkSelcet = typeOfWork.map((typeOfWork, index) => ({
        key: index,
        text: typeOfWork.typeOfWork,
        value: typeOfWork.id
    }))

    const pageSizes = [
        { key: 'pageSize10', text: '10', value: '10' },
        { key: 'pageSize20', text: '20', value: '20' },
        { key: 'pageSize50', text: '50', value: '50' },
        { key: 'pageSize100', text: '100', value: '100' }
    ]

    const handleChangeCity = (e, value) => {
        setFilterCity(value)
    }

    const handleChangeTypeOfWork = (e, value) => {
        setFilterTypeOfWork(value)
    }

    const SetFilters = () => {
        if (filterCity || filterTypeOfWork) {
            applyFilters(filterCity, filterTypeOfWork);
        }
    }

    return (
        <div>
            <Segment>
                <Label color="teal" size="large">Şehirler</Label>
                <Dropdown fluid search selection placeholder="Şehir Seçiniz"
                    options={citySelect}
                    onChange={(e, data) => {
                        handleChangeCity(e, data.value)
                    }}
                />
            </Segment>
            <Segment>
                <Label color="teal" size="large">Çalışma türü</Label>
                <Dropdown fluid search selection placeholder="Çalışma Türü Seçiniz"
                    options={typeOfWorkSelcet}
                    onChange={(e, data) => {
                        handleChangeTypeOfWork(e, data.value)
                    }}
                />
            </Segment>
            <Segment>
                <Dropdown fluid placeholder="Syfalamayı seçiniz" search selection options={pageSizes} onChange={(e, data) => {
                    handleChangePageSize(data.value)
                }} ></Dropdown>
            </Segment>
            <Button onClick={SetFilters} positive fluid>Filtrele</Button>
        </div>
    )
}
