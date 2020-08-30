import React from 'react';
import { matchPath, Route, Switch } from 'react-router-dom';

class RootPage extends React.Component {

    render () {
        return (
            <Switch>
                {this.props.routes.map(route => (
                    <Route {...route} />
                ))}
            </Switch>
        )
    }
}

export default RootPage;
