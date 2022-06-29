import { React, Component } from "react";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
// import { robots } from "./robots";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";


/*
    class component with state
*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users}))
        // this.setState( {robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="t1">RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll >
                        <ErrorBoundry>
                            <Card robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
            
    }
}


/*
    functional component with state
*/
// const App = () => {
//     const [robotArray, setRobotArray] = useState([]);
//     const [searchfield, setSearchfield] = useState('');


//     const fetchUsers = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setRobotArray(data)
//     }

//     useEffect(() => {
//         fetchUsers()
//     }, [])

    
//     console.log('Array:', robotArray);

//     const onSearchChange = (e) => setSearchfield(e.target.value)
    
//     const filteredRobots = robotArray.filter(robot => 
//         robot.name.toLowerCase().includes(searchfield.toLowerCase())
//     );

//     return (
//         <div className="tc">
//             <h1 className="t1">RoboFriends</h1>
//             <SearchBox searchChange={onSearchChange} />
//             <Scroll>
//                 <Card robots={filteredRobots} />
//             </Scroll>
//         </div>
//     );
// }

export default App;