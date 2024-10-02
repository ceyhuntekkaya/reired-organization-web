import React, {Component, createContext, useContext} from "react";

export const AppContext = createContext();

class AppContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            student: null,
            parent: null,
            staff: null,
            schoolManager: null,
            staffAuthorityList: null
        };
        this.setUser = this.setUser.bind(this);
    }


    setUser = (userInformation) => {
        const {user, student, parent, staff, schoolManager, staffAuthorityList} = userInformation;
        this.setState({user, student, parent, staff, schoolManager, staffAuthorityList});
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("student", JSON.stringify(student));
        localStorage.setItem("parent", JSON.stringify(parent));
        localStorage.setItem("staff", JSON.stringify(staff));
        localStorage.setItem("schoolManager", JSON.stringify(schoolManager));
        localStorage.setItem("staffAuthorityList", JSON.stringify(staffAuthorityList));
    };


    render() {
        return (
            <AppContext.Provider
                value={{
                    ...this.state,
                    setUser: this.setUser
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw Error("Context must be not null.");
    return context;
};

export default AppContextProvider;
