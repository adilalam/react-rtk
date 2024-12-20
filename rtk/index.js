const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const { icecreamAction } = require('./features/icecream/icecreamSlice')
const { fetchUsers } = require('./features/user/userSlice')

console.log("Initail State ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Update Cake State ', store.getState());
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(icecreamAction.ordered());
// store.dispatch(icecreamAction.ordered());

// store.dispatch(cakeActions.restoke(3));
// store.dispatch(icecreamAction.restoke(2));

// unsubscribe()
