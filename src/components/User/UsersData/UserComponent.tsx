import React, {FC, memo, useState} from 'react';
import './UserComponent.css';
import * as Icon from 'react-feather';
import {UsersAction} from '../../Interface/userAction';
import UsersCard from '../UserCard/UserCard';

const UserComponent: FC<{data: UsersAction}> = ({data}): JSX.Element => {
    const [user, setUser] = useState<UsersAction | null>(null);
    return (
        <>
            <tr>
                <td
                    className="d-flex m-2"
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
                    <div className="ms-3 c-details ml-3 font-weight-bold">
                        <h6 className="mb-0">
                            {data.first_name} {data.last_name}
                        </h6>
                        <span>{data.email}</span>
                    </div>
                </td>
                {data.id !== 1 ? (
                    <>
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
                        <td className="col-md-2">
                            {/* feather Icon */}
                            <Icon.Trash2
                                size={18}
                                style={{
                                    color: 'rgba(0, 0, 0, 0.6)',
                                }}
                            />
                        </td>
                    </>
                ) : (
                    <>
                        <td>
                            <span className="text-success pl-3">Active</span>
                        </td>
                        <td>
                            <span className="pl-4">Owner</span>
                        </td>
                        <td className="col-md-2">
                            {/* feather Icon */}
                            <Icon.Lock
                                size={18}
                                style={{
                                    color: 'rgba(0, 0, 0, 0.6)',
                                }}
                            />
                        </td>
                    </>
                )}
                {/* User Profile Component */}
                <td>{user !== null && <UsersCard user={user} />}</td>
            </tr>
        </>
    );
};

export default memo(UserComponent);
