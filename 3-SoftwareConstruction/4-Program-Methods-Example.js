app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db('tspp');
    const collection = await db.collection("guards");
    const guardList = await collection.find().toArray();
    await client.close();
    res.send(guardList);
})