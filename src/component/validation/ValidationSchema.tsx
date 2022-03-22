import * as Yup from 'yup';
import 'yup-phone';

export const SignUpSchema = Yup.object({
    name: Yup.string()
        .min(15, 'Must be 15 characters or less')
        .required('Name is Required'),
    email: Yup.string().email('Email is invalid').required('Email is Required'),
    number: Yup.string().phone('IN'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    image: Yup.mixed()
        .nullable()
        .required('Profile Picture is Require')
        .test('fileSize', 'Image Size is too much big', (value) => {
            return (
                !value ||
                (value !== null && ['img/jpg', 'img/png'].includes(value.type))
            );
        }),
});
