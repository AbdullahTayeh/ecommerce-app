import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk5uqiSbt0KkeLCsqWO4p21aTxGxJiJ1T3U6soxPDgcOerD7GwF2N0PBk6xYPPNh9MqriCba85wy0nnFpUPOJQhhOzE5Meo7yIaja5hnTLWp5AVAvWWalpmKOmr0xzP5IRzo5En79bDhqcO8fK6Axp56tXR6j9m2Wgu9XCIDOP9v38qit7sa"
})
