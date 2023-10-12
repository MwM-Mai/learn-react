import styled from 'styled-components';

export const RecommendWarpper = styled.div`
    border: 1px solid #d3d3d3;
    background-image: url(require("@/assets/img/wrap-bg.png"));
    display: flex;

  > .left {
    padding: 20px;
    width: 729px;
    box-sizing: border-box;
  }

  > .right {
    margin-left: 1px;
    width: 250px;
    border-left: 1px solid #d3d3d3;
  }
`