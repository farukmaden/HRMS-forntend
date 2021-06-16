import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
               <Image avatar spaced="right" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjava-2-runtime-environment.tr.uptodown.com%2Fwindows&psig=AOvVaw3Htr2RpoOYfSAbcjOk4l5t&ust=1623676782429000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDL-sPZlPECFQAAAAAdAAAAABAD" />
               <Dropdown pointing="top right" text="Faruk">
                   <Dropdown.Menu>
                       <Dropdown.Item text = "Bilgilerim" icon="info"/>
                       <Dropdown.Item onClick={signOut} text = "Çıkış Yap" icon="sign-out"/>
                      
                   </Dropdown.Menu>
               </Dropdown>
            </Menu.Item>
        </div>
    )
}