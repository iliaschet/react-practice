import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error404 from './Error404';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RUB from './RUB';
import CZK from './CZK';

class App extends React.Component {
    render() {
        return (
            <div className="site">
                <Header />
                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={RUB} />
                                <Route exact path="/czk" component={CZK} />
                                <Route component={Error404} />
                            </Switch>
                        </Router>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
