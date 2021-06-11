import React, { useEffect, useState } from 'react'
import { Table,Header } from 'semantic-ui-react'
import jobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(()=>{
        let jobadvertisementService = new jobAdvertisementService()
        jobadvertisementService.getjobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    },[])

    return (
        <div>
            <Header size='large' floated ="left">İş İlanları</Header>
            <Table color="teal">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kontenjan</Table.HeaderCell>
                        <Table.HeaderCell>Maaş aralığı</Table.HeaderCell>
                        <Table.HeaderCell>Son başvuru tairihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {jobAdvertisements.map((jobAdvertisement) => (
                        <Table.Row >
                            <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobPostingCount}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.salaryRange}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
        </div>
    )
}
