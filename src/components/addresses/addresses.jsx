export default function Addresses() {

    return (

        <div>

            <div className="orders-header">

                <h2>Addresses</h2>

            </div>

            <div className="address-card">

                <div className="d-flex justify-content-start">
                    <p>

                        Anjali Nair

                        <br />

                        45 MG Road

                        <br />

                        Kochi

                        <br />

                        Kerala - 682001

                        <br />

                        +91 9876543210

                    </p>
                </div>


                <div className="address-buttons">

                    <button>
                        Edit
                    </button>

                    <button>
                        Delete
                    </button>

                </div>

            </div>

            <button className="save-btn">

                Add New Address

            </button>

        </div>

    );

}