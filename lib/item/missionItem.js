'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _downList = require('./down-list.js');

var _downList2 = _interopRequireDefault(_downList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MissionItem = function (_Component) {
  _inherits(MissionItem, _Component);

  function MissionItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MissionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MissionItem.__proto__ || Object.getPrototypeOf(MissionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      order: null
    }, _this.statusClick = function (e) {
      var index = _this.props.data.index;

      var options = {
        pramater: 'status',
        event: e,
        index: index
      };
      _this.setState({
        visible: !_this.state.visible
      });
      _this.props.callback(options);
      //console.log(status)
    }, _this.typeClick = function (e) {
      var _this$props$data = _this.props.data,
          status = _this$props$data.status,
          type = _this$props$data.type,
          index = _this$props$data.index;


      if (type || status == 2) return false;
      var options = {
        pramater: 'type',
        event: e,
        index: index
      };
      _this.props.callback(options);
    }, _this.descriptionClick = function (e) {
      var index = _this.props.data.index;

      var options = {
        pramater: 'description',
        event: e,
        index: index
      };
      _this.props.callback(options);
    }, _this.starClick = function (e) {
      var index = _this.props.data.index;

      var options = {
        pramater: 'star',
        event: e,
        index: index
      };

      _this.props.callback(options);
    }, _this.changeState = function (e) {
      var index = e.target.id;
      // let{status}=this.props.data;
      // let{number}=this.props.content;
      _this.setState({
        order: _this.props.content[index].number,
        visible: false
      });
      //console.log(this.props.content[index].number)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MissionItem, [{
    key: 'getStatusClass',

    //获取状态类
    value: function getStatusClass(sta) {
      if (!this.state.order) return 'mission-status ' + 'icon-taskStatus-0 ';
      return 'mission-status ' + ('icon-taskStatus-' + (this.state.order || sta) + ' ');
    }
    //状态点击

    //分类点击(已完成｜｜有分类点击失效)


    //描述信息点击

    //收藏点击

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

  }, {
    key: 'render',
    value: function render() {

      // let data = [{"name":"已完成","number":"2"},
      // {"name":"进行中","number":"1"},
      // {"name":"已取消","number":"4"},
      // {"name":"已延迟","number":"3"},
      // {"name":"暂停中","number":"6"},
      // {"name":"未开始","number":"0"}];
      var _props$data = this.props.data,
          status = _props$data.status,
          type = _props$data.type,
          discription = _props$data.discription,
          childMission = _props$data.childMission,
          communicate = _props$data.communicate,
          limit = _props$data.limit,
          deadline = _props$data.deadline,
          ownner = _props$data.ownner,
          star = _props$data.star;
      //状态

      var statusClass = this.getStatusClass(status);
      //权限
      var limitContain = limit == 0 ? '' : _react2.default.createElement(
        'span',
        null,
        '\u6211\u53C2\u4E0E\u7684'
      );
      //子任务
      var childMissionContain = childMission && childMission <= 0 ? '' : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'icon-plan-task margin-right5' }),
        _react2.default.createElement(
          'span',
          { className: 'margin-right10 color-un-use font-size12' },
          childMission
        )
      );
      //沟通
      var communicateContain = communicate && communicate <= 0 ? '' : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('span', { className: 'icon-plan-talk margin-right5' }),
        _react2.default.createElement(
          'span',
          { className: 'margin-right10 color-un-use font-size12' },
          communicate
        )
      );
      //收藏
      var starClass = star ? 'icon-star-active ' : 'icon-star ';
      //分类（未分类而且未完成可点击）
      var typeClass = type || status == 2 ? 'mission-type ' : 'mission-type unType ';
      //描述(完成置灰)
      var discriptionClass = status == 2 ? 'mission-discription unDescription ' : 'mission-discription ';

      return _react2.default.createElement(
        'li',
        { className: 'mission-item' },
        _react2.default.createElement(
          'div',
          { className: 'mission-item-left ' },
          _react2.default.createElement('a', { href: 'javascript:;', onClick: this.statusClick, className: statusClass }),
          _react2.default.createElement(
            'span',
            { className: typeClass, onClick: this.typeClick },
            type || '未分类'
          ),
          _react2.default.createElement(_downList2.default, { className: 'lists', order: this.state.order, changeState: this.changeState, content: this.props.content, visible: this.state.visible })
        ),
        _react2.default.createElement(
          'div',
          { className: 'mission-item-middle ' },
          _react2.default.createElement(
            'a',
            { className: discriptionClass, onClick: this.descriptionClick },
            discription
          ),
          _react2.default.createElement(
            'span',
            { className: 'mission-limit ' },
            limitContain
          ),
          _react2.default.createElement(
            'span',
            { className: 'mission-childMission ' },
            childMissionContain
          ),
          _react2.default.createElement(
            'span',
            { className: 'mission-communicate ' },
            communicateContain
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mission-item-right ' },
          _react2.default.createElement(
            'span',
            { className: 'mission-deadline ' },
            deadline
          ),
          _react2.default.createElement(
            'span',
            { className: 'mission-ownner margin-right5 font-size12 ' },
            ownner
          ),
          _react2.default.createElement(
            'a',
            { className: starClass, onClick: this.starClick },
            star
          )
        )
      );
    }
  }]);

  return MissionItem;
}(_react.Component);

module.exports = MissionItem;