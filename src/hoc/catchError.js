import { Component } from 'react'

import { Error } from '../components/Error/Error'

class CatchError extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: false,
        }
    }

    componentDidCatch(){
        this.setState({error: true})
    }

    render(){
        const { error } = this.state
        
        if(error){
            return <Error title='Something went wrong' /> 
        }

        return this.props.children;
    }
}

export { CatchError }