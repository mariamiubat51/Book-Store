import React from 'react';
import abo_bann_1 from '../assets/images/abo_bann_1.jpg';
import abo_member_1 from '../assets/images/abo_member_1.jpg';
import abo_member_2 from '../assets/images/abo_member_2.jpg';
import abo_member_3 from '../assets/images/abo_member_3.jpg';

const Abo = () => {
  return (
    <div>
      {/* Banner Section */}
      <section>
        <div className="row">
          <div className="col carousel-item active">
            <img className="w-100 productBanner" src={abo_bann_1} alt="Product Banner" />
            <div className="row">
              <div className="col-3 carousel-caption bg-dark bg-opacity-50 mx-auto">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='bg-body-secondary'>
      <section className="container py-5">
        <div className="row">
          <div className="col-7 mx-auto">
            <div className="card card-body text-center border-0 bg-transparent">
              <h2 className="border-bottom pb-3">Our Process Skill Of High</h2>
              <p>the right people for your project</p>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-6">
            <h4>We Have Skills to Show</h4><br></br>
            <ul>
              <li>Customer Favorites</li><br></br>
              <li>Popular Authors</li><br></br>
              <li>Bestselling Series</li><br></br>
              <li>Bargain Books</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h4>Buy Books <br></br> Different Knowledge</h4><br></br>
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
              Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
              humanitatis per seacula quarta decima et quinta decima.
            </p><br></br>
            <p><strong>London Address</strong></p>
            <p>34 Parer Place via Musk Avenue, Kelvin Grove, QLD, 4059</p>
          </div>
        </div>
      </section>
      </section>

      {/* Team Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-7 mx-auto">
            <div className="card card-body text-center border-0 bg-transparent">
              <h2 className="border-bottom pb-3">Meet Our Team of Experts</h2>
              <p>the right people for your project</p>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          {[abo_member_1, abo_member_2, abo_member_3].map((member, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card">
                <img src={member} alt={`Team Member ${idx + 1}`} />
                <div className="card-body text-center">
                  <h4>Member Name</h4>
                  <p>Member Designation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Abo;
