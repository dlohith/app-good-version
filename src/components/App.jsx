import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton, IconMenu, MenuItem } from 'react-toolbox';
import { Layout, Navigation, Link, Button, Panel, Sidebar } from 'react-toolbox';
import PartnerMainContent from './partners/PartnerMainContent';
import HomeMainContent from './home/HomeMainContent';

class App extends Component {
  state = {
    partners: false,
    home: true
  };

  showHome = () => {
    this.setState({ partners: false, home: true });
  }

  showPartners = () => {
    this.setState({ partners: true, home: false });
  }

  render() {
    console.log("Partners : ", this.state.partners );
    console.log("Home : ", this.state.home );
    return (
      <Layout>
        <Panel>
          <header>
            <Navigation type='horizontal'>
              <Button onClick={ this.showHome } label='Home' icon='home' />
              <Button onClick={ this.showPartners } label='Partners' icon='supervisor_account' />
              <Button href='#' label='File Transactions' icon='forum' />
              <IconMenu style={{position: "absolute",  right: 30}} icon='menu' position='topRight' menuRipple>
                <MenuItem value='Action 1' caption='Action 1' />
                <MenuItem value='Action 2' caption='Action 2' />
              </IconMenu>
            </Navigation>
          </header>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            { this.state.partners ? <PartnerMainContent /> : '' }
            { this.state.home ? <HomeMainContent /> : '' }
          </div>
        </Panel>
      </Layout>
    );
  }
}
module.exports = App;
