import React, { useContext } from 'react'
import { Box, Text, DataTable, Avatar, TextInput } from 'grommet'
import AppContext from '../contexts/AppContext'

const MoviesListComponent = ({ mylist = false }) => {

    const { app, dispatchApp } = useContext(AppContext)

    return <DataTable
        pad={{ horizontal: "small", vertical: "medium" }}
        columns={[
            {
                property: 'poster_path',
                primary: true,
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
            },
            {
                property: 'id',
                render: datum => (<Box round="small" pad="small" key={`${datum.id}-valorar`}>
                    <TextInput
                        disabled={mylist}
                        placeholder="Haz tu valoración"
                        value={mylist ? app?.mylist.find(x => x.id === datum.id)?.valorate : app?.results.find(x => x.id === datum.id)?.valorate}
                        onChange={e => dispatchApp({ type: "VALORATE", data: { ...datum, valorate: e.target.value } })}
                    />
                </Box>)
            }
        ]}
        data={mylist ? app?.mylist : app?.results}
    />
}

export default MoviesListComponent