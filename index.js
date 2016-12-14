import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

import MissionList from './src/index.js';

class Demo extends Component{

  constructor(props){
    super(props);
    this.state={
      visible:false,
      datas:[
        {
          'status':0              /* 0-5分别代表（0未开始，1进行中，2已完成，3已延迟，4已取消，5暂停中） */
          ,'type':'青岛研发中心'    /* 类别 */
          ,'discription':'任务一'  /*任务描述 */
          ,'childMission':2       /*子任务个数 */
          ,'communicate':3        /*沟通个数 */
          ,'limit':1              /*权限 0我负责的，1我参与的 */
          ,'deadline':'11/30'     /*截止日期 */
          ,'ownner':'徐海彬'       /*负责人 */
          ,'star':false           /*收藏 */
        },
        {
          'status':1              /* 0-5分别代表（0未开始，1进行中，2已完成，3已延迟，4已取消，5暂停中） */
          ,'type':'青岛研发中心'    /* 类别 */
          ,'discription':'任务一'  /*任务描述 */
          ,'childMission':0       /*子任务个数 */
          ,'communicate':3        /*沟通个数 */
          ,'limit':1              /*权限 0我负责的，1我参与的 */
          ,'deadline':'11/30'     /*截止日期 */
          ,'ownner':'徐海彬'       /*负责人 */
          ,'star':false           /*收藏 */
        }
      ],
       content:[{'name':'已完成','number':2},
    {'name':'进行中','number':1},
    {'name':'已取消','number':4},
    {'name':'已延迟','number':3},
    {'name':'暂停中','number':6},
    {'name':'未开始','number':0}
    ]
    }

    this.callback=::this.callback;
  }

   // changeState=(e)=>{
 
   //  let index = e.target.id;
   //  // let{status}=this.props.data;
   //  // let{number}=this.props.content;
   //  this.setState({
   //    order:this.state.content[index].number,
   //    visible:false


   //  });
     // let order = this.state.content[index].number
   // return order;
    
        //debugger
       //let target=e.target || e.srcElement;
       //console.log(parseInt(target.id)+1);
        //console.log(data.number)

    // }
    //console.log(this.changeState.status);
  callback(options){
    //console.log(options)

  }

  render () {
    //let index = e.target.id;
  
     //let status = this.state.content[index].number
    //console.log(this.changeState.status);
    
    return (

      <div>
    	  <MissionList datas={this.state.datas} visible={this.state.visible}  changeState={this.changeState} content={this.state.content} callback={this.callback}/>
      </div>
    )
   
  }
}

render(<Demo />, document.getElementById('content'))
