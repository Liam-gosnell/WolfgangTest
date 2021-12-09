import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
    return (
        <div className="content container">
            <div class='row'>
                <div class='column double-column'>

                     <div class='text-container main-paragraph'>
                        <p>Back in 2011, when Wolfgang was only two people we submitted some case studies to the Digital Media Awards, optimistically entering the "Best Agency" category. At that time nobody knew who we were and our clients were not of the "catwalk" variety. So we certainly didn't expect to win, we optimistically hoped to get one of those cool "finalist" badges for our email signatures. Lo and behold, the judges loved our case studies, scored them strongly and we took the Gold Medal* home. </p>
                        <p>This success imbued us with a wolfish hunger to execute outstanding campaigns and win further domestic & international awards.</p>
                        
                    </div>
                 </div>
                <div class='column'>
                    <div class='img-container'>
                        <img height="310" width="465" src="https://www.wolfgangdigital.com/uploads/general/imageblogsize.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
