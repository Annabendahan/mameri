import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 48.8911846,
    lng:2.3208603,
  },
  zoom: 14,
}

const AnyReactComponent = ({ text }) => <div>{<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.4395 10.9512C36.2829 10.3642 35.9649 9.73871 35.7296 9.19111C32.9141 2.42488 26.7624 0 21.7952 0C15.1457 0 7.82205 4.45878 6.84428 13.6494V15.5271C6.84428 15.6054 6.87128 16.3093 6.90965 16.6615C7.45776 21.0415 10.9139 25.6965 13.4951 30.0765C16.2721 34.7692 19.1536 39.3855 22.0085 43.9999C23.7688 40.9886 25.5228 37.9378 27.2431 35.0045C27.7119 34.1436 28.2562 33.2833 28.7255 32.4617C29.0383 31.9146 29.636 31.3675 29.909 30.8584C32.6859 25.7743 37.1556 20.6509 37.1556 15.6053V13.5326C37.1557 12.9856 36.4777 11.0691 36.4395 10.9512ZM21.9169 20.3771C19.9623 20.3771 17.8228 19.3998 16.7668 16.7006C16.6095 16.271 16.6222 15.4099 16.6222 15.3311V14.1186C16.6222 10.6777 19.5438 9.11295 22.0855 9.11295C25.2146 9.11295 27.6347 11.6164 27.6347 14.7455C27.6347 17.8745 25.046 20.3771 21.9169 20.3771Z" fill="#FF2525"/>
</svg>

}</div>

const GoogleMap = () => (
  <div style={{ height: '300px', width: '50%' }}>
    <GoogleMapReact

      bootstrapURLKeys={{ key: 'AIzaSyC1nLr6NbDWfdKFNEEj8eDvT0B3-f1mO80' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={48.8911846}
        lng={2.3208603}
        text={'here'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
