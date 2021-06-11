import React, { useState ,useEffect} from 'react'
import { Table,Header } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect (()=>{
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (
        <div>
            <Header size='large' floated ="left">İş Verenler</Header>
            <Table color="teal">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
                        <Table.HeaderCell>Web adresi</Table.HeaderCell>
                        <Table.HeaderCell>Mail adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon numarsı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employers.map((employer) => (
                            <Table.Row >
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    )
}
