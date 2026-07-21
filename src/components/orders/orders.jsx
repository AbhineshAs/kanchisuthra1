export default function Orders({ orders }) {

    return (

        <>

            <div className="orders-header">

                <h2>Order History</h2>

            </div>

            <div className="orders-list">

                {orders.map((order) => (

                    <div
                        className="order-card"
                        key={order.id}
                    >

                        <div className="order-image">

                            <img
                                src={order.image}
                                alt={order.title}
                            />

                        </div>

                        <div className="order-content">

                            <div className="order-top">

                                <div>

                                    <h4>{order.title}</h4>

                                    <span>
                                        Order No. {order.orderNo}
                                    </span>

                                </div>

                                <span className="order-status">

                                    {order.status}

                                </span>

                            </div>

                            <div className="order-middle">

                                <p>

                                    Ordered on
                                    <strong> {order.date}</strong>

                                </p>

                                <p>

                                    {order.quantity} Item

                                    {order.quantity > 1 && "s"}

                                </p>

                            </div>



                        </div>

                    </div>

                ))}

            </div>

        </>

    );

}