import { FC } from "react";
import { Stack } from "@mui/material";

import { LayoutProps } from "./Layout.types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("/landscape.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default Layout;
