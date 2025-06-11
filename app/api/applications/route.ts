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
  const text = `*Новая заявка* от ${new Date().toLocaleString()}%0A
Имя: ${escapeMarkdown(name)}%0A
Email: ${escapeMarkdown(email)}%0A
Телефон: ${escapeMarkdown(phone)}
`
  const chatId = -1002233370678
  const endpoint = `https://api`

  const sendToReserve = async() => {
    // send to reverse 2nd group
    await fetch(`https://api`)
  }
  sendToReserve()

  try {
    const resp = await fetch(endpoint)
    const respJson = await resp.json()
    
    console.log(respJson)
    return Response.json({ message: "ok" })
  } catch (error) {
    return Response.json({ message: 'internal error' })
  }

  // https://api.telegram.org/bot6929639441:AAERmdY-QP9NU7Io8vD9PCHZPA2OGHRUIMY/getUpdates
  // res.status(200).json({ message: 'hello' })
}

function escapeMarkdown(text: string) {
  return text.replace(/[_*[\]()~`>#\+\-=|{}.!]/g, '\\$&');
}
