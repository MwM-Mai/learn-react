// 1. 导入 styled-components库
import styled from 'styled-components';

// 2. div/span/button 是一个函数 利用标签模板字符串调用这个函数 返回一个 react 组件
export const HomeWrapper = styled.div`
  font-size: 20px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: white;
      
      &:hover {
        color: green;
      }

      &::after {
        content: 'aaa';
      }
    }

    .active {
      color: #F00;
    }

  }
`
export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`