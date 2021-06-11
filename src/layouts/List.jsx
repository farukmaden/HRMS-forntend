import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function List() {
    return (
        <div>
            <Menu pointing vertical >
                <Menu.Item
                    name='Şirketler'
                />
                <Menu.Item
                    name='İş Arayanlar'
                />
                <Menu.Item
                    name='Çalışanlar'
                />
            </Menu>
        </div>
    )
}
