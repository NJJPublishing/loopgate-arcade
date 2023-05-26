import FooterLink from "./FooterLink";
import { TwitterIcon, GithubIcon } from "../Icons/Icons";
import { getCurrentYear } from "../../utils/generic";

const Footer = () => {
  const currentYear = getCurrentYear();
  const twitterLink =
    "https://twitter.com/ApesTogetherDoc";
  const sourceCodeLink = "https://www.apestogetherstrongdoc.com";

  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        {currentYear},{" "}
        <FooterLink href="https://twitter.com/ApesTogetherDoc">Apes Together Strong</FooterLink> — 
        A Mulligan Brothers Documentary.
      </p>
      <div className="space-x-4">
        <FooterLink href={sourceCodeLink}>
          <p className="hidden md:inline-block">Visit Our Website</p>
          <GithubIcon className="w-5 h-5" />
        </FooterLink>
        <FooterLink href={twitterLink}>
          <p className="hidden md:inline-block"> Follow Us On Twitter</p>
          <TwitterIcon className="w-5 h-5" />
        </FooterLink>
      </div>
    </div>
  );
};

export default Footer;
