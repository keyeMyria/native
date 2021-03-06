import {withFeed} from './Feed'
import Map, {Marker} from '@/components/listings/Map'

function MapApp({data}) {
  return (
    <Map>
      {data && data.map((listing) => <Marker key={listing.id} {...listing} />)}
    </Map>
  )
}

export default withFeed(MapApp)
