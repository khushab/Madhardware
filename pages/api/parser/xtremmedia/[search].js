import nc from 'next-connect'
import { searchProduct } from 'parser/xtremmedia'
import { ErrorHandler } from 'server/utils/error-handler'

const handler = nc({
  onError: ErrorHandler
})

handler.get((req, res) => {
  const { search } = req.query

  return searchProduct(search)
    .then(res.json)
    .catch(err => {
      console.error(`Xtremmedia search - ${search}`, err)
      res.status(404).json({ error: 'Producto no encontrado' })
    })
})

export default handler