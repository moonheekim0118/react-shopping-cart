import useCart from 'hooks/useCart';
import { isInList } from 'utils';
import { useMemo, useState, useEffect } from 'react';

const useCartPage = () => {
  const { isLoading, isError, cartItems, getItems, deleteItems } = useCart();

  const [selectedItemList, setSelectedItemList] = useState([]);

  const totalPrice = useMemo(() => {
    if (!cartItems || cartItems.length === 0) return 0;
    const selectedItems = cartItems.filter(({ id }) =>
      isInList(selectedItemList, id),
    );
    return selectedItems.reduce(
      (prev, { price, quantity }) => (prev += price * quantity),
      0,
    );
  }, [cartItems, selectedItemList]);

  const handleToggleSelectAll = (isSelected) => () => {
    if (isSelected) {
      setSelectedItemList([]);
      return;
    }
    setSelectedItemList(cartItems.map(({ id }) => id));
  };

  const handleToggleSelect = (id) => () => {
    if (!isInList(selectedItemList, id)) {
      setSelectedItemList([...selectedItemList, id]);
      return;
    }
    setSelectedItemList(selectedItemList.filter((itemId) => itemId !== id));
  };

  const handleDeleteSelectedItem = () => {
    deleteItems(selectedItemList);
    setSelectedItemList([]);
  };

  useEffect(() => {
    if (!cartItems) {
      getItems();
    }
  }, []);

  return {
    isLoading,
    isError,
    cartItems,
    totalPrice,
    selectedItemList,
    handleToggleSelectAll,
    handleToggleSelect,
    handleDeleteSelectedItem,
  };
};

export default useCartPage;