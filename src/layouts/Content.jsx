import React from 'react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import { Grid, GridColumn } from "semantic-ui-react";

export default function Content() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <CandidateList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobAdvertisementList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
