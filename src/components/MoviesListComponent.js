import React, { useContext } from 'react'
import { Box, Text, Image, DataTable, Avatar } from 'grommet'
import AppContext from '../contexts/AppContext'

const MoviesListComponent = ({ }) => {

    const { app } = useContext(AppContext)

    return <DataTable
        columns={[
            {
                property: 'poster_path',
                render: datum => <Avatar src={`${process.env.REACT_APP_IMAGES}${datum.poster_path}`} />
            },
            {
                property: 'original_title',
                header: <Text>Título</Text>,
                render: datum => <Box>{datum.original_title}</Box>
            },
            {
                property: 'release_date',
                header: <Text>Fecha</Text>,
                render: datum => <Box>{datum.release_date}</Box>
            }
        ]}
        data={app?.results}
    />
}

export default MoviesListComponent