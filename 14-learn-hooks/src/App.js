import React, { createContext, useState } from 'react';
import CounterClass from './01-体验hooks/01-counter-class';
import CounterFn from './01-体验hooks/02-counter-hook';
import CounterHooks from './01-体验hooks/03-counter-hooks';
import MultiHooksState from './02-useState的使用/01-多个状态的使用';
import ComplexHooksState from './02-useState的使用/02-复杂状态的修改';
import TitleClass from './03-useEffect.js/01-class实现title的修改';
import TitleHook from './03-useEffect.js/02-hook实现title修改';
import EffectHookCancelDemo from './03-useEffect.js/03-useEffect模拟订阅取消';
import MultiEffectHookDome from './03-useEffect.js/04-多个useEffect使用';
import ContextHookDome from './04-useContext的使用/useContext的使用';
import Home from './05-useReducer使用/home';
import CallbackHookDemo01 from './06-useCallback使用/01-useCallback不能进行的性能优化';
import CallbackHookDemo02 from './06-useCallback使用/02-useCallback进行的性能优化';
import MemoHookDemo01 from './07-useMemo使用/01-useMemo复杂计算的应用';
import MemoHookDemo02 from './07-useMemo使用/02-useMemo传入子组件引用类型';
import RefHookDome01 from './08-useRef的使用/01-useRef引用DOM';
import RefHookDemo02 from './08-useRef的使用/02-useRef引用其他数据';
import ForwardRefDemo from './09-useImperativeHandle/01-回顾forwardRef的用法';
import ImperativeHandleHook from './09-useImperativeHandle/02-useImperativeHandle使用';
import EffectCounterDemo from './10-useLayoutEffect/01-useEffect的counter修改';
import LayoutEffectCounterDemo from './10-useLayoutEffect/02-useLayoutEffect的counter修改';
import CustomLifeHookDemo01 from './11-自定义hook/01-认识自定义hook';
import CustomContextShareHook from './11-自定义hook/02-自定义hook的练习-context共享';
import CustomScrollPositionHook from './11-自定义hook/03-自定义hook练习-获取滚动位置';
import CustomDataStoreHook from './11-自定义hook/04-自定义hook-localStorage存储';

export const UserContext = createContext()
export const ThemeContext = createContext()

export const TokenContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)



  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterFn /> */}
      {/* <CounterHooks /> */}


      {/* <MultiHooksState /> */}
      {/* <ComplexHooksState /> */}

      {/* <TitleClass /> */}
      {/* <TitleHook /> */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <MultiEffectHookDome /> */}

      {/* <UserContext.Provider value={{ name: "coderwhy", age: "18" }}>
        <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
          <ContextHookDome />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <Home /> */}

      <CallbackHookDemo01 />
      <CallbackHookDemo02 />

      {/* <MemoHookDemo01 /> */}
      {/* <MemoHookDemo02 /> */}

      {/* <RefHookDome01 /> */}
      {/* <RefHookDemo02 /> */}

      {/* <ForwardRefDemo /> */}
      {/* <ImperativeHandleHook /> */}

      {/* <EffectCounterDemo /> */}
      {/* <LayoutEffectCounterDemo /> */}

      {/* {show && <CustomLifeHookDemo01 />} */}

      {/* <UserContext.Provider value={{ name: "why", age: 18 }}>
        <TokenContext.Provider value={{ token: "221321121321321" }}>
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPositionHook /> */}
      {/* <CustomDataStoreHook /> */}

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}