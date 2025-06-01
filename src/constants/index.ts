import zod from "zod"

const counters = zod.array(zod.object({
    title: zod.string(),
    value: zod.string(),
}))

const countersData = [
    { 
        value: "$2.5B+",
        title: "Total Volume"
     },
    { 
        value: "150K+",
        title: "Active Users"
     },
    { 
        value: "15+",
        title: "Supported Chains"
     },
    { 
        value: "99.9%",
        title: "Uptime"
     },
]

counters.parse(countersData)


export { counters, countersData }