import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {


  render () {
    const { children } = this.props
    return (
      <div>
        <Header />
        {this.renderErrorMessage()}
        <main>
        {children}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: React.PropTypes.any,
  resetErrorMessage: React.PropTypes.func,
  // Injected by React Router
  children: React.PropTypes.node
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage: resetErrorMessage
})(App)
