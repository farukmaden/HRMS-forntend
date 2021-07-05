import React from 'react'

import List from './List'
import { Grid, Pagination } from "semantic-ui-react";
import { Route } from 'react-router-dom';
import CurriculumVitaeAdd from '../pages/CurriculumVitae/CurriculumVitaeAdd';

import CurriculumVitaeList from '../pages/CurriculumVitae/CurriculumVitaeList';

import { ToastContainer } from "react-toastify";
import CurriculumVitaeUpdate from '../pages/CurriculumVitae/CvUpdate/CurriculumVitaeUpdate';
import EmployeeList from '../pages/Employee/EmployeeList';
import EmployeeAdd from '../pages/Employee/EmployeeAdd';
import EmployeeUpdate from '../pages/Employee/EmployeeUpdate';
import CvFilter from './CvFilter';
import JobAdvertisementList from '../pages/JobAdvertisementList';


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <Grid.Row>
                    <Route exact path="/" component={JobAdvertisementList} />
                </Grid.Row>

            </Grid>
        </div>
    )
}
