import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser)
    : Promise<IUser> => {
//   instance: creating a new user
    const user = new User(payload); // User -> class , user -> instance
    await user.save();
    console.log(user.fullName());
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

export const getUserByIdFromDB=async(payload:
    string): Promise<IUser | null>=> {
 const user = await User.findOne({id:payload}, {name: 1, emergencyContactNo: 1, role: 1});
 return user;
};

export const getAdminUsersFromDB=async()=> {
        const admins = await User.getAdminUsers();
        return admins;
 // static class er shate attach hoyjai tai call kora jai 
};
// static= class -> attach -> method-> directly call using class
//user = new User 
// user. instance 

// but User.getAdminUsers()

export const getStudentUsersFromDB=async()=> {
    const students = await User.getStudentUsers();
    return students;
   


// static class er shate attach hoyjai tai call kora jai 
};