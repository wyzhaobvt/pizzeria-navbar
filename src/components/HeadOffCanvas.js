import { Link } from "react-router-dom";

const HeadOffCanvas = () => {
  
    return ( 
      <>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
          <div className="offcanvas-header py-4">
            <button type="button" className="btn-close offcanvas-title" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body p-0 mt-3">
            <ul className="navbar-nav justify-content-start flex-grow-1">
              <li className="nav-item">
              <Link to='/' className="p-3 border-bottom nav-link " style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-house-door-fill me-2"></i>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/' className="p-3 border-bottom nav-link"  style={{color:"rgb(25, 25, 25)"}}>
              <i className="bi bi-list me-2"></i>Menu</Link>
              </li>
              <li className="nav-item p-3 border-bottom"  >
              <span className="text-reset signInSideMenu"><i className="bi bi-person-fill me-1"></i>
                Sign Up or Sign In
                </span>
              </li>
              
            </ul>
          </div>
         
        </div>
        
        </>
     );
}
 
export default HeadOffCanvas;