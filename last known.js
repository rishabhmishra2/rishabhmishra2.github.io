console.log("Advance Config");

//Package Exported on MAR-14-2022 11:45 - Sebi 

//added to test URL Embedded format of launching walkthroughs. Remove this line if it doesn't work. 

//window._wfx_settings.dynamic = window.location.href;

// added by rishabh mishra2 for cse-4681 - Carousel Popup Slide Links - Start
var _wfx_check_popup = setInterval(function () {
	var _wfx_popup_node = document.querySelector('[id="wfx-frame-popup"]'); // whatfix popup element
	if (_wfx_popup_node != null && _wfx_popup_node != "") {
    var _wfx_popup_right_button = _wfx_popup_node.contentWindow.document.querySelector('[id="popupRightNavButton"]'); // right button inside popup
    var _wfx_button_node_for_slide_2 = _wfx_popup_node.contentWindow.document.querySelector('[class*="button_for_slide_2"]');
    var _wfx_button_node_for_slide_3 = _wfx_popup_node.contentWindow.document.querySelector('[class*="button_for_slide_3"]');
    var _wfx_button_node_for_slide_4 = _wfx_popup_node.contentWindow.document.querySelector('[class*="button_for_slide_4"]');
    var _wfx_button_node_for_slide_5 = _wfx_popup_node.contentWindow.document.querySelector('[class*="button_for_slide_5"]');
    var _wfx_button_node_for_slide_6 = _wfx_popup_node.contentWindow.document.querySelector('[class*="button_for_slide_6"]');

    _wfx_button_node_for_slide_2.addEventListener('click', function() {
      _wfx_popup_right_button.click(); // one click because we need to click once to go from first to second slide
    });

    _wfx_button_node_for_slide_3.addEventListener('click', function() {
      _wfx_popup_right_button.click(); 
      _wfx_popup_right_button.click(); // two clicks because we need to click twice to go from first to third slide
    });

    _wfx_button_node_for_slide_4.addEventListener('click', function() {
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click(); // three clicks because we need to click thrice to go from first to fourth slide
    });

    _wfx_button_node_for_slide_5.addEventListener('click', function() {
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click(); // four clicks because we need to click four times to go from first to fifth slide
    });

    _wfx_button_node_for_slide_6.addEventListener('click', function() {
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click();
      _wfx_popup_right_button.click(); // five clicks because we need to click five times to go from first to fifth slide
    });

		clearInterval(_wfx_check_popup);
	}
}, 1500);
// added by rishabh mishra2 for cse-4681 - Carousel Popup Slide Links - Ends


//Step_flicker_issue
//_wfx_settings.relocator_delay_time = 120;
//_wfx_settings.shadow_overlap_logic = false;

//Start - Launch selfhelp from HOW TO Icon: Nivy

var targetSH = "li[data-nav-id='HOW-TO']";

window._wfx_widget = { "target": "div[data-nav-id='HELP']", "position":"tl-br"};

var target = document.body;
var callback = function (mutations, observer) {
    var element = document.querySelector(targetSH);
    if (element) {
       element.addEventListener('click', function () {
                _wfx_widget_open();
         });
         _wfx_refresh();
         observer.disconnect();
  }
};
var config = {
    subtree: true, childList: true
};
var observer = new MutationObserver(callback);
observer.observe(target, config);

//End - Launch selfhelp from Resources Icon

  // Nivy - Flags & UI components for branching (RAVPN) START OCT-06-2020 14:39 (Package Date: OCT 27 2020)
//Package generated on NOV 27 2020 at 14:42 - Sebi

  var CCOPrimaryFieldFlg = false; // ClientCertOnly Primary Field DropDown Presence Flag
  var accountingServerCompleteFlag = false;
  var acctServerBranchFlag = false;
  var addBtnClicked = false;
  var authenticationServerCompleteFlag = false;

  // Nivy - Flags for branching (RAVPN) END

  var acctBtnClick = false;
  var btnClickFlag = setInterval(function() {
    if (document.querySelector(".wfx-wizard-connprofile-accounting-addbutton img")) {
      var acctServerAddBtn = document.querySelector(".wfx-wizard-connprofile-accounting-addbutton img");
      acctServerAddBtn.addEventListener("click", function() {
        acctBtnClick = true;
        clearInterval(btnClickFlag);
      });
    }
  }, 5000);

  _wfx_do_not_auto_skip = {};
  _wfx_do_not_auto_skip['74958080-8577-11ec-b188-000d3a578b00'] = true;

  window._wfx_settings.dynamic = window.location.host;
  
  //Add the below line only if theme is already not defined
  window._wfx_settings.theme = window._wfx_settings.theme || {};

  //Enable draggable widget
  window._wfx_settings.widget_draggable = true;

  window._wfx_settings.theme = {
    "font-family": "CiscoSansTT"
  };

  //[sarockia - Feb 14, 2020]
  //Added for testing the z-index issue (CSCvr46163)
  window._wfx_settings.z_index = 30000;
  window.refreshed = false;

  //Selection Status of the IKE Checkboxes
  var ikev1_box = document.querySelector('#gwt-debug-VpnS2SDlg-Ikev1-CheckBox > div >input');
  var ikev2_box = document.querySelector('#gwt-debug-VpnS2SDlg-Ikev2-CheckBox > div >input');
  if (ikev2_box && ikev1_box) {
    window.wfx_ikev1_checked = ikev1_box.checked + "";
    window.wfx_ikev2_checked = ikev2_box.checked + "";
  }

  //Custom How To button code begins
  /*target = "#how-to-button";
  window._wfx_widget = { 
      "target": target,
      "position" : "br-tr"
  };

  var element = document.querySelector(target);
  if (document.querySelector(target)) {
  element.onclick = function() {
      _wfx_widget_open();
  };} 
  */

  //Custom How To button code ends
  function checkSmartTips() {
    if (document.querySelector('.sf-DialogBox') && !window.refreshed) {
      setTimeout(function() {
        if (!window.refreshed) {
          window._wfx_start_smart_tips();
          window._wfx_refresh();
          window.refreshed = true;
        }
      }, 500);
    } else if (!document.querySelector('.sf-DialogBox')) {
      window.refreshed = false;
    }
  }


  setInterval(function() {
    checkSmartTips();
  }, 500);

  function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = 'styles_js';
      document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
  }

  //VALIDATE [Nivy] - STARTFont/Icon issues on Dashboard..Adding domain check to address this!

  if (!location.hostname.includes('whatfix.com')) {
    addNewStyle("[class*='WF']{ font-family:CiscoSansTT !important}");
  }
  //addNewStyle("#_widget_wfx_{border: 1px solid white !important; border-bottom: none !important; height: 30px !important}");

  //VALIDATE [Nivy] removing end slides for Device add, and Routing Settings flows
  var tag_to_remove_end_slide = "104061e0-8577-11ec-b188-000d3a578b00";

  //Branching Code........
  window._wfx_settings.onBeforeEnd = function(event) {
    console.log("onbeforeend ");

    //Start - LN & Sebi - 8 Sep 2021 - Reducing lag for optional steps - Resetting the new values before flow ends

    if ( event.flow_id === "6535cd70-8577-11ec-b188-000d3a578b00" || event.flow_id === "9f6cc1b0-8577-11ec-b188-000d3a578b00") {
      console.log("removing  new values");
        window._wfx_settings.step_configurations = {
          "opt_step_retries": 7, // 7 5
          "opt_consecutive_step_retries": 7, //7 5 3
          "opt_css_step_retries": 7, // 7 5  3
          "opt_consecutive_css_step_retries": 7 //7 5
        };
    }

    //End - LN - 8 Sep 2021 - Reducing lag for optional steps - Resetting the new values before flow ends

    var authMethod = document.querySelector('#gwt-debug-WizardConnProfAuthCombo input') ? document.querySelector('#gwt-debug-WizardConnProfAuthCombo input').value : false; //CCO, AAA, CC + AAA
    var acctServer = document.querySelector('#gwt-debug-WizardConnProfAccountingServerCombo input') ? document.querySelector('#gwt-debug-WizardConnProfAccountingServerCombo input').value : false;
    var authenticationServer = document.querySelector('#gwt-debug-WizardConnProfAuthenticationServerCombo input') ? document.querySelector('#gwt-debug-WizardConnProfAuthenticationServerCombo input').value : false;

    if (authenticationServer != "") {

      authenticationServerCompleteFlag = true;

    } else {
      authenticationServerCompleteFlag = false;

    }

    if (event.has_tag(tag_to_remove_end_slide)) {
      window._wfx_settings.theme.end = "hide";
    }

    //30.06 [Nivy] Branching back from RADIUS Server & SSO flows for RAVPN START

    if (document.querySelector("#gwt-debug-WizardConnCertPrimaryFieldCombo") && document.querySelector("#gwt-debug-WizardConnCertPrimaryFieldCombo").offsetHeight > 0) {
      CCOPrimaryFieldFlg = true;
    } else {
      CCOPrimaryFieldFlg = false;
    }

    if (event.flow_id == "49c01410-8577-11ec-b188-000d3a578b00" || event.flow_id == "43766dc0-8577-11ec-b188-000d3a578b00") {

      if (authMethod == "Client Certificate Only") {

        if (CCOPrimaryFieldFlg && !acctBtnClick) {
          return {
            "flow_id": "99a28490-8577-11ec-b188-000d3a578b00",
            "position": 5
          };
        } else {
          acctBtnClick = false;
          return {
            "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
            "position": 18
          };
        }
      } else if (authMethod == "AAA Only") {

        if (!authenticationServerCompleteFlag) {
          return {
            "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
            "position": 12
          };
        } else if (authenticationServerCompleteFlag && acctServer == "" && !acctBtnClick) {
          return {
            "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
            "position": 16
          };
        }
        // reset the acctBtnClick
        else {
          acctBtnClick = false;
          return {
            "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
            "position": 18
          };
        }

      } else if (authMethod == "Client Certificate & AAA") {

        console.log("acctServer " + acctServer + " " + acctBtnClick);

        if (authenticationServerCompleteFlag && acctServer == "" && !acctBtnClick) {
          return {
            "flow_id": "6b1ae590-8577-11ec-b188-000d3a578b00",
            "position": 8
          };
        } else if (authenticationServerCompleteFlag) {
          return {
            "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
            "position": 18
          };
        } else {
          return {
            "flow_id": "6b1ae590-8577-11ec-b188-000d3a578b00",
            "position": 4
          };
        }

      }
    }
    //30.06 [Nivy] Branching back from child flows for RAVPN END

    // [Nivy] Branching from NodeA/B flow to Route Based site to site VPN START
    if (event.flow_id == "85deb410-8577-11ec-b188-000d3a578b00") {
      if (document.querySelector('.wfx-vpns2sdlg-vti-device-combo-NodeB input').value == "Empty") {
        console.log("empty block");
        return {
          "flow_id": "9f6cc1b0-8577-11ec-b188-000d3a578b00",
          "position": 11
        };

      } else {
        console.log("not block");
        return {
          "flow_id": "9f6cc1b0-8577-11ec-b188-000d3a578b00",
          "position": 18
        };
      }

    }
    // [Nivy] Branching from NodeA/B flow to Route Based site to site VPN END

    // 07.07 [Nivy] Branching from LDAP RAVPN to Remote Access Flow START
    if (event.flow_id == "4473b980-8577-11ec-b188-000d3a578b00") {
      if (authMethod == "AAA Only") {
        return {
          "flow_id": "45c7b0c0-8577-11ec-b188-000d3a578b00",
          "position": 16
        };
      } else if (authMethod == "Client Certificate & AAA") {
        return {
          "flow_id": "6b1ae590-8577-11ec-b188-000d3a578b00",
          "position": 8
        };
      } else {
        return {
          "flow_id": "99a28490-8577-11ec-b188-000d3a578b00",
          "position": 5
        };
      }
    }


    // [Nivy] Branching from LDAP RAVPN to Remote Access Flow START

  }; // onBeforeEnd ENDS
  //end slides remove code ends

  function isNoDeviceFound() {
    //This function should be called only for '#SensorList' page
    //Device count is derived from UI text 'ALL(<x>)' where <x> is count.
    var totalElement = document.getElementById("gwt-debug-device_filter_ALL");
    if (totalElement) {
      var value = totalElement.textContent.match(/\d+/g);
      return value == 0 ? true : false;
    }
    return false;
  }


  window._wfx_settings.onBeforeShow = function(event) {
    console.log("onBeforeShow");
    
    //Start - LN & Sebi - 8 Sep 2021 - Reducing lag for optional steps - Setting new values for specific flows and steps

    if ( event.flow_id === "6535cd70-8577-11ec-b188-000d3a578b00" && ( event.step >= 11 && event.step < 16 ) || ( event.flow_id === "9f6cc1b0-8577-11ec-b188-000d3a578b00" && ( event.step >= 7 && event.step <= 25)) ) {
      console.log("setting up new values");
        window._wfx_settings.step_configurations = {
          "opt_step_retries": 3, // 7 5
          "opt_consecutive_step_retries": 2, //7 5 3
          "opt_css_step_retries": 2, // 7 5  3
          "opt_consecutive_css_step_retries": 1 //7 5
        };
    }

    //End - LN - 8 Sep 2021 - Reducing lag for optional steps - Setting new values for specific flows and steps

    var authMethod = document.querySelector('#gwt-debug-WizardConnProfAuthCombo input') ? document.querySelector('#gwt-debug-WizardConnProfAuthCombo input').value : false; //CCO, AAA, CC + AAA
    var acctServerAddBtn = document.querySelector('.wfx-wizard-connprofile-accounting-addbutton');


    //29.5.20 Nivy autoskipping bypass start
    if (_wfx_do_not_auto_skip[event.flow_id] && event.step == 0) {
      _wfx_settings.auto_skip_on_launch = false;
    } else {
      _wfx_settings.auto_skip_on_launch = true;

    }

    //29.5.20 Nivy autoskipping bypass end

    console.log(event.flow_id + " " + event.step);
    //To Close the active flow if Close Button is clicked
    var closeBtn = document.querySelector('.x-nodrag.x-tool-close.x-tool.x-component');
    var cancelBtn = document.querySelector('.wfx-dlg-cancel');
    //This variable was added for 6.7 Graceful Exit
    var cancelBtn67 = document.querySelector('#gwt-debug-ObjectEditor-Cancel-Button,#Cancel-Button');
    //Nivy  FMC 7.1 handling NO button for pop up
    var noBtn = document.querySelector('[data-wfx-id="nap_warning_no"]');
    
    if (noBtn) {
      noBtn.addEventListener("click", function() {
        _wfx_close_live();
      });
    }

    if (closeBtn) {
      console.log("found close button");
      closeBtn.addEventListener("click", function() {
        //closing active flow, as close button is clicked.
        console.log("closing live flow..");
        _wfx_close_live();
      });
    }

    if (cancelBtn) {
      //console.log("found Cancel button");
      cancelBtn.addEventListener("click", function() {
        //closing active flow, as close button is clicked.
        //console.log("closing live flow..");
        _wfx_close_live();
      });
    }

    if (cancelBtn67) {
      console.log("found Cancel button");
      cancelBtn67.addEventListener("click", function() {
        //closing active flow, as close button is clicked.
        console.log("closing live flow as Cancel button is clicked..");
        _wfx_close_live();
      });

    }

    //Considers mouse down as click in case of step completion 96308f50-8577-11ec-b188-000d3a578b00
    if (event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step === 3) {
      console.log("activating mdn as clk");
      _wfx_settings.mousedown_as_click = true;
    } else if (event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step === 4) {
      console.log("de-activating mdn as clk");
      _wfx_settings.mousedown_as_click = false;
    }

    //[Ticket-3551][Abhimanyu][20/05/2020]
    if ((event.flow_id === "63dd6960-8577-11ec-b188-000d3a578b00" && event.step == 3) || (event.flow_id === "b1e6d420-8577-11ec-b188-000d3a578b00" && event.step == 3) || (event.flow_id === "b30ed960-8577-11ec-b188-000d3a578b00" && event.step == 3)) {
      console.log("new mouse down as click");
      _wfx_settings.mousedown_as_click = true;

    } else if ((event.flow_id === "63dd6960-8577-11ec-b188-000d3a578b00" && event.step == 4) || (event.flow_id === "b1e6d420-8577-11ec-b188-000d3a578b00" && event.step == 4) || (event.flow_id === "b30ed960-8577-11ec-b188-000d3a578b00" && event.step == 4)) {
      _wfx_settings.mousedown_as_click = false;

    }



    if (event.flow_id == "fad135e0-8577-11ec-b188-000d3a578b00" && event.step == 4) {
      //Selection Status of the IKE Checkboxes
      var ikev1_box = document.querySelector('#gwt-debug-VpnS2SDlg-Ikev1-CheckBox > div >input');
      var ikev2_box = document.querySelector('#gwt-debug-VpnS2SDlg-Ikev2-CheckBox > div >input');
      if (ikev2_box && ikev1_box) {
        window.wfx_ikev1_checked = ikev1_box.checked + "";
        window.wfx_ikev2_checked = ikev2_box.checked + "";
        console.log("ikev1=" + window.wfx_ikev1_checked);
        console.log("ikev2=" + window.wfx_ikev2_checked);
      }
    }

    //Saurabh[12/15] Added these to capture the Network topology to decide whether to branch to Node B config or not
    if (event.flow_id == "398172b0-8577-11ec-b188-000d3a578b00" && event.step == 19) {
      var topoElem = document.querySelectorAll('.toggleButtonSelected');
      if (topoElem) {
        window.wfx_topology = topoElem[0].innerText;
        console.log("WFX:setting topology var:" + window.wfx_topology);
      }
    }


    //Vidisha - [12/9] - 3 Site2Site flows reported slowness when not launched from Home Page. Trying configuration to improve wait time
    if (event.flow_id == "fad135e0-8577-11ec-b188-000d3a578b00" || event.flow_id == "417aebe0-8577-11ec-b188-000d3a578b00" || event.flow_id == "c04c96d0-8577-11ec-b188-000d3a578b00" || event.flow_id == "398172b0-8577-11ec-b188-000d3a578b00") {
      if (event.step != 2) {
        window._wfx_settings.step_configurations = {
          "opt_step_retries": 2,
          "opt_css_step_retries": 2
        };
      } else {
        window._wfx_settings.step_configurations = {
          "opt_step_retries": 7,
          "opt_css_step_retries": 7
        };
      }
    }


    //For determining if some of the iPsec options are disabled
    /* if(event.flow_id =="417aebe0-8577-11ec-b188-000d3a578b00" && event.step==3){
       var cryptoMapDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-StaticCrypto-Radio [disabled]');
       var securityAssocDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-SaStrengthEnforcement-CheckBox div input[disabled]');
        var reverseRouteDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-RriEnabled-CheckBox div input[disabled]');
        var perfectForwardDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-PfsEnabled-CheckBox div input[disabled]');
       var validateICMPDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-ValidateIcmp-CheckBox div input[disabled]');
       var enableDNFDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-DfPolicyEnabled-CheckBox div input[disabled]');
       var enableTrafficDisabled = document.querySelector('#gwt-debug-VpnS2SDlg-IpSecTab-TFCPacketsEnabled-CheckBox div input[disabled]');
       if(cryptoMapDisabled)
         window.wfx_cryptoDisabled = "true";
       if(securityAssocDisabled)
         window.wfx_securityAssocDisabled = "true";
       if(reverseRouteDisabled)
         window.wfx_reverseRouteDisabled = "true";
       if(perfectForwardDisabled)
         window.wfx_perfectForwardDisabled = "true";
       if(validateICMPDisabled)
         window.wfx_validateICMPDisabled = "true";
       if(enableDNFDisabled)
         window.wfx_enableDNFDisabled = "true";
       if(enableTrafficDisabled)
         window.wfx_enableTrafficDisabled = "true";    
     }*/

    //This code was written only for CLASSIC UI flows only,but some flows are mentioned for Atomic UI. This might have to be changed if it fails to work.
    //Device edit workflows (interface-edit and routing) works only when devices are found.
    //When no device found in FMC, skip the current workflow and jump to Add-Device-First workflow
    if (window.location.hash === "#SensorList" && (event.flow_id === "e19566f0-8577-11ec-b188-000d3a578b00" ||
        event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00") && isNoDeviceFound()) {
      //no device found, return 'Add device first' workflow
      return {
        "flow_id": "eba0a920-8577-11ec-b188-000d3a578b00",
        "position": 0
      };
    } else if (event.flow_id === "398172b0-8577-11ec-b188-000d3a578b00" && (event.step == 10 || event.step == 13)) {
      var combo = document.querySelector('#gwt-debug-VpnS2SDlg-AddEndPoint-device-ComboBox');
      console.log("Site2Site Branding flow...");
      if (combo && combo.querySelector('input').value != "Extranet") {
        return {
          "flow_id": "398172b0-8577-11ec-b188-000d3a578b00",
          "position": 14
        };
      } else if (event.step == 13) {
        return {
          "flow_id": "398172b0-8577-11ec-b188-000d3a578b00",
          "position": 19
        };
      } else {
        return {
          "flow_id": "398172b0-8577-11ec-b188-000d3a578b00",
          "position": 10
        };
      }
    } else if (event.flow_id === "37f30a80-8577-11ec-b188-000d3a578b00" && (event.step == 1 || event.step == 5)) {
      var combo2 = document.querySelector('#gwt-debug-VpnS2SDlg-AddEndPoint-device-ComboBox');
      console.log("Site2Site Branding flow...");
      if (combo2 && combo2.querySelector('input').value != "Extranet") {
        console.log("WFX:DEBUG::Branching to step 5");
        return {
          "flow_id": "37f30a80-8577-11ec-b188-000d3a578b00",
          "position": 5
        };
      } else if (event.step == 5) {
        return {
          "flow_id": "37f30a80-8577-11ec-b188-000d3a578b00",
          "position": 11
        };
      } else {
        return {
          "flow_id": "37f30a80-8577-11ec-b188-000d3a578b00",
          "position": 1
        };
      }
    } else if ((event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step == 4) || (event.flow_id === "a22c2fd0-8577-11ec-b188-000d3a578b00" && event.step == 8) || (event.flow_id === "89fa2fc0-8577-11ec-b188-000d3a578b00" && event.step == 3) || (event.flow_id === "6b1d8be0-1397-11eb-abc5-22a91d6e4464" && event.step == 3) || (event.flow_id === "a22c2fd0-8577-11ec-b188-000d3a578b00" && event.step == 8) || (event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step == 6) || (event.flow_id === "6b1d8be0-1397-11eb-abc5-22a91d6e4464" && event.step == 1) || (event.flow_id === "e2cc1230-8577-11ec-b188-000d3a578b00" && event.step == 2) || (event.flow_id === "89fa2fc0-8577-11ec-b188-000d3a578b00" && event.step == 1)) {
      console.log("in");
      window._wfx_settings.mousedown_as_click = true;


      //turning mousedown as click on to do a click on body element first

    }
    // 28.04.20 Nivy - Branching Condition RA VPN based on the Auth Method START

    if (event.flow_id == "45c7b0c0-8577-11ec-b188-000d3a578b00" && event.step == 9) {
      console.log('RA VPN Auth Method Branching..');

      if (authMethod == "Client Certificate Only") {
        return {
          "flow_id": "99a28490-8577-11ec-b188-000d3a578b00",
          "position": 0
        };

      } else if (authMethod == "Client Certificate & AAA") {
        return {
          "flow_id": "6b1ae590-8577-11ec-b188-000d3a578b00",
          "position": 0
        };
      }
    }


    // 28.04.20 Nivy - Branching Condition RA VPN based on the Auth Method END


    // Nivy: Route based S2S VTI branching to NodeA/B flows START

    /*var NodeA = document.querySelector('.wfx-vpns2sdlg-vti-interface-addbutton-NodeA');
        if (event.flow_id == "9f6cc1b0-8577-11ec-b188-000d3a578b00" && (event.step == 10 || event.step == 16)) {
            console.log('VTI Branching');
            
               return {
                    "flow_id": "85deb410-8577-11ec-b188-000d3a578b00",
                    "position": 0
                };

            } 
    */
    // Nivy: Route based S2S VTI branching to NodeA/B flows END


  }; //onBeforeShow Ends

  //code to circumvent double click on element

  window._wfx_settings.onStepComplete = function(event) {
    console.log("onStepCompleted");
    if ((event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step == 4) || (event.flow_id === "a22c2fd0-8577-11ec-b188-000d3a578b00" && event.step == 8) || (event.flow_id === "89fa2fc0-8577-11ec-b188-000d3a578b00" && event.step == 3) || (event.flow_id === "6b1d8be0-1397-11eb-abc5-22a91d6e4464" && event.step == 3) || (event.flow_id === "a22c2fd0-8577-11ec-b188-000d3a578b00" && event.step == 8) || (event.flow_id === "96308f50-8577-11ec-b188-000d3a578b00" && event.step == 6) || (event.flow_id === "6b1d8be0-1397-11eb-abc5-22a91d6e4464" && event.step == 1) || (event.flow_id === "e2cc1230-8577-11ec-b188-000d3a578b00" && event.step == 1) || (event.flow_id === "6b1d8be0-1397-11eb-abc5-22a91d6e4464" && event.step == 1) || (event.flow_id === "e2cc1230-8577-11ec-b188-000d3a578b00" && event.step == 3) || (event.flow_id === "89fa2fc0-8577-11ec-b188-000d3a578b00" && event.step == 1)) {
      console.log("out");
      window._wfx_settings.mousedown_as_click = false;
    }


    // RAVPN Branching for Enrollment Types
    console.log("testing..." + event.step);
    if (event.flow_id == "45c7b0c0-8577-11ec-b188-000d3a578b00" && event.step == 37) {
      console.log("SCEP flow");
      var enrollmentType = document.querySelector('#gwt-debug-ObjectPKIDialogEnrollmentTypeCombo-input');
      console.log("enroll " + enrollmentType);
      if (enrollmentType != undefined) {

        if (enrollmentType.value == "SCEP") {
          return {
            "flow_id": "d6e902c0-8577-11ec-b188-000d3a578b00",
            "position": 0
          };
        } else if (enrollmentType.value == "Self Signed Certificate") {
          return {
            "flow_id": "e4320ad0-8577-11ec-b188-000d3a578b00",
            "position": 0
          };

        } else if (enrollmentType.value == "Manual") {
          return {
            "flow_id": "827aa180-8577-11ec-b188-000d3a578b00",
            "position": 0
          };
        } else { // PKCS12 type
          return {
            "flow_id": "f2501620-8577-11ec-b188-000d3a578b00",
            "position": 0
          };

        }

      }
    }

    /*    if(event.flow_id=="45c7b0c0-8577-11ec-b188-000d3a578b00" && event.step == 17){
         console.log("223");
       setInterval(function(){if(document.querySelector('#gwt-debug-ObjectManagerAddDialog')){
          console.log("425");
          return{
            "flow_id":"49c01410-8577-11ec-b188-000d3a578b00",
            "position": 0
          };
        }
       },1000);
       }
       */
  };

  // code to exclude Install and Setup page from having the whatfix walkthroughs pop up
  /*if (window.location.pathname === '/platinum/Install.cgi') {
     document.getElementById('how-to-button').style.display="none";
  }*/

  //code to ensure linked flows work
  var param = window.location.href;
  if (param.includes("xyz")) {
    console.log('param: ' + param);
    var flow = param.substring(param.indexOf("_xyz") + 6);
    // var flow = param.substring(7,param.length);
    console.log('flow: ' + flow);
    setTimeout(function() {
      _wfx_close_live();
      _wfx_run(flow);
    }, 5);
  }


  //reducing lag for optional steps - temporary changes to test lag in optional steps
  window._wfx_settings.step_configurations = {
    "opt_step_retries": 7,
    "opt_consecutive_step_retries": 7,
    "opt_css_step_retries": 7,
    "opt_consecutive_css_step_retries": 7
  };


  // Google Analytics Tracking Code for tracking path
  //Disable URL tracking data from being sent to Google Analytics
  _wfx_settings.disableURLTracking = true;

  /* Assign location.pathname to a window variable and 
    * pass it  through analytics_extra variable to Google
    * 
    * Syntax: window._wfx_settings.analytics_extra = [extra_1, extra_2];
    */

  window.app_path = location.pathname;
  window._wfx_settings.analytics_extra = [window.app_path];
  //console.log(window.app_path);
  //console.log(_wfx_settings.analytics_extra); 



var _wfx_whats_new_popup = "NA";
window._wfx_settings.onStart = function (event) {
  if (event.flow_id == "653126a0-8584-11ec-84a9-000d3a578a9c") {
    _wfx_close_live();
    _wfx_whats_new_popup = "true";
    _wfx_refresh('pop_up');
  }
};

window._wfx_settings.onPopupSuccess = function (event) {
  _wfx_whats_new_popup = "NA";
};
window._wfx_settings.onPopupSkip = function (event) {
  _wfx_whats_new_popup = "NA";
};
window._wfx_settings.onPopupClose = function (event) {
  _wfx_whats_new_popup = "NA";
};