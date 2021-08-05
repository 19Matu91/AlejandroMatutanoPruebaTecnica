import React, { useReducer } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Search from './Search'
import AppContext from '../contexts/AppContext'

test('Render Search', () => {
    const app = {
        search: 'Ant man',
        results: [],
        mylist: []
    }
    const dispatchApp = null

    const scomponent = render(
        <AppContext.Provider value={{ app, dispatchApp }}>
            <Search />
        </AppContext.Provider>
    )

    scomponent.getByText('Título')
})