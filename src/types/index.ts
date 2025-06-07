import { z } from "zod"

const counters = z.array(z.object({
    title: z.string({ message: "something went wrong" }),
    value: z.string()
}))


const countersData = [
    { title: "", value: "" }
]

counters.parse(countersData)