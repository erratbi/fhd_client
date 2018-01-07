import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './shared/Header';

import Menu from './pages/Menu';
import Home from './pages/Home';
import FoodStore from './pages/FoodStore';

import '../styles/main.css';

class App extends Component {
    static propTypes = {
        location: PropTypes.shape({
          pathname: PropTypes.string.isRequired,
        }).isRequired,
    }
    state = {  }
    render() {
        const { location } = this.props;
        
        return (
            <div>
                <Header location={location} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/food-store" component={FoodStore} />
                </Switch>
            </div>
        );
    }
}

export default App;