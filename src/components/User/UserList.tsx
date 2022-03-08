import React, {useState} from 'react';
import {UsersAction} from '../Interface/userAction';
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

                    {/* Map Users  */}
                </table>
                <div className="justify-content-center d-flex align-item">
                    <button
                        onClick={() => setPage(page > 1 ? page - 1 : page)}
                        className="btn btn-light mr-3 shadow rounded">
                        <i className="fas fa-arrow-left"></i> Previous
                    </button>
                    <button
                        onClick={() => setPage(1)}
                        className="btn btn-light mr-3 shadow rounded">
                        1
                    </button>
                    <button
                        onClick={() => setPage(2)}
                        className="btn btn-light mr-3 shadow rounded">
                        2
                    </button>

                    <button
                        onClick={() => setPage(page < 2 ? page + 1 : page)}
                        className="btn btn-light shadow rounded">
                        Next <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserList;
