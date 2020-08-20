import ReactDOM from 'react-dom';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import routes from './rootRouter'

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routes
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();