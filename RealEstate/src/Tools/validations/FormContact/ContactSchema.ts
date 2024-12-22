import {z} from "zod"

const ContactSchema = z.object({
    firstName: z.string().min(1, {message: "First Name is required"}),
    lastName: z.string().min(1, {message: "Last Name is required"}),
    phone : z.string().max(11, {message: "Phone Number max 11"}),
    email : z.string().min(1, {message: "Email is required"}).email(),
    message: z.string().max(200, {message: "It's enough"}).optional(),
    howDidYouHearAboutUs : z.string().min(1, {message: "how Did You Hear AboutUs"}),
    inquiryType : z.string().min(1, {message: "Select inquiry"}),
    checked:  z.literal(true, {message: "Check Terms And Policy"})
})


type TContactSchema = z.infer<typeof ContactSchema>

export {ContactSchema, type TContactSchema}