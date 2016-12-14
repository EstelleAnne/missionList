import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import './down-list.scss'

  export default class App extends Component {
    render () {
   const liststyle=this.props.visible ?{display:'block'}:{display:'none'};
        return (
                <div className="changestate" style={liststyle}>
                    <ul>
                        {this.props.content.map((item,index)=>

                            <li className="statelist" id={index} onClick={this.props.changeState} key={index}><a id={index}><span id={index} className={"ico icon-taskStatus-"+item.number}></span><span id={index} >{item.name}</span></a></li>
                            )
                        }
                    </ul>
                </div>
          
        )
    }

}
module.exports = App;