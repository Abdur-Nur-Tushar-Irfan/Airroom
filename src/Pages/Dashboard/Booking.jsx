/* eslint-disable react/no-unescaped-entities */

const Booking = () => {
    return (
        <div className="border">
            <table className="table w-full border">
                <thead className="border">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Room No</th>
                        <th>Guest</th>
                        <th>CheckIn</th>
                        <th>CheckOut</th>
                        <th>Duration</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr>
                        <th>1</th>
                        <td>Andy Tipple</td>
                        <td>andy@gmail.com</td>
                        <td>01786756726</td>
                        <td>KSI</td>
                        <td>1</td>
                        <td>7/6/2023</td>
                        <td>9/6/2023</td>
                        <td>Indigo</td>
                        <td>3</td>
                        <td>7500</td>
                    </tr>
                </tbody>
             
            </table>
        </div>
    );
};

export default Booking;