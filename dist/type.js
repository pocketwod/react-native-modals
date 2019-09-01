require('react');var _ModalButton=require('./components/ModalButton');var _ModalButton2=_interopRequireDefault(_ModalButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_SwipeDirection=require('prop-types').oneOf(['up','down','left','right']);if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_SwipeDirection',{value:babelPluginFlowReactPropTypes_proptype_SwipeDirection,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_DragEvent={axis:require('prop-types').shape({x:require('prop-types').number.isRequired,y:require('prop-types').number.isRequired}).isRequired,layout:require('prop-types').shape({x:require('prop-types').number.isRequired,y:require('prop-types').number.isRequired,width:require('prop-types').number.isRequired,height:require('prop-types').number.isRequired}).isRequired,swipeDirection:require('prop-types').string};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_DragEvent',{value:babelPluginFlowReactPropTypes_proptype_DragEvent,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_ModalProps={visible:require('prop-types').bool.isRequired,children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},width:require('prop-types').number,height:require('prop-types').number,rounded:require('prop-types').bool,hasOverlay:require('prop-types').bool,overlayPointerEvents:require('prop-types').oneOf(['auto','none']),overlayBackgroundColor:require('prop-types').string,overlayOpacity:require('prop-types').number,modalTitle:typeof Element==='function'?require('prop-types').instanceOf(Element):require('prop-types').any,modalAnimation:require('prop-types').object,modalStyle:require('prop-types').any,style:require('prop-types').any,animationDuration:require('prop-types').number,onTouchOutside:require('prop-types').func,onHardwareBackPress:require('prop-types').func,onShow:require('prop-types').func,onDismiss:require('prop-types').func,footer:typeof Node==='function'?require('prop-types').instanceOf(Node):require('prop-types').any,onMove:require('prop-types').func,onSwiping:require('prop-types').func,onSwipeRelease:require('prop-types').func,onSwipeOut:require('prop-types').func,swipeDirection:require('prop-types').oneOfType([require('prop-types').oneOf(['up','down','left','right']),require('prop-types').arrayOf(require('prop-types').oneOf(['up','down','left','right']))]),swipeThreshold:require('prop-types').number,useNativeDriver:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_ModalProps',{value:babelPluginFlowReactPropTypes_proptype_ModalProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_ModalFooterActionList=require('prop-types').arrayOf(typeof Element==='function'?require('prop-types').instanceOf(Element):require('prop-types').any);if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_ModalFooterActionList',{value:babelPluginFlowReactPropTypes_proptype_ModalFooterActionList,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_modalFooterProps={children:require('prop-types').arrayOf(typeof Element==='function'?require('prop-types').instanceOf(Element):require('prop-types').any).isRequired,style:require('prop-types').any,bordered:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_modalFooterProps',{value:babelPluginFlowReactPropTypes_proptype_modalFooterProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_ModalButtonProps={text:require('prop-types').string.isRequired,onPress:require('prop-types').func.isRequired,align:require('prop-types').string,style:require('prop-types').any,textStyle:require('prop-types').any,disabled:require('prop-types').bool,activeOpacity:require('prop-types').number,bordered:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_ModalButtonProps',{value:babelPluginFlowReactPropTypes_proptype_ModalButtonProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_ModalTitleProps={title:function title(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:require('prop-types').any,textStyle:require('prop-types').any,align:require('prop-types').string,hasTitleBar:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_ModalTitleProps',{value:babelPluginFlowReactPropTypes_proptype_ModalTitleProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_ModalContentProps={children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:require('prop-types').any};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_ModalContentProps',{value:babelPluginFlowReactPropTypes_proptype_ModalContentProps,configurable:true,enumerable:true});var babelPluginFlowReactPropTypes_proptype_BackdropProps={visible:require('prop-types').bool.isRequired,opacity:require('prop-types').number.isRequired,onPress:require('prop-types').func,backgroundColor:require('prop-types').string,animationDuration:require('prop-types').number,pointerEvents:require('prop-types').string,useNativeDriver:require('prop-types').bool};if(typeof exports!=='undefined')Object.defineProperty(exports,'babelPluginFlowReactPropTypes_proptype_BackdropProps',{value:babelPluginFlowReactPropTypes_proptype_BackdropProps,configurable:true,enumerable:true});