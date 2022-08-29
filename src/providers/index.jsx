import { ReposProvider } from "./repos/repos";
import { TechProvider } from "./techCards/techCards";

const Providers = ({ children }) => {
  return (
    <TechProvider>
      <ReposProvider>{children}</ReposProvider>
    </TechProvider>
  );
};

export default Providers;
