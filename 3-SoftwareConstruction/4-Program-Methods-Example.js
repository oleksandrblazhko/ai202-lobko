// Реєстрація нового охоронця

app.post('/register', async (req, res) => {
    const guard = req.body
    await client.connect();
    const db = client.db('tspp');
    const collection = await db.collection("guards");
    const registerGuard = await collection.insertOne({
        "name": guard.name,
        "price": guard.price,
        "height": guard.height,
        "weight": guard.weight
    });
    await client.close();
    res.send(registerGuard);
})

// Вивести список охоронців:
app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db('tspp');
    const collection = await db.collection("guards");
    const guardList = await collection.find().toArray();
    await client.close();
    console.log(guardList);
    res.send(guardList);
})