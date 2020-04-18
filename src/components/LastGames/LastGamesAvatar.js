import React from 'react';

var classNames = require('classnames');


const LastGameAvatar = ({image, avatarName, setIsActive, isActive}) => {

  let selected = classNames({ selected: isActive === avatarName ? true : false})
  let avatarClass = classNames(selected, {'selected-dice': isActive === 'dice'  ? true : false,
                                          'selected-wheel': isActive === 'wheel'  ? true : false,
                                          'selected-cards': isActive === 'cards'  ? true : false
                                          })

  return (
    <div class={avatarClass} onClick={() => setIsActive(avatarName)}>
      <img src={require(`../../images/${image}.svg`)}/>
    </div>
  )
}

export default LastGameAvatar;