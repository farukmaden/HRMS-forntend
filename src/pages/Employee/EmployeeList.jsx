import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import employeeService from '../../services/employeeService';
import { Table,Header } from 'semantic-ui-react'

export default function EmployeeList() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        let EmployeeService = new employeeService();
        EmployeeService.getEmployee().then(result => setEmployees(result.data.data))
    }, [])

    return (
        <div>
            <Header size='large' floated ="left">İş Verenler</Header>
            <Table color="teal">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Mail adresi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employees.map((employees) => (
                            <Table.Row >
                                <Table.Cell>{employees.firstName}</Table.Cell>
                                <Table.Cell>{employees.lastName}</Table.Cell>
                                <Table.Cell>{employees.email}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    )
}
