import React from 'react'

const SliderItem = ({product}) => {
  return (
    <div class="item">
        <div className='product'>
            <img src={product.src} alt="" />
            <div className='price'>
                <span>{product.price}</span>
                <span>{product.off + "%"}</span>
            </div>
        </div>
    </div>
  )
}

export default SliderItem