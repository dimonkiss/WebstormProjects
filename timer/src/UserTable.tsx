// src/UserTable.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}

const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>User Table</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Company</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.suite}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.address.geo.lat}</td>
                        <td>{user.address.geo.lng}</td>
                        <td>{user.company.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
