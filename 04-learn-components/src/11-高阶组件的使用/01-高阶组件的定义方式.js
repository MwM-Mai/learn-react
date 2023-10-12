import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent />
    }
  }

  NewComponent.displayName = 'James'

  return NewComponent
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent
