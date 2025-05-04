import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';
import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/ib1.jpg';
import b3 from '../assets/images/ib2.jpg';
import b4 from '../assets/images/ib3.jpg';
import b5 from '../assets/images/b5.jpg';
import b6 from '../assets/images/b6.jpg';
import b7 from '../assets/images/b7.jpg';
import b8 from '../assets/images/b8.jpg';

 



const Hom = () => {
  return (
    <div>
      <section>
  <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 home-banner"
        src={banner1}
        alt="First slide"
      />
      <Carousel.Caption className="home-banner-text text-white">
        <h3>First slide label</h3>
        <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 home-banner"
        src={banner2}
        alt="Second slide"
      />
      <Carousel.Caption className='home-banner-text text-white'>
        <h3>Second slide label</h3>
        <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 home-banner"
        src={banner3}
        alt="Third slide"
      />
      <Carousel.Caption className='home-banner-text text-white'>
        <h3>Third slide label</h3>
        <p className='fs-5'>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</section>

<section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-7 mx-auto">
                    <div class="card card-body text-center border-0 bg-transparent">
                        <h3 class="border-bottom pb-3">New Products</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <img className='product' src={b1} alt="book"/>
                        <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b4} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b7} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b6} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

<section class="py-5 bg-body-secondary">
        <div class="container">
            <div class="row">
                <div class="col-7 mx-auto">
                    <div class="card card-body text-center border-0 bg-transparent">
                        <h3 class="border-bottom pb-3">All Products</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <img className='product' src={b1} alt="book"/>
                        <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b2} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b3} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b4} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-5">
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b5} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b6} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b7} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                    <img className='product' src={b8} alt="book"/>
                    <div class="card-body">
                            <h4>This is title content</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </div>
  );
};

export default Hom;
