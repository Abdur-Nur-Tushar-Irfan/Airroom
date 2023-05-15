/* eslint-disable react/no-unescaped-entities */

const Booking = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Room No</th>
                        <th>Guest</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Duration</th>
                        <th>Total Cost</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Loren</td>
                        <td>loren@gmail.com</td>
                        <td>017685643</td>
                        <td>KSI</td>
                        <td>306</td>
                        <td>1</td>
                        <td>6/5/2023</td>
                        <td>8/5/2023</td>
                        <td>3</td>
                        <td>7500</td>
                        <td><button className="badge badge-secondary">Delete</button></td>
                        <td><button className="badge badge-accent">Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Booking;