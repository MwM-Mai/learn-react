import React, { PureComponent } from 'react'

import { StoreContext } from './context'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WarpperComponent) {
    class EnhanceComponent extends PureComponent {
      constructor (props, context) {  // context 就是 value 传过来的 store
        super(props)

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapDispatchToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return <WarpperComponent {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)} />
      }
    }

    EnhanceComponent.contextType = StoreContext // 在 contexType 进行赋值的时候 会向 constructor()(构造函数) 传 context 这个参数

    return EnhanceComponent
  }
}