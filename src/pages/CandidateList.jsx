import React, { useState, useEffect } from 'react'
import { Table, Header } from 'semantic-ui-react'
import CandidateSerive from '../services/candidatesService'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateSerive()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    })

    return (
        <div>
            <Header size='large' floated ="left">İş Arayanlar</Header>
            <Table color="teal">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>T.C. numarası</Table.HeaderCell>
                        <Table.HeaderCell>Doğum tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identityNumber}</Table.Cell>
                                <Table.Cell>{candidate.birthDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
