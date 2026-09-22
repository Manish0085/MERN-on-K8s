import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

//create a new ratelimiter, that allows 100 requests per minute
const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10, "20s") //test(5,"10s")
});
export default ratelimit;