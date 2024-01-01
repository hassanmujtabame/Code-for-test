export default {
  CLEAR_AUTH(state) {
    localStorage.clear();
    state.token = null;
    state.partner = null;
    state.isProvider = false;
    state.academyRole = null;
    state.subscribeNetwork = null;
    state.subscribeProvider = null;
    state.isSubscribeNetwork = null;
    state.isSubscribeProvider = null;
    state.userSubNetworkPackages = [];
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_provider");
    localStorage.removeItem("user_academy_role");
    state.user = null;
    localStorage.removeItem("auth_user");

    if (window.router) {
      window.router.push("/login");
    }
  },
  CLEAR_TOKEN(state) {
    state.token = null;
    localStorage.removeItem("auth_token");
  },
  CLEAR_USER(state) {
    state.user = null;
    state.partner = null;
    state.subscribeNetwork = null;
    state.subscribeProvider = null;
    state.subscribeAcademy = null;
    state.subscribeIncubator = null;
    state.subscribeIncubators = [];
    state.isSubscribeNetwork = false;
    state.isSubscribeProvider = false;
    state.isSubscribeAcademy = false;
    state.isSubscribeIncubator = false;
    state.isSubscribeIncubators = false;
    state.academyRole = null;
    state.userSubNetworkPackages = [];

    localStorage.removeItem("auth_user");
    localStorage.removeItem("user_provider");
    localStorage.removeItem("user_academy_role");
  },
  CLEAR_PARTNER(state) {
    state.partner = null;
  },
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("auth_token", token);
  },
  SET_ACADEMY_ROLE(state, payload) {
    state.academyRole = payload;
    localStorage.setItem("user_academy_role", payload);
  },
  SET_IS_PROVIDER(state, payload) {
    let data = payload;
    //console.mylog('SET_IS_PROVIDER',state,!!data,state.subscribeProvider)
    if (data) data = !!data && !!state.subscribeProvider;
    state.isProvider = data;
    localStorage.setItem("user_provider", data ? "Y" : "N");
  },
  SET_IS_UPLOAD_COURSES(state, payload) {
    state.canUploadCourse = payload;
  },
  SET_USER(state, payload) {
    let { partner, subscribers, is_instructor, is_consultant, ...user } = payload;
    state.user = user;
    state.partner = partner ?? null; // if undefined makes it null
    state.isInstructor = is_instructor ?? false; // if undefined makes it null
    state.isConsultant = is_consultant ?? false; // if undefined makes it null
    state.subscribeNetwork = subscribers.network ?? null;
    state.subscribeProvider = subscribers.service_provider ?? null;
    state.subscribeAcademy = subscribers.academy ?? null;
    state.subscribeIncubator = subscribers.incubator ?? null;
    state.subscribeIncubators = subscribers.incubators ?? [];
    state.isSubscribeNetwork =
      subscribers && subscribers.network ? subscribers.network.subscribe : null;
    state.isSubscribeProvider =
      subscribers && subscribers.service_provider
        ? !!subscribers.service_provider.subscribe
        : null;
    state.isSubscribeAcademy =
      subscribers && subscribers.academy ? subscribers.academy.subscribe : null;
    state.isSubscribeIncubator =
      subscribers && subscribers.incubator
        ? !!subscribers.incubator.subscribe
        : null;
    state.isSubscribeIncubators =
      state.subscribeIncubators.length > 0 &&
      state.subscribeIncubators.some((x) => x.subscribe);
    localStorage.setItem("auth_user", JSON.stringify(user));
  },
  SET_PARTNER(state, payload) {
    state.partner = payload;
  },
  SET_INSTRUCTOR(state, payload) {
    state.isInstructor = payload;
  },
  SET_CONSULTANT(state, payload) {
    state.isConsultant = payload;
  },
  SET_SUBSCRIBE_NETWORK(state, payload) {
    state.subscribeNetwork = payload;
  },
  SET_SUBSCRIBE_PROVIDER(state, payload) {
    state.subscribeProvider = payload;
  },
  SET_IS_SUBSCRIBE_NETWORK(state, payload) {
    state.isSubscribeNetwork = payload;
  },
  SET_IS_SUBSCRIBE_PROVIDER(state, payload) {
    state.isSubscribeProvider = payload;
  },
  SET_IS_SUBSCRIBE_ACADEMY(state, payload) {
    state.isSubscribeAcademy = payload;
  },
  SET_IS_SUBSCRIBE_INCUBATOR(state, payload) {
    state.isSubscribeIncubator = payload;
  },
  SET_IS_SUBSCRIBE_INCUBATORS(state, payload) {
    state.isSubscribeIncubators = payload;
  },
};
