import React, { useContext } from 'react'
import { Box, TextInput, Keyboard } from 'grommet'
import { Search } from 'grommet-icons'
import AppContext from '../contexts/AppContext'
import useFetch from '../hooks/useFetch'

const SearchComponent = ({ history }) => {

    const { app, dispatchApp } = useContext(AppContext)
    const { fetchData } = useFetch()

    const navigateWithQuery = () => {
        fetchData(`${process.env.REACT_APP_MOVIE_LIST}?api_key=${process.env.REACT_APP_API_KEY}&query=${app.search}`)
            .then(data => dispatchApp({ type: 'UPDATE_APP', data: { ...app, results: data.results } }))
            .then(() => history.push('/search'))
    }

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