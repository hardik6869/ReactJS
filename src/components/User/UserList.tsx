import React, {useState} from 'react';
import {UsersAction} from '../Interface/userAction';
import {Pagination} from '../Pagination/Pagination';
import {useListPostsQuery} from './Data/usersAPI';
import UserComponent from './UsersData/UserComponent';

const UserList = (): JSX.Element => {
    const [page, setPage] = useState(1);
    const {data: data, isLoading} = useListPostsQuery(page);

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
                </table>
                {Pagination(setPage, page)}
            </div>
        </>
    );
};

export default UserList;
