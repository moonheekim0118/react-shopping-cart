import PaymentBox from 'components/PaymentBox/PaymentBox';

export default {
  title: 'components/PaymentBox',
  component: PaymentBox,
};

const Template = (args) => <PaymentBox {...args} />;

export const Example = Template.bind({});

// Example.args = {
//   name: 'NEW 컬러추가 강아지 고양이 기절 댕냥쿠션/방석',
//   imgUrl:
//     'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165095245734958156.jpg?gif=1&w=1280&h=1280&c=c',
//   price: '26900',
//   quantity: 2,
// };
