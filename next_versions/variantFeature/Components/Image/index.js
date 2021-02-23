const LeftImage = ({ slice }) => (
  <div
    // className="md:w-1/2 m-auto md:m-0 overflow-visible"
    sx={{
      width: [null, null, '50%'],
      margin: ['auto', 0],
      overflow: 'visible',
    }}
  >
    <div
      sx={{
        width: ['83.33%', null, '140%'],
        left: ['3rem', '-15rem'],
        maxWidth: [null, null, '80rem'],
        position: 'relative'
      }}
    // className="w-5/6 left-12 md:max-w-7xl md:w-140 md:-left-60 relative"
    >
      <img src={slice.primary.featureImage.url} alt={slice.primary.featureImage.alt} />
    </div>
  </div>
)

const RightImage = ({ slice }) => (
  <div
    // className="md:w-1/2 m-auto md:m-0 overflow-visible"
    sx={{
      width: [null, null, '50%'],
      margin: ['auto', 0],
      overflow: 'visible',
    }}
  >
    <div
      sx={{
        width: ['83.33%', null, '140%'],
        left: [null, 'calc(100% - 45vw)'],
        maxWidth: [null, null, '80rem'],
        position: 'relative'
      }}
    // className="w-5/6 left-12 md:max-w-7xl md:w-140 md:-left-60 relative"
    >
      <img src={slice.primary.featureImage.url} alt={slice.primary.featureImage.alt} />
    </div>
  </div>
)

export {LeftImage, RightImage}
// export const LeftImage;
// export const RightImage;
