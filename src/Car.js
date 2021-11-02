
import './App.css';


function Car({ item, showModal, carIcon }) {

    const handleCardClick = () => {
        showModal(item);
    }
    return (
        <div className="card" onClick={handleCardClick} data-testid={`car_${item.id}`}>
            <img src={carIcon} alt="car" />
            <h3>
                {item.name}
            </h3>
            <p>{item.price}</p>
            <p className="rental-price">{item.rental_price}</p>
            <p className="vehicle-type">{item.type}</p>
        </div>
    );
}

export default Car;
