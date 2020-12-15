import React, { Fragment } from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import TopBar from './TopBar';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            isNavigationOpen: false
        }

        this.handleNavigationToggle = this.handleNavigationToggle.bind(this);
    }

    handleNavigationToggle() {
        this.setState({ isNavigationOpen: !this.state.isNavigationOpen });
    }

    render() {
        return (
            <Fragment>
                <TopBar
                    title={'My Album Gallery'}
                    iconButton={<MenuIcon />}
                    onIconButtonClick={this.handleNavigationToggle}/>
          
            </Fragment >
        );
    }
}

export default Header;