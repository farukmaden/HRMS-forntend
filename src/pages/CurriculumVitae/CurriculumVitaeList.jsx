import React,{useEffect, useState} from 'react'
import { Table,Header } from 'semantic-ui-react'
import curriculumVitaeService from '../../services/curriculumVitaeService'

export default function CurriculumVitaeList() {
    const [curriculumVitaes, setCurriculumVitaes] = useState([])
    useEffect(()=>{
        let curriculumvitaeService = new curriculumVitaeService()
        curriculumvitaeService.getCurriculumVitae().then(result=>setCurriculumVitaes(result.data.data))
    },[])
    return (
        <div>
            <Header size='large' floated ="left">CV</Header>
            <Table color="teal">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Fotoğraf</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {curriculumVitaes.map((curriculumVitae) => (
                        <Table.Row >
                            <Table.Cell>{curriculumVitae.candidatePhoto}</Table.Cell>
                            <Table.Cell>{curriculumVitae.candidate.firstName}</Table.Cell>
                            <Table.Cell>{curriculumVitae.candidate.lastName}</Table.Cell>
                           
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
        </div>
    )
}
