// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { getproducts } from '../../../redux/action/products.action';
// import { addToCart } from '../../../redux/slice/cart.slice';
// import { fetchProducts } from '../../../redux/action/addproducts.action';



// function Shop(props) {



//   const products = useSelector(state => state.productInAdmin);
//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(fetchProducts())
//   }, [])


//   const handleproduct = (id) => {
   
//     dispatch(addToCart({id,count:1}))
//   }





//   return (
//     <div>

//       {/* Fruits Shop Start*/}
//       <div className="container-fluid fruite py-5">
//         <div className="container py-5">
//           <h1 className="mb-4">Fresh fruits shop</h1>
//           <div className="row g-4">
//             <div className="col-lg-12">
//               <div className="row g-4">
//                 <div className="col-xl-3">
//                   <div className="input-group w-100 mx-auto d-flex">
//                     <input
//                       name='search'
//                       // value={search}
//                       // onChange={(event) => setSearch(event.target.value)}
//                       type="search"
//                       className="form-control p-3"
//                       placeholder="keywords"
//                       aria-describedby="search-icon-1" />
//                     <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
//                   </div>
//                 </div>
//                 <div className="col-6" />
//                 <div className="col-xl-3">
//                   <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
//                     <label htmlFor="fruits">Default Sorting:</label>
//                     <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
//                       <option value="volvo">Nothing</option>
//                       <option value="saab">Popularity</option>
//                       <option value="opel">Organic</option>
//                       <option value="audi">Fantastic</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="row g-4">
//                 <div className="col-lg-3">
//                   <div className="row g-4">
//                     <div className="col-lg-12">
//                       <div className="mb-3">
//                         <h4>Categories</h4>
//                         <ul className="list-unstyled fruite-categorie">
//                           <li>
//                             <div className="d-flex justify-content-between fruite-name">
//                               <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
//                               <span>(3)</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="d-flex justify-content-between fruite-name">
//                               <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
//                               <span>(5)</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="d-flex justify-content-between fruite-name">
//                               <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
//                               <span>(2)</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="d-flex justify-content-between fruite-name">
//                               <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
//                               <span>(8)</span>
//                             </div>
//                           </li>
//                           <li>
//                             <div className="d-flex justify-content-between fruite-name">
//                               <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
//                               <span>(5)</span>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="mb-3">
//                         <h4 className="mb-2">Price</h4>
//                         {/* <input type="range" onChange={(event) => setPrice(event.target.value)} className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={10} defaultValue={0} oninput="amount.value=rangeInput.value" /> */}
//                         <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={10} defaultValue={0} oninput="amount.value=rangeInput.value" />
//                         <output id="amount" name="amount" min-velue={0} max-value={10} htmlFor="rangeInput">0</output>

//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="mb-3">
//                         <h4>Additional</h4>
//                         {/* {
//                           type.map((n, i) => ( */}
//                         <div className="mb-2">
//                           <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
//                           <label htmlFor="Categories-1"></label>
//                         </div>
//                         {/* ))
//                         } */}
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <h4 className="mb-3">Featured products</h4>
//                       <div className="d-flex align-items-center justify-content-start">
//                         <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                           <img src="img/featur-1.jpg" className="img-fluid rounded" alt />
//                         </div>
//                         <div>
//                           <h6 className="mb-2">Big Banana</h6>
//                           <div className="d-flex mb-2">
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star" />
//                           </div>
//                           <div className="d-flex mb-2">
//                             <h5 className="fw-bold me-2">2.99 $</h5>
//                             <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-start">
//                         <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                           <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
//                         </div>
//                         <div>
//                           <h6 className="mb-2">Big Banana</h6>
//                           <div className="d-flex mb-2">
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star" />
//                           </div>
//                           <div className="d-flex mb-2">
//                             <h5 className="fw-bold me-2">2.99 $</h5>
//                             <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-start">
//                         <div className="rounded me-4" style={{ width: 100, height: 100 }}>
//                           <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
//                         </div>
//                         <div>
//                           <h6 className="mb-2">Big Banana</h6>
//                           <div className="d-flex mb-2">
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star text-secondary" />
//                             <i className="fa fa-star" />
//                           </div>
//                           <div className="d-flex mb-2">
//                             <h5 className="fw-bold me-2">2.99 $</h5>
//                             <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="d-flex justify-content-center my-4">
//                         <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
//                       </div>
//                     </div>
//                     <div className="col-lg-12">
//                       <div className="position-relative">
//                         <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt />
//                         <div className="position-absolute" style={{ top: '50%', right: 10, transform: 'translateY(-50%)' }}>
//                           <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-9">
//                   <div className="row g-4 justify-content-center">

//                     {
//                       products.products.map((v) => (
//                         <div className="col-md-6 col-lg-6 col-xl-4">
//                           <Link to={`/Shop/${v.id}`}>
//                             <div className="rounded position-relative fruite-item">
//                               <div className="fruite-img">
//                                 <img src={v.image} className="img-fluid w-100 rounded-top" alt />
//                               </div>
//                               <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>Fruits</div>
//                               <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//                                 <h4>{v.name}</h4>
//                                 <p>{v.description}</p>
//                                 <div className="d-flex justify-content-between flex-lg-wrap">
//                                   <p className="text-dark fs-5 fw-bold mb-0">${v.price} / kg</p>
//                                   <Link onClick={()=>{handleproduct(v.id)}} href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</Link>
//                                 </div>
//                               </div>
//                             </div>
//                           </Link>
//                         </div>
//                       ))
//                     }

//                     <div className="col-12">
//                       <div className="pagination d-flex justify-content-center mt-5">
//                         <a href="#" className="rounded">«</a>
//                         <a href="#" className="active rounded">1</a>
//                         <a href="#" className="rounded">2</a>
//                         <a href="#" className="rounded">3</a>
//                         <a href="#" className="rounded">4</a>
//                         <a href="#" className="rounded">5</a>
//                         <a href="#" className="rounded">6</a>
//                         <a href="#" className="rounded">»</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Fruits Shop End*/}

//     </div>
//   );
// }

// export default Shop;




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/slice/cart.slice';
import { fetchProducts } from '../../../redux/action/addproducts.action';

function Shop() {
  const products = useSelector(state => state.productInAdmin.products);
  const isLoading = useSelector(state => state.productInAdmin.isLoading);
  const error = useSelector(state => state.productInAdmin.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProduct = (id) => {
    dispatch(addToCart({ id, count: 1 }));
  };

  return (
    <div>
      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      name='search'
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
                <div className="col-6" />
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
                              <span>(3)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
                              <span>(5)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
                              <span>(2)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
                              <span>(8)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
                              <span>(5)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={10} defaultValue={0} onInput={(e) => { document.getElementById("amount").value = e.target.value }} />
                        <output id="amount" name="amount" min-value={0} max-value={10} htmlFor="rangeInput">0</output>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                          <label htmlFor="Categories-1">Beverages</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                          <img src="img/featur-1.jpg" className="img-fluid rounded" alt="featured-1" />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Banana</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                          <img src="img/featur-2.jpg" className="img-fluid rounded" alt="featured-2" />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Banana</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                          <img src="img/featur-3.jpg" className="img-fluid rounded" alt="featured-3" />
                        </div>
                        <div>
                          <h6 className="mb-2">Big Banana</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center my-4">
                        <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">View More</a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="banner" />
                        <div className="position-absolute" style={{ top: '50%', right: 10, transform: 'translateY(-50%)' }}>
                          <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!isLoading && !error && products.length > 0 && products.map((v) => (
                      <div key={v.id} className="col-md-6 col-lg-6 col-xl-4">
                        <Link to={`/Shop/${v.id}`}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src={v.image} className="img-fluid w-100 rounded-top" alt={v.name} />
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>{v.name}</h4>
                              <p>{v.description}</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">${v.price} / kg</p>
                                <button onClick={() => { handleProduct(v.id) }} className="btn border border-secondary rounded-pill px-3 text-primary">
                                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">«</a>
                        <a href="#" className="active rounded">1</a>
                        <a href="#" className="rounded">2</a>
                        <a href="#" className="rounded">3</a>
                        <a href="#" className="rounded">4</a>
                        <a href="#" className="rounded">5</a>
                        <a href="#" className="rounded">6</a>
                        <a href="#" className="rounded">»</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}
    </div>
  );
}

export default Shop;
