import * as Yup from "yup";

const phoneRegExp = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

export type UserSubmitForm = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    gender: string,
    photo:string
};
export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .min(6, 'First Name must be at least 6 characters')
        .max(10, 'First Name must not exceed 10 characters'),
    lastName: Yup.string()
        .required('Last Name is required')
        .min(6, 'Last Name must be at least 6 characters')
        .max(10, 'Last Name must not exceed 10 characters'),
    emailAddress: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    gender: Yup.string()
        .required('gender is required')
});