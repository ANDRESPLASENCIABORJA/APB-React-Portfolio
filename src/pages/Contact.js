const Contact = () => {
  return (
    <div className="about-test-div">
      <main className="contact-form-main">
        <section className="contact-menu">
            <div className="container-fluid">
                <h1 className="text-center contact-h1">Contact</h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputPassword4" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="col-12 text-center contact-button">
                        <button type="submit" className="btn btn-success contact-form">Send</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
    </div>
  );
};

export default Contact;
