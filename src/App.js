import './App.css';
import { LargeProductsListItem } from './products/LargeProductsListItem';
import { Modal } from './Modal';

function App() {
  const products = [
    {
      name: 'Flat-Screen TV',
      price: '$300',
      description: 'Huge LCD screen, a great deal',
      rating: 4.5,
    },
    {
      name: 'Basketball',
      price: '$10',
      description: 'Just like the pros use',
      rating: 3.8,
    },
    {
      name: 'Running Shoes',
      price: '$120',
      description: 'Run like sonic',
      rating: 4.9,
    },
  ];

  return (
    <>
      <Modal>
        <LargeProductsListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
