const mutations = {
    setUserData(state, user) {
        state.user = user.user;
        state.campaigns = user.campaigns;
        localStorage.setItem("user", user.user);
        localStorage.setItem("token", user.token);
    },
    setAutoDialValue(state, value) {
        state.autoDialValue = value;
    },
    clearUserData(state) {
        (state.user = null), (state.token = "");
        state.onCall = false;
        (state.campaign = null), (state.campaigns = null);
        state.Phonenumber = null;
        state.selectedIngroups = [];
        state.liveTransferred = false;

        localStorage.removeItem("user");
        localStorage.removeItem("phone");
        localStorage.removeItem("token");
        localStorage.removeItem("campaign");
        localStorage.removeItem("ingroups");
        localStorage.removeItem("onWebsocket");
        sessionStorage.clear();
    },
    setPhonenumber(state, data) {
        state.Phonenumber = data.phone;
        state.ingroups = data.inbound;
        state.campaign = data.campaign;
        state.dispositionOptions = data.dispos;
        state.pauseafterCall = data.pause_after;
        state.codeOptions = data.pause_codes;
        state.userState = data.userState;
        state.pause_code = data.pause_code;
        state.agent_log_id = data.agent_log_id;
        state.dial_method = data.dial_method;
        state.userState = data.state;

        localStorage.setItem("phone", data.phone);
        localStorage.setItem("campaign", data.campaign);
    },
    clearCampaign(state) {
        state.campaign = null;
    },
    changeCampaign(state, data) {
        state.campaign = data;
    },
    dispositionModal(state) {
        state.dispositionModal = true;
    },
    pauseCall(state) {
        state.paused = true;
    },
    campaigns(state, camp) {
        state.campaigns = camp;
    },
    setIngroups(state, data) {
        state.ingroups = data;
    },
    setselectedingroups(state, data) {
        state.selectedIngroups = data;
    },
    fromWebsockets(state, data) {
        let status = data.dial_status;
        let loggedin = data.isloggedin;
        let queue = data.queue;
        let reason = data.hangup_reason;
        let code = data.code;
        let users = data.agents;
        let call_details = data.call_details;
        let dialable_leads = data.dialable_leads;
        //let callLogs = dta.call_logs
        let callbacks = data.callbacks;
        let userState = data.user_status;

        //console.log(call_details)
        // console.log(data)

        if (users != null || users != undefined) {
            state.activeUsers = users;
        }

        if (callbacks != null || callbacks != undefined) {
            state.callbacks = callbacks;
        }

        //state.callbacks  = []

        // if(callLogs != null       || callLogs != undefined){
        //     state.callLogs = callLogs
        //     console.log(callLogs)
        // }

        if (data.agents != null || data.agents != undefined) {
            state.activeAgents = data.agents;
            // console.log(data.agents);
        }

        if (queue != null || queue != undefined) {
            if (queue.length > 0) {
                console.log(queue);
                state.callQueue = queue;
            } else {
                state.callQueue = [];
            }
        }

        if (dialable_leads != null || dialable_leads != undefined) {
            state.dialable_leads = dialable_leads;
        }

        if (userState != null || userState != undefined) {
            state.userState = userState;
            //console.log(userState)
        }

        if (queue == null || queue == undefined) {
            state.callQueue = [];
        }

        if (loggedin == false) {
            //logout()
            state.campaign = null;
        }

        if (status == "calling") {
            state.callStatus = status;
            state.ongoingCall = false;
            // console.log("calling");
        }

        if (status == "livecall") {
            state.callStatus = status;
            // console.log("livecall");
            // console.log(call_details);
            localStorage.setItem("lead_id", call_details.lead_id),
                localStorage.setItem("callerid", call_details.callerid),
                localStorage.setItem("numberCalled", call_details.phone_number);
            // console.log(call_details);
            if (call_details.url == undefined || call_details.url == null) {
                true;
            } else {
                state.iframe = call_details.url;
            }

            //console.log(call_details)
            state.callWaiting = false;
            state.ongoingCall = true;
            if (state.liveTransferred) {
                state.ongoingCall = false;
                state.transferedCall = true;
            } else {
                state.ongoingCall = true;
                state.transferedCall = false;
            }
        }

        if (status == "hangup") {
            //state.ongoingCall = false
            // console.log("hangup");

            //if(state.callParked == true)
            if (reason != "OK") {
                state.hangupReason = code + " " + reason;
                state.hangupError = true;
                if (state.liveTransferred) {
                    state.ongoingCall = false;
                } else {
                    state.ongoingCall = true;
                }
                state.callWaiting = true;
                state.ongoingCall = false;
            }
            state.callStatus = "hangup";
            state.transferedCall = false;
        }

        if (status == "transfer") {
            state.transfer = "transfer";
            state.hangupReason = code;
            // console.log("transfer");
        }
    },
    resetonCall(state) {
        state.callWaiting = false;
        state.ongoingCall = false;
        state.liveTransferred = false;
    },
    pauseStatus(state) {
        state.paused = !state.paused;
    },
    setPausecode(state, data) {
        state.pause_code = data;
    },
    numberCalled(state, data) {
        state.numberCalled = data;
        state.callWaiting = true;
        state.ongoingCall = false;
    },
    resetError(state, data) {
        state.errorTitle = data.title;
        state.errorText = data.text;
    },
    remove(state, data) {
        //console.log(data)
        //state.callQueue.fruits.shift();
        if (state && data) {
            true;
        }
    },
    incoming(state) {
        state.callType = "Incoming";
    },
    ongoingcallFalse(state) {
        state.ongoingCall = false;
    },
    dtmf(state, data) {
        state.dtmf = data;
    },
    addedNumber(state, data) {
        state.addedNumber = data;
    },
    liveCall(state) {
        state.callWaiting = false;
        //  console.log("state.transferedCall?", state.transferedCall);
        state.ongoingCall = false;
    },

    resetDisposition(state) {
        (state.hangupError = false), (state.hangupReason = "");
        state.callStatus = "";
        state.callWaiting = true;
        (state.ongoingCall = false),
            (state.liveTransferred = false),
            (state.transferedCall = false);
    },
    ongoingFalseTransferTrue(state) {
        state.ongoingCall = false;
        state.transferedCall = true;
        state.liveTransferred = true;
        state.grabTrue = false;
    },
    beforeCall(state) {
        state.callWaiting = true;
        state.ongoingCall = false;
        state.transferedCall = false;
        state.liveTransferred = false;
    },
    grabTrue(state) {
        state.grabTrue = true;
    },
    addPark(state) {
        state.grabTrue = true;
        state.ongoingCall = false;
        state.transferedCall = true;
    },
    addCustomer(state) {
        state.grabTrue = true;
        state.ongoingCall = false;
        state.transferedCall = true;
    },
    userState(state, data) {
        state.userState = data;
    },
    webosocket(state, data) {
        state.socket = data;
    },
    normalCall(state) {
        state.liveTransferred = false;
        state.transferedCall = false;
        state.ongoingCall = true;
    },
    websocket(state, data) {
        state.socket = data;
    },
    iframe(state, data) {
        state.iframe = data;
    },
    callDetails(state, data) {
        state.iframe = data.url;
    },
    callLogs(state, data) {
        if (data == null) {
            state.callLogs = [];
        } else {
            state.callLogs = data;
        }
    },
    clearCallbacks(state) {
        state.callbacks = [];
    },
};

export default mutations