import React, { useEffect } from 'react';
import pro_bann_1 from '../assets/images/pro_bann_1.jpg';
import b1 from '../assets/images/b1.jpg';
import { initFormToggle } from '../pages/Script'; // fix import path if needed

import book1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/ib1.jpg';
import b3 from '../assets/images/ib2.jpg';
import b4 from '../assets/images/ib3.jpg';


const Product = () => {
useEffect(() => {
initFormToggle(); // Run the login/signup toggle code on mount


// Optional: If needed for tab functionality, you can move showTab logic here too
window.showTab = function (tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
};

}, []);

return ( 
<div> 
  <section> 
    <div className="row"> 
      <div className="col carousel-item active"> 
        <img className='w-100 productBanner' src={pro_bann_1} alt="Product Banner" /> 
        <div className="row"> 
          <div className='col-4 carousel-caption bg-dark bg-opacity-50 mx-auto'> 
            <h1>Product Details</h1> 
          </div> 
        </div> 
      </div> 
    </div> 
  </section>


  <section className='bg-body-secondary py-5'>
    <section className='container'>
      <div className="row">
        <div className="col-md-5 pb-4">
          <img src={b1} alt="" />
        </div>
        <div className="col-md-7 ps-5 pt-5">
          <h2>Memorise</h2><br />
          <p className='border-bottom fs-5'>
            <strong>$1500.00</strong> <strike>$180.00</strike>
          </p><br />
          <p>En el valle, la vivienda en la vigilancia específica...</p><br />
          <p>
            <strong>Categories: </strong>
            <a className='text-decoration-none text-dark' href="#">Adventure, </a>
            <a className='text-decoration-none text-dark' href="#">Islamic, </a>
            <a className='text-decoration-none text-dark' href="#">Children, </a>
            <a className='text-decoration-none text-dark' href="#">Food Recip</a>
          </p><br />
          <button type="button" className="btn btn-warning"><strong>Add to Cart</strong></button>
        </div>
      </div>
    </section>
  </section>


  <section className='container py-5'>
    <div className="tabs">
      <div className="tab-buttons">
        <button className='border-redeus border-0 bg-white border-bottom' onClick={() => window.showTab('description')}>Description</button>
        <button className='border-redeus border-0 bg-white border-bottom' onClick={() => window.showTab('comments')}>Comments</button>
        <button className='border-redeus border-0 bg-white border-bottom' onClick={() => window.showTab('reviews')}>Reviews</button>
        <button className='border-redeus border-0 bg-white border-bottom' onClick={() => window.showTab('shipping')}>Shipping Policy</button>
      </div>

      <div className="tab-content" id="description">
        <h2>Description</h2>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno ahora. No hay comentarios eran, en el mejor, pero el financiamiento de la atención de la salud o la risa. Bienvenido a aprender más acerca de la cultura popular, y el tiempo, no, ni a crecer fuerte. Miramos a los miembros de televisión por cable de televisión.<br></br><br></br>Por otra parte, denunciamos con indignación a los hombres que son engañados y desmoralizados por los encantos del placer del momento, tan cegados por el deseo, que no pueden prever el dolor y la molestia que se va a producir, y la misma culpa es de los que faltan a su deber por debilidad de la voluntad, que es lo mismo que decir que fallan por la fatiga y el dolor. Estos casos son muy simples y fácil de distinguir. En una hora libre, sin las trabas de nuestro poder de elección y cuando nada impida que seamos capaces de hacer lo que más nos gusta, todo placer es de agradecer y cada dolor se puede evitar. Pero en ciertas circunstancias y debido a las exigencias del deber o de las obligaciones de la empresa, estos placeres tienen que ser repudiados y sus molestias aceptadas .El hombre sabio, por lo tanto, siempre tiene en estos asuntos una elección: rechaza placeres para asegurar otros placeres mayores, o de lo contrario evita los dolores para evitar dolores peores.</p>
      </div>
      <div className="tab-content" id="comments" style={{ display: 'none' }}>
      <h2>Customer Comments</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno ahora. No hay comentarios eran, en el mejor, pero el financiamiento de la atención de la salud o la risa. Bienvenido a aprender más acerca de la cultura popular, y el tiempo, no, ni a crecer fuerte. Miramos a los miembros de televisión por cable de televisión.<br></br><br></br>Por otra parte, denunciamos con indignación a los hombres que son engañados y desmoralizados por los encantos del placer del momento, tan cegados por el deseo, que no pueden prever el dolor y la molestia que se va a producir, y la misma culpa es de los que faltan a su deber por debilidad de la voluntad, que es lo mismo que decir que fallan por la fatiga y el dolor. Estos casos son muy simples y fácil de distinguir. En una hora libre, sin las trabas de nuestro poder de elección y cuando nada impida que seamos capaces de hacer lo que más nos gusta, todo placer es de agradecer y cada dolor se puede evitar. Pero en ciertas circunstancias y debido a las exigencias del deber o de las obligaciones de la empresa, estos placeres tienen que ser repudiados y sus molestias aceptadas .El hombre sabio, por lo tanto, siempre tiene en estos asuntos una elección: rechaza placeres para asegurar otros placeres mayores, o de lo contrario evita los dolores para evitar dolores peores.</p>
      </div>
      <div className="tab-content" id="reviews" style={{ display: 'none' }}>
      <h2>Customer Reviews</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno ahora. No hay comentarios eran, en el mejor, pero el financiamiento de la atención de la salud o la risa. Bienvenido a aprender más acerca de la cultura popular, y el tiempo, no, ni a crecer fuerte. Miramos a los miembros de televisión por cable de televisión.<br></br><br></br>Por otra parte, denunciamos con indignación a los hombres que son engañados y desmoralizados por los encantos del placer del momento, tan cegados por el deseo, que no pueden prever el dolor y la molestia que se va a producir, y la misma culpa es de los que faltan a su deber por debilidad de la voluntad, que es lo mismo que decir que fallan por la fatiga y el dolor. Estos casos son muy simples y fácil de distinguir. En una hora libre, sin las trabas de nuestro poder de elección y cuando nada impida que seamos capaces de hacer lo que más nos gusta, todo placer es de agradecer y cada dolor se puede evitar. Pero en ciertas circunstancias y debido a las exigencias del deber o de las obligaciones de la empresa, estos placeres tienen que ser repudiados y sus molestias aceptadas .El hombre sabio, por lo tanto, siempre tiene en estos asuntos una elección: rechaza placeres para asegurar otros placeres mayores, o de lo contrario evita los dolores para evitar dolores peores.</p>
      </div>
      <div className="tab-content" id="shipping" style={{ display: 'none' }}>
      <h2>Shipping policy for our store</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate<br></br>1-2 business days (Typically by end of day)<br></br>30 days money back guaranty<br></br>24/7 live support<br></br>odio dignissim qui blandit praesent<br></br>luptatum zzril delenit augue duis dolore<br></br>te feugait nulla facilisi.<br></br>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum<br></br>claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per<br></br>seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
      </div>
    </div>
  </section>

  <section class="py-5 bg-body-secondary">
          <div class="container">
              <div class="row">
                  <div class="col-7 mx-auto">
                      <div class="card card-body text-center border-0 bg-transparent">
                          <h3 class="border-bottom pb-3">Upsell Porducts</h3>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3">
                      <div class="card">
                          <img className='product' src={book1} alt="book"/>
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
  
              
          </div>
      </section>
</div>

);
};

export default Product;
