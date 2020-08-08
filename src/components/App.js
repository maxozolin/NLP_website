import React from 'react';
import Form from './Form'
class App extends React.Component {
    constructor(){
        super()
        this.state = {hello:"Hello there"}
    }
    render() {
        return (
            <>
                <Form />
                <div>
                    {this.state.hello}
                </div>
            </>
        );
    }
}
export default App