

function Modal({ data }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.querySelector('#name-input').value;
        const email = document.querySelector('#email-input').value;
        const mobile = document.querySelector('#phone-input').value;
        const res = await fetch("request", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ name, email, mobile })
        });
        let response = await res.json();
        alert(response.message);
    }
    return (
        <form className="request-form" action="" onSubmit={handleSubmit}>
            <div className="content">
                <h3>{data.name}</h3>
                <h4>Duration</h4>
                <input type="radio" id="duration_1" value="1 month" />
                <label for="duration_1">1 month</label><br />
                <input type="radio" id="duration_3" value="3 months" />
                <label for="duration_3">3 months</label><br />
                <input type="radio" id="duration_6" value="6 months" />
                <label for="duration_6">6 months</label><br />
                <input type="radio" id="duration_12" value="1 year" />
                <label for="duration_12">1 year</label>
                <p>
                    Rental Price: {data.rental_price}
                </p>
                <div className="amount-payable" data-testid="amount-payable">Payable amount : {data.price}</div>
                <hr></hr>
                <div className="user__details">
                    <h3>Your details</h3>
                    <div className="name-section">
                        <label htmlFor="name-input">Enter Name: </label>
                        <input type="text" id="name-input" required />
                    </div>
                    <div className="email-section">
                        <label htmlFor="email-input">Enter email </label>
                        <input type="email" id="email-input" required />
                    </div>
                    <div className="phone-section">
                        <label htmlFor="phone-input">Enter phone </label>
                        <input type="number" id="phone-input" required />
                    </div>

                    <div className="frm-action-btn">
                        <button type="submit">Submit</button>
                        <button type="button">Close</button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default Modal;
