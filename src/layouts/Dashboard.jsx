import React from 'react'
import CandidateList from '../pages/CandidateList'
import Content from './Content'
import List from './List'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd';
import { Route } from 'react-router-dom';
import JobAdvertisementList from '../pages/JobAdvertisementList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <List />
                    </Grid.Column>
                    <Grid.Column width={12}>
                       
                        <Route exact path="/" component={JobAdvertisementAdd} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
