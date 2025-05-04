import React from 'react'
import shop_bann_1 from '../assets/images/shop_bann_1.jpg';
import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/ib1.jpg';
import b3 from '../assets/images/ib2.jpg';
import b4 from '../assets/images/ib3.jpg';
import b5 from '../assets/images/b5.jpg';
import b6 from '../assets/images/b6.jpg';
import b7 from '../assets/images/b7.jpg';
import b8 from '../assets/images/b8.jpg';

const Shop = () => {
  return (
    <div>
      <section> 
          <div className="row"> 
            <div className="col carousel-item active"> 
              <img className='w-100 productBanner' src={shop_bann_1} alt="Product Banner" /> 
              <div className="row"> 
                <div className='col-3 carousel-caption bg-dark bg-opacity-50 mx-auto'> 
                  <h1>Shop</h1> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section>

        <section class="py-5 bg-body-secondary">
                <div class="container">
                    <div className="row border-start">
                      <div className="col-md-4 pt-5 pe-5  border-end">
                        <h4 className='border-bottom border-dark'>CATEGORIES</h4><br />
                        <ul>
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Adventure</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Islamic</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Children</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Food Recip</a></li><br />
                        </ul><br />
                        <h4 className='border-bottom border-dark'>Product Types</h4><br />
                        <ul>
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Englisg</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Islamic</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Math</a></li><br />
                          <li><a className='text-decoration-none text-dark border-bottom' href="#">Science</a></li><br />
                        </ul>

                      </div>
                      <div className="col-md-8">
                      <div class="row">
                        <div class="col-7 mx-auto">
                            <div class="card card-body text-center border-0 bg-transparent">
                                <h3 class="border-bottom pb-3">Books</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img className='product' src={b1} alt="book"/>
                                <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b2} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b3} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row pt-5">
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b5} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b6} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b7} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="row pt-5">
                    <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b4} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b8} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                            <img className='product' src={b7} alt="book"/>
                            <div class="card-body">
                                    <h4>This is title content</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <a href="" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                      </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Shop
