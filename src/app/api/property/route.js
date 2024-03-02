

export async function POST(request, response) {
  const propertyData = await request.formData();
  const token = request.headers.get('Authorization').split(' ')[1];
  const userClient = new Client()
                          .setEndpoint(process.env.APPWRITE_URL)
                          .setProject(process.env.APPWRITE_PROJECT_ID)
                          .setJWT(token);
  const userAccount = new Account(userClient);
  const userInformation = await userAccount.get();



  return Response.json({ data:'ok' })
  }