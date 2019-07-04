let defaultCity = '长沙'
try {
  defaultCity = localStorage.city
} catch (e) {}

export default {
  city: defaultCity
}
