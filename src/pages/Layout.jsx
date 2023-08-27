import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className='container'>
    <header className="header">
      <div className='header-wraper'>
        <Link to={"/"} className="header-logo">Event Planner</Link>
        <div className=" header-nav">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search by keywords"
              className="search"
            />
          </form>
          <div className="wrapper-select">
            <select className="select">
              <option value="ua" className="select-one">
                UK
              </option>
              <option value="en" className="select-one">
                EN
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <Suspense
        fallback={<div>Loading...</div>}
      >
        <Outlet />
      </Suspense>






    </div>
  )
}

export default Layout
