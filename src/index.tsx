import {render} from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
)
