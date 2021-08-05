import React from 'react'
import { Box, Button } from 'grommet'
import SearchComponent from '../components/SearchComponent'

const Home = ({ history }) => {

    return <Box pad={{ horizontal: "small", vertical: "medium" }} gap="medium">
        <Box direction="row" gap="xlarge">
            <Button primary label="Ver mis valoraciones >" onClick={e => history.push("/mylist")} />
        </Box>
        <SearchComponent history={history} />
    </Box>
}

export default Home