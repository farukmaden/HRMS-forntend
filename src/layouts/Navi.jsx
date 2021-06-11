import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>
            <Menu inverted color="teal" size="large"  >

                <Container >
                    <Menu.Item>
                        
                        <Icon size='big'inverted name='building' position="left" />HRMS
                    </Menu.Item>
                    <Menu.Item
                        name='Anasayfa'
                    />
                    
                    <Menu.Item
                        name='Profil'
                    />
                    <Menu.Item
                        name='İş ilanları'
                        color="blue"

                    />
                    <Menu.Item position="right">
                        <Button content='Kayıt Ol' color="twitter" />
                        <Button content='Girş Yap' primary style={{marginLeft:'0.5em'}} color="instagram" />
                    </Menu.Item>
                </Container>

            </Menu>


        </div>
    )
}


