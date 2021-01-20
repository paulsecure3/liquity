import { Box, Flex, Heading, Paragraph } from "theme-ui";

import { useLiquitySelector } from "@liquity/lib-react";
import { LiquityStoreState } from "@liquity/lib-base";
import { Icon } from "@liquity/shared-react";

import { shortenAddress } from "../utils/shortenAddress";

const selectFrontendTag = ({ frontendTag }: LiquityStoreState) => frontendTag;

export const UnregisteredFrontend: React.FC = () => {
  const frontendTag = useLiquitySelector(selectFrontendTag);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",

        m: 3,
        p: 3,
        maxWidth: "500px",

        border: 1,
        borderRadius: "8px",
        borderColor: "warning",
        boxShadow: 2
      }}
    >
      <Flex sx={{ alignItems: "center", mx: 3, mb: 2 }}>
        <Icon name="exclamation-triangle" size="2x" />
        <Heading sx={{ ml: 3, fontSize: "18px" }}>Frontend not yet registered</Heading>
      </Flex>

      <Paragraph sx={{ fontSize: 2 }}>
        If you're the operator of this frontend, please select <b>{shortenAddress(frontendTag)}</b>{" "}
        in your wallet to proceed with the registration.
      </Paragraph>
    </Box>
  );
};
