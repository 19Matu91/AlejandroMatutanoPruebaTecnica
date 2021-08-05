import { Box, Button } from 'grommet'
import React from 'react'
import MoviesListComponent from '../components/MoviesListComponent'

const MyList = ({ history }) => {
    return <Box gap="medium" direction="row" margin={{ vertical: "small" }}>
        <Box gap="xlarge" >
            <Button primary label="< Volver al buscador" onClick={e => history.push("/")} />
        </Box>
        <Box>
            <MoviesListComponent mylist={true} />
        </Box>
    </Box>
}

export default MyList