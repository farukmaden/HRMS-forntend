import React, { useState } from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import SignedOut from './SignedIn'
import SignedIn from './SignedOut'
import { useHistory } from "react-router";
import FavoriteJobAdversiment from './FavoriteJobAdversiment'
import { useSelector } from 'react-redux'


export default function Navi() {
    const {favoriteItems} = useSelector(state => state.favorite)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted color="teal" size="small"  >

                <Container >
                    <Menu.Item>
                        <Icon size='big' inverted name='building' position="left" />HRMS
                    </Menu.Item>
                    <Menu.Item
                        name='Anasayfa'
                    />

                    <Menu.Item
                        name='Profil'
                    />
                    <Menu.Item
                        name='İş ilanları'
                    />
                   
                    <Menu.Item position="right">
                     <FavoriteJobAdversiment/>
                        {isAuthenticated ? <SignedOut signOut={handleSignOut} />:<SignedIn signIn={handleSignIn} />  }
                        
                    </Menu.Item>
                   
                </Container>

            </Menu>


        </div>
    )
}


