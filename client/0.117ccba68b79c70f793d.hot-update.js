webpackHotUpdate(0,{

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(10);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(8);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(2);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(9);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactAddonsPureRenderMixin = __webpack_require__(39);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _reactRouter = __webpack_require__(13);
	
	var _reactLazyload = __webpack_require__(18);
	
	var _reactLazyload2 = _interopRequireDefault(_reactLazyload);
	
	var _Loader = __webpack_require__(35);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	var _LoginForm = __webpack_require__(215);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _radium = __webpack_require__(14);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Login: {
	    displayName: 'Login'
	  }
	};
	
	var _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/mikegnanakone/Desktop/Code/April/PodcastApp/components/Login.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/mikegnanakone/Desktop/Code/April/PodcastApp/components/Login.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Login = _wrapComponent('Login')(function (_Component) {
	  _inherits(Login, _Component);
	
	  _createClass(Login, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.props.loggedIn == false ? _reactRouter.browserHistory.push('/login') : _reactRouter.browserHistory.push('/');
	    }
	  }]);
	
	  function Login(props) {
	    _classCallCheck(this, Login);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: ''
	    };
	    return _this;
	  }
	
	  _createClass(Login, [{
	    key: 'render',
	    value: function render() {
	      var message = this.props.loginErrorMessage;
	      var styles = {
	        buttonStyle: {
	          width: "100%",
	          display: "block",
	          margin: "10px 0"
	        },
	        lostPassword: {
	          marginRight: "10px"
	        },
	        disabled: {
	          background: 'rgba(187, 187, 187, 0.5)',
	          cursor: 'not-allowed'
	        },
	        enabled: {
	          display: "inline-block"
	        },
	        agree: {
	          marginBottom: "10px"
	        },
	        hide: {
	          display: "none"
	        },
	        show: {
	          display: "block"
	        },
	        backgroundContainer: {
	          background: "url('https://snap-photos.s3.amazonaws.com/img-thumbs/960w/ZHNV9TMT7A.jpg')",
	          width: "100vw",
	          height: "100vh",
	          display: "flex",
	          backgroundRepeat: "no-repeat",
	          backgroundSize: "cover"
	        },
	        whiteText: {
	          color: "white"
	        },
	        registerLink: {
	          color: "white",
	          position: "fixed",
	          bottom: "30px"
	        }
	      };
	      // this.props.loggedIn != false ? browserHistory.push('/lobby') : console.log("Not logged in!");
	      return _react3.default.createElement(
	        'div',
	        { style: styles.backgroundContainer },
	        _react3.default.createElement(
	          'div',
	          { className: 'container' },
	          _react3.default.createElement(
	            'div',
	            { className: 'row' },
	            _react3.default.createElement(
	              'div',
	              { className: 'col s12 m8 push-m2' },
	              _react3.default.createElement(
	                'h4',
	                { className: 'center-align white-text' },
	                'Login to your account'
	              ),
	              _react3.default.createElement(
	                'div',
	                { className: 'row', style: !message ? styles.hide : styles.show },
	                _react3.default.createElement(
	                  'div',
	                  { className: 'col s12' },
	                  _react3.default.createElement(
	                    'div',
	                    { className: 'card-panel red' },
	                    _react3.default.createElement(
	                      'span',
	                      { className: 'white-text' },
	                      message
	                    )
	                  )
	                )
	              ),
	              _react3.default.createElement(
	                'div',
	                { className: 'row' },
	                _react3.default.createElement(_LoginForm2.default, { actions: this.props.actions })
	              )
	            )
	          ),
	          _react3.default.createElement(
	            'div',
	            { className: 'row' },
	            _react3.default.createElement(
	              'div',
	              { className: 'col m4 push-m3 center-align' },
	              _react3.default.createElement(
	                _reactRouter.Link,
	                { to: '/register', style: styles.registerLink },
	                'First time here? Sign up today!'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Login;
	}(_react2.Component));
	
	exports.default = Login;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzPzk4MzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFHTTs7Ozt5Q0FFZ0I7OzswQ0FHQTtBQUNsQixZQUFLLEtBQUwsQ0FBVyxRQUFYLElBQXVCLEtBQXZCLEdBQStCLDRCQUFlLElBQWYsQ0FBb0IsUUFBcEIsQ0FBL0IsR0FBK0QsNEJBQWUsSUFBZixDQUFvQixHQUFwQixDQUEvRCxDQURrQjs7OztBQUdwQixZQVJJLEtBUUosQ0FBWSxLQUFaLEVBQW1COzJCQVJmLE9BUWU7O3dFQVJmLGtCQVNNLFFBRFM7O0FBRWYsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPLEVBQVA7QUFDQSxpQkFBVSxFQUFWO01BRkYsQ0FGZTs7SUFBbkI7O2dCQVJJOzs4QkFlSztBQUNQLFdBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxpQkFBWCxDQURQO0FBRVAsV0FBSSxTQUFTO0FBQ1gsc0JBQWE7QUFDWCxrQkFBTyxNQUFQO0FBQ0Esb0JBQVMsT0FBVDtBQUNBLG1CQUFRLFFBQVI7VUFIRjtBQUtBLHVCQUFjO0FBQ1osd0JBQWEsTUFBYjtVQURGO0FBR0EsbUJBQVU7QUFDUix1QkFBWSwwQkFBWjtBQUNBLG1CQUFRLGFBQVI7VUFGRjtBQUlBLGtCQUFTO0FBQ1Asb0JBQVMsY0FBVDtVQURGO0FBR0EsZ0JBQU87QUFDTCx5QkFBYyxNQUFkO1VBREY7QUFHQSxlQUFNO0FBQ0osb0JBQVMsTUFBVDtVQURGO0FBR0EsZUFBTTtBQUNKLG9CQUFTLE9BQVQ7VUFERjtBQUdBLDhCQUFxQjtBQUNuQix1QkFBWSw0RUFBWjtBQUNBLGtCQUFPLE9BQVA7QUFDQSxtQkFBUSxPQUFSO0FBQ0Esb0JBQVMsTUFBVDtBQUNBLDZCQUFrQixXQUFsQjtBQUNBLDJCQUFnQixPQUFoQjtVQU5GO0FBUUEsb0JBQVc7QUFDVCxrQkFBTyxPQUFQO1VBREY7QUFHQSx1QkFBYztBQUNaLGtCQUFPLE9BQVA7QUFDQSxxQkFBVSxPQUFWO0FBQ0EsbUJBQVEsTUFBUjtVQUhGO1FBcENFOztBQUZHLGNBOENMOztXQUFLLE9BQU8sT0FBTyxtQkFBUCxFQUFaO1NBQ0k7O2FBQUssV0FBVSxXQUFWLEVBQUw7V0FDRTs7ZUFBSyxXQUFVLEtBQVYsRUFBTDthQUNFOztpQkFBSyxXQUFVLG9CQUFWLEVBQUw7ZUFDRzs7bUJBQUksV0FBVSx5QkFBVixFQUFKOztnQkFESDtlQUVHOzttQkFBSyxXQUFVLEtBQVYsRUFBZ0IsT0FBUSxDQUFDLE9BQUQsR0FBVyxPQUFPLElBQVAsR0FBYyxPQUFPLElBQVAsRUFBdEQ7aUJBQ0c7O3FCQUFLLFdBQVUsU0FBVixFQUFMO21CQUNFOzt1QkFBSyxXQUFVLGdCQUFWLEVBQUw7cUJBQ0k7O3lCQUFNLFdBQVUsWUFBVixFQUFOO3VCQUNJLE9BREo7c0JBREo7b0JBREY7a0JBREg7Z0JBRkg7ZUFXTTs7bUJBQUssV0FBVSxLQUFWLEVBQUw7aUJBQ0UscURBQVcsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQXBCLENBREY7Z0JBWE47Y0FERjtZQURGO1dBa0JFOztlQUFLLFdBQVUsS0FBVixFQUFMO2FBQ0U7O2lCQUFLLFdBQVUsNkJBQVYsRUFBTDtlQUNFOzttQkFBTSxJQUFHLFdBQUgsRUFBZSxPQUFPLE9BQU8sWUFBUCxFQUE1Qjs7Z0JBREY7Y0FERjtZQWxCRjtVQURKO1FBREYsQ0E3Q087Ozs7VUFmTDs7O21CQTJGUyxNIiwiZmlsZSI6IjAuMTE3Y2NiYTY4Yjc5YzcwZjc5M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQdXJlUmVuZGVyTWl4aW4gZnJvbSAncmVhY3QtYWRkb25zLXB1cmUtcmVuZGVyLW1peGluJztcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5LCByb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luL0xvZ2luRm9ybSdcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJ1xuXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgdGhpcy5wcm9wcy5sb2dnZWRJbiA9PSBmYWxzZSA/IGJyb3dzZXJIaXN0b3J5LnB1c2goJy9sb2dpbicpIDogYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpXG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMucHJvcHMubG9naW5FcnJvck1lc3NhZ2VcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgYnV0dG9uU3R5bGU6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIlxuICAgICAgfSxcbiAgICAgIGxvc3RQYXNzd29yZDoge1xuICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCJcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgxODcsIDE4NywgMTg3LCAwLjUpJyxcbiAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgICB9LFxuICAgICAgZW5hYmxlZDoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gICAgICB9LFxuICAgICAgYWdyZWU6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuICAgICAgfSxcbiAgICAgIGhpZGU6IHtcbiAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgIH0sXG4gICAgICBzaG93OiB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb250YWluZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJ1cmwoJ2h0dHBzOi8vc25hcC1waG90b3MuczMuYW1hem9uYXdzLmNvbS9pbWctdGh1bWJzLzk2MHcvWkhOVjlUTVQ3QS5qcGcnKVwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZVRleHQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIlxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyTGluazoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICBib3R0b206IFwiMzBweFwiXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMucHJvcHMubG9nZ2VkSW4gIT0gZmFsc2UgPyBicm93c2VySGlzdG9yeS5wdXNoKCcvbG9iYnknKSA6IGNvbnNvbGUubG9nKFwiTm90IGxvZ2dlZCBpbiFcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYWNrZ3JvdW5kQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG04IHB1c2gtbTJcIj5cbiAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNlbnRlci1hbGlnbiB3aGl0ZS10ZXh0XCI+TG9naW4gdG8geW91ciBhY2NvdW50PC9oND5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17ICFtZXNzYWdlID8gc3R5bGVzLmhpZGUgOiBzdHlsZXMuc2hvdyB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWwgcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1lc3NhZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybSBhY3Rpb25zPXt0aGlzLnByb3BzLmFjdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtNCBwdXNoLW0zIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCIgc3R5bGU9e3N0eWxlcy5yZWdpc3Rlckxpbmt9PkZpcnN0IHRpbWUgaGVyZT8gU2lnbiB1cCB0b2RheSE8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBcdFxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50cy9Mb2dpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=