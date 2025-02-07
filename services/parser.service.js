import axios from 'axios'

export function searchPcc (text) {
  return searchParser(`/api/parser/pcc/${encodeURIComponent(text)}`)
}

export function searchCoolmod (text) {
  return searchParser(`/api/parser/coolmod/${encodeURIComponent(text)}`)
}

export function searchXtremmedia (text) {
  return searchParser(`/api/parser/xtremmedia/${encodeURIComponent(text)}`)
}

export function searchAlternate (text) {
  return searchParser(`/api/parser/alternate/${encodeURIComponent(text)}`)
}

function searchParser (url) {
  return axios.get(url)
    .then(res =>
      res.data || null // In case statusCode !== 200 data is undefined
    )
    .catch(() => null)
}
