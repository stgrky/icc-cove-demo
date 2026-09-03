import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: "icc-cove-demo",
  deployment: { autoUpdates: true, appId: "hw6nm0dfcpth3bwy35sqcop5" },
});
