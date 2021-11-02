import { useEffect, useState } from 'react';
import carIcon from './car.svg';
import Car from './Car';
import Modal from './Modal';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [currItem, setCurrItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("vehicle");
      let response = await res.json();
      console.log(response);
      setData(response);
    }
    fetchData();
  }, [])

  const handleShowModal = (data) => {
    console.log(data);
    setCurrItem(data);
  }
  return (
    <>
      <h1 className="heading">Online Car Rental Service</h1>
      <div className="container">
        {
          data.map(function (value) {
            return <Car item={value} showModal={handleShowModal} carIcon={carIcon} />
          })
        }
      </div>
      {currItem && <Modal data={currItem} />}
    </>
  );
}

export default App;
