
// var popup_visible = "NA";



var whats_new_pop_up_api_val = UI ? UI.feature.whatfix.getIgnoreWhatsNew().then(function (e) { return e; }) : null;


var whats_new_pop_up_interval = setInterval(function () {

  if (document.querySelector('[id="wfx-player-popup"]')) {
    console.log("popup present");
    document.querySelectorAll('[id="wfx-frame-popup"]')[0].contentWindow.document.querySelectorAll('[id="popupDontShowPanel"] [id="popupDontShowAgain"]')[0].addEventListener('click', function () {

      var current_val = UI.feature.whatfix.getIgnoreWhatsNew().then(function (e) {
        return e;
      });

      var var_for_cur_val = setInterval(function () {
        if (current_val != null) {
          // if (current_val == true) {
          //   UI.feature.whatfix.setignore(0); // setting value of the api return to false
          //   clearInterval(var_for_cur_val);
          // } else if (current_val == false) {
          //   UI.feature.whatfix.setignore(1); // setting value of the api return to true
          //   clearInterval(var_for_cur_val);
          // }
          UI.feature.whatfix.setignore(1); // setting value of the api return to true
        }
      }, 50);

    });
  }

}, 250);



window._wfx_settings.onStart = function (event) {
  if (event.flow_id == "653126a0-8584-11ec-84a9-000d3a578a9c") { //  What's New 7.2 flow
    _wfx_close_live();
    for (var key in localStorage) {
      if (!/^([0-9]|[a-z])+([0-9a-z]+)$/i.test(key) && key.indexOf('-') > 0 && key.includes(':')) {
        console.log(key);
        var prevVal = JSON.parse(localStorage.getItem(key));
        console.log(prevVal);
        if (prevVal.count.toString().includes('.')) {
          console.log("do not show me again is checked");
          localStorage.removeItem(key);
          // popup_visible = "true";
          var show_popup_from_flow_interval = setInterval(function() {
            var temp_current_val = UI.feature.whatfix.getIgnoreWhatsNew().then(function (e) {
              return e;
            });

            if ( temp_current_val != null ) {
              if ( temp_current_val == true ) {
                whats_new_pop_up_api_val = true;
                _wfx_refresh('pop_up');
              }
            }
          }, 50);
          // _wfx_refresh('pop_up');
        } 
        // else {
        //   console.log("do not show me again is NOT checked");
        //   // popup_visible = "true";
        //   _wfx_refresh('pop_up');
        // }
        break;
      }
    }
  }
};


// window._wfx_settings.onPopupSuccess=function(event){
//   popup_visible="NA";    
// };
// window._wfx_settings.onPopupSkip=function(event){
//   popup_visible="NA";      
// };
// window._wfx_settings.onPopupClose=function(event){
//   popup_visible="NA";       
// };
