import User from "./user.model";

export const createUserToDB = async () => {

    const user = await new User({
        id: 70800033398,
        role: "student",
        password: 'amipassword55',
        name: {
            firstName: 'habib uddin badsha',
            middleName: 'sadia',
            lastName: 'hasan,'
        },

        gender: "male",
        email: 'abcd@gmail.com',
        contactNo: '09876543',
        emergencyContactNo: '98765432',
        presentAddress: 'dhaka',
        permanentAddress: 'feni',
    });
    await user.save();
    return user 
};
