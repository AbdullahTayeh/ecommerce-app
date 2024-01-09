import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skAneExocasCy0WeawPWQatRztwtpM2dw16OvM8Acx9pRBV6U6kXbvUEBchQaJIH46BFxW6J1MESRZV59mVCfjrTiylMrmHjNF83pw28lCLcEKvthoZRZw6P7Ee01asVerEOAHgnzsS6Bw5lStNBRY44Y9XYxSe1vDLK7rYfyMIRqslsDg2q"
})


//sk1fPpTgOtYOkM8vCgKwVRqtCtsNeT2OzcBZGjd5R0BSeY5VPso0IhWSLCDYMSKAyTqO4EeZh41rK1FHOPxQDfRMv0StTANZWh4VPMuJ56xgeloq9kY0rsxJHmIFb7OcmeDvCVlvCMNpwbciWkHGupD2Rl2IpiQEzph9MVHk0ar7JeyL6o9B