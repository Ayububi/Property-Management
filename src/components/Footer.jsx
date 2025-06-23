import React from 'react'

function Footer() {
  return (
    <>
       {/*-- Footer Start -*/}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div>{new Date().getFullYear()} © Lunoz</div>
                </div>
                <div className="col-md-6">
                  <div className="d-none d-md-flex gap-4 align-item-center justify-content-md-end">
                    <p className="mb-0">Design & Develop by <a href="https://myrathemes.com/" target="_blank">MyraStudio</a> </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*-- end Footer -*/}
    </>
  )
}

export default Footer
