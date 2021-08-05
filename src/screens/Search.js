import React from 'react'
import { Box } from 'grommet'
import MoviesListComponent from '../components/MoviesListComponent'
import SearchComponent from '../components/SearchComponent'

const Search = ({ }) => {

    return <Box gap="medium">
        <Box margin={{ vertical: 'medium' }}>
            <SearchComponent />
        </Box>
        <Box>
            <MoviesListComponent />
        </Box>
    </Box>
}

export default Search