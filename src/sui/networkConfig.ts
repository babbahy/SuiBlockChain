import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";
import {
  DEVNET_SUISTAINABLE_PACKAGE_ID,
  TESTNET_SUISTAINABLE_PACKAGE_ID,
  MAINNET_SUISTAINABLE_PACKAGE_ID,
} from "./constants";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        sustainablePackageId: DEVNET_SUISTAINABLE_PACKAGE_ID,
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        sustainablePackageId: TESTNET_SUISTAINABLE_PACKAGE_ID,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        sustainablePackageId: MAINNET_SUISTAINABLE_PACKAGE_ID,
      },
    },
  });

export { networkConfig, useNetworkVariable, useNetworkVariables };

