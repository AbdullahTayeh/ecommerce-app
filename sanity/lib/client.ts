import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk1fPpTgOtYOkM8vCgKwVRqtCtsNeT2OzcBZGjd5R0BSeY5VPso0IhWSLCDYMSKAyTqO4EeZh41rK1FHOPxQDfRMv0StTANZWh4VPMuJ56xgeloq9kY0rsxJHmIFb7OcmeDvCVlvCMNpwbciWkHGupD2Rl2IpiQEzph9MVHk0ar7JeyL6o9B"
})


//sk1fPpTgOtYOkM8vCgKwVRqtCtsNeT2OzcBZGjd5R0BSeY5VPso0IhWSLCDYMSKAyTqO4EeZh41rK1FHOPxQDfRMv0StTANZWh4VPMuJ56xgeloq9kY0rsxJHmIFb7OcmeDvCVlvCMNpwbciWkHGupD2Rl2IpiQEzph9MVHk0ar7JeyL6o9B