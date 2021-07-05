import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { favoriteItems } from '../store/initialValues/favoriteItems';
export default function FavoriteJobAdversiment() {
    const {favoriteItems} = useSelector(state => state.favorite)
    return (
        <div>
            <Dropdown item text="Favoriler">
              <Dropdown.Menu>
                {
                  favoriteItems.map((favoriteItem)=>(
                    <Dropdown.Item >
                      {favoriteItem.jobAdversiment.employer.companyName}
                    </Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/favorite">Favori ilanlara git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
