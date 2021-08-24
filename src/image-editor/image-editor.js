import Vue from "vue";
import App from "./image-editor-app.vue";

import VueDarkMode from "@growthbunker/vuedarkmode";
Vue.use(VueDarkMode);

import _ from "lodash";

import { ColorPicker, ColorPanel } from "one-colorpicker";
Vue.use(ColorPanel);
Vue.use(ColorPicker);

Vue.use(require('vue-shortkey'))

import Vuex from "vuex";
Vue.use(Vuex);

import contenteditable from 'vue-contenteditable';
Vue.use(contenteditable)

// VUE TIPPY
import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy, {
  a11y: false,
  placement: "left",
  arrow: true,
  theme: "light-border",
  maxWidth: 450,
  delay: [500,0],
  onShow: options => {
    return !!options.props.content;
  },
  boundary: "viewport",
  flipDuration: 0
});
Vue.component("tippy", TippyComponent);
import "tippy.js/themes/light-border.css";

const store = new Vuex.Store({
  state: {
    visibleAnimatedCovers: null,
    covers: null,
    coverAmount: 30,
    coverSize: 160,
    paddingSize: 5,
    coverPlaceholders: 0,
    coversPerRow: 5,
    canvas: {
      width: 1200,
      height: 0,
      heightActual: 0,
      background: "#fff",
      zoom: 1,
      zoomOutputs: false,
      fit: false,
      padding: {
        left: 32,
        top: 32,
        right: 32,
        bottom: 32,
      },
      transformOrigin: "center center",
      scaled: {
        width: 0,
        height: 0,
      },
      alignment: 'center',
    },
    saving: false,
    slidingAround: null,
    showHints: true,
    canvasPanning: false,
    usedCovers: null,
    draggable: true,
    showAuthorAndTitle: false,
    authorAndTitleColor: '#333',
    textElementCounter: 0,
    textElements: [],
    compressImage: false,
    compressQuality: .95,
    events: {
      textNudge: true,
      textRemove: true,
      canvasPanning: true,
    },
    animatedWallpaperMode: false,
    excludeArchived: false,
    archived: 0,
    animationPreset: 'piano-swipe-fade',
    animationPresets: null,
    timeUntilNextCycle: null,
    awpAnimationZone: null,
    awpOverlayColorEnabled: false,
    awpOverlayColor: 'rgba(30,30,30, .63)',
    awpGrayscale: false,
  },
  mutations: {
    
    update(state, config) {
      let setValues = function (config) {
        config = config || {};
        if (config.key) {
          _.set(state, config.key, config.value);
        }
      };

      if (_.isArray(config)) {
        _.each(config, function(conf) {
          setValues(conf);
        });
      } else {
        setValues(config);
      }
    },
    
    addText( state, textElement ) {
      
      ++state.textElementCounter;
      if ( !textElement.id ) textElement.id = state.textElementCounter;
      if ( !textElement.textElement ) textElement.textElement = true;
      
      let activeEl = _.find( state.textElements, { active: true });
      if ( activeEl ) activeEl.active = false;
      
      state.textElements.push( textElement );
      
    },
    
    removeText( state, index ) {
      state.textElements.splice(index, 1);
    },
    
    changeText( state, config ) {
      
      let textObj = state.textElements[ config.index ];
      textObj[ config.key ] = config.value;
      
    },
    
    activateText( state, activateIndex ) {
      
      _.each( state.textElements, function( el, index ) {
        el.active = (index === activateIndex);
      });
      
    },
    
    updateCoverPlaceholders: function( state, value) {
      
      let usedPlaceholders = _.filter( state.usedCovers, 'placeholderCover' );
      let difference = Math.abs(usedPlaceholders.length - value);
      let diffArray = _.range(0, difference);
      if ( usedPlaceholders.length < value ) {
        _.each(diffArray, function( index ) {
          state.usedCovers.unshift( newItem() );
        });
      }
      else {
        
        _.each(_.dropRight(usedPlaceholders, difference), function( cover ) {
          
          let removeIndex = _.findIndex(state.usedCovers, { asin: cover.asin });
          if ( removeIndex ) {
            state.usedCovers.splice(removeIndex, 1);
          }
          
        });
        
      }
      
      function newItem() {
        return {
          asin: new Date().getTime(),
          placeholderCover: true,
        };
      };
        
      
    },
    
  },
  getters: {
    
    widthOrHeight_Unset: function (state) {
      return state.canvas.width < 1 || state.canvas.height < 1;
    },
    
    textElementActive: function( state ) {
      return !!_.find( state.textElements, 'active');
    },
    
  }
});


import vueDragscroll from "vue-dragscroll";
Vue.use(vueDragscroll);

Vue.config.productionTip = false;

let editorApp = new Vue({
  el: "#image-editor",
  render: (h) => h(App),
  store
});

