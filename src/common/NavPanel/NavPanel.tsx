import { useNavigate } from "react-router-dom";
import { routes } from "../Router/routes";
import { NavPanelInner, PageLink, PageList } from "./inner";

export const NavPanel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NavPanelInner>
      <PageList>
        <PageLink onClick={() => navigate(routes.home())}>Home</PageLink>
        <PageLink onClick={() => navigate(routes.bites.test())}>Test</PageLink>
      </PageList>
    </NavPanelInner>
  );
};
