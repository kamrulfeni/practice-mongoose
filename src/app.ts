import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
// Application
import userRoutes from "./app/modules/user/user.route";
app.use(cors());
// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 


app.use('/api/v1/user', userRoutes);

//app.get('/api/v1/user', userRoutes

/**
 
(req: Request, res: Response, next: NextFunction) => {
 */
    // inserting a test data into mongodb


  /*interface IUser {
        id: string;
       role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
        */
   // }
    /*
    step:Interface 
    step: Schema 
    step3: model
    step4:database Query on model
    */
    // creating a interface 
   
    // creating schema using interface
   /*
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            required: true,
        },
        emergencyContactNo: {
            type: String,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
    });

    // MODEL

    const User = model<IUser>("User", userSchema);
    */
    // making a inastance to get method
   /*
    const createUserToDB = async () => {

        const user = new User({
            id: 7887,
            role: "student",
            password: 'jakanaka',
            name: {
                firstName: 'jahid',
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
        console.log(user);
    };

    */
   // createUserToDB();

    //res.send('Hello World!');
    //next();
//}
//);




export default app;

/*
interface -> interface.ts
Schema,model -> model.ts

route
route function -> controller.ts
Database Query function ---> service.ts 

 */
