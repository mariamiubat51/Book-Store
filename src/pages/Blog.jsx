import React from 'react';
import blog_bann_1 from '../assets/images/blog_bann_1.jpg';
import blog_book_1 from '../assets/images/blog_book_1.jpg';
import blog_book_2 from '../assets/images/blog_book_2.jpg';
import blog_book_3 from '../assets/images/blog_book_3.jpg';
import blog_book_4 from '../assets/images/blog_book_4.jpg';
import blog_book_5 from '../assets/images/blog_book_5.jpg';

const Blog = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col carousel-item active">
            <img className="w-100 productBanner" src={blog_bann_1} alt="Product Banner" />
            <div className="row">
              <div className="col-3 carousel-caption bg-dark bg-opacity-50 mx-auto">
                <h1>Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container">

        <div className="row my-4">
            <div className="col-md-5">
              <img src={blog_book_1} alt="Blog 3" className="img-fluid" />
            </div>
            <div className="col-md-7 my-auto ps-5">
              <h3>Significant reading has more info</h3>
              <strong>Posts by: Boighor-demo Admin / Jul 22 2018</strong>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio ut, nihil error nemo debitis asperiores impedit fuga!
              </p>
              <a href="#" className="btn btn-warning">Read More</a>
            </div>
          </div>
        </div>
     </section>

          <section className='bg-body-secondary'>
            <div className="container">
            <div className="row my-4 py-4">
            <div className="col-md-7 my-auto ps-5">
              <h3>Significant reading has more info</h3>
              <strong>Posts by: Boighor-demo Admin / Jul 22 2018</strong>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio ut, nihil error nemo debitis asperiores impedit fuga!
              </p>
              <a href="#" className="btn btn-warning">Read More</a>
            </div>
            <div className="col-md-5">
              <img src={blog_book_2} alt="Blog 2" className="img-fluid" />
            </div>
          </div>
            </div>
          </section>


          <section>
            <div className="container">
            <div className="row my-4">
            <div className="col-md-5">
              <img src={blog_book_3} alt="Blog 3" className="img-fluid" />
            </div>
            <div className="col-md-7 my-auto ps-5">
              <h3>Significant reading has more info</h3>
              <strong>Posts by: Boighor-demo Admin / Jul 22 2018</strong>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio ut, nihil error nemo debitis asperiores impedit fuga!
              </p>
              <a href="#" className="btn btn-warning">Read More</a>
            </div>
          </div>
            </div>
          </section>

          <section className='bg-body-secondary'>
            <div className="container">
            <div className="row my-4 py-4">
            <div className="col-md-7 my-auto ps-5">
              <h3>Significant reading has more info</h3>
              <strong>Posts by: Boighor-demo Admin / Jul 22 2018</strong>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio ut, nihil error nemo debitis asperiores impedit fuga!
              </p>
              <a href="#" className="btn btn-warning">Read More</a>
            </div>
            <div className="col-md-5">
              <img src={blog_book_4} alt="Blog 4" className="img-fluid" />
            </div>
          </div>
            </div>
          </section>


          <section>
            <div className="container">
            <div className="row my-4">
            <div className="col-md-5">
              <img src={blog_book_5} alt="Blog 5" className="img-fluid" />
            </div>
            <div className="col-md-7 my-auto ps-5">
              <h3>Significant reading has more info</h3>
              <strong>Posts by: Boighor-demo Admin / Jul 22 2018</strong>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio ut, nihil error nemo debitis asperiores impedit fuga!
              </p>
              <a href="#" className="btn btn-warning">Read More</a>
            </div>
          </div>

            </div>
          </section>
          
    </div>
  );
};

export default Blog;
