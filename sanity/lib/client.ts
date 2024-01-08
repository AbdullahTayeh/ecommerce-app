import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skoJJvm3Hr1FnbUzzflsWvpz0vlinUOfSHsVc1TmIM6248FJirUx5dV1jAAZqZlCpe7D94y5n3pwxneEmzNBkQBztqTdbQ99goAaliVm03Y7j0VDyX0cdhavG57RnkV7wRQtTwAra2LT9ussgMDjf6BXHF8znWvjK8toQKrm3Toxo6aPJpxO"
})


//skoJJvm3Hr1FnbUzzflsWvpz0vlinUOfSHsVc1TmIM6248FJirUx5dV1jAAZqZlCpe7D94y5n3pwxneEmzNBkQBztqTdbQ99goAaliVm03Y7j0VDyX0cdhavG57RnkV7wRQtTwAra2LT9ussgMDjf6BXHF8znWvjK8toQKrm3Toxo6aPJpxO

