import React, { Suspense } from 'react';


const ViewProgressComp = React.lazy(()=> import('./ViewProgress'))

const RenderProgressView = () => {
  return (
    <div>
        <Suspense fallback={<h1>loading...</h1>}>
            <ViewProgressComp />
          </Suspense>
    </div>
  )
}

export default RenderProgressView