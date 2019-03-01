import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faIgloo, falinkedin } from '@fortawesome/free-solid-svg-icons'


// Call to action
// Nav Links
// All rights reserved
// Links to social media via FontAwesome

const footerLayout = (props) => {
    return (
        <div className = "footerDiv">
            <div id = "footerCallToActionText">
                <h6>Call to action</h6>
            </div>

            <div id = "navLinks">
                <h6>Nav Links</h6>
            </div>

            <div id = "footerLinkIcons">
                <h6>Social Media Icons</h6>
            </div>
        </div>
    )
}
export default footerLayout;