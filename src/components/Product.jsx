import React from 'react'


const Product = () => {

  return (
    <div>
        <div className=' grid grid-cols-2 gap-2'>
                {
                    data.map((item) => {
                        return (
                            <Card title={item.title} des={item.description} />
                        )
                    })
                }
                </div>
    </div>
  )
}

export default Product