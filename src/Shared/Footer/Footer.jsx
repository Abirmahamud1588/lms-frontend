const Footer = () => {
  return (
    <div className="bg-[#F2F8FE]">
      <footer className="footer justify-between container mx-auto text-base-content py-10 pl-5 ">
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title mb-0">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Development</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title  mb-0">Pages</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title  mb-0">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookies</a>
        </nav>
        <form>
          <h6 className="footer-title  mb-0">Newsletter</h6>
          <fieldset className="form-control w-52 md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="md:flex">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered "
              />
              <button className="btn mt-2 ml-0 md:ml-2 md:mt-0 text-white bg-[#000DFF] ">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
