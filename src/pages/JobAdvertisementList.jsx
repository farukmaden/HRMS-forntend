import React, { useEffect, useState } from 'react'
import { Table, Header, Grid, Button ,Pagination} from 'semantic-ui-react'
import jobAdvertisementService from '../services/jobAdvertisementService'
import { useDispatch } from 'react-redux'
import { addToFavoriteJobPosting } from '../store/actions/favoriteJobPostingActions'
import { toast } from 'react-toastify'
import { NavLink, useParams } from 'react-router-dom'
import CvFilter from '../layouts/CvFilter'


export default function JobAdvertisementList() {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    let { cityId, typeOfWorkId } = useParams([])
    const JobAdvertisementService = new jobAdvertisementService();


    const dispatch = useDispatch()

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        if (cityId && typeOfWorkId) {
        } else if (cityId != undefined && typeOfWorkId == null) {
            return JobAdvertisementService.getFilterByCity(cityId).then((result) => {
                setJobAdvertisements(result.data.data)
            })
        } else if (typeOfWorkId) {
            return JobAdvertisementService.getFilterByTypeOfWork(typeOfWorkId).then((result) => {
                setJobAdvertisements(result.data.data)
            })
        } else {
            JobAdvertisementService.getAllActiveTruePageable(page, pageSize).then((result) => {
                setJobAdvertisements(result.data.data)
            })
        }

    }, [])

    function applyFilters(cityId, typeOfWorkId) {
        if (cityId && typeOfWorkId) {
            JobAdvertisementService.getFilterByCityAndTypeOfWork(cityId, typeOfWorkId, page, pageSize)
                .then((result) => {
                    setJobAdvertisements(result.data.data)
                   
                })
        } else if (cityId) {
            JobAdvertisementService.getFilterByCity(cityId, page, pageSize).then((result) => {
                setJobAdvertisements(result.data.data)
            })
        } else {
            JobAdvertisementService.getFilterByTypeOfWork(typeOfWorkId, page, pageSize).then((result) => { setJobAdvertisements(result.data.data) })
        }
    }


    const handleChangePageSize = (value) => {
        setPageSize(value);
        JobAdvertisementService.getAllActiveTruePageable(page, value).then((result) => { 
            setJobAdvertisements(result.data.data) })
    }

    function handleChangePage(page) {
        setPage(page)
        JobAdvertisementService.getAllActiveTruePageable(page, pageSize).then((result) => {
            setJobAdvertisements(result.data.data)
        })
    }

    const handleAddToFavoriteJobPosting = (jobAdvertisement) => {
        dispatch(addToFavoriteJobPosting(jobAdvertisement))
        toast.success(`${jobAdvertisement.employer.companyName} favorilere eklendi`)
    }


    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <CvFilter
                            applyFilters={applyFilters}
                            handleChangePageSize={handleChangePageSize}
                        />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header size='large' floated="left">İş İlanları</Header>
                        <Table color="teal">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
                                    <Table.HeaderCell>Açıklama</Table.HeaderCell>
                                    <Table.HeaderCell>Kontenjan</Table.HeaderCell>
                                    <Table.HeaderCell>Maaş aralığı</Table.HeaderCell>
                                    <Table.HeaderCell>Son başvuru tairihi</Table.HeaderCell>
                                    <Table.HeaderCell>Çalışma pozisyonu</Table.HeaderCell>
                                    <Table.HeaderCell>ŞEHİR</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>

                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {jobAdvertisements.map((jobAdvertisement) => (
                                    <Table.Row key={jobAdvertisement.id}>
                                        <Table.Cell >{jobAdvertisement.employer.companyName}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.jobDescription}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.jobPostingCount}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.salaryRange}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.applicationDeadline}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.jobTitle.title}</Table.Cell>
                                        <Table.Cell >{jobAdvertisement.city.cityName}</Table.Cell>
                                        <Table.Cell>
                                            <Button onClick={() => handleAddToFavoriteJobPosting(jobAdvertisement)} color="teal">Favorilere ekle</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                               
                            </Table.Body>
                        </Table>
                        <Pagination
                                    defaultActivePage={page}
                                    onPageChange={(e, data) => {
                                        handleChangePage(data.activePage);
                                    }}
                                    totalPages={10}
                                />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}