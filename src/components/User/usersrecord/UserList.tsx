import React from 'react';
import './userList.css';
import * as Icon from 'react-feather';
// import UsersCard from '../UsersCard';
const UserList = ({data}): JSX.Element => {
    return (
        <>
            {data.id !== 1 && (
                <tr>
                    <td className="d-flex">
                        <div className="icon">
                            <picture>
                                <img
                                    className="profileImg img-fluid img-thumbnail rounded-circle p-0"
                                    src={data.avatar}
                                    alt="owner_avatar"
                                />
                            </picture>
                        </div>
                        <div className="ms-2 c-details ml-3">
                            <h6 className="mb-0">
                                {data.first_name} {data.last_name}
                            </h6>
                            <span>{data.email}</span>
                        </div>
                    </td>
                    <td>
                        <select className="selectMenu">
                            <option value="Inactive">Inactive</option>
                            <option value="Active">Active</option>
                        </select>
                    </td>
                    <td>
                        <select className="selectMenu">
                            <option value="Manager">Manager</option>
                            <option value="Read">Read</option>
                        </select>
                    </td>
                    <td>
                        <Icon.Trash2
                            size={18}
                            style={{color: 'rgba(0, 0, 0, 0.6)'}}
                        />
                    </td>
                </tr>
            )}

            {data.id === 1 && (
                <tr>
                    <td className="d-flex">
                        <div className="icon">
                            <picture>
                                <img
                                    className="profileImg img-fluid img-thumbnail rounded-circle p-0"
                                    src={data.avatar}
                                    alt="owner_avatar"
                                />
                            </picture>
                        </div>
                        <div className="ms-2 c-details ml-3">
                            <h6 className="mb-0">
                                {data.first_name} {data.last_name}
                            </h6>
                            <span>{data.email}</span>
                        </div>
                    </td>
                    <td>
                        <span className="text-success pl-3">{data.status}</span>
                    </td>
                    <td>
                        <span className="pl-4">{data.access}</span>
                    </td>
                    <td>
                        <Icon.Lock
                            size={18}
                            style={{color: 'rgba(0, 0, 0, 0.6)'}}
                        />
                    </td>
                </tr>
            )}
        </>
    );
};

export default UserList;
