const asyncState = instance => stateFn => new Promise(
  resolve => instance.setState(stateFn, resolve),
);

export default asyncState;
