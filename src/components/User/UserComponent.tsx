import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import {UserDetails} from '../Interface/userAction';
import UserList from './UserList';
const UserComponent = (): JSX.Element => {
    const records: UserDetails = useSelector(
        (state: RootStateOrAny) => state.user.user[0],
    );
    return (
        <>
            <div className="container">
                <table className="table table-borderless main_div">
                    <thead>
                        <tr>
                            <th className="pl-3">Name</th>
                            <th className="pl-4">Status</th>
                            <th className="pl-4">Acceess</th>
                        </tr>
                    </thead>

                    {records.map((userRecord: string, index: number) => {
                        return <UserList data={userRecord} key={index} />;
                    })}
                </table>
            </div>
        </>
    );
};

export default UserComponent;
