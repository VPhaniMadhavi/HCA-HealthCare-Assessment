import React from 'react';
import AllVideos from '../AllVideos';
import Covid19Videos from '../Covid19Videos';
import Searchbar from '../Searchbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class MainComponent extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#">HCL Video Library</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/covid19videos">Covid-19 Videos
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/allvideos">All Videos</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="/searchbar">Search Video</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Covid19Videos />
                        </Route>
                        <Route path="/allvideos">
                            <AllVideos />
                        </Route>
                        <Route path="/covid19videos">
                            <Covid19Videos />
                        </Route>
                        <Route path="/searchbar">
                            <Searchbar />
                        </Route>
                    </Switch>

                </Router>
            </>
        )
    }
}
export default MainComponent;