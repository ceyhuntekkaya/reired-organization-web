import React, { Component, createContext } from "react";
export const AppContext = createContext();
class AppContextProvider extends Component {
  state = {
   
    hasMenu:true,
    tenantId:'',
    tenant:null,
    user:null
  };

  setUser = (user) => {
    this.setState({ user });
  };


  setHasMenu = (hasMenu) => {
    this.setState({ hasMenu });
  };
  setTenant = (tenant) => {
    this.setState({tenant });
  };

  setTenantId = (tenantId) => {
    this.setState({ tenantId });
  };




  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setHasMenu: this.setHasMenu,
          setTenant: this.setTenant,
          setTenantId: this.setTenantId,
          setUser: this.setUser
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContextProvider;
