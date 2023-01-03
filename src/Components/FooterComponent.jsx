

const FooterComponent = () => {
  return (
    <footer className="w-100">
      <div className="d-flex align-items-center justify-content-around p-1 ">
        <div className=" d-flex">
          <a href="#facebook" className="mx-1" target={"_blank"}>
            <i className="bi bi-facebook text-white-50 display-6"></i>
          </a>
          <a href="#instagram" className="mx-1" target={"_blank"}>
            <i className="bi bi-instagram text-white-50 display-6 "></i>
          </a>
        </div>
        <div className="text-white"></div>
        <div className="text-white-50 copyright-text  ">
         @ Copyright &copy; Best tunisia Online shop
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
