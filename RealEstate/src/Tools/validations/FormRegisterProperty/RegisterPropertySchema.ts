import {z} from "zod"

const RegisterPropertySchema = z.object({
    firstName: z.string().min(1, {message: "First Name is required"}),
    lastName: z.string().min(1, {message: "Last Name is required"}),
    phone : z.string().max(11, {message: "Phone Number max 11"}),
    email : z.string().min(1, {message: "Email is required"}).email(),
    message: z.string().max(200, {message: "It's enough"}).optional(),
    selectProperty : z.string().min(1, {message: "Select Property"}),
    preferredLocation: z.string().min(1, {message: "Select Location"}),
    numOfBathRooms: z.string().min(1, {message: "Select Num Of BathRooms"}),
    numOfBedrooms: z.string().min(1, {message: "Select Num Of Bedrooms"}),
    budget: z.string().min(1, {message: "What is Your Budget" }),
    numberMethod: z.string().max(11, {message: "it's not right" }).optional(),
    emailMethod: z.string().min(1, {message: "it's not valid Email" }).email().optional(),
    checked:  z.literal(true, {message: "Check Terms And Policy"})
})


type TRegisterPropertySchema = z.infer<typeof RegisterPropertySchema>

export {RegisterPropertySchema, type TRegisterPropertySchema}