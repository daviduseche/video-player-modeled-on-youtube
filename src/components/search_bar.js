import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''}; //can have prepopulated value
    }
    render() {
        return (
        <div className="search-bar">
            <input
            value={this.state.term}
             onChange={event => this.onInputChange(event.target.value)} />
            
        </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;



/* state is plain js object used to record and react to user events.  Each class based component has its own state. class based components are used when we have component needs to be aware of state in some fashion, data changing, react to user events. 
Fumctional components do not have state, only class based components.  If want to update component should think state  */