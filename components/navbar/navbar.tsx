"use client";

import { NavbarAndNewsQuery } from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

import MobileNav from "./mobileNav";
import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNav from "./desktopNav";
import SideMenu from "./sideMenu";

export default function Navbar(props: {
  data: NavbarAndNewsQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  const windowSize = useWindowSize();

  if (windowSize.width && windowSize?.width <= 1023) {
    return (
      <>
        <MobileNav data={data} />
        {data?.navbar?.sideMenu?.items && (
          <SideMenu data={data?.navbar?.sideMenu?.items} />
        )}
      </>
    );
  } else {
    return <DesktopNav data={data}></DesktopNav>;
  }
}
