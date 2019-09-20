const dispatchHelper = (type, payload) => ({
  type: type,
  payload: payload
})

export const onLoginUser = () => (dispatch, getState) => {
  const state = getState()
  debugger;
}