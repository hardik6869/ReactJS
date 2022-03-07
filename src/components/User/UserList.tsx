import React from 'react';
import {UsersAction} from '../Interface/userAction';
import {useListPostsQuery} from './Data/usersAPI';
import UserComponent from './UsersData/UserComponent';
const UserList = (): JSX.Element => {
    const {data: data, isLoading} = useListPostsQuery(1);

    return (
        <>
            {/* Users List */}
            <div className="container">
                <table className="table table-borderless main_div">
                    <thead>
                        <tr>
                            <th className="pl-3">Name</th>
                            <th className="pl-4">Status</th>
                            <th className="pl-4">Acceess</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && '... Loading'}
                        {data?.data.map(
                            (userRecord: UsersAction, index: React.Key) => {
                                return (
                                    <UserComponent
                                        data={userRecord}
                                        key={index}
                                    />
                                );
                            },
                        )}
                    </tbody>
                    {/* Map Users  */}
                </table>
            </div>
        </>
    );
};

export default UserList;
