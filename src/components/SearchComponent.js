import React, { useContext } from 'react'
import { Box, TextInput, Keyboard } from 'grommet'
import { Search } from 'grommet-icons'
import AppContext from '../contexts/AppContext'

const SearchComponent = ({ navigateWithQuery }) => {

    const { app, dispatchApp } = useContext(AppContext)

    return <Keyboard onEnter={navigateWithQuery}>
        <Box direction="row">
            <TextInput
                size="4xl"
                placeholder="Buscar películas"
                value={app.search}
                onChange={e => dispatchApp({ type: "UPDATE_APP", data: { ...app, search: e.target.value } })}
            />

            <Box align="center" justify="center" pad="small" border={true} onClick={navigateWithQuery}>
                <Search size='large' />
            </Box>
        </Box>
    </Keyboard>
}

export default SearchComponent