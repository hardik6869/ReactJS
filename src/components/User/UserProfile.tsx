import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserComponent from './UserComponent';
import {setUser} from '../../redux/action/userAction';

const UserProfile = () => {
    const userData = useSelector((state) => state.allUser);
    const {user} = userData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUser(user));
        console.log(user);
    }, [user, dispatch]);

    return (
        <>
            <div>{dispatch.name}</div>
            <UserComponent />
        </>
    );
};

export default UserProfile;
