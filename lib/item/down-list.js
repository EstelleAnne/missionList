'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

//index.css

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var liststyle = this.props.visible ? { display: 'block' } : { display: 'none' };
            return _react2.default.createElement(
                'div',
                { className: 'changestate', style: liststyle },
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.content.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { className: 'statelist', id: index, onClick: _this2.props.changeState, key: index },
                            _react2.default.createElement(
                                'a',
                                { id: index },
                                _react2.default.createElement('span', { id: index, className: "ico icon-taskStatus-" + item.number }),
                                _react2.default.createElement(
                                    'span',
                                    { id: index },
                                    item.name
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

module.exports = App;