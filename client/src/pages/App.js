import Home from '../components/Home';
import AddNewBook from '../components/AddNewBook';
import EditBook from '../components/EditBook';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from "../components/context/GlobalState";

function App() {
    return (
        <div className="">
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/add" component={AddNewBook}  />
                        <Route path="/edit/:id" component={EditBook}  />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
