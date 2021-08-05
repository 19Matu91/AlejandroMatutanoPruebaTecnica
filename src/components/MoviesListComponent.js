import React, { useContext } from 'react'
import { Box, Text, Image } from 'grommet'
import AppContext from '../contexts/AppContext'

const MoviesListComponent = ({ }) => {

    const { app } = useContext(AppContext)

    return <Box>
        {
            app?.results?.map(item => <Box direction="row">
                <Image
                    fit="cover"
                    src={`${process.env.REACT_APP_IMAGES}${item?.poster_path}`}
                />
                <Text>{item?.original_title}</Text>
                <Text>{item?.release_date}</Text>
            </Box>)
        }
    </Box>
}

export default MoviesListComponent