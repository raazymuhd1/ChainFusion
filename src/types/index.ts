import { z } from "zod"

const counters = z.array(z.object({
    title: z.string(),
    value: z.string()
}))