import React, { useReducer } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import MyList from './MyList'
import AppContext from '../contexts/AppContext'

test('Render MyList', () => {
    const app = {
        search: 'Ant man',
        results: [],
        mylist: []
    }
    const dispatchApp = null

    const mlcomponent = render(
        <AppContext.Provider value={{ app, dispatchApp }}>
            <MyList />
        </AppContext.Provider>
    )

    mlcomponent.getByText('Título')
})