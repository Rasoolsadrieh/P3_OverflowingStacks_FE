import React from "react";
import './Avatar.css';


//ORIGINAL https://avatars.dicebear.com/api/:sprites/:seed.svg
//HUMAN https://avatars.dicebear.com/api/human/:seed.svg
//INITIALS https://avatars.dicebear.com/api/initials/:seed.svg

const Avatar = ({className, src, alt}) => {
//const Avatar_avatar = DiceBearBuilder.withRandomSeed().build();

  return (
    <div>
{src ? (
   <img className={'photo'} src={src} alt={alt} />
  
  ) : (
<img 
className={'photo'} 
src={
  "https://avatars.dicebear.com/api/human/:seed.svg?background=%230000ff"
  //In case of https error, use {handleOnError}. Add instructions targeting bckup(const)
} 
alt={alt} 
/>
)}
 </div>
 );
}

export default Avatar