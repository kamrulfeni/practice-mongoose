import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser)
    : Promise<IUser> => {

    const user = new User(payload);
    await user.save();
    return user;
    /**
     * old
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
     */
    //    data recieve korve contrler


};

export const getUserFromDB = async (): Promise<IUser[] > => {
const users = await User.find();
    return users;
};
