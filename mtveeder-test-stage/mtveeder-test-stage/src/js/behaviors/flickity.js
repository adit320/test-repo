import Flickity from 'flickity';
import fizzyUIUtils from 'fizzy-ui-utils';
import {ready} from '../utilities';

function initialize() {
  // TODO: change this to Swiper 
  var buttonGroup = document.querySelector('.Carousel__ButtonGroup');
  if (buttonGroup) {
    var buttons = buttonGroup.querySelectorAll('.Carousel__Button');
    buttons = fizzyUIUtils.makeArray( buttons );
  
    var flkty = new Flickity('.Carousel', {
      "prevNextButtons": false,
      "wrapAround": true,
      "dragThreshold": 16,
      "fullscreen": true,
      "pageDots": false,
      on: {
        change: function( index ) {
          buttons.forEach((node) =>  {
            node.classList.remove('is-selected')
          });
          buttons[index].classList.add('is-selected')
        }
      }
    });
     
    buttonGroup.addEventListener( 'click', function( event ) {
      if ( !event.target.classList.contains('Carousel__Button') ) {
        return;
      }
      var index = buttons.indexOf( event.target );
      flkty.select( index );
    });
  }

}

ready(initialize);