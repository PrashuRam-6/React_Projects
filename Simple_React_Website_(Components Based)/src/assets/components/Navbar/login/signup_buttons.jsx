import React from 'react'

const signup_buttons = ({contentofthatbutton}) => {
  return (
    <div>
        <button className='active:scale-95 bg-red-600 p-1.5 px-2 text-amber-50'>
            {contentofthatbutton}
        </button>
    </div>
  )
}

export default signup_buttons