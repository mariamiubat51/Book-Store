import React from 'react';
import con_bann_1 from '../assets/images/con_bann_1.jpg'
const Cont = () => {
  return (
    <div>
 
        <section> 
            <div className="row"> 
              <div className="col carousel-item active"> 
                <img className='w-100 productBanner' src={con_bann_1} alt="Product Banner" /> 
                <div className="row"> 
                  <div className='col-4 carousel-caption mx-auto'> 
                    <h1 className='text-dark'>Contact With Us</h1> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </section>

<section className='bg-body-secondary  py-5'>
<div className="container">
          <div className="form-section shadow-sm  mb-5 p-4 bg-light rounded">
            <h2 className="section-title mb-4">Send Us a Message</h2>
            <form action="#" method="post" encType="multipart/form-data">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Category *</label>
                  <input type="text" className="form-control" id="category_name" name="category_name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Book Name *</label>
                  <input type="text" className="form-control" id="book_name" name="book_name" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="attachment" className="form-label">Attach a file (Optional)</label>
                <input className="form-control" type="file" id="attachment" name="attachment" />
              </div>
              <button type="submit" className="btn btn-warning">Send Message</button>
            </form>
          </div>

          <div className="mb-5">
            <h2 className="section-title">Store Contact Info</h2>
            <p>Need to reach us directly? Feel free to contact us via:</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> contact@bookstore.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Book Lane, Library City, NY 10001</li>
              <li><strong>Hours:</strong> Mon–Sat, 9 AM–7 PM</li>
            </ul>
          </div>
        </div>
</section>

      <section className="py-5 bg-light">
        <div className="container-fluid">
        <div class="row">
                <div class="col-3 mx-auto">
                    <div class="card card-body text-center border-0 bg-transparent">
                        <h3 class="border-bottom pb-3">Location</h3>
                    </div>
                </div>
            </div>
          <div className="row">
            <div className="col p-0">
              <div className="card card-body p-0 rounded-0">
                <iframe
                  title="Bookstore Location"
                  src="https://maps.google.com/maps?q=library%20city%20ny&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ width: '100%', height: '400px', border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cont;
