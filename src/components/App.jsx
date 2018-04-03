import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton, IconMenu, MenuItem } from 'react-toolbox';
import { Layout, Navigation, Link, Button, Panel, Sidebar } from 'react-toolbox';
import DataTable from './DataTable';
import AddPartnerDialog from './AddPartnerDialog';
import TableTest from './TableTest';

class App extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false,
    showPartner: false
  };
  toggleDrawerActive = () => {
      this.setState({ drawerActive: !this.state.drawerActive });
    };
  toggleDrawerPinned = () => {
      this.setState({ drawerPinned: !this.state.drawerPinned });
    };
  toggleSidebar = () => {
      this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };

  handleToggle = () => {
    console.log("showPartner in func : ", this.state.showPartner);
    this.setState({showPartner: !this.state.showPartner});
  }

  render() {
    console.log("showPartner : ", this.state.showPartner);
    return (
      <Layout>
        <Panel>
          <header>
            <Navigation type='horizontal'>
              <Link href='http://' active label='Home' icon='home' />
              <Link href='http://' active label='Partners' icon='supervisor_account' />
              <Link href='http://' active label='File Transactions' icon='forum' />
              <IconMenu style={{position: "absolute",  right: 30}} icon='menu' position='topRight' menuRipple>
                <MenuItem value='Action 1' caption='Action 1' />
                <MenuItem value='Action 2' caption='Action 2' />
              </IconMenu>
            </Navigation>
          </header>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <Navigation type='horizontal'>
              <Button icon='delete' label='Remove Partner' raised primary />
              <Button icon='add' label='Add Partner' onClick={this.handleToggle}  raised primary />
            </Navigation>
            <AddPartnerDialog show= {this.state.showPartner} handleToggle={ this.handleToggle} />
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
            <DataTable />
            <TableTest />
          </div>
        </Panel>
      </Layout>
    );
  }
}
module.exports = App;
