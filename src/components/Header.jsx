import React from 'react'

function Header(props) {
      const toggleSidebar = () => {
          document.documentElement.classList.toggle('sidebar-enable');
      };
  
  
  
      const toggleScreen = () => {
          if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen().catch((err) => {
                  console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
              });
          } else {
              document.exitFullscreen();
          }
      };
  
  
      const toggleTheme = () => {
          const currentTheme = document.documentElement.getAttribute('data-bs-theme');
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-bs-theme', newTheme);
      };
  return (
    <>
         {/*-- ========== Topbar Start ========== -*/}
          <div className="navbar-custom">
            <div className="topbar">
              <div className="topbar-menu d-flex align-items-center gap-lg-2 gap-1">

                {/*-- Brand Logo -*/}
                <div className="logo-box">
                  {/*-- Brand Logo Light -*/}
                  <a href="index.html" className="logo-light">
                    <img src="assets/images/logo-light.png" alt="logo" className="logo-lg" height="22" />
                    <img src="assets/images/logo-sm.png" alt="small logo" className="logo-sm" height="22" />
                  </a>

                  {/*-- Brand Logo Dark -*/}
                  <a href="index.html" className="logo-dark">
                    <img src="assets/images/logo-dark.png" alt="dark logo" className="logo-lg" height="22" />
                    <img src="assets/images/logo-sm.png" alt="small logo" className="logo-sm" height="22" />
                  </a>
                </div>

                {/*-- Sidebar Menu Toggle Button -*/}
                <button className="button-toggle-menu" onClick={toggleSidebar}>
                  <i className="mdi mdi-menu"></i>
                </button>
              </div>

              <ul className="topbar-menu d-flex align-items-center gap-4">

                <li className="d-none d-md-inline-block">
                  <a className="nav-link" onClick={toggleScreen} style={{ cursor: 'pointer' }}>
                    <i className="mdi mdi-fullscreen font-size-24"></i>
                  </a>

                </li>

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-light arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="mdi mdi-magnify font-size-24"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end dropdown-lg p-0">
                    <form className="p-3">
                      <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                    </form>
                  </div>
                </li>


                <li className="dropdown d-none d-md-inline-block">
                  <a className="nav-link dropdown-toggle waves-effect waves-light arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height="18" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">German</span>
                    </a>

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span>
                    </a>

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Spanish</span>
                    </a>

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Russian</span>
                    </a>

                  </div>
                </li>

                <li className="dropdown notification-list">
                  <a className="nav-link dropdown-toggle waves-effect waves-light arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="mdi mdi-bell font-size-24"></i>
                    <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                    <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 font-size-16 fw-semibold"> Notification</h6>
                        </div>
                        <div className="col-auto">
                          <a href="javascript: void(0);" className="text-dark text-decoration-underline">
                            <small>Clear All</small>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="px-1" style={{ maxHeight: '300px' }} data-simplebar>

                      <h5 className="text-muted font-size-13 fw-normal mt-2">Today</h5>
                      {/*-- item-*/}

                      <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-1">
                        <div className="card-body">
                          <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="notify-icon bg-primary">
                                <i className="mdi mdi-comment-account-outline"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold font-size-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                              <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                            </div>
                          </div>
                        </div>
                      </a>

                      {/*-- item-*/}
                      <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                        <div className="card-body">
                          <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="notify-icon bg-info">
                                <i className="mdi mdi-account-plus"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold font-size-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                              <small className="noti-item-subtitle text-muted">New user registered</small>
                            </div>
                          </div>
                        </div>
                      </a>

                      <h5 className="text-muted font-size-13 fw-normal mt-0">Yesterday</h5>

                      {/*-- item-*/}
                      <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                        <div className="card-body">
                          <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="notify-icon">
                                <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold font-size-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                              <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                            </div>
                          </div>
                        </div>
                      </a>

                      <h5 className="text-muted font-size-13 fw-normal mt-0">30 Dec 2021</h5>

                      {/*-- item-*/}
                      <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                        <div className="card-body">
                          <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="notify-icon bg-primary">
                                <i className="mdi mdi-comment-account-outline"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold font-size-14">Datacorp</h5>
                              <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                            </div>
                          </div>
                        </div>
                      </a>

                      {/*-- item-*/}
                      <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                        <div className="card-body">
                          <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="notify-icon">
                                <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" />
                              </div>
                            </div>
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold font-size-14">Karen Robinson</h5>
                              <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                            </div>
                          </div>
                        </div>
                      </a>

                      <div className="text-center">
                        <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                      </div>
                    </div>

                    {/*-- All-*/}
                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item border-top border-light py-2">
                      View All
                    </a>

                  </div>
                </li>

                <li className="nav-link" id="theme-mode" onClick={toggleTheme}>
                  <i className="bx bx-moon font-size-24"></i>
                </li>

                <li className="dropdown">
                  <a className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="assets/images/users/avatar-4.jpg" alt="user-image" className="rounded-circle" />
                    <span className="ms-1 d-none d-md-inline-block">
                      Jamie D. <i className="mdi mdi-chevron-down"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                    {/*-- item-*/}
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                      <i data-lucide="user" className="font-size-16 me-2"></i>
                      <span>My Account</span>
                    </a>

                    {/*-- item-*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                      <i data-lucide="settings" className="font-size-16 me-2"></i>
                      <span>Settings</span>
                    </a>

                    {/*-- item-*/}
                    <a href="pages-lock-screen.html" className="dropdown-item notify-item">
                      <i data-lucide="lock" className="font-size-16 me-2"></i>
                      <span>Lock Screen</span>
                    </a>

                    <div className="dropdown-divider"></div>

                    {/*-- item-*/}
                    <a href="pages-login.html" className="dropdown-item notify-item">
                      <i data-lucide="log-out" className="font-size-16 me-2"></i>
                      <span>Logout</span>
                    </a>

                  </div>
                </li>

              </ul>
            </div>
          </div>
    </>
  )
}

export default Header
