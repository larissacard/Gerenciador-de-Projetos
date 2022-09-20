import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={190}
    height={190}
    viewBox="0 0 120 160"
    backgroundColor="#d3d7cf"
    foregroundColor="#ecebeb"
    {...props}
  >
    
    <rect x="5" y="113" rx="3" ry="3" width="113" height="8" /> 
    <rect x="22" y="133" rx="3" ry="3" width="70" height="8" /> 
    <circle cx="55" cy="45" r="27" />
  </ContentLoader>
)

export default MyLoader;

