const actions = {
    login({commit}, user) {
        commit("setUserData", user);
    },
    autoDialValue({commit}, value) {
        commit("setAutoDialValue", value);
    },
    switchCampaign({commit}, data) {
        commit("changeCampaign", data);
    },
    disposition({commit}) {
        commit("dispositionModal");
    },
    resetDisposition({commit}) {
        commit("resetDisposition");
    },
    pause({commit}) {
        commit("pauseCall");
    },
    logout({commit}) {
        commit("clearUserData");
    },
    setCampaigns({commit}, camp) {
        commit("campaigns", camp);
    },
    setPhoneCamps({commit}, data) {
        commit("setPhonenumber", data);
    },
    setIngroups({commit}, data) {
        commit("setIngroups", data);
    },
    removeCampaign({commit}) {
        commit("clearCampaign");
    },
    setSelectedingroups({commit}, data) {
        commit("setselectedingroups", data);
    },
    // endcall({commit}){
    //   commit('endcall')
    // },
    fromWebsocket({commit}, data) {
        commit("fromWebsockets", data);
    },
    // resetCallstatus({ commit }) {
    //   commit('resetCallstatus')
    // },
    pauseStatus({commit}) {
        commit("pauseStatus");
    },
    setPausecode({commit}, data) {
        commit("setPausecode", data);
    },
    numberCalled({commit}, data) {
        commit("numberCalled", data);
    },
    resetError({commit}, data) {
        commit("resetError", data);
    },
    remove({commit}, data) {
        commit("remove", data);
    },
    incoming({commit}) {
        commit("incoming");
    },
    transferCall({commit}) {
        commit("transferCall");
    },
    resetonCall({commit}) {
        commit("resetonCall");
    },
    ongoingcallFalse({commit}) {
        commit("ongoingcallFalse");
    },
    dtmf({commit}) {
        commit("dtmf");
    },
    addedNumber({commit}, data) {
        commit("addedNumber", data);
    },
    liveCall({commit}) {
        commit("liveCall");
    },
    ongoingFalseTransferTrue({commit}) {
        commit("ongoingFalseTransferTrue");
    },
    beforeCall({commit}) {
        commit("beforeCall");
    },
    grabTrue({commit}) {
        commit("grabTrue");
    },
    addPark({commit}) {
        commit("addPark");
    },
    userState({commit}, data) {
        commit("userState", data);
    },
    websocket({commit}, data) {
        commit("websocket", data);
    },
    normalCall({commit}) {
        commit("normalCall");
    },
    addCustomer({commit}) {
        commit("addCustomer");
    },
    iframe({commit}, data) {
        commit("iframe", data);
    },
    callLogs({commit}, data) {
        commit("callLogs", data);
    },
    callDetails({commit}, data) {
        commit("callDetails", data);
    },
    clearCallbacks({commit}) {
        commit("clearCallbacks");
    },
};

export default actions
