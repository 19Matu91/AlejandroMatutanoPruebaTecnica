import React from 'react'
import { Box, Button } from 'grommet'
import MoviesListComponent from '../components/MoviesListComponent'

const Search = ({ history }) => {

    return <Box gap="medium" direction="row" margin={{vertical: "small"}}>
        <Box gap="xlarge" >
            <Button primary label="< Volver al buscador" onClick={e => history.push("/")} />
            <Button primary label="Ver mis valoraciones >" onClick={e => history.push("/mylist")} />
        </Box>
        <Box>
            <MoviesListComponent />
        </Box>
    </Box>
}

export default Search