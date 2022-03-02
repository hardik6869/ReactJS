import React, {FC, useState} from 'react';
import './UserComponent.css';
import * as Icon from 'react-feather';
import {UserDetails} from '../../Interface/userAction';
import UsersCard from '../UserCard/UsersCard';

const UserComponent: FC<{data: UserDetails}> = ({data}): JSX.Element => {
    const [user, setUser] = useState<UserDetails | null>(null);
    return (
        <>
            <tbody>
                <tr>
                    {data.id !== 1 && (
                        <>
                            <td
                                className="d-flex"
                                onMouseEnter={() => {
                                    return setUser(data);
                                }}
                                onMouseLeave={() => {
                                    return setUser(null);
                                }}>
                                <div className="icon">
                                    <picture>
                                        <img
                                            className="profileImg img-fluid img-thumbnail rounded-circle p-0"
                                            src={data.avatar}
                                            alt="owner_avatar"
                                        />
                                    </picture>
                                </div>
                                <div className="ms-2 c-details ml-3 font-weight-bold">
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
                                {/* feather Icon */}
                                <Icon.Trash2
                                    size={18}
                                    style={{color: 'rgba(0, 0, 0, 0.6)'}}
                                />
                            </td>
                        </>
                    )}

                    {data.id === 1 && (
                        <>
                            <td
                                className="d-flex"
                                onMouseEnter={() => {
                                    return setUser(data);
                                }}
                                onMouseLeave={() => {
                                    return setUser(null);
                                }}>
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
                                <span className="text-success pl-3">
                                    {data.status}
                                </span>
                            </td>
                            <td>
                                <span className="pl-4">{data.access}</span>
                            </td>
                            <td>
                                {/* feather Icon */}
                                <Icon.Lock
                                    size={18}
                                    style={{color: 'rgba(0, 0, 0, 0.6)'}}
                                />
                            </td>
                        </>
                    )}
                    {/* User Profile Component */}
                    <td className="positon-relative">
                        <UsersCard user={user} />
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default UserComponent;
