import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { Route } from "react-router-dom";
import { Play, Exit } from "./timelines";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Pages } from "./Pages";
import _ from "lodash";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIsReturned : false,
            projectsIsReturned : false,
        }
    }

    componentDidMount(){
        // Set Global Data
        fetch('/data.json').then((r) => r.json())
        .then((json) => {window.data = json;  this.setState({dataIsReturned : true})})
        fetch('/projects.json').then((r) => r.json())
        .then((json) => {
            window.projects = json;  this.setState({projectsIsReturned : true})
        })
    }

    playVerify(pathname, node) {
        let fullPath = "/" && "/" + pathname.split("/")[1];
        let page = _.find(Pages, ["path", fullPath]);
        return page ? Play(page.path, node) : Play('/404', node);
    }

    exitVerify(pathname, node) {
        let fullPath = "/" && "/" + pathname.split("/")[1];
        let page = _.find(Pages, ["path", fullPath]);
        return page ? Exit(page.path, node) : Play('/404', node);
    }

    render() {

       return this.state.dataIsReturned && this.state.projectsIsReturned ?
       <BrowserRouter>
       <Route
           render={({ location }) => {
               return (
                   <TransitionGroup>
                       <Transition
                           key={location.key}
                           appear={true}
                           onEnter={node => this.playVerify(location.pathname, node)}
                           onExit={node => this.exitVerify(location.pathname, node)}
                           timeout={{ enter: 300, exit: 500 }}>
                           <App location={location} />
                       </Transition>
                   </TransitionGroup>
               );
           }}
       />
   </BrowserRouter> :
   <div className="loading"></div>;
    }
  }

ReactDOM.render(
    <Parent />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
