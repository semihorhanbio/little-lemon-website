const Footer = () => {
  return (
    <footer className=" mt-[90px] bg-white-highlight">
      <div className="lg:w-[1100px] mr-auto ml-auto pb-[90px] md:pt-[90px] px-[22px] lg:px-[0px] pt-[50px] flex flex-col md:flex-row md:gap-[9px] lg:gap-[80px] gap-[20px] md:px-[16px]">
        <div className="w-[320px] order-2 md:order-1">
          <img
            className="md:w-8/12 w-6/12"
            alt="Little Lemon Restaurant Logo"
            src="./icons_assets/footer-logo.png"
          />
          <p className="text-black-highlight mt-[40px]">
            © 2023 Little Lemon. All rights reserved.
          </p>
        </div>
        <div className="md:order-2">
          <h4 className="text-xl font-bold">Navigation</h4>
          <ul className="text-black-highlight mt-[12px] flex flex-col gap-y-2">
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Home
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              About
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Menu
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Reservations
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Order Online
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Login
            </li>
          </ul>
        </div>
        <div className="md:order-3">
          <h4 className="text-xl font-bold">Contact</h4>
          <ul className="text-black-highlight mt-[12px] flex flex-col gap-y-2">
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              <address>43 Hazel st. Chicago IL US</address>
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              (+213) 789-792-2679
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              contact@little.lemon.com
            </li>
          </ul>
        </div>
        <div className="md:order-4 mb-[25px] md:mb-[0px]">
          <h4 className="text-xl font-bold">Social Media Links</h4>
          <ul className="text-black-highlight mt-[12px] flex flex-col gap-y-2">
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Facebook
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Instagram
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Twitter
            </li>
            <li className="hover:text-black cursor-pointer transition-all duration-200 ease-in">
              Youtube
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
