import React from 'react';

export default class Footer extends React.Component {
    render() {
        console.log("this.props.children是什么鬼",this.props.children)

        return (
            <ol>
                {
                    this.props.children.map(function(child){
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
}