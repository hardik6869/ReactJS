import React from 'react';
import {useSelector} from 'react-redux';
import {UserDetails} from '../Interface/userAction';
import UserList from './usersrecord/UserList';
const UserComponent = () => {
    const records: UserDetails = useSelector((state) => state.user.user[0]);
    return (
        <>
            <div className="container">
                <table className="table table-borderless col-md-auto main_div">
                    <thead>
                        <tr>
                            <th className="pl-2">Name</th>
                            <th className="pl-4">Status</th>
                            <th className="pl-4">Acceess</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((userRecord: string, index: number) => {
                            return <UserList data={userRecord} key={index} />;
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserComponent;
