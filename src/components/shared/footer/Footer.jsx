import logo from "../../../assets/logo-xl.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white mt-16 py-10 px-4">

      <div className="max-w-5xl mx-auto text-center">

        
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <p className="text-gray-200 mt-3 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

       
        <p className="text-gray-200 font-semibold text-sm mt-6">
          Social Links
        </p>

        <div className="flex justify-center gap-4 mt-3">

          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:scale-110 transition">
            <img src={facebook} alt="Facebook" />
          </a>

          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:scale-110 transition">
            <img src={twitter} alt="Twitter" />
          </a>

          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:scale-110 transition">
            <img src={instagram} alt="Instagram"/>
          </a>

        </div>

        <div className="border-t border-white/20 mt-10"></div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-300">

          
          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;