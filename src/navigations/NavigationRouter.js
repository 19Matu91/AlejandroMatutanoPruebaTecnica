import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grommet, Box } from 'grommet';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyList from '../screens/MyList';

const NavigationRouter = () => {
    return (
        <Grommet theme={theme} full>
            <Box fill direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                    <Router>
                        <Route path="/" exact component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/mylist" component={MyList} />
                    </Router>
                </Box>
            </Box>
        </Grommet>
    );
};

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

export default NavigationRouter