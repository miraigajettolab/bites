import { ReactNode } from "react";
import { NavPanel } from "../NavPanel/NavPanel";
import { PageContent, PageLayoutInner } from "./inner";

interface Props {
  children: ReactNode;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <PageLayoutInner>
      <NavPanel />
      <PageContent>{children}</PageContent>
    </PageLayoutInner>
  );
};
