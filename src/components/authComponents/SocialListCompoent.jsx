import React from "react";
import {Lii} from '../LiComponent/CommonLi'
import {icons} from '../../inc/auth/login'
export default function SocialListComponent() {
  return (
    <div className="loginBodyContent clearfix" id="loginBody">
      <h2 className="headTitle">Login to Your Account</h2>
      <div className="socialLogin mb-4">
        <ul className="socialList mt-4 mb-4">
          
        {icons.map((icon)=><Lii
            ListClass={icon.ListClass}
            Url={icon.Url}
            SocialIcon={icon.Icon_name}
        />)}

        </ul>
        <h4>OR</h4>
      </div>
    </div>
  );
}
