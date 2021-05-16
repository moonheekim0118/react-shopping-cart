import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { deleteCheckedShoppingCartList } from '../redux/actions/shoppingCartActions';
import { PATH } from '../constants/path';
import useFetch from '../hooks/useFetch';
import { requestInsertItem } from '../request/request';
import { API_PATH } from '../constants/api';
import { PageTitle, OrderPaymentAmount, Loading, OrderPaymentItemList } from '../components';

const Content = styled.section`
  position: relative;
  display: flex;
  margin-top: 25px;
  padding: 0 18px;
  gap: 100px;
`;

const OrderPaymentAmountWrapper = styled.div`
  position: sticky;
  margin-top: 50px;
  top: 50px;
`;

const OrderPayment = () => {
  const { startFetching } = useFetch({
    fetchFunc: (item) => requestInsertItem(API_PATH.ORDER_ITEM_LIST, item),
  });
  const isLoading = useSelector((state) => state.shoppingCart.shoppingCartItemList.isLoading);
  const { state } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { orderPaymentItemList, totalPrice } = state;

  const handleOrderListPageRouter = async () => {
    const orderItemData = { orderNumber: new Date().getTime(), itemList: orderPaymentItemList };
    await startFetching(orderItemData);
    await dispatch(deleteCheckedShoppingCartList(orderPaymentItemList));

    history.replace(PATH.ORDER_LIST);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle>주문/결제</PageTitle>
      <Content>
        <div>
          <OrderPaymentItemList orderPaymentItemList={orderPaymentItemList} />
        </div>
        <div>
          <OrderPaymentAmountWrapper>
            <OrderPaymentAmount price={totalPrice} onClick={handleOrderListPageRouter} />
          </OrderPaymentAmountWrapper>
        </div>
      </Content>
    </>
  );
};

export default OrderPayment;
