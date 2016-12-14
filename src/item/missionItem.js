import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import App from './down-list.js'

class MissionItem extends Component {
    state={
     order:null
    };
  //获取状态类
  getStatusClass(sta){
      if(!this.state.order) return 'mission-status ' + `icon-taskStatus-0 `;
      return 'mission-status '  + `icon-taskStatus-${this.state.order||sta} `;
  }
  //状态点击
  statusClick= (e)=>{
    let {index} = this.props.data;
    let options={
        pramater:'status',
        event:e,
        index:index
    }
    this.setState({
      visible:!this.state.visible
    })
    this.props.callback(options);
    //console.log(status)
  }
  //分类点击(已完成｜｜有分类点击失效)
  typeClick =(e)=>{
    let {status,type,index} = this.props.data;
    
    if(type||status==2)  return false;
    let options={
        pramater:'type',
        event:e,
        index:index
    }
    this.props.callback(options);
  }

  //描述信息点击
  descriptionClick =(e)=>{
    let {index} = this.props.data;
    let options={
        pramater:'description',
        event:e,
        index:index
    }
    this.props.callback(options);
  }
  //收藏点击
  starClick=(e)=>{

    let {index} = this.props.data;
    let options={
        pramater:'star',
        event:e,
        index:index
    }
  
    this.props.callback(options);
  }
   // changeState=(e)=>{
    
   //  let index = e.target.id;
   //  let{status}=this.props.data;
   //  let{number}=this.props.content;
   //  this.setState({
   //    status:this.props.content[index].number
   //  });
   //  console.log(index)
   //      //debugger
   //     //let target=e.target || e.srcElement;
   //     //console.log(parseInt(target.id)+1);
   //      //console.log(data.number)

   //  }
  changeState=(e)=>{
    let index = e.target.id;
    // let{status}=this.props.data;
    // let{number}=this.props.content;
    this.setState({
      order:this.props.content[index].number,
      visible:false
    })
    //console.log(this.props.content[index].number)
  }
  render () {
 
    // let data = [{"name":"已完成","number":"2"},
    // {"name":"进行中","number":"1"},
    // {"name":"已取消","number":"4"},
    // {"name":"已延迟","number":"3"},
    // {"name":"暂停中","number":"6"},
    // {"name":"未开始","number":"0"}];
    const { status, type, discription, childMission, communicate, limit, deadline, ownner, star} = this.props.data;
    //状态
    let statusClass = this.getStatusClass(status);
    //权限
    let limitContain = limit==0?'':(<span>我参与的</span>);
    //子任务
    let childMissionContain = childMission&&childMission<=0 ?'':
      (<span><span className={'icon-plan-task margin-right5'}></span>
        <span className={'margin-right10 color-un-use font-size12'}>{childMission}</span></span>);
    //沟通
    let communicateContain = communicate&&communicate<=0 ?'':
      (<span><span className={'icon-plan-talk margin-right5'}></span>
        <span className={'margin-right10 color-un-use font-size12'}>{communicate}</span></span>);
    //收藏
    let starClass = star?'icon-star-active ':'icon-star '
    //分类（未分类而且未完成可点击）
    let typeClass = type||status==2 ? 'mission-type ':'mission-type unType ';
    //描述(完成置灰)
    let discriptionClass = status==2 ? 'mission-discription unDescription ':'mission-discription ';
   
	return (
      <li className='mission-item'>
        <div className={'mission-item-left '}>
          <a href='javascript:;' onClick={this.statusClick} className={statusClass}></a>
            
          <span className={typeClass} onClick={this.typeClick}>{type||'未分类'}</span>
          <App className="lists" order={this.state.order} changeState={this.changeState} content={this.props.content} visible={this.state.visible}/>
        </div>

        <div className={'mission-item-middle '}>
          <a className={discriptionClass} onClick={this.descriptionClick}>{discription}</a>
        
          <span className={'mission-limit '}>{limitContain}</span>

          <span className={'mission-childMission '}>{childMissionContain}</span>

          <span className={'mission-communicate '}>{communicateContain}</span>
        </div>

        <div className={'mission-item-right '}>
          <span className={'mission-deadline '}>{deadline}</span>

          <span className={'mission-ownner margin-right5 font-size12 '}>{ownner}</span>

          <a className={starClass} onClick={this.starClick}>{star}</a>
        </div>

      </li>
	)
  }

}

module.exports = MissionItem;