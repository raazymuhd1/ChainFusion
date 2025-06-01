import { z } from "zod";

interface User {
    name: string;
    age: number;
    address: z.ZodString
}

// const user = {
//     name: "mohammed",
//     age: 20,
//     address: z.string()
// } satisfies User;

const User = z.object({
    username: z.string(),
    address: z.string(),
    occupation: z.string(),
    age: z.number(),
    isSingle: z.boolean(),
})

const userData = User.parse({ 
    username: "mohammed raazy",
    address: "jakarta",
    occupation: "Web/Blockchain Developer",
    age: 20,
    isSingle: true
 })


console.log(userData.username)