import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Form from './pages/form/Form'
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelector'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route axact path='/form' render={()=> this.props.currentUser ? (<Redirect to='/'/>  ) : <Form/> }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);