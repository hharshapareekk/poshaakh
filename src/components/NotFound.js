const NotFound = ({ needFullHeight }) => {
    return (
      <section
        className={` ${needFullHeight && "min-height-100vh"} not-found wrapper `}
      >
        <h2 className="section-title">Not Found! Are you sure you typed it correct?</h2>
      </section>
    );
  };
  
  export default NotFound;
  