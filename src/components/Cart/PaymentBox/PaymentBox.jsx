import * as Styled from './style';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button/Button';
import { parsePrice } from 'utils';

const PaymentBox = ({ price, quantity }) => {
  return (
    <Styled.Wrapper>
      <Styled.TopBox>
        <Styled.TitleText>결제 금액</Styled.TitleText>
      </Styled.TopBox>
      <Styled.BottomBox>
        <Styled.Text>총 결제 금액</Styled.Text>
        <Styled.Text>{parsePrice(price)}원</Styled.Text>
      </Styled.BottomBox>
      <Button colorType="primary" size="medium">
        결제하기 ({quantity}개)
      </Button>
    </Styled.Wrapper>
  );
};

PaymentBox.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default PaymentBox;
