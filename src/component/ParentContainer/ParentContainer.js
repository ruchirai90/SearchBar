
//Using Only State and props no redux

import React from 'react';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <button> Hi </button>
            </React.Fragment>
        )
    }
}
export default ParentContainer;