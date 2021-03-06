import InputRange from './InputRange'
import SelectRange from './SelectRange'
import Select from './Select'

const mapRange = (options, label = '') =>
  [{label: String.fromCharCode(0x2500), value: undefined}].concat(
    options.map((i) => ({
      label: typeof label === 'function' ? label(i) : `${i} ${label}`,
      value: i
    }))
  )

const mapOptions = (options) => options.map((value) => ({label: value, value}))

export const assign = (options) => (Target) => {
  const Field = (props) => <Target {...props} />
  return Object.assign(Field, options)
}

export const price = assign({
  title: 'Preço',
  defaultProps: {
    label: (type) => `Preço ${type == 'min' ? 'mínimo' : 'máximo'}`
  }
})(InputRange)

export const rooms = assign({
  title: 'Quartos',
  defaultProps: {
    options: mapRange([1, 2, 3, 4])
  }
})(SelectRange)

export const area = assign({
  title: 'Área',
  defaultProps: {
    options: mapRange([50, 80, 100, 200, 300, 500], 'm²')
  }
})(SelectRange)

export const neighborhoods = assign({
  title: 'Bairros'
})(({neighborhoods, ...props}) => (
  <Select options={mapOptions(neighborhoods)} {...props} />
))

export default {
  price,
  rooms,
  area,
  neighborhoods
}
