import React, { useContext } from 'react'
import { Box } from 'grommet'
import SearchComponent from '../components/SearchComponent'
import useFetch from '../hooks/useFetch'
import AppContext from '../contexts/AppContext'

const Home = ({ history }) => {

    const { app, dispatchApp } = useContext(AppContext)
    const { fetchData } = useFetch()

    const navigateWithQuery = () => {
        fetchData(`${process.env.REACT_APP_MOVIE_LIST}?api_key=${process.env.REACT_APP_API_KEY}&query=${app.search}`)
            .then(data => dispatchApp({ type: 'UPDATE_APP', data: { ...app, results: data.results } }))
            .then(() => history.push('/search'))
    }

    return <Box>
        <SearchComponent navigateWithQuery={navigateWithQuery} />
    </Box>
}

export default Home