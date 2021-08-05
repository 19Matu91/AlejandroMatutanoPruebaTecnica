import React, { useContext } from 'react'
import { Box } from 'grommet'
import SearchComponent from '../components/SearchComponent'
import useFetch from '../hooks/useFetch'
import AppContext from '../contexts/AppContext'

const Home = ({ }) => {

    return <Box>
        <SearchComponent />
    </Box>
}

export default Home