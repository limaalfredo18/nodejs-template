import connectDB from '#Config/db.js';
import '#Config/env.js';
import httpServer from '#Config/https.js';

const start = async () => {
    const PORT = process.env.PORT;
    const MONGODB_URL = process.env.MONGODB_URL;

    await connectDB(MONGODB_URL);

    httpServer.listen(PORT, () => {
        console.log(`Server is starting at port ${PORT} ...`);
    });
};

start();
