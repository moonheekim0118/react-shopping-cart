import styled from 'styled-components';

const Styled = {
  Wrapper: styled.div`
    cursor: pointer;
    position: relative;
    width: 16px;
  `,

  CheckMark: styled.label`
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: ${({ theme }) => theme.COLOR.WHITE};
    border: 1px solid ${({ theme }) => theme.COLOR.RED_300};
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `,

  CheckBox: styled.input`
    display: none;
    height: 16px;
    width: 16px;

    &:checked + label {
      background-color: ${({ theme }) => theme.COLOR.RED_300};
      &:after {
        display: block;
      }
    }
  `,
};

export default Styled;