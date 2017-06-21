import React from 'react'

const SocialIcon = (props) => (
<li>
    <a target="_blank" rel="noopener noreferrer" href={props.link} className="btn-social btn-outline"><i className={"fa fa-fw fa-" + props.type}></i></a>
</li>
)

export default SocialIcon