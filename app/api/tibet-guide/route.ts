export async function POST(
  request: Request
): Promise<Response> {

  // parse data
  const body = await request.json()
  const { name, email, phone } = body
  if (name === undefined || email === undefined || phone === undefined) {
    return Response.json({ message: 'bad request' })
  }
  if (name === "" || email === "" || phone === "") {
    return Response.json({ message: 'bad request' })
  }
  if (name.length > 100 || email.length > 100 || phone.length > 100) {
    return Response.json({ message: 'bad request' })
  }

  const token = "6929639441:AAERmdY-QP9NU7Io8vD9PCHZPA2OGHRUIMY"
  const text = `*Заказ книги* от ${new Date().toLocaleString()}%0A
Имя: ${escapeMarkdown(name)}%0A
Email: ${escapeMarkdown(email)}%0A
Телефон: ${escapeMarkdown(phone)}
`
  const chatId = -4070147206
  const endpoint = `https://api`

  try {
    const resp = await fetch(endpoint)
    const respJson = await resp.json()
    console.log(respJson)
    return Response.json({ message: "ok" })
  } catch (error) {
    return Response.json({ message: 'internal error' })
  }


}

function escapeMarkdown(text: string) {
  return text.replace(/[_*[\]()~`>#\+\-=|{}.!]/g, '\\$&');
}
