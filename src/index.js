import React, {Component, PropTypes} from 'react'
import MissionItem from './item/missionItem';
import './index.scss';
class MissionList extends Component {
	renderItem(){
		if(!this.props.datas){
			return (
				<div className='mission-list-blank'>data is required</div>
			)
		}
		let self = this;   
		return this.props.datas.map((data,index)=>{
			data.index = index;
			return (<MissionItem key={index} visible={this.props.visible} order={this.props.order} changeState={this.props.changeState} content={this.props.content} callback={self.props.callback} data={data} />)
		})
		
	}
	render () {
		
		return (
			<ul 
			className='mission-list-wrapper' >
				{ this.renderItem() }
			</ul>
		)
	}
}

module.exports = MissionList;