import FooterLink from "./FooterLink";
import { TwitterIcon, GithubIcon } from "../Icons/Icons";
import { getCurrentYear } from "../../utils/generic";

const Footer = () => {
  const currentYear = getCurrentYear();
  const twitterLink =
    "https://twitter.com/ApesTogetherDoc";
  const sourceCodeLink = "https://www.apestogetherstrongdoc.com/";
  const shopLink = "https://www.apestogetherstrongdoc.com/store";
  const privacyPolicyLink = "https://www.apestogetherstrongdoc.com/privacy-policy";
  const termsLink = "https://www.apestogetherstrongdoc.com/terms-and-conditions";

  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        {currentYear},{" "}
        <FooterLink href="https://www.apestogetherstrongdoc.com">Apes Together Strong</FooterLink> | A Mulligan Brothers Documentary
      </p>
      <div className="space-x-4">
        <FooterLink href={shopLink}>
          <p className="hidden md:inline-block">Shop</p>
        </FooterLink>
        <FooterLink href={twitterLink}>
          <p className="hidden md:inline-block">Twitter</p>
        </FooterLink>
        <FooterLink href={privacyPolicyLink}>
          <p className="hidden md:inline-block"> Privacy Policy</p>
        </FooterLink>
        <FooterLink href={termsLink}>
          <p className="hidden md:inline-block"> Terms & Conditions</p>
        </FooterLink>
      </div>
    </div>
  );
};

export default Footer;