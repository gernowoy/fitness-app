import { SelectedPageType } from "@/App";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPageType;
  setSelectedPage: (value: SelectedPageType) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageType;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-200 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
