webpackHotUpdate(0,{

/***/ 209:
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
	
	var _reactRouter = __webpack_require__(13);
	
	var _Home = __webpack_require__(212);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _firebase = __webpack_require__(325);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _Login = __webpack_require__(214);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Lobby = __webpack_require__(213);
	
	var _Lobby2 = _interopRequireDefault(_Lobby);
	
	var _Register = __webpack_require__(220);
	
	var _Register2 = _interopRequireDefault(_Register);
	
	var _GuestHeader = __webpack_require__(210);
	
	var _GuestHeader2 = _interopRequireDefault(_GuestHeader);
	
	var _Header = __webpack_require__(211);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _PodcastPlayer = __webpack_require__(219);
	
	var _PodcastPlayer2 = _interopRequireDefault(_PodcastPlayer);
	
	var _reactRedux = __webpack_require__(143);
	
	var _redux = __webpack_require__(72);
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _actions = __webpack_require__(223);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  App: {
	    displayName: 'App'
	  }
	};
	
	var _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/mikegnanakone/Desktop/Code/April/PodcastApp/components/App.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/mikegnanakone/Desktop/Code/April/PodcastApp/components/App.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersMikegnanakoneDesktopCodeAprilPodcastAppNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var App = _wrapComponent('App')(function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.checkIfLoggedIn();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      // this.props.loggedIn == false ? browserHistory.push('/login') : browserHistory.push('/podcasts')
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var login = function login() {
	        return _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_GuestHeader2.default, { loggedIn: _this2.props.loggedIn, actions: _this2.props.actions }),
	          _react3.default.createElement(_Login2.default, {
	            actions: _this2.props.actions,
	            loggedIn: _this2.props.loggedIn,
	            loginErrorMessage: _this2.props.loginErrorMessage,
	            user: _this2.props.user,
	            history: _this2.props.history
	          })
	        );
	      };
	      var NotFound = function NotFound() {
	        return _react3.default.createElement(
	          'h1',
	          null,
	          '404.. This page is not found!'
	        );
	      };
	      var register = function register() {
	        return _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_GuestHeader2.default, { loggedIn: _this2.props.loggedIn, actions: _this2.props.actions }),
	          _react3.default.createElement(_Register2.default, {
	            actions: _this2.props.actions,
	            loggedIn: _this2.props.loggedIn,
	            registrationStatus: _this2.props.registrationStatus,
	            registrationMessage: _this2.props.registrationMessage,
	            loginErrorMessage: _this2.props.loginErrorMessage
	          })
	        );
	      };
	      var Container = function Container(props) {
	        return _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(_Header2.default, { title: _this2.props.title, loggedIn: _this2.props.loggedIn, actions: _this2.props.actions }),
	          props.children
	        );
	      };
	      var podcasts = function podcasts() {
	        return _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(
	            'main',
	            null,
	            _react3.default.createElement(_Lobby2.default, {
	              actions: _this2.props.actions,
	              loggedIn: _this2.props.loggedIn,
	              registrationStatus: _this2.props.registrationStatus,
	              user: _this2.props.user,
	              podcasts: _this2.props.podcasts
	            })
	          ),
	          _react3.default.createElement(_PodcastPlayer2.default, { actions: _this2.props.actions, loaded: _this2.props.loaded, podcast: _this2.props.featuredPodcast })
	        );
	      };
	      return _react3.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.browserHistory },
	        _react3.default.createElement(
	          _reactRouter.Route,
	          { path: '/', component: Container },
	          _react3.default.createElement(_reactRouter.IndexRoute, { component: login }),
	          _react3.default.createElement(_reactRouter.Route, { path: '/login', component: login }),
	          _react3.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	function mapStateToProps(state) {
	  return state;
	}
	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch)
	  };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz80MzZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUVNOzs7Ozs7Ozs7O3lDQUNnQjtBQUNoQixZQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLGVBQW5CLEdBRGdCOzs7OzBDQUdBOzs7Ozs4QkFHWDs7O0FBQ1QsV0FBTSxRQUFRLFNBQVIsS0FBUTtnQkFDWjs7O1dBQ0UsdURBQWEsVUFBVSxPQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLFNBQVMsT0FBSyxLQUFMLENBQVcsT0FBWCxFQUFyRCxDQURGO1dBRUU7QUFDRSxzQkFBUyxPQUFLLEtBQUwsQ0FBVyxPQUFYO0FBQ1QsdUJBQVUsT0FBSyxLQUFMLENBQVcsUUFBWDtBQUNWLGdDQUFtQixPQUFLLEtBQUwsQ0FBVyxpQkFBWDtBQUNuQixtQkFBTSxPQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ04sc0JBQVMsT0FBSyxLQUFMLENBQVcsT0FBWDtZQUxYLENBRkY7O1FBRFksQ0FETDtBQVlQLFdBQU0sV0FBVyxTQUFYLFFBQVc7Z0JBQU07Ozs7O1FBQU4sQ0FaVjtBQWFQLFdBQU0sV0FBVyxTQUFYLFFBQVc7Z0JBQ2pCOzs7V0FDTSx1REFBYSxVQUFVLE9BQUssS0FBTCxDQUFXLFFBQVgsRUFBcUIsU0FBUyxPQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQXJELENBRE47V0FFTTtBQUNFLHNCQUFTLE9BQUssS0FBTCxDQUFXLE9BQVg7QUFDVCx1QkFBVSxPQUFLLEtBQUwsQ0FBVyxRQUFYO0FBQ1YsaUNBQW9CLE9BQUssS0FBTCxDQUFXLGtCQUFYO0FBQ3BCLGtDQUFxQixPQUFLLEtBQUwsQ0FBVyxtQkFBWDtBQUNyQixnQ0FBbUIsT0FBSyxLQUFMLENBQVcsaUJBQVg7WUFMckIsQ0FGTjs7UUFEaUIsQ0FiVjtBQXdCUCxXQUFNLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRDtnQkFBVzs7O1dBQzNCLGtEQUFRLE9BQU8sT0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixVQUFVLE9BQUssS0FBTCxDQUFXLFFBQVgsRUFBcUIsU0FBUyxPQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQXpFLENBRDJCO1dBRTFCLE1BQU0sUUFBTjs7UUFGZSxDQXhCWDtBQTRCUCxXQUFNLFdBQVcsU0FBWCxRQUFXO2dCQUNqQjs7O1dBQ0U7OzthQUNFO0FBQ0Usd0JBQVMsT0FBSyxLQUFMLENBQVcsT0FBWDtBQUNULHlCQUFVLE9BQUssS0FBTCxDQUFXLFFBQVg7QUFDVixtQ0FBb0IsT0FBSyxLQUFMLENBQVcsa0JBQVg7QUFDcEIscUJBQU0sT0FBSyxLQUFMLENBQVcsSUFBWDtBQUNOLHlCQUFVLE9BQUssS0FBTCxDQUFXLFFBQVg7Y0FMWixDQURGO1lBREY7V0FVRSx5REFBZSxTQUFTLE9BQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsUUFBUSxPQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLFNBQVMsT0FBSyxLQUFMLENBQVcsZUFBWCxFQUFoRixDQVZGOztRQURpQixDQTVCVjtBQXlDUCxjQUNFOztXQUFRLHNDQUFSO1NBQ0U7O2FBQU8sTUFBSyxHQUFMLEVBQVMsV0FBVyxTQUFYLEVBQWhCO1dBQ0kseURBQVksV0FBVyxLQUFYLEVBQVosQ0FESjtXQUVJLG9EQUFPLE1BQUssUUFBTCxFQUFjLFdBQVcsS0FBWCxFQUFyQixDQUZKO1dBR0ksb0RBQU8sTUFBSyxHQUFMLEVBQVMsV0FBVyxRQUFYLEVBQWhCLENBSEo7VUFERjtRQURGLENBekNPOzs7O1VBUEw7OztBQTJETixVQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTyxLQUFQLENBRDhCO0VBQWhDO0FBR0EsVUFBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNwQyxVQUFPO0FBQ0gsY0FBUyxrREFBNEIsUUFBNUIsQ0FBVDtJQURKLENBRG9DO0VBQXRDO21CQUtlLHlCQUFRLGVBQVIsRUFBeUIsa0JBQXpCLEVBQTZDLEdBQTdDLEUiLCJmaWxlIjoiMC40N2ZhZWZlMzk2NDliMTE2MTkyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgTGluaywgYnJvd3Nlckhpc3RvcnksIGhhc2hIaXN0b3J5LCBJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBGaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJ1xuaW1wb3J0IExvYmJ5IGZyb20gJy4vTG9iYnknXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9SZWdpc3RlcidcbmltcG9ydCBHdWVzdEhlYWRlciBmcm9tICcuL0d1ZXN0SGVhZGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4vUG9kY2FzdC9Qb2RjYXN0UGxheWVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jaGVja0lmTG9nZ2VkSW4oKSAgICBcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICAgIC8vIHRoaXMucHJvcHMubG9nZ2VkSW4gPT0gZmFsc2UgPyBicm93c2VySGlzdG9yeS5wdXNoKCcvbG9naW4nKSA6IGJyb3dzZXJIaXN0b3J5LnB1c2goJy9wb2RjYXN0cycpXG4gIH1cbiAgcmVuZGVyKCkge1xuICBjb25zdCBsb2dpbiA9ICgpID0+IFxuICAgIDxkaXY+XG4gICAgICA8R3Vlc3RIZWFkZXIgbG9nZ2VkSW49e3RoaXMucHJvcHMubG9nZ2VkSW59IGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc30gIC8+XG4gICAgICA8TG9naW5cbiAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zfVxuICAgICAgICBsb2dnZWRJbj17dGhpcy5wcm9wcy5sb2dnZWRJbn1cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMucHJvcHMubG9naW5FcnJvck1lc3NhZ2V9XG4gICAgICAgIHVzZXI9e3RoaXMucHJvcHMudXNlcn1cbiAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICAgIGNvbnN0IE5vdEZvdW5kID0gKCkgPT4gPGgxPjQwNC4uIFRoaXMgcGFnZSBpcyBub3QgZm91bmQhPC9oMT5cbiAgICBjb25zdCByZWdpc3RlciA9ICgpID0+XG4gICAgPGRpdj5cbiAgICAgICAgICA8R3Vlc3RIZWFkZXIgbG9nZ2VkSW49e3RoaXMucHJvcHMubG9nZ2VkSW59IGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc30gICAvPlxuICAgICAgICAgIDxSZWdpc3RlclxuICAgICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zfVxuICAgICAgICAgICAgbG9nZ2VkSW49e3RoaXMucHJvcHMubG9nZ2VkSW59XG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM9e3RoaXMucHJvcHMucmVnaXN0cmF0aW9uU3RhdHVzfVxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uTWVzc2FnZT17dGhpcy5wcm9wcy5yZWdpc3RyYXRpb25NZXNzYWdlfVxuICAgICAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMucHJvcHMubG9naW5FcnJvck1lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICBjb25zdCBDb250YWluZXIgPSAocHJvcHMpID0+IDxkaXY+XG4gICAgICA8SGVhZGVyIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBsb2dnZWRJbj17dGhpcy5wcm9wcy5sb2dnZWRJbn0gYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zfSAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIGNvbnN0IHBvZGNhc3RzID0gKCkgPT5cbiAgICA8ZGl2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxMb2JieVxuICAgICAgICAgIGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc31cbiAgICAgICAgICBsb2dnZWRJbj17dGhpcy5wcm9wcy5sb2dnZWRJbn1cbiAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM9e3RoaXMucHJvcHMucmVnaXN0cmF0aW9uU3RhdHVzfVxuICAgICAgICAgIHVzZXI9e3RoaXMucHJvcHMudXNlcn1cbiAgICAgICAgICBwb2RjYXN0cz17dGhpcy5wcm9wcy5wb2RjYXN0c31cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxQb2RjYXN0UGxheWVyIGFjdGlvbnM9e3RoaXMucHJvcHMuYWN0aW9uc30gbG9hZGVkPXt0aGlzLnByb3BzLmxvYWRlZH0gcG9kY2FzdD17dGhpcy5wcm9wcy5mZWF0dXJlZFBvZGNhc3R9IC8+XG4gICAgPC9kaXY+XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e2xvZ2lufSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtsb2dpbn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScqJyBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKVxuICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlXG59XG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb21wb25lbnRzL0FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=