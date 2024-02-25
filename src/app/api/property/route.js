

export async function GET(request, response) {



    // const { searchParams } = new URL(request.url)
    // console.log(searchParams)

    const token = request.headers.authorization.split('Bearer ')[1];
    console.log(token)

    // const id = searchParams.get('id')
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const product = await res.json()
   
    return Response.json({ data:'ok' })
  }