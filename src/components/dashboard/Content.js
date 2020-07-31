import React from 'react'
import {fontawesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Content() {
    return (
        <div className="content">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="cart_head">
                <span className="cart_title">Online Visitor</span>
                <span className="cart_icon"><FontAwesomeIcon icon = "eye"  /></span>
              </div>
              <div className="cart_body">
                <p className="cart_body_title">5,192</p>
                <div className="progress border">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
