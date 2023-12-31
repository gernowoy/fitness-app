import { SelectedPageType } from "@/App";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPageType) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 cursor-pointer hover:bg-primary-500 hover:text-white"
  onClick={() => setSelectedPage('контакты')}
  href={'#контакты'}
  >{children}</AnchorLink>;
};

export default ActionButton;
