import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
              </a>
              <div className="card-body">
                <a href="/product">
          <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className={`${product.rating > 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half-o" : "fa fa-star-o"}`}></i>
                  </span>                  

                  <span>
                    <i className={`${product.rating > 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half-o" : "fa fa-star-o"}`}></i>
                  </span>                  

                  <span>
                    <i className={`${product.rating > 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half-o" : "fa fa-star-o"}`}></i>
                  </span>                  

                  <span>
                    <i className={`${product.rating > 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half-o" : "fa fa-star-o"}`}></i>
                  </span>                  

                  <span>
                    <i className={`${product.rating > 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"}`}></i>
                  </span>                  
                </div>
          <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All Right Reserved</footer>
    </div>
  );
}

export default App;
